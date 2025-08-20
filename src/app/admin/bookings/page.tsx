"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Booking {
  id: string;
  user: {
    name: string;
    email: string;
  };
  slot: {
    slotNumber: string;
    location: {
      name: string;
      address: string;
    };
  };
  status: string;
  totalAmount: number;
  startTime: string;
  endTime: string;
  actualStartTime?: string;
  actualEndTime?: string;
  qrCode?: string;
  checkInCode?: string;
  payment?: {
    status: string;
    method: string;
    amount: number;
    paidAt?: string;
  };
  createdAt: string;
}

export default function AdminBookings() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchBookings();
  }, [session, status, router, selectedStatus, currentPage]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      let url = `/api/admin/bookings?page=${currentPage}&limit=20`;
      if (selectedStatus !== 'all') {
        url += `&status=${selectedStatus}`;
      }

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setBookings(data.bookings);
        setTotalPages(data.pagination.pages);
      }
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'update_status',
          status: newStatus,
        }),
      });

      if (response.ok) {
        fetchBookings(); // Refresh the list
      }
    } catch (error) {
      console.error('Failed to update booking status:', error);
    }
  };

  const handleCancelBooking = async (bookingId: string) => {
    if (!confirm('Are you sure you want to cancel this booking?')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/bookings/${bookingId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'cancel',
        }),
      });

      if (response.ok) {
        fetchBookings(); // Refresh the list
      }
    } catch (error) {
      console.error('Failed to cancel booking:', error);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'CONFIRMED':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'COMPLETED':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'CANCELLED':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'EXPIRED':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return 'bg-green-100 text-green-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
      case 'FAILED':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = bookings.filter(booking =>
    booking.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.slot.location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    booking.slot.slotNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading bookings...</p>
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
              <h1 className="text-xl font-bold text-gray-900">All Bookings</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600">
                Total: {bookings.length} bookings
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by user, email, location, or slot..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="flex gap-4">
              <select
                value={selectedStatus}
                onChange={(e) => {
                  setSelectedStatus(e.target.value);
                  setCurrentPage(1);
                }}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
              >
                <option value="all">All Status</option>
                <option value="PENDING">Pending</option>
                <option value="CONFIRMED">Confirmed</option>
                <option value="ACTIVE">Active</option>
                <option value="COMPLETED">Completed</option>
                <option value="CANCELLED">Cancelled</option>
                <option value="EXPIRED">Expired</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location & Slot</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{booking.user.name}</div>
                        <div className="text-sm text-gray-500">{booking.user.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{booking.slot.location.name}</div>
                        <div className="text-sm text-gray-500">Slot {booking.slot.slotNumber}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm text-gray-900">
                          {new Date(booking.startTime).toLocaleDateString()}
                        </div>
                        <div className="text-sm text-gray-500">
                          {new Date(booking.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - 
                          {new Date(booking.endTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {booking.payment ? (
                        <div>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(booking.payment.status)}`}>
                            {booking.payment.status}
                          </span>
                          <div className="text-xs text-gray-500 mt-1">{booking.payment.method}</div>
                        </div>
                      ) : (
                        <span className="text-gray-400">No payment</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${booking.totalAmount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedBooking(booking);
                            setShowDetailsModal(true);
                          }}
                          className="text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View
                        </button>
                        {['PENDING', 'CONFIRMED'].includes(booking.status) && (
                          <button
                            onClick={() => handleCancelBooking(booking.id)}
                            className="text-red-600 hover:text-red-700 font-medium"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-700">
                  Page {currentPage} of {totalPages}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Booking Details Modal */}
      {showDetailsModal && selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => {
            setShowDetailsModal(false);
            setSelectedBooking(null);
          }}
          onStatusUpdate={(newStatus) => {
            handleStatusChange(selectedBooking.id, newStatus);
            setShowDetailsModal(false);
            setSelectedBooking(null);
          }}
        />
      )}
    </div>
  );
}

// Booking Details Modal Component
function BookingDetailsModal({ 
  booking, 
  onClose, 
  onStatusUpdate 
}: { 
  booking: Booking; 
  onClose: () => void; 
  onStatusUpdate: (status: string) => void; 
}) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Booking Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="space-y-6">
          {/* User Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Customer Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Name</label>
                <p className="font-medium">{booking.user.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Email</label>
                <p className="font-medium">{booking.user.email}</p>
              </div>
            </div>
          </div>

          {/* Parking Info */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Parking Information</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Location</label>
                <p className="font-medium">{booking.slot.location.name}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Slot Number</label>
                <p className="font-medium">{booking.slot.slotNumber}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">Start Time</label>
                <p className="font-medium">{new Date(booking.startTime).toLocaleString()}</p>
              </div>
              <div>
                <label className="text-sm text-gray-600">End Time</label>
                <p className="font-medium">{new Date(booking.endTime).toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* QR Code Info */}
          {booking.qrCode && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Check-in Information</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-600">QR Code</label>
                  <p className="font-mono text-sm">{booking.qrCode}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Check-in Code</label>
                  <p className="font-mono text-lg font-bold">{booking.checkInCode}</p>
                </div>
              </div>
            </div>
          )}

          {/* Payment Info */}
          {booking.payment && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-medium text-gray-900 mb-2">Payment Information</h4>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="text-sm text-gray-600">Amount</label>
                  <p className="font-medium">${booking.payment.amount.toFixed(2)}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Method</label>
                  <p className="font-medium">{booking.payment.method}</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Status</label>
                  <p className="font-medium">{booking.payment.status}</p>
                </div>
              </div>
            </div>
          )}

          {/* Status Update */}
          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-2">Current Status</h4>
            <div className="flex items-center justify-between">
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(booking.status)}`}>
                {booking.status}
              </span>
              
              {['PENDING', 'CONFIRMED'].includes(booking.status) && (
                <div className="flex gap-2">
                  {booking.status === 'PENDING' && (
                    <button
                      onClick={() => onStatusUpdate('CONFIRMED')}
                      className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium"
                    >
                      Confirm
                    </button>
                  )}
                  <button
                    onClick={() => onStatusUpdate('CANCELLED')}
                    className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium"
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function getStatusColor(status: string) {
  switch (status) {
    case 'ACTIVE':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'CONFIRMED':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'PENDING':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'COMPLETED':
      return 'bg-gray-100 text-gray-800 border-gray-200';
    case 'CANCELLED':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'EXPIRED':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
}
