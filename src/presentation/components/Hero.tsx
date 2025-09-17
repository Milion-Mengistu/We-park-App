// src/components/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Hero() {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-500 rounded-full opacity-30 animate-bounce animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-indigo-500 rounded-full opacity-50 animate-bounce animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center min-h-screen">

        {/* Left side - Text Content */}
        <div className="space-y-8 text-center lg:text-left">
          {/* Animated badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-blue-200 rounded-full px-4 py-2 text-sm font-medium text-blue-700 shadow-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Smart Parking Solution
          </div>

          {/* Main Title with gradient */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Smart Parking
            </span>
            <br />
            <span className="text-gray-900">Made Simple</span>
          </h1>

          {/* Subtitle with better typography */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
            Discover, reserve, and pay for parking spots instantly with our
            <span className="font-semibold text-indigo-600"> AI-powered platform</span>.
            No more circling the block.
          </p>

          {/* Enhanced feature highlights */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Real-time availability
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Instant booking
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Secure payments
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {mounted && session ? (
              <>
                <Link
                  href="/dashboard"
                  className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <span className="relative z-10">Go to Dashboard</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/find-parking"
                  className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:border-green-300 transform hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-green-100"
                >
                  <span className="relative z-10">Find Parking Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </>
            ) : mounted && status !== "loading" ? (
              <>
                <Link
                  href="/register"
                  className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <span className="relative z-10">Get Started Free</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/login"
                  className="group relative bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl hover:border-blue-300 transform hover:scale-[1.02] transition-all duration-300 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-100"
                >
                  <span className="relative z-10">Sign In</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </>
            ) : (
              <>
                {/* Loading state during hydration */}
                <div className="bg-gray-200 animate-pulse px-8 py-4 rounded-2xl">
                  <span className="text-gray-400">Loading...</span>
                </div>
                <div className="bg-gray-100 animate-pulse px-8 py-4 rounded-2xl">
                  <span className="text-gray-400">Loading...</span>
                </div>
              </>
            )}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-4 justify-center lg:justify-start text-sm text-gray-500">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
            </div>
            <span>Join 10,000+ happy parkers</span>
          </div>
        </div>

        {/* Right side - Enhanced Visual */}
        <div className="relative flex justify-center lg:justify-end">
          {/* Glow effect behind illustration */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 transform scale-75"></div>

          {/* Main illustration container */}
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-spin-slow opacity-30"></div>
            <div className="absolute inset-4 border-2 border-indigo-200 rounded-full animate-spin-reverse opacity-40"></div>

            {/* Placeholder for illustration - you can replace with actual parking illustration */}
            <div className="relative w-96 h-96 bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-full shadow-2xl flex items-center justify-center border border-white/50 backdrop-blur-sm">
              {/* Parking icon illustration */}
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 3h12v2H6V3zm1 3h10c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2zm3 2v8h2v-3h2c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-4zm2 2h2v2h-2V8z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Smart Parking</h3>
                <p className="text-gray-600 text-sm">AI-Powered Solutions</p>
              </div>
            </div>

            {/* Floating elements around illustration */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl shadow-lg flex items-center justify-center text-white font-bold animate-bounce">
              🚗
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-xl shadow-lg flex items-center justify-center text-white text-sm animate-pulse">
              ⚡
            </div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full shadow-lg animate-bounce animation-delay-2000"></div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
