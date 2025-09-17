import { NextRequest, NextResponse } from 'next/server';
import { withAdminAuth } from '@/src/lib/api-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export const GET: RouteHandler = withAdminAuth(async (request: NextRequest, userWithRoles) => {
  try {
    const locations = await prisma.parkingLocation.findMany({
      include: {
        slots: {
          select: {
            id: true,
            slotNumber: true,
            type: true,
            basePrice: true,
            status: true,
            features: true,
          },
        },
        _count: {
          select: {
            slots: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Transform data to include availability and pricing info
    const transformedLocations = locations.map((location) => {
      const availableSlots = location.slots.filter(slot => slot.status === 'AVAILABLE');
      const prices = location.slots.map(s => (typeof s.basePrice === 'object' && 'toNumber' in s.basePrice)
        ? s.basePrice.toNumber()
        : Number(s.basePrice));
      const averagePrice = prices.length > 0 
        ? prices.reduce((sum, p) => sum + p, 0) / prices.length
        : 0;

      // Parse features JSON
      let features = [];
      try {
        features = location.features ? JSON.parse(location.features) : [];
      } catch (error) {
        features = [];
      }

      // Coerce coordinates from Decimal to number if needed
      const locLat = (typeof location.latitude === 'object' && location.latitude !== null && 'toNumber' in location.latitude)
        ? (location.latitude as any).toNumber()
        : (location.latitude as unknown as number | null);
      const locLng = (typeof location.longitude === 'object' && location.longitude !== null && 'toNumber' in location.longitude)
        ? (location.longitude as any).toNumber()
        : (location.longitude as unknown as number | null);

      return {
        id: location.id,
        name: location.name,
        address: location.address,
        description: location.description,
        features,
        latitude: locLat,
        longitude: locLng,
        isActive: location.isActive,
        availability: {
          total: location._count.slots,
          available: availableSlots.length,
          occupied: location._count.slots - availableSlots.length,
        },
        pricing: {
          min: prices.length ? Math.min(...prices) : 0,
          max: prices.length ? Math.max(...prices) : 0,
          average: Math.round(averagePrice * 100) / 100,
        },
        slots: location.slots.map(slot => ({
          ...slot,
          features: slot.features ? JSON.parse(slot.features) : [],
        })),
        createdAt: location.createdAt,
        updatedAt: location.updatedAt,
      };
    });

    return NextResponse.json(transformedLocations);
  } catch (error) {
    console.error('Get admin locations error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch locations' },
      { status: 500 }
    );
  }
});

export const POST = withAdminAuth(async (request: NextRequest, userWithRoles) => {
  try {
    const body = await request.json();
  const { name, address, description, latitude, longitude, features, initialSlotsCount, defaultBasePrice, slotType } = body;

    if (!name || !address) {
      return NextResponse.json(
        { error: 'Name and address are required' },
        { status: 400 }
      );
    }

    // Create location first
    const location = await prisma.parkingLocation.create({
      data: {
        name,
        address,
        description,
        latitude: latitude || null,
        longitude: longitude || null,
        features: features ? JSON.stringify(features) : null,
        isActive: true,
      },
    });

    // Optionally create initial slots if requested
    const count = Number(initialSlotsCount) || 0;
    const price = defaultBasePrice != null ? Number(defaultBasePrice) : null;
    const type = slotType || 'STANDARD';
    if (count > 0 && price != null && !Number.isNaN(price)) {
      const slotsData = Array.from({ length: count }).map((_, i) => ({
        slotNumber: `S-${String(i + 1).padStart(3, '0')}`,
        locationId: location.id,
        type,
        basePrice: price,
        status: 'AVAILABLE',
      }));
      await prisma.parkingSlot.createMany({ data: slotsData });
    }

  return NextResponse.json(location);
  } catch (error) {
    console.error('Create location error:', error);
    return NextResponse.json(
      { error: 'Failed to create location' },
      { status: 500 }
    );
  }
});
