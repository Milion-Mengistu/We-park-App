import { z } from 'zod';

export const paginationQuerySchema = z.object({
  page: z
    .string()
    .optional()
    .transform((v: string | undefined) => (v ? parseInt(v, 10) : 1))
    .pipe(z.number().int().min(1)),
  limit: z
    .string()
    .optional()
    .transform((v: string | undefined) => (v ? parseInt(v, 10) : 20))
    .pipe(z.number().int().min(1).max(100)),
});

export const adminBookingsQuerySchema = paginationQuerySchema.extend({
  status: z.string().optional(),
  locationId: z.string().optional(),
});

export function toPlainNumber(val: any): number | null {
  if (val == null) return null;
  if (typeof val === 'number') return val;
  if (typeof val?.toNumber === 'function') return val.toNumber();
  const n = Number(val);
  return Number.isNaN(n) ? null : n;
}

export const adminReportExportQuerySchema = z.object({
  format: z.enum(['csv', 'pdf']).default('csv'),
  period: z.enum(['7d', '30d', '90d', '1y']).default('7d'),
});
