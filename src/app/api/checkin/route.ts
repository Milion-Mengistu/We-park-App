import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { BookingService } from '@/src/lib/booking-service';
import { validateQRCode } from '@/src/lib/qr-service';
import { z } from 'zod';

const checkinSchema = z
  .object({
    qrCode: z.string().optional(),
    checkInCode: z.string().optional(),
  })
  .refine((d) => Boolean(d.qrCode || d.checkInCode), {
    message: 'QR code or check-in code required',
    path: ['qrCode'],
  });

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const parsed = checkinSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid request body', details: parsed.error.flatten() }, { status: 400 });
    }
    const { qrCode, checkInCode } = parsed.data;

    // Validate QR code format if provided
    if (qrCode && !validateQRCode(qrCode)) {
      return NextResponse.json(
        { error: 'Invalid QR code format' },
        { status: 400 }
      );
    }

    const attendantId = session.user.email;
    
    // Use QR code for check-in (or check-in code as fallback)
    const code = (qrCode ?? checkInCode)!; // safe due to schema refine
    const checkInResult = await BookingService.checkIn(code, attendantId);

    return NextResponse.json(checkInResult);
  } catch (error) {
    console.error('Check-in error:', error);
    const message = error instanceof Error ? error.message : 'Check-in failed';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
