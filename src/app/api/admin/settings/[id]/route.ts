import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const settingId = params.id;
    const body = await request.json();
    const { value } = body;

    const setting = await prisma.systemSettings.update({
      where: { id: settingId },
      data: {
        value,
        updatedBy: session.user.email,
      },
    });

    return NextResponse.json(setting);
  } catch (error) {
    console.error('Update setting error:', error);
    return NextResponse.json(
      { error: 'Failed to update setting' },
      { status: 500 }
    );
  }
}
