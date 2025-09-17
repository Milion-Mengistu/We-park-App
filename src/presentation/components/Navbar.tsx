"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import NotificationBell from "@/src/components/NotificationBell";
import { useRoles } from "@/src/hooks/useRoles";
import { RoleDisplay } from "@/src/components/RoleGuard";

export default function Navbar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const { hasRole, isAdmin, isAttendant, isLoading } = useRoles();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Enhanced Logo */}
        <Link href="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <Image src="/logo.png" alt="We Park Logo" width={24} height={24} className="filter brightness-0 invert" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">We Park</span>
            <span className="text-xs text-gray-500 font-medium">Smart Parking</span>
          </div>
        </Link>

        {/* Enhanced Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              mounted && pathname === '/'
                ? 'text-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Home
            {mounted && pathname === '/' && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
            )}
          </Link>

          {session && (
            <>
              <Link
                href="/find-parking"
                className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  mounted && pathname === '/find-parking'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                Find Parking
                {mounted && pathname === '/find-parking' && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full"></div>
                )}
              </Link>

              {!isLoading && isAttendant && (
                <Link
                  href="/attendant"
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    mounted && pathname.startsWith('/attendant')
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  }`}
                >
                  Attendant
                  {mounted && pathname.startsWith('/attendant') && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-600 rounded-full"></div>
                  )}
                </Link>
              )}

              {!isLoading && isAdmin && (
                <Link
                  href="/admin"
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    mounted && pathname.startsWith('/admin')
                      ? 'text-red-600 bg-red-50'
                      : 'text-gray-600 hover:text-red-600 hover:bg-red-50'
                  }`}
                >
                  Admin
                  {mounted && pathname.startsWith('/admin') && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-600 rounded-full"></div>
                  )}
                </Link>
              )}
            </>
          )}

          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="font-medium">Available Now</span>
          </div>
        </nav>

        {/* Enhanced Action Buttons */}
        <div className="flex items-center gap-3">
          {!mounted || status === "loading" ? (
            <>
              {/* Loading state during hydration */}
              <div className="hidden sm:flex items-center px-4 py-2 rounded-xl font-medium border-2 border-gray-200 text-gray-400 animate-pulse">
                Loading...
              </div>
              <div className="flex items-center px-4 py-2 rounded-xl font-medium bg-gray-200 text-gray-400 animate-pulse">
                <span>•••</span>
              </div>
            </>
          ) : session ? (
            <>
              {/* Authenticated User */}
              <Link
                href="/dashboard"
                className={`hidden sm:flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  mounted && pathname === '/dashboard'
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-200'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
                } focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-[0.98]`}
              >
                Dashboard
              </Link>

              <div className="flex items-center gap-3">
                <NotificationBell />

                <Link href="/dashboard" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200">
                  <Image
                    src={session.user?.image || "/logo.png"}
                    alt={session.user?.name || "User"}
                    width={32}
                    height={32}
                    className="rounded-full border-2 border-blue-200"
                  />
                  <div className="hidden md:block">
                    <div className="font-medium text-gray-700">{session.user?.name}</div>
                    <div className="text-xs">
                      <RoleDisplay />
                    </div>
                  </div>
                </Link>

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="flex items-center px-3 py-2 text-red-600 hover:bg-red-50 rounded-xl font-medium transition-colors duration-200"
                  title="Sign Out"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Unauthenticated User */}
              <Link
                href="/login"
                className={`hidden sm:flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  mounted && pathname === '/login'
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-200'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700'
                } focus:outline-none focus:ring-4 focus:ring-blue-100 active:scale-[0.98]`}
              >
                Sign In
              </Link>

              <Link
                href="/register"
                className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-200 ${
                  mounted && pathname === '/register'
                    ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                }`}
              >
                <span>Get Started</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </>
          )}

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
