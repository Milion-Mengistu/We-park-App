'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      setLoading(true);
      setError('');
      if (password !== confirm) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error || 'Failed to register');
        setLoading(false);
        return;
      }
      await signIn('credentials', {
        email,
        password,
        callbackUrl: '/dashboard',
      });
    } catch (e) {
      setError('Registration failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      setError('');
      await signIn('google', { callbackUrl: '/dashboard' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-10 w-full max-w-md text-center border border-white/20 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
            <div className="relative bg-gradient-to-r from-emerald-600 to-teal-600 p-4 rounded-2xl shadow-lg">
              <Image
                src="/logo.png"
                alt="We Park"
                width={32}
                height={32}
                className="filter brightness-0 invert"
              />
            </div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 text-sm font-medium text-emerald-700 mb-6">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          Join the community
        </div>

        <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Start Your Journey
        </h1>
        <p className="text-gray-600 mb-6 text-lg leading-relaxed">
          Create your account and never worry about parking again
        </p>

        <button
          onClick={handleGoogleSignUp}
          disabled={loading}
          className={`group relative w-full bg-white border-2 border-gray-200 rounded-2xl px-6 py-4 text-gray-700 font-semibold transition-all duration-300 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-100 active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-emerald-100 mb-6 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
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
        </button>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-left">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {error}
            </div>
          </div>
        )}

        <div className="space-y-4 text-left">
          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-emerald-100"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500 font-medium">
                or
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-300 transition-all duration-300"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-300 transition-all duration-300"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-300 transition-all duration-300"
              placeholder="At least 8 characters"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-emerald-100 focus:border-emerald-300 transition-all duration-300"
              placeholder="Re-enter password"
            />
          </div>
          <button
            onClick={handleRegister}
            disabled={loading || !email || !password || !confirm}
            className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
              loading || !email || !password || !confirm
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl active:scale-[0.98]'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Creating account...
              </div>
            ) : (
              'Create Account'
            )}
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link
              href="/login"
              className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-200 hover:underline"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
