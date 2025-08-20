"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ReportData {
  totalRevenue: number;
  totalBookings: number;
  averageOccupancy: number;
  topLocations: Array<{
    name: string;
    revenue: number;
    bookings: number;
  }>;
  dailyStats: Array<{
    date: string;
    revenue: number;
    bookings: number;
    occupancy: number;
  }>;
  paymentMethods: Array<{
    method: string;
    count: number;
    amount: number;
  }>;
  monthlyTrends: Array<{
    month: string;
    revenue: number;
    bookings: number;
  }>;
}

export default function AdminReports() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [reportData, setReportData] = useState<ReportData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState('7d');
  const [exportLoading, setExportLoading] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchReportData();
  }, [session, status, router, selectedPeriod]);

  const fetchReportData = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/admin/reports?period=${selectedPeriod}`);
      if (response.ok) {
        const data = await response.json();
        setReportData(data);
      }
    } catch (error) {
      console.error('Failed to fetch report data:', error);
      // Mock data for demo
      setReportData({
        totalRevenue: 15750.25,
        totalBookings: 342,
        averageOccupancy: 72.5,
        topLocations: [
          { name: "Downtown Plaza", revenue: 5250.75, bookings: 98 },
          { name: "City Center Garage", revenue: 4680.50, bookings: 87 },
          { name: "Business District", revenue: 3420.00, bookings: 65 },
          { name: "Mall Parking", revenue: 2399.00, bookings: 92 },
        ],
        dailyStats: [
          { date: "2024-01-15", revenue: 2250.75, bookings: 48, occupancy: 68.5 },
          { date: "2024-01-16", revenue: 2180.50, bookings: 45, occupancy: 71.2 },
          { date: "2024-01-17", revenue: 2420.25, bookings: 52, occupancy: 75.8 },
          { date: "2024-01-18", revenue: 2350.00, bookings: 49, occupancy: 73.4 },
          { date: "2024-01-19", revenue: 2680.75, bookings: 58, occupancy: 82.1 },
          { date: "2024-01-20", revenue: 2890.00, bookings: 62, occupancy: 85.3 },
          { date: "2024-01-21", revenue: 1978.00, bookings: 42, occupancy: 65.7 },
        ],
        paymentMethods: [
          { method: "TELEBIRR", count: 145, amount: 6780.50 },
          { method: "CBE_BIRR", count: 98, amount: 4520.75 },
          { method: "CHAPA", count: 67, amount: 3210.00 },
          { method: "CASH", count: 32, amount: 1239.00 },
        ],
        monthlyTrends: [
          { month: "Nov 2024", revenue: 14250.00, bookings: 298 },
          { month: "Dec 2024", revenue: 18750.25, bookings: 387 },
          { month: "Jan 2025", revenue: 15750.25, bookings: 342 },
        ],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleExportReport = async (format: 'csv' | 'pdf') => {
    try {
      setExportLoading(true);
      const response = await fetch(`/api/admin/reports/export?format=${format}&period=${selectedPeriod}`, {
        method: 'POST',
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `parking-report-${selectedPeriod}.${format}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      }
    } catch (error) {
      console.error('Failed to export report:', error);
      // Mock download for demo
      const mockData = `Date,Revenue,Bookings,Occupancy\n${reportData?.dailyStats.map(d => 
        `${d.date},$${d.revenue},${d.bookings},${d.occupancy}%`
      ).join('\n')}`;
      
      const blob = new Blob([mockData], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `parking-report-${selectedPeriod}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } finally {
      setExportLoading(false);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading reports...</p>
        </div>
      </div>
    );
  }

  if (!reportData) {
    return <div>Error loading report data</div>;
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
              <h1 className="text-xl font-bold text-gray-900">Analytics & Reports</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 3 months</option>
                <option value="1y">Last year</option>
              </select>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleExportReport('csv')}
                  disabled={exportLoading}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors duration-200 disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export CSV
                </button>
                <button
                  onClick={() => handleExportReport('pdf')}
                  disabled={exportLoading}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors duration-200 disabled:opacity-50"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Export PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">${reportData.totalRevenue.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <div className="flex items-center gap-1 mt-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm text-green-600 font-medium">+12.5% from last period</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">{reportData.totalBookings.toLocaleString()}</p>
            <p className="text-sm text-gray-600">Total Bookings</p>
            <div className="flex items-center gap-1 mt-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm text-green-600 font-medium">+8.3% from last period</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900 mb-2">{reportData.averageOccupancy}%</p>
            <p className="text-sm text-gray-600">Average Occupancy</p>
            <div className="flex items-center gap-1 mt-2">
              <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-sm text-green-600 font-medium">+3.2% from last period</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Top Locations */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Locations</h3>
            <div className="space-y-4">
              {reportData.topLocations.map((location, index) => (
                <div key={location.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold ${
                      index === 0 ? 'bg-yellow-500' :
                      index === 1 ? 'bg-gray-400' :
                      index === 2 ? 'bg-amber-600' : 'bg-blue-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{location.name}</p>
                      <p className="text-sm text-gray-600">{location.bookings} bookings</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">${location.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">revenue</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Payment Methods</h3>
            <div className="space-y-4">
              {reportData.paymentMethods.map((method) => {
                const percentage = (method.count / reportData.totalBookings) * 100;
                return (
                  <div key={method.method} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{method.method}</span>
                      <span className="text-sm text-gray-600">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{method.count} transactions</span>
                      <span>${method.amount.toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Daily Performance Chart */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Daily Performance</h3>
          <div className="overflow-x-auto">
            <div className="flex items-end gap-4 h-64 p-4" style={{ minWidth: '600px' }}>
              {reportData.dailyStats.map((day) => {
                const maxRevenue = Math.max(...reportData.dailyStats.map(d => d.revenue));
                const height = (day.revenue / maxRevenue) * 200;
                
                return (
                  <div key={day.date} className="flex-1 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-2">
                      <div className="text-xs font-medium text-gray-900 mb-1">
                        ${(day.revenue / 1000).toFixed(1)}k
                      </div>
                      <div 
                        className="w-8 bg-gradient-to-t from-blue-600 to-indigo-500 rounded-t transition-all duration-300 hover:from-blue-700 hover:to-indigo-600"
                        style={{ height: `${height}px` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-600 text-center">
                      <div>{new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
                      <div className="text-gray-500">{day.bookings} bookings</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Monthly Trends */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Monthly Trends</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 rounded-lg">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Avg per Booking</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reportData.monthlyTrends.map((month, index) => {
                  const avgPerBooking = month.revenue / month.bookings;
                  const previousMonth = reportData.monthlyTrends[index - 1];
                  const growth = previousMonth ? ((month.revenue - previousMonth.revenue) / previousMonth.revenue) * 100 : 0;
                  
                  return (
                    <tr key={month.month} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{month.month}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${month.revenue.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{month.bookings.toLocaleString()}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${avgPerBooking.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <span className={`inline-flex items-center gap-1 ${
                          growth >= 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                              d={growth >= 0 ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} 
                            />
                          </svg>
                          {Math.abs(growth).toFixed(1)}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
