"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 border-t border-gray-200 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
        <div className="absolute -bottom-10 -left-20 w-32 h-32 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-20"></div>
                <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-2 rounded-xl shadow-lg">
                  <Image src="/logo.png" alt="We Park Logo" width={20} height={20} className="filter brightness-0 invert" />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">We Park</span>
                <p className="text-xs text-gray-500">Smart Parking</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Revolutionizing urban parking with smart technology and seamless user experience.
            </p>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </div>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.1.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z.017 0z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">Home</Link></li>
              <li><Link href="/login" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">Sign In</Link></li>
              <li><Link href="/register" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">Get Started</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200">How It Works</Link></li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                Real-time Parking
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                Instant Booking
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                Secure Payments
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                Smart Navigation
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">Support</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-4 h-4 bg-green-100 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <span>24/7 Support</span>
              </div>
              <div className="text-sm text-gray-600">
                <p>support@wepark.com</p>
                <p>1-800-WEPARK</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-xs font-medium text-blue-700">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                Online Now
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <span>© {mounted ? new Date().getFullYear() : '2024'} We Park. All rights reserved.</span>
            <Link href="#" className="hover:text-blue-600 transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors duration-200">Terms of Service</Link>
            <Link href="#" className="hover:text-blue-600 transition-colors duration-200">Cookie Policy</Link>
          </div>

          <div className="flex items-center gap-4 text-xs text-gray-500">
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
              <span>ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
