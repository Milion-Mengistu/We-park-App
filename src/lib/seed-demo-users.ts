import { prisma } from './prisma';

export async function seedDemoUsers() {
  try {
    // Create demo admin user
    const adminUser = await prisma.user.upsert({
      where: { email: 'admin@wepark.com' },
      update: {},
      create: {
        email: 'admin@wepark.com',
        name: 'Admin User',
        image: null,
      },
    });

    // Create demo attendant user
    const attendantUser = await prisma.user.upsert({
      where: { email: 'attendant@wepark.com' },
      update: {},
      create: {
        email: 'attendant@wepark.com',
        name: 'Attendant User',
        image: null,
      },
    });

    // Create demo regular user
    const regularUser = await prisma.user.upsert({
      where: { email: 'user@wepark.com' },
      update: {},
      create: {
        email: 'user@wepark.com',
        name: 'Regular User',
        image: null,
      },
    });

    // Assign admin role
    const existingAdmin = await prisma.userRole.findFirst({
      where: {
        userId: adminUser.id,
        role: 'ADMIN',
      },
    });

    if (!existingAdmin) {
      await prisma.userRole.create({
        data: {
          userId: adminUser.id,
          role: 'ADMIN',
          isActive: true,
        },
      });
    }

    // Assign attendant role
    const existingAttendant = await prisma.userRole.findFirst({
      where: {
        userId: attendantUser.id,
        role: 'ATTENDANT',
      },
    });

    if (!existingAttendant) {
      await prisma.userRole.create({
        data: {
          userId: attendantUser.id,
          role: 'ATTENDANT',
          isActive: true,
        },
      });
    }

    // Assign user role
    const existingUser = await prisma.userRole.findFirst({
      where: {
        userId: regularUser.id,
        role: 'USER',
      },
    });

    if (!existingUser) {
      await prisma.userRole.create({
        data: {
          userId: regularUser.id,
          role: 'USER',
          isActive: true,
        },
      });
    }

    console.log('Demo users and roles seeded successfully:');
    console.log('- Admin: admin@wepark.com');
    console.log('- Attendant: attendant@wepark.com');
    console.log('- User: user@wepark.com');

    return {
      adminUser,
      attendantUser,
      regularUser,
    };
  } catch (error) {
    console.error('Error seeding demo users:', error);
    throw error;
  }
}

// Add demo endpoint for testing
export async function createDemoUsersEndpoint() {
  return await seedDemoUsers();
}
