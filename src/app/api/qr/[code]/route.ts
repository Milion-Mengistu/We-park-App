import { NextRequest, NextResponse } from 'next/server';
import { generateRealQRSVG, generateRealQRPNGDataURL } from '@/src/lib/real-qr';
import { generateQRCodeSVG } from '@/src/lib/qr-service';
import { prisma } from '@/src/lib/prisma';

// In-memory cache (process-level). Could be replaced by Redis later.
// key: `${format}:${size}:${code}` value: { expires: number, data: Buffer|string, contentType: string }
const qrCache = new Map<string, { expires: number; data: any; contentType: string }>();
const DEFAULT_TTL_MS = 1000 * 60 * 2; // 2 minutes

// Advanced QR route with real QR encoding via `qrcode` library.
// Query params:
//  ?size=220 (number)
//  &format=svg|png (default svg)
//  &margin=2
//  &dark=%23000000 (hex url-encoded)
//  &light=%23FFFFFF (hex url-encoded)
//  &ec=L|M|Q|H (error correction)
// Falls back to legacy deterministic pattern if real generation fails.
export async function GET(req: NextRequest, { params }: { params: Promise<{ code: string }> }) {
  const { searchParams } = new URL(req.url);
  const size = parseInt(searchParams.get('size') || '220', 10) || 220;
  const format = (searchParams.get('format') || 'svg').toLowerCase();
  const margin = parseInt(searchParams.get('margin') || '2', 10) || 2;
  const dark = searchParams.get('dark') || '#000000';
  const light = searchParams.get('light') || '#FFFFFF';
  const ec = (searchParams.get('ec') || 'M') as 'L' | 'M' | 'Q' | 'H';

  try {
    const { code } = await params;
    if (!code) {
      return NextResponse.json({ error: 'Missing code' }, { status: 400 });
    }

    // Validate booking existence for security (prevents arbitrary QR generation misuse)
    const booking = await prisma.booking.findFirst({ where: { qrCode: code }, select: { id: true } });
    if (!booking) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    const cacheKey = `${format}:${size}:${margin}:${dark}:${light}:${ec}:${code}`;
    const cached = qrCache.get(cacheKey);
    if (cached && cached.expires > Date.now()) {
      return new NextResponse(cached.data, {
        status: 200,
        headers: {
          'Content-Type': cached.contentType,
          'Cache-Control': 'public, max-age=60',
          'X-Cache': 'HIT'
        }
      });
    }

    if (format === 'png') {
      const dataUrl = await generateRealQRPNGDataURL({ text: code, size, margin, darkColor: dark, lightColor: light, errorCorrectionLevel: ec });
      const base64 = dataUrl.split(',')[1];
      const buffer = Buffer.from(base64, 'base64');
      qrCache.set(cacheKey, { expires: Date.now() + DEFAULT_TTL_MS, data: buffer, contentType: 'image/png' });
      return new NextResponse(buffer, {
        status: 200,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=120',
          'X-Cache': 'MISS'
        }
      });
    }

    // Default SVG
    const svg = await generateRealQRSVG({ text: code, size, margin, darkColor: dark, lightColor: light, errorCorrectionLevel: ec });
    qrCache.set(cacheKey, { expires: Date.now() + DEFAULT_TTL_MS, data: svg, contentType: 'image/svg+xml; charset=utf-8' });
    return new NextResponse(svg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=120',
        'X-Cache': 'MISS'
      }
    });
  } catch (e: any) {
    // Fallback: use legacy simple pattern to avoid hard failure
    try {
      const { code } = await params;
      const legacy = generateQRCodeSVG(code, size);
      return new NextResponse(legacy, {
        status: 200,
        headers: {
          'Content-Type': 'image/svg+xml; charset=utf-8',
          'Cache-Control': 'public, max-age=30',
          'X-Fallback': 'legacy'
        }
      });
    } catch {}
    return NextResponse.json({ error: e.message || 'Failed to render QR' }, { status: 500 });
  }
}
