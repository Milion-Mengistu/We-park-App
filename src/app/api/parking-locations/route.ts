import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search');
    const latitude = searchParams.get('lat');
    const longitude = searchParams.get('lng');
    const radius = searchParams.get('radius') || '10'; // km

    let where: any = {
      isActive: true,
    };

    // Search by name or address
    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { address: { contains: search, mode: 'insensitive' } },
      ];
    }

    const locations = await prisma.parkingLocation.findMany({
      where,
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

      // Calculate distance if coordinates provided
      let distance = null;
      if (latitude && longitude && location.latitude && location.longitude) {
        distance = calculateDistance(
          parseFloat(latitude),
          parseFloat(longitude),
          location.latitude,
          location.longitude
        );
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
        distance: distance ? Math.round(distance * 100) / 100 : null,
        slots: location.slots.map(slot => ({
          ...slot,
          features: slot.features ? JSON.parse(slot.features) : [],
        })),
      };
    });

    // Sort by distance if coordinates provided
    if (latitude && longitude) {
      transformedLocations.sort((a, b) => (a.distance || 0) - (b.distance || 0));
    }

    return NextResponse.json(transformedLocations);
  } catch (error) {
    console.error('Get parking locations error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch parking locations' },
      { status: 500 }
    );
  }
}

// Haversine formula to calculate distance between two coordinates
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}
