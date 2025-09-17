import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST() {
  try {
    // Define demo users with passwords
    const demoUsers = [
      { email: 'admin@wepark.com', password: 'admin123' },
      { email: 'attendant@wepark.com', password: 'attendant123' },
      { email: 'user@wepark.com', password: 'user123' },
    ];

    const results = [];

    for (const { email, password } of demoUsers) {
      // Check if user exists
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Update user with password
        await prisma.user.update({
          where: { email },
          data: { password: hashedPassword }
        });
        
        results.push({ email, status: 'password_added' });
      } else {
        results.push({ email, status: 'user_not_found' });
      }
    }

    return NextResponse.json({
      message: 'Demo user passwords setup complete',
      results,
      credentials: [
        { email: 'admin@wepark.com', password: 'admin123', role: 'ADMIN' },
        { email: 'attendant@wepark.com', password: 'attendant123', role: 'ATTENDANT' },
        { email: 'user@wepark.com', password: 'user123', role: 'USER' },
      ]
    });
  } catch (error) {
    console.error('Error setting up demo passwords:', error);
    return NextResponse.json(
      { error: 'Failed to setup demo passwords' },
      { status: 500 }
    );
  }
}
