import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  try {
    const slot = await prisma.parkingSlot.findFirst({
      where: { locationId: id, status: 'AVAILABLE' },
      orderBy: { slotNumber: 'asc' },
      select: { id: true, basePrice: true },
    });

    if (!slot) {
      return NextResponse.json({ error: 'No available slot' }, { status: 404 });
    }

    const pricePerHour =
      typeof (slot as any).basePrice === 'object' &&
      (slot as any).basePrice !== null &&
      'toNumber' in (slot as any).basePrice
        ? (slot as any).basePrice.toNumber()
        : Number((slot as any).basePrice) || 0;

    return NextResponse.json({ slotId: slot.id, pricePerHour });
  } catch (err) {
    console.error('available-slot error', err);
    return NextResponse.json({ error: 'Failed to fetch available slot' }, { status: 500 });
  }
}
