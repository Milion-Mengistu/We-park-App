import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settingId = params.id;

    const currentSetting = await prisma.systemSettings.findUnique({
      where: { id: settingId },
    });

    if (!currentSetting) {
      return NextResponse.json(
        { error: 'Setting not found' },
        { status: 404 }
      );
    }

    const setting = await prisma.systemSettings.update({
      where: { id: settingId },
      data: {
        isActive: !currentSetting.isActive,
        updatedBy: session.user.email,
      },
    });

    return NextResponse.json(setting);
  } catch (error) {
    console.error('Toggle setting error:', error);
    return NextResponse.json(
      { error: 'Failed to toggle setting' },
      { status: 500 }
    );
  }
}
