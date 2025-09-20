/**
 * Utility functions for testing role-based authentication
 * These functions help verify that the role system is working correctly
 */

import { UserRole } from './auth-utils';

export interface RoleTestResult {
  success: boolean;
  message: string;
  details?: any;
}

/**
 * Test data for role verification
 */
export const testUsers = {
  superAdmin: {
    id: 'test-super-admin',
    email: 'superadmin@test.com',
    roles: ['SUPER_ADMIN'] as UserRole[],
  },
  admin: {
    id: 'test-admin',
    email: 'admin@test.com',
    roles: ['ADMIN'] as UserRole[],
  },
  attendant: {
    id: 'test-attendant',
    email: 'attendant@test.com',
    roles: ['ATTENDANT'] as UserRole[],
  },
  user: {
    id: 'test-user',
    email: 'user@test.com',
    roles: ['USER'] as UserRole[],
  },
  multiRole: {
    id: 'test-multi',
    email: 'multi@test.com',
    roles: ['USER', 'ATTENDANT'] as UserRole[],
  },
};

/**
 * Expected access permissions for different endpoints
 */
export const accessMatrix: Record<string, UserRole[]> = {
  '/admin': ['ADMIN', 'SUPER_ADMIN'],
  '/admin/users': ['ADMIN', 'SUPER_ADMIN'],
  '/admin/locations': ['ADMIN', 'SUPER_ADMIN'],
  '/admin/bookings': ['ADMIN', 'SUPER_ADMIN'],
  '/admin/settings': ['ADMIN', 'SUPER_ADMIN'],
  '/admin/reports': ['ADMIN', 'SUPER_ADMIN'],
  '/attendant': ['ATTENDANT', 'ADMIN', 'SUPER_ADMIN'],
  '/dashboard': ['USER', 'ATTENDANT', 'ADMIN', 'SUPER_ADMIN'],
  '/find-parking': ['USER', 'ATTENDANT', 'ADMIN', 'SUPER_ADMIN'],
};

/**
 * Test if a user should have access to an endpoint
 */
export function testUserAccess(userRoles: UserRole[], endpoint: string): RoleTestResult {
  const requiredRoles = accessMatrix[endpoint as keyof typeof accessMatrix];
  
  if (!requiredRoles) {
    return {
      success: false,
      message: `Endpoint ${endpoint} not found in access matrix`,
    };
  }

  const hasAccess = requiredRoles.some((role) => userRoles.includes(role as UserRole));
  
  return {
    success: hasAccess,
    message: hasAccess 
      ? `User with roles [${userRoles.join(', ')}] should have access to ${endpoint}`
      : `User with roles [${userRoles.join(', ')}] should NOT have access to ${endpoint}`,
    details: {
      userRoles,
      requiredRoles,
      endpoint,
    },
  };
}

/**
 * Run comprehensive role tests
 */
export function runRoleTests(): RoleTestResult[] {
  const results: RoleTestResult[] = [];

  // Test each user type against each endpoint
  Object.entries(testUsers).forEach(([userType, userData]) => {
    Object.keys(accessMatrix).forEach(endpoint => {
      const result = testUserAccess(userData.roles, endpoint);
      results.push({
        ...result,
        message: `[${userType}] ${result.message}`,
      });
    });
  });

  return results;
}

/**
 * Test role hierarchy (higher roles should include lower role permissions)
 */
export function testRoleHierarchy(): RoleTestResult[] {
  const results: RoleTestResult[] = [];
  
  // SUPER_ADMIN should have access to everything ADMIN has
  const adminEndpoints = Object.keys(accessMatrix).filter(endpoint => 
    accessMatrix[endpoint as keyof typeof accessMatrix].includes('ADMIN')
  );
  
  adminEndpoints.forEach(endpoint => {
    const superAdminAccess = testUserAccess(['SUPER_ADMIN'], endpoint);
    results.push({
      success: superAdminAccess.success,
      message: `[HIERARCHY] SUPER_ADMIN should have access to admin endpoint ${endpoint}`,
      details: superAdminAccess.details,
    });
  });

  // ADMIN should have access to everything ATTENDANT has (except attendant-specific)
  const attendantEndpoints = Object.keys(accessMatrix).filter(endpoint => 
    accessMatrix[endpoint as keyof typeof accessMatrix].includes('ATTENDANT') &&
    !endpoint.startsWith('/attendant')
  );

  attendantEndpoints.forEach(endpoint => {
    const adminAccess = testUserAccess(['ADMIN'], endpoint);
    results.push({
      success: adminAccess.success,
      message: `[HIERARCHY] ADMIN should have access to general endpoint ${endpoint}`,
      details: adminAccess.details,
    });
  });

  return results;
}

/**
 * Print test results in a readable format
 */
export function printTestResults(results: RoleTestResult[]): void {
  console.log('\n=== ROLE-BASED AUTHENTICATION TEST RESULTS ===\n');
  
  const passed = results.filter(r => r.success);
  const failed = results.filter(r => !r.success);
  
  console.log(`✅ PASSED: ${passed.length}`);
  console.log(`❌ FAILED: ${failed.length}`);
  console.log(`📊 TOTAL: ${results.length}\n`);
  
  if (failed.length > 0) {
    console.log('FAILED TESTS:');
    failed.forEach(result => {
      console.log(`❌ ${result.message}`);
      if (result.details) {
        console.log(`   Details: ${JSON.stringify(result.details, null, 2)}`);
      }
    });
    console.log('');
  }
  
  if (passed.length > 0) {
    console.log('PASSED TESTS:');
    passed.forEach(result => {
      console.log(`✅ ${result.message}`);
    });
  }
  
  console.log('\n=== END TEST RESULTS ===\n');
}

/**
 * Quick test runner for development
 */
export function quickRoleTest(): void {
  const allTests = [
    ...runRoleTests(),
    ...testRoleHierarchy(),
  ];
  
  printTestResults(allTests);
}

/**
 * Test specific role combinations
 */
export function testSpecificScenarios(): RoleTestResult[] {
  const results: RoleTestResult[] = [];

  // Test multi-role user
  const multiRoleTests = [
    { endpoint: '/dashboard', shouldHaveAccess: true },
    { endpoint: '/attendant', shouldHaveAccess: true },
    { endpoint: '/admin', shouldHaveAccess: false },
  ];

  multiRoleTests.forEach(test => {
    const result = testUserAccess(testUsers.multiRole.roles, test.endpoint);
    const isCorrect = result.success === test.shouldHaveAccess;
    
    results.push({
      success: isCorrect,
      message: `[MULTI-ROLE] User with [${testUsers.multiRole.roles.join(', ')}] ${
        test.shouldHaveAccess ? 'should' : 'should NOT'
      } have access to ${test.endpoint} - ${isCorrect ? 'CORRECT' : 'INCORRECT'}`,
      details: result.details,
    });
  });

  return results;
}
