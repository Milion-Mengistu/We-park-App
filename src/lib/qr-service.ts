import { randomBytes, createHash } from 'crypto';

export interface QRCodeData {
  bookingId: string;
  checkInCode: string;
  timestamp: string;
  hash: string;
}

export async function generateQRCode(): Promise<string> {
  // Generate a unique booking reference
  const timestamp = Date.now().toString();
  const randomPart = randomBytes(8).toString('hex');
  const bookingRef = `WP-${timestamp.slice(-6)}-${randomPart.toUpperCase()}`;
  
  // Create a hash for security
  const hash = createHash('sha256')
    .update(`${bookingRef}-${timestamp}-${process.env.NEXTAUTH_SECRET || 'fallback-secret'}`)
    .digest('hex')
    .substring(0, 8);
  
  return `${bookingRef}-${hash}`;
}

export function generateCheckInCode(): string {
  // Generate a 6-digit numeric code for manual entry
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function validateQRCode(qrCode: string): boolean {
  try {
    const parts = qrCode.split('-');
    if (parts.length !== 4 || parts[0] !== 'WP') {
      return false;
    }
    
    const [prefix, timestamp, random, hash] = parts;
    const expectedHash = createHash('sha256')
      .update(`${prefix}-${timestamp}-${random}-${process.env.NEXTAUTH_SECRET || 'fallback-secret'}`)
      .digest('hex')
      .substring(0, 8);
    
    return hash === expectedHash;
  } catch (error) {
    return false;
  }
}

export function parseQRCode(qrCode: string): QRCodeData | null {
  if (!validateQRCode(qrCode)) {
    return null;
  }
  
  const parts = qrCode.split('-');
  return {
    bookingId: `${parts[0]}-${parts[1]}-${parts[2]}`,
    checkInCode: parts[1], // Use timestamp part as check-in reference
    timestamp: parts[1],
    hash: parts[3],
  };
}

// QR Code SVG generator (simple implementation)
export function generateQRCodeSVG(data: string, size: number = 200): string {
  // This is a simplified QR code representation
  // In production, you would use a proper QR code library
  const gridSize = 21; // Standard QR code grid
  const cellSize = size / gridSize;
  
  // Create a simple pattern based on the data hash
  const hash = createHash('md5').update(data).digest('hex');
  let pattern = '';
  
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const index = (y * gridSize + x) % hash.length;
      const shouldFill = parseInt(hash[index], 16) > 7;
      
      // Add finder patterns (corners)
      const isFinderPattern = 
        (x < 7 && y < 7) || 
        (x >= gridSize - 7 && y < 7) || 
        (x < 7 && y >= gridSize - 7);
      
      if (isFinderPattern || shouldFill) {
        pattern += `<rect x="${x * cellSize}" y="${y * cellSize}" width="${cellSize}" height="${cellSize}" fill="black"/>`;
      }
    }
  }
  
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" fill="white"/>
      ${pattern}
    </svg>
  `;
}

// Generate QR code as data URL
export function generateQRCodeDataURL(data: string, size: number = 200): string {
  const svg = generateQRCodeSVG(data, size);
  const base64 = Buffer.from(svg).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}
