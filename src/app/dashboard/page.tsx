"use client";

import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // Still loading
    if (status === "unauthenticated") router.push("/login"); // Not logged in
  }, [session, status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
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
            </div>
            
            <div className="flex items-center gap-4">
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
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">12</p>
                <p className="text-sm text-gray-600">Total Bookings</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-medium">+23% this month</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-600">Total Hours</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-blue-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Currently parked</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">$89</p>
                <p className="text-sm text-gray-600">Total Saved</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm font-medium">vs street parking</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900">4.9</p>
                <p className="text-sm text-gray-600">Rating</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-orange-600">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 text-orange-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">Excellent</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Current Booking */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">Current Booking</h2>
                <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-sm font-medium text-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Active
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Downtown Parking Plaza</h3>
                    <p className="text-gray-600 text-sm">123 Main Street, Floor 2, Spot A-45</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-blue-600">$8.50</p>
                    <p className="text-sm text-gray-500">per hour</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Started</p>
                    <p className="font-medium text-gray-900">Today, 2:30 PM</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Duration</p>
                    <p className="font-medium text-gray-900">2h 15min</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition-colors duration-200">
                    Extend Time
                  </button>
                  <button className="flex-1 bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 py-3 rounded-xl font-medium transition-colors duration-200">
                    End Session
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Bookings</h2>
              
              <div className="space-y-4">
                {[
                  { location: "Central Mall Parking", date: "Dec 15, 2024", duration: "3h 20min", amount: "$25.50", status: "completed" },
                  { location: "City Center Garage", date: "Dec 12, 2024", duration: "1h 45min", amount: "$12.75", status: "completed" },
                  { location: "Office Complex B", date: "Dec 10, 2024", duration: "8h 00min", amount: "$45.00", status: "completed" },
                ].map((booking, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-gray-400 to-gray-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-2 4h2"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{booking.location}</p>
                        <p className="text-sm text-gray-500">{booking.date} • {booking.duration}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">{booking.amount}</p>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-xs text-green-600 capitalize">{booking.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                View All Bookings
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <Link
                  href="/find-parking"
                  className="w-full flex items-center gap-3 p-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Find Parking
                </Link>
                
                <button className="w-full flex items-center gap-3 p-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  View History
                </button>
                
                <button className="w-full flex items-center gap-3 p-4 bg-white hover:bg-gray-50 border border-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  Payment Methods
                </button>
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
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    Premium
                  </span>
                </div>
              </div>
              
              <button className="w-full mt-4 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                Edit Profile
              </button>
            </div>

            {/* Notifications */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Notifications</h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Parking expires in 30 minutes</p>
                    <p className="text-xs text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Payment successful</p>
                    <p className="text-xs text-gray-500">1 hour ago</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full mt-4 py-3 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                View All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
