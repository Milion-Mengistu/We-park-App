import { randomBytes, scryptSync, timingSafeEqual } from 'crypto';

// Format: scrypt:N:r:p:saltHex:hashHex
const N = 16384; // CPU/memory cost
const r = 8;
const p = 1;
const keyLen = 64;

export function hashPassword(password: string): string {
  const salt = randomBytes(16);
  const hash = scryptSync(password, salt, keyLen, { N, r, p });
  return `scrypt:${N}:${r}:${p}:${salt.toString('hex')}:${hash.toString('hex')}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  try {
    const [scheme, nStr, rStr, pStr, saltHex, hashHex] = stored.split(':');
    if (scheme !== 'scrypt') return false;
    const n = parseInt(nStr, 10);
    const rr = parseInt(rStr, 10);
    const pp = parseInt(pStr, 10);
    const salt = Buffer.from(saltHex, 'hex');
    const hash = Buffer.from(hashHex, 'hex');
    const derived = scryptSync(password, salt, hash.length, {
      N: n,
      r: rr,
      p: pp,
    });
    return timingSafeEqual(hash, Buffer.from(derived));
  } catch {
    return false;
  }
}
