"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useCallback } from "react";
import { useRoles } from "@/src/hooks/useRoles";
import { StatsCard, ActionButton, StatusBadge, PageLoading } from "@/src/components/ui";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const { roles, isAdmin, isAttendant, primaryRole, isLoading: rolesLoading } = useRoles();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [bookings, setBookings] = useState<any[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [notifUnread, setNotifUnread] = useState<number>(0);
  const [acting, setActing] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (status === "loading" || rolesLoading) return; // Still loading
    if (status === "unauthenticated") {
      router.push("/login"); // Not logged in
      return;
    }

    // Role-based redirection logic
    if (mounted && session && !rolesLoading && roles.length > 0) {
      // Check if user should be redirected to a role-specific dashboard
      const currentPath = window.location.pathname;
      
      if (currentPath === '/dashboard') {
        if (isAdmin && !shouldRedirect) {
          // Admin users get a choice, show them options
          setShouldRedirect(true);
        } else if (isAttendant && !isAdmin && !shouldRedirect) {
          // Pure attendants (not admins) redirect to attendant panel
          router.push('/attendant');
          return;
        }
      }
    }
  }, [session, status, router, mounted, roles, isAdmin, isAttendant, rolesLoading, shouldRedirect]);

  // Fetch user's bookings and notifications (must be before any early return to keep hooks order stable)
  const loadData = useCallback(async () => {
    if (!mounted || status !== 'authenticated') return;
    setLoadingData(true);
    try {
      const [bRes, nRes] = await Promise.all([
        fetch('/api/bookings', { cache: 'no-store' }),
        fetch('/api/notifications?limit=10', { cache: 'no-store' }),
      ]);
      if (bRes.ok) {
        const data = await bRes.json();
        const list = Array.isArray(data) ? data : (data.bookings ?? []);
        setBookings(list);
      }
      if (nRes.ok) {
        const data = await nRes.json();
        setNotifications(data.notifications ?? []);
        setNotifUnread(data.unreadCount ?? 0);
      }
    } catch (e) {
      console.error('Dashboard load error', e);
    } finally {
      setLoadingData(false);
    }
  }, [mounted, status]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Auto-refresh on window focus or when tab becomes visible (helps show recent bookings)
  useEffect(() => {
    const onFocus = () => loadData();
    const onVisibility = () => {
      if (document.visibilityState === 'visible') loadData();
    };
    window.addEventListener('focus', onFocus);
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      window.removeEventListener('focus', onFocus);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [loadData]);

  const currentBooking = useMemo(() => {
    const byStatus: Record<string, any[]> = bookings.reduce((acc, b) => {
      (acc[b.status] ||= []).push(b);
      return acc;
    }, {} as Record<string, any[]>);
    return (byStatus['ACTIVE']?.[0]) || (byStatus['CONFIRMED']?.[0]) || null;
  }, [bookings]);

  const totalBookings = bookings.length;

  // Handle manual redirection choice for admins
  const handleRoleRedirect = (path: string) => {
    router.push(path);
  };

  if (status === "loading" || rolesLoading) {
    return <PageLoading text="Loading your dashboard..." />;
  }

  if (status === "unauthenticated") {
    return null; // Will redirect
  }

  // For demo purposes, if auth fails, show demo data
  const user = session?.user || {
    name: "Demo User",
    email: "demo@wepark.com",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  };

  // Show role selection for admins who have multiple role options
  if (shouldRedirect && isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg max-w-md w-full mx-4">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Choose Your Dashboard</h2>
            <p className="text-gray-600">You have multiple roles. Which dashboard would you like to access?</p>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setShouldRedirect(false)}
              className="w-full flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 rounded-xl font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              User Dashboard
              <span className="ml-auto text-xs bg-blue-200 text-blue-700 px-2 py-1 rounded-full">Default</span>
            </button>

            {isAttendant && (
              <button
                onClick={() => handleRoleRedirect('/attendant')}
                className="w-full flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                Attendant Panel
                <span className="ml-auto text-xs bg-green-200 text-green-700 px-2 py-1 rounded-full">Scanning</span>
              </button>
            )}

            {isAdmin && (
              <button
                onClick={() => handleRoleRedirect('/admin')}
                className="w-full flex items-center gap-3 p-4 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Admin Dashboard
                <span className="ml-auto text-xs bg-red-200 text-red-700 px-2 py-1 rounded-full">Management</span>
              </button>
            )}
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Your roles:</span>
              <div className="flex gap-1">
                {roles.map((role) => (
                  <span
                    key={role}
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      role === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-700' :
                      role === 'ADMIN' ? 'bg-red-100 text-red-700' :
                      role === 'ATTENDANT' ? 'bg-green-100 text-green-700' :
                      'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // (hooks moved above to maintain consistent order)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Dashboard Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-gray-600">Welcome back, {user.name}</p>
              {roles.length > 0 && (
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500">Role:</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    primaryRole === 'SUPER_ADMIN' ? 'bg-purple-100 text-purple-700' :
                    primaryRole === 'ADMIN' ? 'bg-red-100 text-red-700' :
                    primaryRole === 'ATTENDANT' ? 'bg-green-100 text-green-700' :
                    'bg-blue-100 text-blue-700'
                  }`}>
                    {primaryRole}
                  </span>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4">
              {/* Role-specific quick access buttons */}
              {isAdmin && (
                <Link
                  href="/admin"
                  className="flex items-center gap-2 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Admin
                </Link>
              )}

              {isAttendant && (
                <Link
                  href="/attendant"
                  className="flex items-center gap-2 px-3 py-2 bg-green-50 hover:bg-green-100 text-green-600 rounded-xl font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                  Scanner
                </Link>
              )}

              <div className="flex items-center gap-3">
                <Image
                  src={user.image || "/logo.png"}
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-blue-200"
                />
                <div className="hidden sm:block">
                  <p className="font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </div>
              
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span className="hidden sm:block">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Bookings"
      value={loadingData ? '—' : totalBookings}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-green-500 to-emerald-500"
            trend={{
              value: "+23% this month",
              isPositive: true
            }}
          />

          <StatsCard
            title="Total Hours"
            value={currentBooking ? `${Math.max(0, Math.round(((new Date(currentBooking.endTime || Date.now()).getTime()) - Date.now()) / (1000*60*60)))}h` : '0h'}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-blue-500 to-indigo-500"
            subtitle="Currently parked"
          />

          <StatsCard
            title="Total Saved"
            value={"$" + Math.max(0, bookings.reduce((sum, b) => sum + (Number(b.totalAmount) || 0), 0).toFixed ? bookings.reduce((sum, b) => sum + (Number(b.totalAmount) || 0), 0).toFixed(0) : 0)}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-purple-500 to-pink-500"
            trend={{
              value: "vs street parking",
              isPositive: true
            }}
          />

          <StatsCard
            title="Rating"
            value="4.9"
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-orange-500 to-red-500"
            subtitle="Excellent"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Booking */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Current Booking</h2>
                {currentBooking ? (
                  <StatusBadge status={currentBooking.status} variant={currentBooking.status === 'ACTIVE' ? 'success' : 'warning'} pulse={currentBooking.status === 'ACTIVE'} />
                ) : (
                  <StatusBadge status="None" variant="neutral" />
                )}
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                {currentBooking ? (
                  <>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{currentBooking.slot?.location?.name}</h3>
                        <p className="text-gray-600 text-sm">{currentBooking.slot?.location?.address}, Spot {currentBooking.slot?.slotNumber}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">${Number(currentBooking.totalAmount || 0).toFixed(2)}</p>
                        <p className="text-sm text-gray-500">total</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Start</p>
                        <p className="font-medium text-gray-900">{new Date(currentBooking.startTime || Date.now()).toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Ends</p>
                        <p className="font-medium text-gray-900">{new Date(currentBooking.endTime || Date.now()).toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-3">
                      <ActionButton
                        variant="primary"
                        fullWidth
                        disabled={acting === 'extend'}
                        onClick={async () => {
                          if (!currentBooking) return;
                          setActing('extend');
                          try {
                            const res = await fetch(`/api/bookings/${currentBooking.id}`, {
                              method: 'PATCH',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ action: 'extend', additionalHours: 1 }),
                            });
                            if (res.ok) {
                              const updated = await res.json();
                              // Optimistically update current booking and list
                              setBookings(prev => prev.map(b => b.id === currentBooking.id ? { ...b, ...updated } : b));
                            }
                          } finally {
                            setActing(null);
                          }
                        }}
                      >
                        Extend Time
                      </ActionButton>
                      <ActionButton
                        variant="outline"
                        fullWidth
                        disabled={acting === 'checkout'}
                        onClick={async () => {
                          if (!currentBooking) return;
                          setActing('checkout');
                          try {
                            const res = await fetch(`/api/bookings/${currentBooking.id}`, {
                              method: 'PATCH',
                              headers: { 'Content-Type': 'application/json' },
                              body: JSON.stringify({ action: 'checkout' }),
                            });
                            if (res.ok) {
                              // Remove from current by marking status locally
                              setBookings(prev => prev.map(b => b.id === currentBooking.id ? { ...b, status: 'COMPLETED' } : b));
                            }
                          } finally {
                            setActing(null);
                          }
                        }}
                      >
                        End Session
                      </ActionButton>
                    </div>
                  </>
                ) : (
                  <div className="text-center text-gray-600">No active booking. Start by finding a spot.</div>
                )}
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
                <button
                  onClick={() => loadData()}
                  className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100"
                  disabled={loadingData}
                  title="Refresh"
                >
                  {loadingData ? 'Refreshing…' : 'Refresh'}
                </button>
              </div>
              <div className="space-y-4">
                {(bookings.slice(0, 5)).map((b) => (
                  <div key={b.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-2 4h2"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{b.slot?.location?.name}</p>
                        <p className="text-sm text-gray-500">{new Date(b.startTime || Date.now()).toLocaleString()} • {b.status.toLowerCase()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${Number(b.totalAmount || 0).toFixed(2)}</p>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${b.status === 'COMPLETED' ? 'bg-green-500' : b.status === 'CANCELLED' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
                        <span className="text-xs text-gray-600 capitalize">{b.status.toLowerCase()}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {!bookings.length && (
                  <div className="text-center text-gray-600">No bookings yet.</div>
                )}
              </div>
              <ActionButton href="/find-parking" variant="secondary" fullWidth className="mt-4">
                Find a Spot
              </ActionButton>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <ActionButton
                  href="/find-parking"
                  variant="primary"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  }
                >
                  Find Parking
                </ActionButton>

                <ActionButton
                  variant="outline"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  }
                >
                  View History
                </ActionButton>

                <ActionButton
                  variant="outline"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                  }
                >
                  Payment Methods
                </ActionButton>
              </div>
            </div>

            {/* Profile Summary */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Profile</h3>
              
              <div className="text-center mb-4">
                <Image
                  src={user.image || "/logo.png"}
                  alt={user.name || "User"}
                  width={64}
                  height={64}
                  className="rounded-full mx-auto mb-3 border-4 border-blue-200"
                />
                <h4 className="font-semibold text-gray-900">{user.name}</h4>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Member since</span>
                  <span className="font-medium text-gray-900">Dec 2024</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Loyalty Points</span>
                  <span className="font-medium text-blue-600">1,247</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Status</span>
                  <StatusBadge
                    status={primaryRole === 'ADMIN' || primaryRole === 'SUPER_ADMIN' ? 'Admin' :
                           primaryRole === 'ATTENDANT' ? 'Staff' : 'Premium'}
                    variant="success"
                    size="sm"
                  />
                </div>
              </div>
              
              <ActionButton variant="secondary" fullWidth className="mt-4">
                Edit Profile
              </ActionButton>
            </div>

            {/* Notifications */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Notifications</h3>
                {notifUnread > 0 && (
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">{notifUnread} new</span>
                )}
              </div>
              <div className="space-y-3">
                {notifications.slice(0, 5).map((n) => (
                  <div key={n.id} className={`flex items-start gap-3 p-3 rounded-lg border ${n.isRead ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'}`}>
                    <div className={`w-2 h-2 rounded-full mt-2 ${n.isRead ? 'bg-gray-400' : 'bg-blue-500'}`}></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{n.title || n.type}</p>
                      <p className="text-xs text-gray-600">{n.message}</p>
                    </div>
                    {!n.isRead && (
                      <button
                        className="ml-auto text-xs text-blue-600 hover:underline"
                        onClick={async () => {
                          await fetch('/api/notifications', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'mark_read', notificationId: n.id }) });
                          setNotifications(prev => prev.map(x => x.id === n.id ? { ...x, isRead: true } : x));
                          setNotifUnread(c => Math.max(0, c - 1));
                        }}
                      >Mark read</button>
                    )}
                  </div>
                ))}
                {!notifications.length && (
                  <div className="text-sm text-gray-600">No notifications.</div>
                )}
              </div>
              <ActionButton href="/dashboard" variant="secondary" fullWidth className="mt-4">
                Refresh
              </ActionButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
