import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { prisma } from '@/src/lib/prisma';
import { selectBooking } from '@/src/lib/selects';
import { adminReportExportQuerySchema, toPlainNumber } from '@/src/lib/validation';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const parsed = adminReportExportQuerySchema.safeParse({
      format: searchParams.get('format') ?? undefined,
      period: searchParams.get('period') ?? undefined,
    });
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid parameters', details: parsed.error.flatten() }, { status: 400 });
    }
    const { format, period } = parsed.data;

    // Calculate date range
    const endDate = new Date();
    let startDate = new Date();
    
    switch (period) {
      case '7d':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(endDate.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(endDate.getDate() - 90);
        break;
      case '1y':
        startDate.setFullYear(endDate.getFullYear() - 1);
        break;
    }

    // Get bookings data for export
  const bookingsRaw = await prisma.booking.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
      },
      select: selectBooking(false),
      orderBy: {
        createdAt: 'desc',
      },
    });

    // Normalize Decimal-like fields
    const bookings = bookingsRaw.map((b: any) => ({
      ...b,
      totalAmount: toPlainNumber(b.totalAmount) ?? 0,
      payment: b.payment ? { ...b.payment, amount: toPlainNumber(b.payment.amount) ?? 0 } : null,
    }));

    if (format === 'csv') {
      // Generate CSV
      const headers = [
        'Booking ID',
        'Customer Name',
        'Customer Email',
        'Location',
        'Slot Number',
        'Start Time',
        'End Time',
        'Status',
        'Amount',
        'Payment Method',
        'Payment Status',
        'Created At',
      ];

      const csvRows = [
        headers.join(','),
        ...bookings.map(booking => [
          booking.id,
          `"${booking.user.name || 'N/A'}"`,
          `"${booking.user.email || 'N/A'}"`,
          `"${booking.slot.location.name}"`,
          booking.slot.slotNumber,
          new Date(booking.startTime).toISOString(),
          new Date(booking.endTime).toISOString(),
          booking.status,
          booking.totalAmount,
          booking.payment?.method || 'N/A',
          booking.payment?.status || 'N/A',
          new Date(booking.createdAt).toISOString(),
        ].join(','))
      ];

      const csvContent = csvRows.join('\n');

      return new NextResponse(csvContent, {
        headers: {
          'Content-Type': 'text/csv',
          'Content-Disposition': `attachment; filename="parking-report-${period}.csv"`,
        },
      });
    }

  if (format === 'pdf') {
      // For demo purposes, return a simple PDF-like text response
      // In production, you would use a PDF generation library like puppeteer or jsPDF
      const pdfContent = `
PARKING SYSTEM REPORT
Period: ${period}
Generated: ${new Date().toISOString()}

SUMMARY
Total Bookings: ${bookings.length}
Total Revenue: $${bookings.reduce((sum, b) => sum + (Number(b.payment?.amount) || 0), 0).toFixed(2)}

BOOKINGS
${bookings.map(booking => `
ID: ${booking.id}
Customer: ${booking.user.name} (${booking.user.email})
Location: ${booking.slot.location.name} - ${booking.slot.slotNumber}
Time: ${new Date(booking.startTime).toLocaleString()} - ${new Date(booking.endTime).toLocaleString()}
Status: ${booking.status}
Amount: $${Number(booking.totalAmount).toFixed(2)}
Payment: ${booking.payment?.method || 'N/A'} (${booking.payment?.status || 'N/A'})
Created: ${new Date(booking.createdAt).toLocaleString()}
---
`).join('')}
      `.trim();

      return new NextResponse(pdfContent, {
        headers: {
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename="parking-report-${period}.pdf"`,
        },
      });
    }

    return NextResponse.json(
      { error: 'Unsupported format' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Export reports error:', error);
    return NextResponse.json(
      { error: 'Failed to export reports' },
      { status: 500 }
    );
  }
}
