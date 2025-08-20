"use client";

import { useState, useEffect } from "react";
import { signIn, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError("");
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (error) {
      setError("Failed to sign in with Google");
    } finally {
      setLoading(false);
    }
  };

  const handleDemoSignIn = async () => {
    try {
      setLoading(true);
      setError("");
      
      const result = await signIn("demo-credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid demo credentials");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      setError("Failed to sign in");
    } finally {
      setLoading(false);
    }
  };

  const fillDemoCredentials = (role: string) => {
    const credentials = {
      admin: { email: "admin@wepark.com", password: "admin123" },
      attendant: { email: "attendant@wepark.com", password: "attendant123" },
      user: { email: "user@wepark.com", password: "user123" }
    };
    
    const cred = credentials[role as keyof typeof credentials];
    setEmail(cred.email);
    setPassword(cred.password);
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-20"></div>
              <div className="relative bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-xl shadow-lg">
                <Image src="/logo.png" alt="We Park Logo" width={28} height={28} className="filter brightness-0 invert" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">We Park</span>
              <span className="text-sm text-gray-500 font-medium">Smart Parking</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h1>
          <p className="text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Login Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl">
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            </div>
          )}

          {/* Demo Credentials */}
          <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
            <h3 className="font-medium text-blue-900 mb-3">Demo Accounts</h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => fillDemoCredentials('admin')}
                className="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-xs font-medium transition-colors"
              >
                Admin
              </button>
              <button
                onClick={() => fillDemoCredentials('attendant')}
                className="px-3 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg text-xs font-medium transition-colors"
              >
                Attendant
              </button>
              <button
                onClick={() => fillDemoCredentials('user')}
                className="px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-lg text-xs font-medium transition-colors"
              >
                User
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {/* Demo Email/Password Login */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
                  placeholder="Enter demo email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
                  placeholder="Enter demo password"
                />
              </div>
              <button
                onClick={handleDemoSignIn}
                disabled={loading || !email || !password}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 ${
                  loading || !email || !password
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl active:scale-[0.98]'
                }`}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </div>
                ) : (
                  'Sign In with Demo Account'
                )}
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500 font-medium">or</span>
              </div>
            </div>

            {/* Google Sign In */}
            <button
              onClick={handleGoogleSignIn}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-xl font-medium transition-all duration-300 hover:border-gray-300 hover:shadow-md ${
                loading ? 'opacity-50 cursor-not-allowed' : 'active:scale-[0.98]'
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <Image src="/icons8-google-50.svg" alt="Google" width={20} height={20} />
              )}
              <span className="text-gray-700">
                {loading ? 'Signing in...' : 'Continue with Google'}
              </span>
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
