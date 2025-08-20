import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { getUserRoles } from '@/src/lib/auth-utils';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');

    // Users can only get their own roles unless they're admin
    if (userId && userId !== session.user.id) {
      const userRoles = await getUserRoles(session.user.id);
      const isAdmin = userRoles.includes('ADMIN') || userRoles.includes('SUPER_ADMIN');
      
      if (!isAdmin) {
        return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
      }
    }

    const targetUserId = userId || session.user.id;
    const roles = await getUserRoles(targetUserId);

    return NextResponse.json({ roles });
  } catch (error) {
    console.error('Error fetching user roles:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
