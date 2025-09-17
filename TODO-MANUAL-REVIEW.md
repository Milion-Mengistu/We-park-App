# TypeScript and ESLint Issues - Manual Review Required

This file documents the remaining TypeScript errors and ESLint warnings that require manual review and cannot be automatically fixed.

## TypeScript Errors (23 remaining)

### 1. Next.js Route Parameter Types (.next/types/*)
**Files affected:**
- `.next/types/app/api/admin/locations/[id]/route.ts`
- `.next/types/app/api/admin/settings/[id]/route.ts`
- `.next/types/app/api/admin/settings/[id]/toggle/route.ts`
- `.next/types/app/api/admin/users/[id]/roles/route.ts`

**Issue:** Generated Next.js types expect `params` to be `Promise<{id: string}>` but some routes still use the old format.
**Resolution needed:** Update remaining API routes to use `await params` pattern.

### 2. Implicit 'any' Types in API Routes
**Files affected:**
- `src/app/api/admin/reports/export/route.ts` (booking parameters)
- `src/app/api/admin/settings/route.ts` (filter parameters)
- `src/app/api/attendant/recent-checkins/route.ts` (booking parameter)

**Issue:** Function parameters lack explicit type annotations.
**Resolution needed:** Add proper TypeScript interfaces for these parameters.

### 3. Error Handling with Unknown Type
**Files affected:**
- `src/app/api/bookings/route.ts`
- `src/app/api/checkin/route.ts`
- `src/app/api/payments/route.ts`

**Issue:** Catch block error parameters are of type 'unknown' and cannot access .message directly.
**Resolution needed:** Use proper error type checking: `error instanceof Error ? error.message : 'Default message'`

### 4. Index Signature Issues
**Files affected:**
- `src/lib/booking-service.ts:429`
- `src/lib/notification-service.ts:395`

**Issue:** Dynamic property access on objects without index signatures.
**Resolution needed:** Add proper type guards or index signatures to the object types.

## ESLint Warnings (85 remaining)

### High Priority
1. **@typescript-eslint/no-explicit-any** - 30+ instances
   - Most critical: API route handlers, service functions
   - Recommendation: Add proper type definitions instead of 'any'

2. **@typescript-eslint/no-unused-vars** - 20+ instances
   - Pattern: Function parameters prefixed with `_` to indicate intentional non-use
   - Some legitimate unused imports that should be removed

3. **react/no-unescaped-entities** - Multiple instances
   - HTML entities like apostrophes need proper escaping
   - Example: `Don't` should be `Don&apos;t` or use different quotes

### Medium Priority
1. **react-hooks/exhaustive-deps** - Missing dependencies in useEffect hooks
2. **no-console** - Console.log statements in production code (should use console.warn/error)
3. **prefer-const** - Variables that are never reassigned

## Recommendations

### Immediate Actions
1. Fix remaining API route parameter types to match Next.js 15 patterns
2. Add proper error handling with type checking
3. Replace 'any' types with proper interfaces in critical paths

### Future Improvements
1. Create comprehensive TypeScript interfaces for API request/response types
2. Implement proper error handling utilities
3. Add type guards for dynamic object access
4. Consider using a code formatter to handle entity escaping automatically

### Files that need the most attention
1. `src/app/api/admin/` - Multiple TypeScript errors
2. `src/lib/booking-service.ts` - Complex service with type issues
3. `src/lib/notification-service.ts` - Dynamic object access issues

All errors and warnings have been preserved to maintain current functionality while implementing the requested ESLint, Prettier, and CI improvements.