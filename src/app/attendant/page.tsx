"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { generateQRCodeDataURL } from "@/src/lib/qr-service";
import { RoleGuard } from "@/src/components/RoleGuard";

interface CheckInResult {
  booking: any;
  message: string;
  parkingDetails: {
    location: string;
    slotNumber: string;
    endTime: string;
  };
}

function AttendantPanelContent() {
  const [activeTab, setActiveTab] = useState('scan');
  const [qrInput, setQrInput] = useState('');
  const [checkInCode, setCheckInCode] = useState('');
  const [scanning, setScanning] = useState(false);
  const [checkInResult, setCheckInResult] = useState<CheckInResult | null>(null);
  const [error, setError] = useState('');
  const [recentCheckins, setRecentCheckins] = useState([]);

  useEffect(() => {
    fetchRecentCheckins();
  }, []);

  const fetchRecentCheckins = async () => {
    try {
      const response = await fetch('/api/attendant/recent-checkins');
      if (response.ok) {
        const data = await response.json();
        setRecentCheckins(data);
      }
    } catch (error) {
      console.error('Failed to fetch recent check-ins:', error);
    }
  };

  const handleQRScan = async () => {
    if (!qrInput.trim()) {
      setError('Please enter a QR code');
      return;
    }

    setScanning(true);
    setError('');
    setCheckInResult(null);

    try {
      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          qrCode: qrInput.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCheckInResult(data);
        setQrInput('');
        fetchRecentCheckins();
      } else {
        setError(data.error || 'Check-in failed');
      }
    } catch (error) {
      setError('Network error - please try again');
    } finally {
      setScanning(false);
    }
  };

  const handleManualCheckIn = async () => {
    if (!checkInCode.trim()) {
      setError('Please enter a check-in code');
      return;
    }

    setScanning(true);
    setError('');
    setCheckInResult(null);

    try {
      const response = await fetch('/api/checkin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          checkInCode: checkInCode.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setCheckInResult(data);
        setCheckInCode('');
        fetchRecentCheckins();
      } else {
        setError(data.error || 'Check-in failed');
      }
    } catch (error) {
      setError('Network error - please try again');
    } finally {
      setScanning(false);
    }
  };

  const generateDemoQR = () => {
    // Generate a demo QR code for testing
    const demoCode = `WP-${Date.now().toString().slice(-6)}-DEMO1234-ABC12345`;
    setQrInput(demoCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
      {/* Attendant Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Attendant Panel
              </h1>
              <p className="text-gray-600">Scan QR codes and manage parking check-ins</p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-3 py-1 text-sm font-medium text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                On Duty
              </div>
              <Link
                href="/dashboard"
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Tab Navigation */}
        <div className="flex bg-white rounded-2xl p-2 mb-8 shadow-lg">
          <button
            onClick={() => setActiveTab('scan')}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'scan'
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
              QR Scanner
            </div>
          </button>
          <button
            onClick={() => setActiveTab('manual')}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'manual'
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Manual Entry
            </div>
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
              activeTab === 'history'
                ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-md'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Recent Activity
            </div>
          </button>
        </div>

        {/* QR Scanner Tab */}
        {activeTab === 'scan' && (
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Scan QR Code</h2>
                <p className="text-gray-600">Scan the customer's booking QR code to check them in</p>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter QR code or scan with camera..."
                    value={qrInput}
                    onChange={(e) => setQrInput(e.target.value)}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-green-100 focus:border-green-300 transition-all duration-300 font-mono text-sm"
                  />
                  <button
                    onClick={generateDemoQR}
                    className="absolute right-2 top-2 px-3 py-2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-lg text-xs font-medium transition-colors duration-200"
                  >
                    Demo QR
                  </button>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {error}
                    </div>
                  </div>
                )}

                <button
                  onClick={handleQRScan}
                  disabled={scanning || !qrInput.trim()}
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                    scanning || !qrInput.trim()
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white transform hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                  }`}
                >
                  {scanning ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </div>
                  ) : (
                    'Scan QR Code'
                  )}
                </button>
              </div>
            </div>

            {/* Camera Scanner (Placeholder) */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Camera Scanner</h3>
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gray-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500">Camera access not available in demo</p>
                  <p className="text-sm text-gray-400">Use the input field above to enter QR codes</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Manual Entry Tab */}
        {activeTab === 'manual' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Manual Check-in</h2>
              <p className="text-gray-600">Enter the 6-digit check-in code for manual verification</p>
            </div>

            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Enter 6-digit check-in code..."
                  value={checkInCode}
                  onChange={(e) => setCheckInCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300 text-center text-2xl font-mono tracking-widest"
                  maxLength={6}
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {error}
                  </div>
                </div>
              )}

              <button
                onClick={handleManualCheckIn}
                disabled={scanning || checkInCode.length !== 6}
                className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                  scanning || checkInCode.length !== 6
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white transform hover:scale-[1.02] active:scale-[0.98] shadow-lg'
                }`}
              >
                {scanning ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  'Check In'
                )}
              </button>
            </div>
          </div>
        )}

        {/* Recent Activity Tab */}
        {activeTab === 'history' && (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Check-ins</h2>
            
            {recentCheckins.length === 0 ? (
              <div className="text-center py-8">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                <p className="text-gray-500">No recent check-ins</p>
              </div>
            ) : (
              <div className="space-y-4">
                {recentCheckins.map((checkin: any, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{checkin.slotNumber}</p>
                        <p className="text-sm text-gray-600">{checkin.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{checkin.time}</p>
                      <p className="text-xs text-green-600">Checked In</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Check-in Success Result */}
        {checkInResult && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md transform transition-all duration-300 scale-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Check-in Successful!</h3>
                <p className="text-gray-600">{checkInResult.message}</p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium">{checkInResult.parkingDetails.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Slot:</span>
                    <span className="font-medium">{checkInResult.parkingDetails.slotNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Valid Until:</span>
                    <span className="font-medium">
                      {new Date(checkInResult.parkingDetails.endTime).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCheckInResult(null)}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-3 rounded-xl font-medium transition-all duration-300"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AttendantPanel() {
  return (
    <RoleGuard 
      requiredRoles={['ATTENDANT', 'ADMIN', 'SUPER_ADMIN']}
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-indigo-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
            <p className="text-gray-600 mb-6">You need attendant privileges to access this page.</p>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      }
    >
      <AttendantPanelContent />
    </RoleGuard>
  );
}
