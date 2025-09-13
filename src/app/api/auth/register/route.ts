export const runtime = 'nodejs';
import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import { hashPassword } from '@/src/lib/passwords';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = body || {};

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    const normalizedEmail = String(email).toLowerCase();
    if (password.length < 8) {
      return NextResponse.json({ error: 'Password must be at least 8 characters' }, { status: 400 });
    }

    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return NextResponse.json({ error: 'An account with this email already exists' }, { status: 409 });
    }

    const passwordHash = hashPassword(password);

    const user = await prisma.user.create({
      data: {
        email: normalizedEmail,
        name: name || null,
        passwordHash,
      },
    });

    // Assign default USER role
    await prisma.userRole.create({
      data: { userId: user.id, role: 'USER', isActive: true },
    });

    return NextResponse.json({ id: user.id, email: user.email, name: user.name });
  } catch (error) {
    console.error('Register error:', error);
    return NextResponse.json({ error: 'Failed to register' }, { status: 500 });
  }
}
