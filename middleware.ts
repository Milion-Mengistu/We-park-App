import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

// Define protected routes and their required roles
const roleBasedRoutes = {
  '/admin': ['ADMIN', 'SUPER_ADMIN'],
  '/attendant': ['ATTENDANT', 'ADMIN', 'SUPER_ADMIN'],
  '/dashboard': ['USER', 'ATTENDANT', 'ADMIN', 'SUPER_ADMIN'],
  '/find-parking': ['USER', 'ATTENDANT', 'ADMIN', 'SUPER_ADMIN'],
  '/api/admin': ['ADMIN', 'SUPER_ADMIN'],
  '/api/attendant': ['ATTENDANT', 'ADMIN', 'SUPER_ADMIN'],
};

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret });
  const { pathname } = request.nextUrl;

  // Allow access to auth pages
  if (pathname.startsWith('/login') || 
      pathname.startsWith('/register') || 
      pathname.startsWith('/api/auth/') ||
      pathname === '/') {
    return NextResponse.next();
  }

  // Check if user is authenticated
  if (!token) {
    const url = new URL('/login', request.url);
    url.searchParams.set('callbackUrl', pathname);
    return NextResponse.redirect(url);
  }

  // Check role-based access
  for (const [routePattern, allowedRoles] of Object.entries(roleBasedRoutes)) {
    if (pathname.startsWith(routePattern)) {
      const userRoles = (token.roles as string[]) || [];
      const hasRequiredRole = allowedRoles.some(role => userRoles.includes(role));
      
      if (!hasRequiredRole) {
        // Redirect to appropriate page based on user's role
        const primaryRole = userRoles[0];
        let redirectPath = '/dashboard';
        
        if (primaryRole === 'ADMIN' || primaryRole === 'SUPER_ADMIN') {
          redirectPath = '/admin';
        } else if (primaryRole === 'ATTENDANT') {
          redirectPath = '/attendant';
        }
        
        return NextResponse.redirect(new URL(redirectPath, request.url));
      }
      break;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
