import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { BookingService } from '@/src/lib/booking-service';
import { validateQRCode } from '@/src/lib/qr-service';

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { qrCode, checkInCode } = body;

    if (!qrCode && !checkInCode) {
      return NextResponse.json(
        { error: 'QR code or check-in code required' },
        { status: 400 }
      );
    }

    // Validate QR code format if provided
    if (qrCode && !validateQRCode(qrCode)) {
      return NextResponse.json(
        { error: 'Invalid QR code format' },
        { status: 400 }
      );
    }

    const attendantId = session.user.email;
    
    // Use QR code for check-in (or check-in code as fallback)
    const checkInResult = await BookingService.checkIn(
      qrCode || checkInCode,
      attendantId
    );

    return NextResponse.json(checkInResult);
  } catch (error) {
    console.error('Check-in error:', error);
    return NextResponse.json(
      { error: error.message || 'Check-in failed' },
      { status: 500 }
    );
  }
}
