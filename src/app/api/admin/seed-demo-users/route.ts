import { NextResponse } from 'next/server';
import { seedDemoUsers } from '@/src/lib/seed-demo-users';

export async function POST() {
  try {
    const users = await seedDemoUsers();
    
    return NextResponse.json({
      message: 'Demo users created successfully',
      users: {
        admin: { email: 'admin@wepark.com', password: 'admin123', role: 'ADMIN' },
        attendant: { email: 'attendant@wepark.com', password: 'attendant123', role: 'ATTENDANT' },
        user: { email: 'user@wepark.com', password: 'user123', role: 'USER' },
      },
    });
  } catch (error) {
    console.error('Error creating demo users:', error);
    return NextResponse.json(
      { error: 'Failed to create demo users' },
      { status: 500 }
    );
  }
}
