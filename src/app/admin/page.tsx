"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { RoleGuard } from "@/src/components/RoleGuard";
import { StatsCard, ActionButton, PageLoading } from "@/src/components/ui";

interface DashboardStats {
  totalLocations: number;
  totalSlots: number;
  activeBookings: number;
  todayRevenue: number;
  occupancyRate: number;
}

function AdminDashboardContent() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentBookings, setRecentBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Fetch dashboard statistics
      const statsResponse = await fetch('/api/admin/stats');
      if (statsResponse.ok) {
        const statsData = await statsResponse.json();
        setStats(statsData);
      }

      // Fetch recent bookings
      const bookingsResponse = await fetch('/api/admin/bookings?limit=10');
      if (bookingsResponse.ok) {
        const bookingsData = await bookingsResponse.json();
        setRecentBookings(bookingsData.bookings ?? []);
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <PageLoading text="Loading admin dashboard..." />;
  }

  // Use DB data when available; otherwise show zeros/empties (no mock placeholders)
  const currentStats: DashboardStats = stats ?? {
    totalLocations: 0,
    totalSlots: 0,
    activeBookings: 0,
    todayRevenue: 0,
    occupancyRate: 0,
  };
  const currentBookings = Array.isArray(recentBookings) ? recentBookings : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Admin Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-gray-600">Manage parking locations and monitor system performance</p>
            </div>
            
            <div className="flex items-center gap-4">
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                User Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <StatsCard
            title="Total Locations"
            value={currentStats.totalLocations}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-blue-500 to-indigo-500"
          />

          <StatsCard
            title="Total Parking Slots"
            value={currentStats.totalSlots}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-2 4h2"/>
              </svg>
            }
            iconColor="bg-gradient-to-r from-green-500 to-emerald-500"
          />

          <StatsCard
            title="Active Bookings"
            value={currentStats.activeBookings}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-orange-500 to-red-500"
          />

          <StatsCard
            title="Today's Revenue"
            value={`$${Number(currentStats.todayRevenue ?? 0).toFixed(2)}`}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-purple-500 to-pink-500"
          />

          <StatsCard
            title="Occupancy Rate"
            value={`${currentStats.occupancyRate}%`}
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            iconColor="bg-gradient-to-r from-indigo-500 to-purple-500"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <ActionButton
                  href="/admin/locations"
                  variant="primary"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  }
                >
                  Manage Locations
                </ActionButton>

                <ActionButton
                  href="/admin/bookings"
                  variant="outline"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  }
                >
                  View All Bookings
                </ActionButton>

                <ActionButton
                  href="/admin/reports"
                  variant="outline"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  }
                >
                  Analytics & Reports
                </ActionButton>

                <ActionButton
                  href="/admin/users"
                  variant="outline"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  }
                >
                  User Management
                </ActionButton>

                <ActionButton
                  href="/admin/settings"
                  variant="outline"
                  fullWidth
                  icon={
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                >
                  System Settings
                </ActionButton>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">System Alerts</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">High occupancy at Downtown Plaza</p>
                    <p className="text-xs text-gray-500">95% capacity - consider dynamic pricing</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">System backup completed</p>
                    <p className="text-xs text-gray-500">Daily backup successful at 02:00 AM</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Sensor malfunction detected</p>
                    <p className="text-xs text-gray-500">Slot B-15 at City Center - needs maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Recent Bookings</h2>
                <Link
                  href="/admin/bookings"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  View All
                </Link>
              </div>
              
              <div className="space-y-4">
                {currentBookings.map((booking: any, index) => (
                  <div key={booking.id || index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{booking.user?.name || 'Unknown User'}</p>
                        <p className="text-sm text-gray-600">
                          {booking.slot?.location?.name} - {booking.slot?.slotNumber}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${(
                        (booking.totalAmount && typeof booking.totalAmount === 'object' && typeof booking.totalAmount.toNumber === 'function')
                          ? booking.totalAmount.toNumber()
                          : Number(booking.totalAmount) || 0
                      ).toFixed(2)}</p>
                      <div className="flex items-center gap-1">
                        <div className={`w-2 h-2 rounded-full ${
                          booking.status === 'ACTIVE' ? 'bg-green-500' :
                          booking.status === 'CONFIRMED' ? 'bg-blue-500' :
                          booking.status === 'PENDING' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}></div>
                        <span className="text-xs text-gray-600 capitalize">{booking.status?.toLowerCase() || 'unknown'}</span>
                      </div>
                    </div>
                  </div>
                ))}
                {currentBookings.length === 0 && (
                  <div className="text-center text-gray-600">No recent bookings.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <RoleGuard 
      requiredRoles={['ADMIN', 'SUPER_ADMIN']}
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
            <p className="text-gray-600 mb-6">You need admin privileges to access this page.</p>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      }
    >
      <AdminDashboardContent />
    </RoleGuard>
  );
}
