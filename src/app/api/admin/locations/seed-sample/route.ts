import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { withAdminAuth } from '@/src/lib/api-auth';

const prisma = new PrismaClient();

type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export const POST: RouteHandler = withAdminAuth(async (request: NextRequest, _userWithRoles) => {
  try {
    // Defaults
    const defaultName = 'Bole Medhanialem Parking';
    const defaultAddress = 'Africa Ave, Bole, Addis Ababa';
    const defaultDescription = 'Covered multi-level parking near Medhanialem and Bole malls.';
    const defaultLatitude = 8.9932;
    const defaultLongitude = 38.7909;
    const defaultFeatures = ['Covered', '24/7', 'Security', 'CCTV', 'Accessible'];

    // Optional overrides via query or JSON body
    const url = new URL(request.url);
    const qp = url.searchParams;
    let body: any = {};
    try {
      if (request.headers.get('content-type')?.includes('application/json')) {
        body = await request.json();
      }
    } catch {
      body = {};
    }

    const name = (qp.get('name') ?? body.name ?? defaultName).toString();
    const address = (qp.get('address') ?? body.address ?? defaultAddress).toString();
    const description = (qp.get('description') ?? body.description ?? defaultDescription).toString();
    const latitude = Number(qp.get('lat') ?? body.latitude ?? defaultLatitude);
    const longitude = Number(qp.get('lng') ?? body.longitude ?? defaultLongitude);
    const features: string[] = Array.isArray(body.features)
      ? body.features
      : (qp.get('features')?.split(',').map(f => f.trim()).filter(Boolean) ?? defaultFeatures);

    // Slot config with minimum of 20
    const requestedSlots = Number(qp.get('slots') ?? body.slots ?? 24);
    const desiredSlots = Number.isFinite(requestedSlots) ? Math.max(20, requestedSlots) : 24;
    const basePrice = Number(qp.get('price') ?? body.price ?? 25.0);
    const slotType = (qp.get('type') ?? body.type ?? 'STANDARD').toString().toUpperCase();

    // Find or create the location
    let location = await prisma.parkingLocation.findFirst({ where: { name } });
    if (!location) {
      location = await prisma.parkingLocation.create({
        data: {
          name,
          address,
          description,
          latitude,
          longitude,
          features: JSON.stringify(features),
          isActive: true,
        },
      });
    }

    // Count existing slots and top-up to reach desiredSlots
    const existingSlots = await prisma.parkingSlot.findMany({
      where: { locationId: location.id },
      select: { slotNumber: true },
      orderBy: { slotNumber: 'asc' },
    });
    const existingCount = existingSlots.length;
    const missing = Math.max(0, desiredSlots - existingCount);

    if (missing > 0) {
      // Determine the next index based on max numeric suffix in slotNumber (e.g., S-001)
      const maxIndex = existingSlots.reduce((max, s) => {
        const m = s.slotNumber.match(/(\d+)$/);
        const idx = m ? parseInt(m[1], 10) : 0;
        return Math.max(max, idx);
      }, 0);

      const slotsData = Array.from({ length: missing }).map((_, i) => ({
        slotNumber: `S-${String(maxIndex + i + 1).padStart(3, '0')}`,
        locationId: location!.id,
        type: slotType,
        basePrice: Number.isFinite(basePrice) ? basePrice : 25.0,
        status: 'AVAILABLE',
        features: JSON.stringify(['Camera', 'Sensor']),
      }));

      await prisma.parkingSlot.createMany({ data: slotsData });
    }

    const totalSlots = await prisma.parkingSlot.count({ where: { locationId: location.id } });

    return NextResponse.json({
      message: missing > 0 ? `Seeded ${missing} slot(s); total now ${totalSlots}` : 'Location already had sufficient slots',
      location,
      desiredSlots,
      totalSlots,
    });
  } catch (error) {
    console.error('Seed sample location error:', error);
    return NextResponse.json({ error: 'Failed to seed sample location' }, { status: 500 });
  }
});
// Add more sample locations and slots
export const PUT: RouteHandler = withAdminAuth(async (request: NextRequest, _userWithRoles) => {
  try {
    const samples = [
      {
        name: 'Meskel Square Parking',
        address: 'Meskel Square, Addis Ababa',
        description: 'Large open-air parking at Meskel Square.',
        latitude: 9.0081,
        longitude: 38.7611,
        features: ['Open-air', '24/7', 'Security', 'Accessible'],
        slots: 40,
        price: 20.0,
        type: 'STANDARD',
      },
      {
        name: 'Friendship Mall Parking',
        address: 'Bole, Addis Ababa',
        description: 'Underground parking at Friendship Mall.',
        latitude: 8.9955,
        longitude: 38.7890,
        features: ['Underground', 'Security', 'CCTV', 'Accessible'],
        slots: 30,
        price: 30.0,
        type: 'PREMIUM',
      },
    ];

    const results = [];
    for (const sample of samples) {
      let location = await prisma.parkingLocation.findFirst({ where: { name: sample.name } });
      if (!location) {
        location = await prisma.parkingLocation.create({
          data: {
            name: sample.name,
            address: sample.address,
            description: sample.description,
            latitude: sample.latitude,
            longitude: sample.longitude,
            features: JSON.stringify(sample.features),
            isActive: true,
          },
        });
      }

      const existingSlots = await prisma.parkingSlot.findMany({
        where: { locationId: location.id },
        select: { slotNumber: true },
        orderBy: { slotNumber: 'asc' },
      });
      const existingCount = existingSlots.length;
      const missing = Math.max(0, sample.slots - existingCount);

      if (missing > 0) {
        const maxIndex = existingSlots.reduce((max, s) => {
          const m = s.slotNumber.match(/(\d+)$/);
          const idx = m ? parseInt(m[1], 10) : 0;
          return Math.max(max, idx);
        }, 0);

        const slotsData = Array.from({ length: missing }).map((_, i) => ({
          slotNumber: `S-${String(maxIndex + i + 1).padStart(3, '0')}`,
          locationId: location!.id,
          type: sample.type,
          basePrice: sample.price,
          status: 'AVAILABLE',
          features: JSON.stringify(['Camera', 'Sensor']),
        }));

        await prisma.parkingSlot.createMany({ data: slotsData });
      }

      const totalSlots = await prisma.parkingSlot.count({ where: { locationId: location.id } });

      results.push({
        location,
        desiredSlots: sample.slots,
        totalSlots,
        message: missing > 0 ? `Seeded ${missing} slot(s); total now ${totalSlots}` : 'Location already had sufficient slots',
      });
    }

    return NextResponse.json({ message: 'Sample locations seeded', results });
  } catch (error) {
    console.error('Seed multiple sample locations error:', error);
    return NextResponse.json({ error: 'Failed to seed sample locations' }, { status: 500 });
  }
});