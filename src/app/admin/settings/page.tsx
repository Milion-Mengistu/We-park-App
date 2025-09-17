"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface SystemSettings {
  id: string;
  key: string;
  value: string;
  description: string;
  isActive: boolean;
}

interface SettingsCategory {
  name: string;
  description: string;
  settings: SystemSettings[];
}

export default function AdminSettings() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [categories, setCategories] = useState<SettingsCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchSettings();
  }, [session, status, router]);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/settings');
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        // Mock data for demo
        setCategories([
          {
            name: "General",
            description: "Basic system configuration",
            settings: [
              {
                id: "1",
                key: "SYSTEM_NAME",
                value: "We Park - Smart Parking System",
                description: "The name of the parking system",
                isActive: true,
              },
              {
                id: "2",
                key: "SYSTEM_EMAIL",
                value: "admin@wepark.com",
                description: "System administrator email",
                isActive: true,
              },
              {
                id: "3",
                key: "SUPPORT_PHONE",
                value: "+251-911-123456",
                description: "Customer support phone number",
                isActive: true,
              },
              {
                id: "4",
                key: "MAINTENANCE_MODE",
                value: "false",
                description: "Enable maintenance mode to disable public access",
                isActive: true,
              },
            ],
          },
          {
            name: "Booking",
            description: "Booking and reservation settings",
            settings: [
              {
                id: "5",
                key: "MAX_BOOKING_HOURS",
                value: "24",
                description: "Maximum hours a user can book in advance",
                isActive: true,
              },
              {
                id: "6",
                key: "BOOKING_GRACE_PERIOD",
                value: "15",
                description: "Grace period in minutes for late arrivals",
                isActive: true,
              },
              {
                id: "7",
                key: "AUTO_CANCEL_HOURS",
                value: "2",
                description: "Hours after which unpaid bookings are automatically cancelled",
                isActive: true,
              },
              {
                id: "8",
                key: "EXTEND_BOOKING_LIMIT",
                value: "3",
                description: "Maximum number of times a booking can be extended",
                isActive: true,
              },
            ],
          },
          {
            name: "Payment",
            description: "Payment and pricing configuration",
            settings: [
              {
                id: "9",
                key: "CURRENCY",
                value: "ETB",
                description: "System currency (Ethiopian Birr)",
                isActive: true,
              },
              {
                id: "10",
                key: "PAYMENT_TIMEOUT",
                value: "30",
                description: "Payment timeout in minutes",
                isActive: true,
              },
              {
                id: "11",
                key: "REFUND_POLICY",
                value: "FREE_UNTIL_1HR",
                description: "Cancellation and refund policy",
                isActive: true,
              },
              {
                id: "12",
                key: "DYNAMIC_PRICING",
                value: "true",
                description: "Enable dynamic pricing based on demand",
                isActive: true,
              },
            ],
          },
          {
            name: "Notifications",
            description: "Notification and communication settings",
            settings: [
              {
                id: "13",
                key: "EMAIL_NOTIFICATIONS",
                value: "true",
                description: "Send email notifications to users",
                isActive: true,
              },
              {
                id: "14",
                key: "SMS_NOTIFICATIONS",
                value: "true",
                description: "Send SMS notifications for urgent alerts",
                isActive: true,
              },
              {
                id: "15",
                key: "PUSH_NOTIFICATIONS",
                value: "true",
                description: "Send push notifications to mobile apps",
                isActive: true,
              },
              {
                id: "16",
                key: "REMINDER_BEFORE_EXPIRY",
                value: "30",
                description: "Minutes before expiry to send reminder",
                isActive: true,
              },
            ],
          },
          {
            name: "Security",
            description: "Security and access control settings",
            settings: [
              {
                id: "17",
                key: "SESSION_TIMEOUT",
                value: "480",
                description: "User session timeout in minutes",
                isActive: true,
              },
              {
                id: "18",
                key: "MAX_LOGIN_ATTEMPTS",
                value: "5",
                description: "Maximum failed login attempts before lockout",
                isActive: true,
              },
              {
                id: "19",
                key: "QR_CODE_EXPIRY",
                value: "24",
                description: "QR code validity in hours",
                isActive: true,
              },
              {
                id: "20",
                key: "API_RATE_LIMIT",
                value: "100",
                description: "API requests per minute per user",
                isActive: true,
              },
            ],
          },
        ]);
      }
    } catch (error) {
      console.error('Failed to fetch settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSetting = async (settingId: string, newValue: string) => {
    try {
      setSaving(true);
      const response = await fetch(`/api/admin/settings/${settingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          value: newValue,
        }),
      });

      if (response.ok) {
        setCategories(prev =>
          prev.map(category => ({
            ...category,
            settings: category.settings.map(setting =>
              setting.id === settingId ? { ...setting, value: newValue } : setting
            ),
          }))
        );
      }
    } catch (error) {
      console.error('Failed to update setting:', error);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleSetting = async (settingId: string, currentActive: boolean) => {
    try {
      const response = await fetch(`/api/admin/settings/${settingId}/toggle`, {
        method: 'POST',
      });

      if (response.ok) {
        setCategories(prev =>
          prev.map(category => ({
            ...category,
            settings: category.settings.map(setting =>
              setting.id === settingId ? { ...setting, isActive: !currentActive } : setting
            ),
          }))
        );
      }
    } catch (error) {
      console.error('Failed to toggle setting:', error);
    }
  };

  const getTabKey = (categoryName: string) => {
    return categoryName.toLowerCase().replace(/\s+/g, '-');
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href="/admin"
                className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Admin Dashboard
              </Link>
              <div className="text-gray-400">/</div>
              <h1 className="text-xl font-bold text-gray-900">System Settings</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex overflow-x-auto bg-white rounded-2xl p-2 mb-8 shadow-lg">
          {categories.map((category) => {
            const tabKey = getTabKey(category.name);
            return (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === tabKey
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </div>

        {/* Settings Content */}
        {categories.map((category) => {
          const tabKey = getTabKey(category.name);
          if (activeTab !== tabKey) return null;

          return (
            <div key={tabKey} className="space-y-6">
              {/* Category Header */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name} Settings</h2>
                <p className="text-gray-600">{category.description}</p>
              </div>

              {/* Settings List */}
              <div className="space-y-4">
                {category.settings.map((setting) => (
                  <SettingItem
                    key={setting.id}
                    setting={setting}
                    onUpdate={handleUpdateSetting}
                    onToggle={handleToggleSetting}
                    saving={saving}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Setting Item Component
function SettingItem({ 
  setting, 
  onUpdate, 
  onToggle, 
  saving 
}: { 
  setting: SystemSettings; 
  onUpdate: (id: string, value: string) => void; 
  onToggle: (id: string, currentActive: boolean) => void; 
  saving: boolean; 
}) {
  const [localValue, setLocalValue] = useState(setting.value);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    setHasChanges(localValue !== setting.value);
  }, [localValue, setting.value]);

  const handleSave = () => {
    onUpdate(setting.id, localValue);
  };

  const handleReset = () => {
    setLocalValue(setting.value);
  };

  const renderInput = () => {
    if (setting.key.includes('MODE') || setting.key.includes('NOTIFICATIONS') || setting.key.includes('PRICING')) {
      return (
        <select
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          disabled={!setting.isActive}
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 disabled:opacity-50"
        >
          <option value="true">Enabled</option>
          <option value="false">Disabled</option>
        </select>
      );
    }

    if (setting.key.includes('POLICY')) {
      return (
        <select
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          disabled={!setting.isActive}
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 disabled:opacity-50"
        >
          <option value="FREE_UNTIL_1HR">Free cancellation until 1 hour</option>
          <option value="FREE_UNTIL_30MIN">Free cancellation until 30 minutes</option>
          <option value="NO_REFUND">No refund policy</option>
          <option value="PARTIAL_REFUND">Partial refund (50%)</option>
        </select>
      );
    }

    if (setting.key.includes('EMAIL') || setting.key.includes('PHONE')) {
      return (
        <input
          type={setting.key.includes('EMAIL') ? 'email' : 'tel'}
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          disabled={!setting.isActive}
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 disabled:opacity-50"
        />
      );
    }

    if (setting.key.includes('HOURS') || setting.key.includes('MINUTES') || setting.key.includes('LIMIT') || setting.key.includes('TIMEOUT') || setting.key.includes('ATTEMPTS')) {
      return (
        <input
          type="number"
          value={localValue}
          onChange={(e) => setLocalValue(e.target.value)}
          disabled={!setting.isActive}
          min="0"
          className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 disabled:opacity-50"
        />
      );
    }

    return (
      <input
        type="text"
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        disabled={!setting.isActive}
        className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 disabled:opacity-50"
      />
    );
  };

  return (
    <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg transition-all duration-300 ${
      !setting.isActive ? 'opacity-60' : ''
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="font-semibold text-gray-900">{setting.key.replace(/_/g, ' ')}</h3>
            <button
              onClick={() => onToggle(setting.id, setting.isActive)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                setting.isActive ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  setting.isActive ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
          <p className="text-sm text-gray-600">{setting.description}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {renderInput()}
        
        {hasChanges && (
          <div className="flex gap-2">
            <button
              onClick={handleReset}
              disabled={saving}
              className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200 disabled:opacity-50"
            >
              Reset
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300 disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
