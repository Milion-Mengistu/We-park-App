import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';
import { getUserRoles } from '@/src/lib/auth-utils';
import { quickRoleTest, runRoleTests, testRoleHierarchy, testSpecificScenarios } from '@/src/lib/test-roles';

/**
 * Test endpoint to verify role-based authentication is working correctly
 * This endpoint should only be available in development
 */
export async function GET(request: NextRequest) {
  // Only allow in development
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 404 });
  }

  try {
    const session = await getServerSession(authOptions);
    const url = new URL(request.url);
    const testType = url.searchParams.get('type') || 'all';

    let testResults = [];

    switch (testType) {
      case 'basic':
        testResults = runRoleTests();
        break;
      case 'hierarchy':
        testResults = testRoleHierarchy();
        break;
      case 'scenarios':
        testResults = testSpecificScenarios();
        break;
      case 'all':
      default:
        testResults = [
          ...runRoleTests(),
          ...testRoleHierarchy(),
          ...testSpecificScenarios(),
        ];
        break;
    }

    const passed = testResults.filter(r => r.success);
    const failed = testResults.filter(r => !r.success);

    // Also test current user's roles if authenticated
    let currentUserInfo = null;
    if (session?.user?.id) {
      const userRoles = await getUserRoles(session.user.id);
      currentUserInfo = {
        id: session.user.id,
        email: session.user.email,
        roles: userRoles,
        sessionRoles: session.user.roles, // Roles from session
      };
    }

    return NextResponse.json({
      summary: {
        total: testResults.length,
        passed: passed.length,
        failed: failed.length,
        successRate: `${((passed.length / testResults.length) * 100).toFixed(1)}%`,
      },
      currentUser: currentUserInfo,
      results: testResults,
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
    });
  } catch (error) {
    console.error('Role test error:', error);
    return NextResponse.json(
      { error: 'Failed to run role tests' },
      { status: 500 }
    );
  }
}

/**
 * POST endpoint to test specific role scenarios
 */
export async function POST(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 404 });
  }

  try {
    const body = await request.json();
    const { userRoles, endpoint } = body;

    if (!userRoles || !endpoint) {
      return NextResponse.json(
        { error: 'userRoles and endpoint are required' },
        { status: 400 }
      );
    }

    // Test the specific scenario
    const testResult = {
      userRoles,
      endpoint,
      timestamp: new Date().toISOString(),
    };

    // Here you would normally test the actual endpoint access
    // For now, we'll just return the input for verification
    return NextResponse.json({
      test: testResult,
      message: 'Role test scenario received',
    });
  } catch (error) {
    console.error('Role test POST error:', error);
    return NextResponse.json(
      { error: 'Failed to process role test' },
      { status: 500 }
    );
  }
}
