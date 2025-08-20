import { NextRequest, NextResponse } from 'next/server';
import { requireRole, assignRole, removeRole, getUserWithRoles, UserRole } from '@/src/lib/auth-utils';

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireRole(['ADMIN', 'SUPER_ADMIN']);
    
    const userWithRoles = await getUserWithRoles(params.id);
    
    if (!userWithRoles) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(userWithRoles);
  } catch (error: any) {
    console.error('Error fetching user roles:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: error.message?.includes('Unauthorized') ? 401 : 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireRole(['ADMIN', 'SUPER_ADMIN']);
    
    const { role, locationId } = await request.json();
    
    if (!role || !['USER', 'ADMIN', 'ATTENDANT', 'SUPER_ADMIN'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role' },
        { status: 400 }
      );
    }

    await assignRole(params.id, role as UserRole, locationId);

    return NextResponse.json({ 
      message: 'Role assigned successfully' 
    });
  } catch (error: any) {
    console.error('Error assigning role:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: error.message?.includes('Unauthorized') ? 401 : 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await requireRole(['ADMIN', 'SUPER_ADMIN']);
    
    const { searchParams } = new URL(request.url);
    const role = searchParams.get('role');
    const locationId = searchParams.get('locationId');
    
    if (!role || !['USER', 'ADMIN', 'ATTENDANT', 'SUPER_ADMIN'].includes(role)) {
      return NextResponse.json(
        { error: 'Invalid role' },
        { status: 400 }
      );
    }

    await removeRole(params.id, role as UserRole, locationId || undefined);

    return NextResponse.json({ 
      message: 'Role removed successfully' 
    });
  } catch (error: any) {
    console.error('Error removing role:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: error.message?.includes('Unauthorized') ? 401 : 500 }
    );
  }
}
