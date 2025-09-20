import { Prisma } from '@prisma/client';

// Base select for Booking entities used in admin lists and reports
export const bookingBaseSelect = Prisma.validator<Prisma.BookingSelect>()({
  id: true,
  status: true,
  totalAmount: true,
  startTime: true,
  endTime: true,
  actualStartTime: true,
  actualEndTime: true,
  qrCode: true,
  checkInCode: true,
  createdAt: true,
  // Intentionally omit qrCodeImage by default to avoid schema drift issues
  user: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
  slot: {
    select: {
      slotNumber: true,
      location: {
        select: {
          id: true,
          name: true,
          address: true,
        },
      },
    },
  },
  payment: {
    select: {
      id: true,
      status: true,
      method: true,
      amount: true,
      paidAt: true,
    },
  },
});

export const selectBooking = (withImage = false): Prisma.BookingSelect => ({
  ...bookingBaseSelect,
  ...(withImage ? { qrCodeImage: true } : {}),
});
