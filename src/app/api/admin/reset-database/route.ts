import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST() {
  try {
    console.log('🗑️ Starting database reset...');

    // 1. Clear existing data
    console.log('Clearing existing users and roles...');
    await prisma.userRole.deleteMany({});
    await prisma.account.deleteMany({});
    await prisma.session.deleteMany({});
    await prisma.user.deleteMany({});

    console.log('Clearing existing bookings and related data...');
    await prisma.payment.deleteMany({});
    await prisma.booking.deleteMany({});
    await prisma.incident.deleteMany({});
    await prisma.notification.deleteMany({});
    await prisma.parkingAnalytics.deleteMany({});

    console.log('Clearing existing parking data...');
    await prisma.parkingSlot.deleteMany({});
    await prisma.parkingLocation.deleteMany({});
    await prisma.systemSettings.deleteMany({});

    console.log('✅ Database cleared successfully');

    // 2. Create parking locations
    console.log('🏢 Creating parking locations...');
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
      }),
      prisma.parkingLocation.create({
        data: {
          name: 'Business District',
          address: '321 Corporate Way, Financial District',
          latitude: 40.7614,
          longitude: -73.9776,
          description: 'Premium business district parking with valet service',
          features: JSON.stringify(['Valet', 'Premium', 'Covered', 'Security']),
          operatingHours: JSON.stringify({
            monday: '06:00-20:00',
            tuesday: '06:00-20:00',
            wednesday: '06:00-20:00',
            thursday: '06:00-20:00',
            friday: '06:00-20:00',
            saturday: '08:00-18:00',
            sunday: 'Closed'
          }),
          isActive: true,
        },
      }),
      prisma.parkingLocation.create({
        data: {
          name: 'Airport Parking',
          address: '555 Terminal Drive, Airport',
          latitude: 40.6892,
          longitude: -74.1745,
          description: 'Long-term airport parking with shuttle service',
          features: JSON.stringify(['Long-term', 'Shuttle', 'Security', 'Covered']),
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
    ]);

    console.log(`✅ Created ${locations.length} parking locations`);

    // 3. Create parking slots for each location
    console.log('🅿️ Creating parking slots...');
    const slotsData = [
      { locationIdx: 0, count: 50, basePrice: 8.50, types: ['STANDARD', 'PREMIUM', 'EV'] },
      { locationIdx: 1, count: 75, basePrice: 6.75, types: ['STANDARD', 'EV'] },
      { locationIdx: 2, count: 120, basePrice: 5.25, types: ['STANDARD'] },
      { locationIdx: 3, count: 30, basePrice: 12.00, types: ['PREMIUM'] },
      { locationIdx: 4, count: 200, basePrice: 15.00, types: ['STANDARD'] },
    ];

    let totalSlots = 0;
    for (const slotConfig of slotsData) {
      const location = locations[slotConfig.locationIdx];
      
      for (let i = 1; i <= slotConfig.count; i++) {
        const slotType = slotConfig.types[Math.floor(Math.random() * slotConfig.types.length)];
        const priceMultiplier = slotType === 'PREMIUM' ? 1.5 : slotType === 'EV' ? 1.2 : 1;
        
        await prisma.parkingSlot.create({
          data: {
            slotNumber: `${String.fromCharCode(65 + Math.floor((i - 1) / 10))}-${String(i).padStart(2, '0')}`,
            locationId: location.id,
            type: slotType,
            basePrice: slotConfig.basePrice * priceMultiplier,
            status: Math.random() > 0.3 ? 'AVAILABLE' : 'OCCUPIED',
            features: JSON.stringify(getSlotFeatures(slotType)),
            rules: slotType === 'EV' ? 'Electric vehicles only' : slotType === 'PREMIUM' ? 'Premium parking with additional services' : null,
          },
        });
        totalSlots++;
      }
    }

    console.log(`✅ Created ${totalSlots} parking slots`);

    // 4. Create demo users with passwords
    console.log('👥 Creating demo users...');
    
    // Hash passwords
    const adminPassword = await bcrypt.hash('admin123', 10);
    const attendantPassword = await bcrypt.hash('attendant123', 10);
    const userPassword = await bcrypt.hash('user123', 10);

    // Create users
    const adminUser = await prisma.user.create({
      data: {
        email: 'admin@wepark.com',
        name: 'Admin User',
        password: adminPassword,
        image: null,
      },
    });

    const attendantUser = await prisma.user.create({
      data: {
        email: 'attendant@wepark.com',
        name: 'Attendant User',
        password: attendantPassword,
        image: null,
      },
    });

    const regularUser = await prisma.user.create({
      data: {
        email: 'user@wepark.com',
        name: 'Regular User',
        password: userPassword,
        image: null,
      },
    });

    // Assign roles
    await prisma.userRole.createMany({
      data: [
        {
          userId: adminUser.id,
          role: 'ADMIN',
          isActive: true,
        },
        {
          userId: attendantUser.id,
          role: 'ATTENDANT',
          isActive: true,
        },
        {
          userId: regularUser.id,
          role: 'USER',
          isActive: true,
        },
      ],
    });

    console.log('✅ Created demo users with roles');

    // 5. Create system settings
    console.log('⚙️ Creating system settings...');
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
          key: 'CANCELLATION_POLICY',
          value: 'FREE_UNTIL_1HR',
          description: 'Cancellation policy for bookings',
        },
        {
          key: 'PAYMENT_METHODS',
          value: JSON.stringify(['TELEBIRR', 'CBE_BIRR', 'CHAPA']),
          description: 'Supported payment methods',
        },
      ],
    });

    console.log('✅ Database reset and seed completed successfully!');

    return NextResponse.json({
      success: true,
      message: 'Database reset and seeded successfully',
      data: {
        locations: locations.length,
        slots: totalSlots,
        demoUsers: [
          { email: 'admin@wepark.com', password: 'admin123', role: 'ADMIN' },
          { email: 'attendant@wepark.com', password: 'attendant123', role: 'ATTENDANT' },
          { email: 'user@wepark.com', password: 'user123', role: 'USER' },
        ]
      }
    });

  } catch (error) {
    console.error('❌ Database reset failed:', error);
    return NextResponse.json(
      { 
        success: false,
        error: 'Database reset failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

function getSlotFeatures(type: string): string[] {
  const baseFeatures = ['Camera', 'Sensor'];
  
  switch (type) {
    case 'PREMIUM':
      return [...baseFeatures, 'Valet', 'Covered', 'Premium'];
    case 'EV':
      return [...baseFeatures, 'EV Charging', 'Covered'];
    default:
      return baseFeatures;
  }
}
