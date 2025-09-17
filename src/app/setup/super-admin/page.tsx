"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SuperAdminSetup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [checkingStatus, setCheckingStatus] = useState(true);
  const [hasSuperAdmin, setHasSuperAdmin] = useState(false);
  const router = useRouter();

  // Check if super admin already exists
  useEffect(() => {
    checkSuperAdminStatus();
  }, []);

  const checkSuperAdminStatus = async () => {
    try {
      const response = await fetch('/api/setup-super-admin');
      const data = await response.json();
      setHasSuperAdmin(data.hasSuperAdmin);
    } catch (error) {
      console.error('Error checking super admin status:', error);
    } finally {
      setCheckingStatus(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/setup-super-admin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          type: 'success', 
          text: `✅ Super Admin created successfully! You can now login with ${formData.email}` 
        });
        
        // Reset form
        setFormData({ email: '', password: '', name: '' });
        
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setMessage({ type: 'error', text: data.error || 'Failed to create Super Admin' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (checkingStatus) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Checking system status...</p>
        </div>
      </div>
    );
  }

  if (hasSuperAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">System Already Configured</h1>
          <p className="text-gray-600 mb-6">
            A Super Admin already exists in the system. You can login and manage roles through the admin panel.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => router.push('/login')}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300"
            >
              Go to Login
            </button>
            <button
              onClick={() => router.push('/admin/users')}
              className="w-full px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
            >
              Admin Panel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            Setup Super Admin
          </h1>
          <p className="text-gray-600">
            Create the first Super Admin account to manage the We Park system
          </p>
        </div>

        {message && (
          <div className={`p-4 rounded-xl mb-6 ${
            message.type === 'success' 
              ? 'bg-green-50 border border-green-200 text-green-800' 
              : 'bg-red-50 border border-red-200 text-red-800'
          }`}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-300 transition-all duration-300"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-300 transition-all duration-300"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              minLength={8}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-purple-100 focus:border-purple-300 transition-all duration-300"
              placeholder="Enter a secure password (min 8 characters)"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              loading
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-[1.02]'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                Creating Super Admin...
              </div>
            ) : (
              'Create Super Admin Account'
            )}
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-xl">
          <h3 className="font-medium text-blue-900 mb-2">What happens next?</h3>
          <ul className="text-sm text-blue-800 space-y-1">
            <li>• Your Super Admin account will be created</li>
            <li>• You'll be redirected to the login page</li>
            <li>• Access the admin panel at /admin</li>
            <li>• Manage other user roles at /admin/users</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
