import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    // Check if super admin already exists
    const existingSuperAdmin = await prisma.userRole.findFirst({
      where: {
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });

    if (existingSuperAdmin) {
      return NextResponse.json(
        { error: 'Super admin already exists. Use the admin panel to manage roles.' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create super admin user
    const superAdmin = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    // Assign SUPER_ADMIN role
    await prisma.userRole.create({
      data: {
        userId: superAdmin.id,
        role: 'SUPER_ADMIN',
        isActive: true,
      },
    });

    return NextResponse.json({
      message: 'Super admin created successfully!',
      superAdmin: {
        id: superAdmin.id,
        email: superAdmin.email,
        name: superAdmin.name,
        role: 'SUPER_ADMIN',
      },
      instructions: {
        step1: 'Login at /login with your credentials',
        step2: 'Access admin panel at /admin',
        step3: 'Manage other user roles at /admin/users'
      }
    });
  } catch (error) {
    console.error('Error creating super admin:', error);
    return NextResponse.json(
      { error: 'Failed to create super admin' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // Check current super admin status
    const superAdmins = await prisma.user.findMany({
      where: {
        userRoles: {
          some: {
            role: 'SUPER_ADMIN',
            isActive: true,
          },
        },
      },
      include: {
        userRoles: {
          where: { isActive: true },
        },
      },
    });

    return NextResponse.json({
      hasSuperAdmin: superAdmins.length > 0,
      superAdminCount: superAdmins.length,
      superAdmins: superAdmins.map(admin => ({
        id: admin.id,
        email: admin.email,
        name: admin.name,
        createdAt: admin.createdAt,
      })),
    });
  } catch (error) {
    console.error('Error checking super admin status:', error);
    return NextResponse.json(
      { error: 'Failed to check super admin status' },
      { status: 500 }
    );
  }
}
