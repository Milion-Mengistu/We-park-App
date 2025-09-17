import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';

export async function GET() {
  try {
    // Check existing users and their roles
    const users = await prisma.user.findMany({
      include: {
        userRoles: {
          where: { isActive: true },
          select: { role: true, id: true }
        }
      }
    });

    const adminUsers = users.filter(u => 
      u.userRoles.some(r => r.role === 'ADMIN' || r.role === 'SUPER_ADMIN')
    );

    return NextResponse.json({
      message: 'Current user status',
      totalUsers: users.length,
      adminUsers: adminUsers.length,
      users: users.map(u => ({
        id: u.id,
        email: u.email,
        name: u.name,
        roles: u.userRoles.map(r => r.role),
        hasPassword: !!u.password
      })),
      demoAccountsAvailable: {
        admin: 'admin@wepark.com / admin123',
        attendant: 'attendant@wepark.com / attendant123', 
        user: 'user@wepark.com / user123'
      }
    });
  } catch (error) {
    console.error('Error checking admin status:', error);
    return NextResponse.json(
      { error: 'Failed to check admin status' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    console.log('Setting up admin accounts...');

    // Create demo users with roles and passwords
    const demoAccounts = [
      { email: 'admin@wepark.com', password: 'admin123', name: 'Admin User', role: 'ADMIN' },
      { email: 'attendant@wepark.com', password: 'attendant123', name: 'Attendant User', role: 'ATTENDANT' },
      { email: 'user@wepark.com', password: 'user123', name: 'Regular User', role: 'USER' },
    ];

    const results = [];

    for (const account of demoAccounts) {
      const hashedPassword = await bcrypt.hash(account.password, 10);

      // Create or update user
      const user = await prisma.user.upsert({
        where: { email: account.email },
        update: { 
          password: hashedPassword,
          name: account.name
        },
        create: {
          email: account.email,
          password: hashedPassword,
          name: account.name,
        },
      });

      // Create or update user role
      const existingRole = await prisma.userRole.findFirst({
        where: {
          userId: user.id,
          role: account.role,
        },
      });

      if (!existingRole) {
        await prisma.userRole.create({
          data: {
            userId: user.id,
            role: account.role,
            isActive: true,
          },
        });
      }

      results.push({
        email: account.email,
        role: account.role,
        status: 'created/updated'
      });
    }

    return NextResponse.json({
      message: 'Demo admin accounts setup complete!',
      accounts: [
        { email: 'admin@wepark.com', password: 'admin123', role: 'ADMIN' },
        { email: 'attendant@wepark.com', password: 'attendant123', role: 'ATTENDANT' },
        { email: 'user@wepark.com', password: 'user123', role: 'USER' },
      ],
      results,
      instructions: {
        step1: 'Go to /login',
        step2: 'Use admin@wepark.com / admin123 to login as admin',
        step3: 'Admin panel will be available at /admin'
      }
    });
  } catch (error) {
    console.error('Error setting up admin accounts:', error);
    return NextResponse.json(
      { error: 'Failed to setup admin accounts' },
      { status: 500 }
    );
  }
}
