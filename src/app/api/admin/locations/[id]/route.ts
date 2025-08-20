import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const locationId = params.id;
    const body = await request.json();
    const { name, address, description, latitude, longitude, features } = body;

    const location = await prisma.parkingLocation.update({
      where: { id: locationId },
      data: {
        name,
        address,
        description,
        latitude: latitude || null,
        longitude: longitude || null,
        features: features ? JSON.stringify(features) : null,
      },
    });

    return NextResponse.json(location);
  } catch (error) {
    console.error('Update location error:', error);
    return NextResponse.json(
      { error: 'Failed to update location' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const locationId = params.id;
    const body = await request.json();
    const { action, isActive } = body;

    if (action === 'toggle_status') {
      const location = await prisma.parkingLocation.update({
        where: { id: locationId },
        data: { isActive },
      });

      return NextResponse.json(location);
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Update location status error:', error);
    return NextResponse.json(
      { error: 'Failed to update location status' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const locationId = params.id;

    // Check if there are active bookings for this location
    const activeBookings = await prisma.booking.count({
      where: {
        slot: {
          locationId: locationId,
        },
        status: { in: ['PENDING', 'CONFIRMED', 'ACTIVE'] },
      },
    });

    if (activeBookings > 0) {
      return NextResponse.json(
        { error: 'Cannot delete location with active bookings' },
        { status: 400 }
      );
    }

    // Delete all slots first
    await prisma.parkingSlot.deleteMany({
      where: { locationId },
    });

    // Then delete the location
    await prisma.parkingLocation.delete({
      where: { id: locationId },
    });

    return NextResponse.json({ message: 'Location deleted successfully' });
  } catch (error) {
    console.error('Delete location error:', error);
    return NextResponse.json(
      { error: 'Failed to delete location' },
      { status: 500 }
    );
  }
}
