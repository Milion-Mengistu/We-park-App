import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
      const averagePrice = location.slots.length > 0 
        ? location.slots.reduce((sum, slot) => sum + slot.basePrice, 0) / location.slots.length
        : 0;

      // Parse features JSON
      let features = [];
      try {
        features = location.features ? JSON.parse(location.features) : [];
      } catch (error) {
        features = [];
      }

      return {
        id: location.id,
        name: location.name,
        address: location.address,
        description: location.description,
        features,
        latitude: location.latitude,
        longitude: location.longitude,
        isActive: location.isActive,
        availability: {
          total: location._count.slots,
          available: availableSlots.length,
          occupied: location._count.slots - availableSlots.length,
        },
        pricing: {
          min: Math.min(...location.slots.map(s => s.basePrice)),
          max: Math.max(...location.slots.map(s => s.basePrice)),
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
}

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, address, description, latitude, longitude, features } = body;

    if (!name || !address) {
      return NextResponse.json(
        { error: 'Name and address are required' },
        { status: 400 }
      );
    }

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

    return NextResponse.json(location);
  } catch (error) {
    console.error('Create location error:', error);
    return NextResponse.json(
      { error: 'Failed to create location' },
      { status: 500 }
    );
  }
}
