import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    // Test database connection
    const connectionTest = await prisma.$queryRaw`SELECT 1 as test`;
    
    // Get database info
    const users = await prisma.user.count();
    const locations = await prisma.parkingLocation.count();
    const slots = await prisma.parkingSlot.count();
    const bookings = await prisma.booking.count();
    
    // Get sample user to check if admin exists
    const adminUsers = await prisma.user.findMany({
      include: {
        userRoles: {
          where: { 
            role: { in: ['ADMIN', 'SUPER_ADMIN'] },
            isActive: true 
          }
        }
      },
      take: 5
    });

    // Get parking locations sample
    const parkingLocations = await prisma.parkingLocation.findMany({
      include: {
        _count: {
          select: {
            slots: true
          }
        }
      },
      take: 3
    });

    // Determine database type from connection
    let dbType = 'Unknown';
    let dbPath = process.env.DATABASE_URL || 'Not set';
    
    if (dbPath.includes('mysql://')) {
      dbType = 'MySQL';
    } else if (dbPath.includes('postgresql://') || dbPath.includes('postgres://')) {
      dbType = 'PostgreSQL';
    } else if (dbPath.includes('file:') || dbPath.includes('.db')) {
      dbType = 'SQLite';
    }

    return NextResponse.json({
      status: 'connected',
      database: {
        type: dbType,
        url: dbPath.replace(/\/\/.*:.*@/, '//***:***@'), // Hide credentials
        connectionTest: connectionTest ? 'success' : 'failed'
      },
      dataStats: {
        users,
        locations,
        slots,
        bookings,
        hasAdminUsers: adminUsers.length > 0
      },
      sampleData: {
        adminUsers: adminUsers.map(u => ({
          email: u.email,
          name: u.name,
          roles: u.userRoles.map(r => r.role)
        })),
        parkingLocations: parkingLocations.map(l => ({
          name: l.name,
          address: l.address,
          slotCount: l._count.slots
        }))
      },
      recommendations: {
        needsMySQL: dbType !== 'MySQL',
        needsSeeding: users === 0 || locations === 0,
        needsAdminUser: adminUsers.length === 0
      }
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Unknown error',
      database: {
        type: 'Unknown',
        url: process.env.DATABASE_URL || 'Not set',
        connectionTest: 'failed'
      },
      recommendations: {
        checkConnection: true,
        checkDatabaseURL: true,
        runMigrations: true
      }
    }, { status: 500 });
  }
}

export async function POST() {
  try {
    // This endpoint will seed the database with sample data
    console.log('Starting database seeding...');

    // Check if already seeded
    const existingLocations = await prisma.parkingLocation.count();
    if (existingLocations > 0) {
      return NextResponse.json({
        message: 'Database already has sample data',
        status: 'already_seeded'
      });
    }

    // Seed parking locations first
    const locations = await Promise.all([
      prisma.parkingLocation.create({
        data: {
          name: 'Downtown Plaza',
          address: '123 Main Street, City Center',
          latitude: 40.7128,
          longitude: -74.0060,
          description: 'Premium parking in the heart of downtown',
          features: JSON.stringify(['Covered', '24/7', 'Security', 'EV Charging']),
          operatingHours: JSON.stringify({
            monday: '06:00-23:00',
            tuesday: '06:00-23:00',
            wednesday: '06:00-23:00',
            thursday: '06:00-23:00',
            friday: '06:00-23:00',
            saturday: '08:00-22:00',
            sunday: '08:00-20:00'
          }),
          isActive: true,
        },
      }),
      prisma.parkingLocation.create({
        data: {
          name: 'City Center Garage',
          address: '456 Oak Avenue, Business District',
          latitude: 40.7589,
          longitude: -73.9851,
          description: 'Multi-level parking garage with electric charging',
          features: JSON.stringify(['Electric Charging', 'Covered', 'Camera Surveillance']),
          operatingHours: JSON.stringify({
            monday: '24/7',
            tuesday: '24/7',
            wednesday: '24/7',
            thursday: '24/7',
            friday: '24/7',
            saturday: '24/7',
            sunday: '24/7'
          }),
          isActive: true,
        },
      }),
      prisma.parkingLocation.create({
        data: {
          name: 'Mall Parking',
          address: '789 Shopping Blvd, Shopping Center',
          latitude: 40.7505,
          longitude: -73.9934,
          description: 'Convenient shopping center parking',
          features: JSON.stringify(['Free 2hrs', 'Shopping', 'Covered']),
          operatingHours: JSON.stringify({
            monday: '08:00-22:00',
            tuesday: '08:00-22:00',
            wednesday: '08:00-22:00',
            thursday: '08:00-22:00',
            friday: '08:00-23:00',
            saturday: '08:00-23:00',
            sunday: '10:00-20:00'
          }),
          isActive: true,
        },
      })
    ]);

    // Create parking slots for each location
    let totalSlots = 0;
    for (const [index, location] of locations.entries()) {
      const slotCount = [50, 75, 120][index];
      const basePrice = [8.50, 6.75, 5.25][index];
      
      for (let i = 1; i <= slotCount; i++) {
        await prisma.parkingSlot.create({
          data: {
            slotNumber: `${String.fromCharCode(65 + Math.floor((i - 1) / 10))}-${String(i).padStart(2, '0')}`,
            locationId: location.id,
            type: i % 10 === 0 ? 'PREMIUM' : i % 15 === 0 ? 'EV' : 'STANDARD',
            basePrice: basePrice + (Math.random() * 2),
            status: Math.random() > 0.7 ? 'OCCUPIED' : 'AVAILABLE',
            features: JSON.stringify(['Camera', 'Sensor']),
          },
        });
        totalSlots++;
      }
    }

    // Add system settings
    await prisma.systemSettings.createMany({
      data: [
        {
          key: 'MAX_BOOKING_HOURS',
          value: '24',
          description: 'Maximum hours a user can book in advance',
        },
        {
          key: 'BOOKING_GRACE_PERIOD',
          value: '15',
          description: 'Grace period in minutes for late arrivals',
        },
        {
          key: 'PAYMENT_METHODS',
          value: JSON.stringify(['TELEBIRR', 'CBE_BIRR', 'CHAPA']),
          description: 'Supported payment methods',
        },
      ],
    });

    return NextResponse.json({
      message: 'Database seeded successfully!',
      status: 'seeded',
      data: {
        locations: locations.length,
        totalSlots,
        systemSettings: 3
      }
    });
  } catch (error) {
    console.error('Database seeding error:', error);
    return NextResponse.json({
      status: 'error',
      error: error instanceof Error ? error.message : 'Seeding failed'
    }, { status: 500 });
  }
}
