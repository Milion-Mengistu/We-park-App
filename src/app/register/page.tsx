// src/app/register/page.tsx
"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-emerald-500 rounded-full opacity-40 animate-bounce"></div>
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-teal-500 rounded-full opacity-50 animate-bounce animation-delay-2000"></div>
        <div className="absolute top-3/4 right-1/3 w-5 h-5 bg-cyan-500 rounded-full opacity-30 animate-bounce animation-delay-4000"></div>
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md text-center border border-white/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
        {/* Logo with special glow effect */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl shadow-lg">
              <Image src="/logo.png" alt="We Park" width={32} height={32} className="filter brightness-0 invert" />
            </div>
          </div>
        </div>

        {/* Welcome badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 text-sm font-medium text-emerald-700 mb-6">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          Join the community
        </div>

        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Start Your Journey
        </h1>
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          Create your account and never worry about parking again
        </p>

        {/* Benefits list */}
        <div className="space-y-3 mb-8 text-left">
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            </div>
            <span>Find parking spots in seconds</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
            </div>
            <span>Reserve and pay seamlessly</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-700">
            <div className="w-5 h-5 bg-cyan-100 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            </div>
            <span>Save time and reduce stress</span>
          </div>
        </div>

        {/* Enhanced Google OAuth Button */}
        <button
          onClick={() => signIn("google", { callbackUrl: "/" })}
          className="group relative w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-gray-700 font-semibold transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-100 mb-6"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="relative">
              <Image
                src="/icons8-google-50.svg"
                alt="Google"
                width={24}
                height={24}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <span className="text-lg">Create account with Google</span>
          </div>

          {/* Hover effect overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </button>

        {/* Login link */}
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200 hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>

        {/* Decorative divider */}
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent flex-1"></div>
          <span className="px-3 bg-white rounded-full">Secure Registration</span>
          <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent flex-1"></div>
        </div>

        {/* Privacy notice */}
        <p className="mt-6 text-xs text-gray-400 leading-relaxed">
          By creating an account, you agree to our{" "}
          <span className="text-emerald-600 hover:underline cursor-pointer">Terms of Service</span>
          {" "}and{" "}
          <span className="text-emerald-600 hover:underline cursor-pointer">Privacy Policy</span>
        </p>

        {/* Success indicators */}
        <div className="mt-6 flex justify-center gap-4 text-xs text-gray-500">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Data Protected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
