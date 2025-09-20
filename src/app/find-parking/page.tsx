"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

// Dynamically import ParkingMap to avoid SSR issues with Leaflet
const ParkingMap = dynamic(() => import("@/src/components/ParkingMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
});
import { ActionButton } from "@/src/components/ui";

// Define types for parking location data
interface ParkingLocation {
  id: string;
  name: string;
  address: string;
  description?: string;
  features: string[];
  latitude?: number;
  longitude?: number;
  availability: {
    total: number;
    available: number;
    occupied: number;
  };
  pricing: {
    min: number;
    max: number;
    average: number;
  };
  distance?: number;
  isActive: boolean;
  rating?: number;
  // Include slots so we can pick one to book
  slots?: Array<{
    id: string;
    slotNumber: string;
    type: string;
    basePrice: number | string;
    status: 'AVAILABLE' | 'OCCUPIED' | 'RESERVED' | string;
    features?: string[];
  }>;
}

export default function FindParkingPage() {
  const router = useRouter();
  const [selectedSpot, setSelectedSpot] = useState<ParkingLocation | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [parkingSpots, setParkingSpots] = useState<ParkingLocation[]>([]);
  const [filteredSpots, setFilteredSpots] = useState<ParkingLocation[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [durationHours, setDurationHours] = useState<number>(1);
  const [startTime, setStartTime] = useState<string>("");
  // Newly added state for displaying booking confirmation with QR / code
  const [confirmedBooking, setConfirmedBooking] = useState<any | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchParkingLocations();
  }, []);

  const fetchParkingLocations = async () => {
    try {
      setDataLoading(true);
      
      // Get user's location for distance calculation
      let userCoords = null;
      if (navigator.geolocation) {
        try {
          const position = await new Promise<GeolocationPosition>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
              enableHighAccuracy: true,
              timeout: 5000,
              maximumAge: 300000,
            });
          });
          userCoords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        } catch (error) {
          console.warn('Could not get user location:', error);
        }
      }

      // Build API URL with optional coordinates
      let apiUrl = '/api/parking-locations';
      if (userCoords) {
        apiUrl += `?lat=${userCoords.lat}&lng=${userCoords.lng}&radius=20`;
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch parking locations');
      }

  const locations: ParkingLocation[] = await response.json();
      
      // Add mock rating data (since it's not in the database yet)
      const locationsWithRating = locations.map(location => ({
        ...location,
        rating: Math.round((Math.random() * 2 + 3.5) * 10) / 10, // Random rating between 3.5-5.5
      }));
      
      setParkingSpots(locationsWithRating);
      setFilteredSpots(locationsWithRating);
    } catch (error) {
      console.error('Error fetching parking locations:', error);
      // Show user-friendly error message
      alert('Unable to load parking locations. Please try again later.');
    } finally {
      setDataLoading(false);
    }
  };

  // Initialize start time when modal opens
  useEffect(() => {
    if (showBookingModal) {
      const now = new Date();
      const iso = new Date(now.getTime() - now.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 16);
      setStartTime(iso);
      setDurationHours(1);
    }
  }, [showBookingModal]);

  useEffect(() => {
    let filtered = parkingSpots.filter(
      (spot) =>
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort spots
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return (a.pricing.average || 0) - (b.pricing.average || 0);
        case "distance":
          return (a.distance || 0) - (b.distance || 0);
        case "availability":
          return (b.availability?.available || 0) - (a.availability?.available || 0);
        case "rating":
          return (b.rating || 0) - (a.rating || 0);
        default:
          return 0;
      }
    });

    setFilteredSpots(filtered);
  }, [searchQuery, sortBy, parkingSpots]);

  const getAvailabilityColor = (available: number, total: number) => {
    if (!available || !total || total === 0) return "text-gray-600 bg-gray-50 border-gray-200";
    const percentage = (available / total) * 100;
    if (percentage > 50) return "text-green-600 bg-green-50 border-green-200";
    if (percentage > 20)
      return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getAvailabilityDot = (available: number, total: number) => {
    if (!available || !total || total === 0) return "bg-gray-500";
    const percentage = (available / total) * 100;
    if (percentage > 50) return "bg-green-500";
    if (percentage > 20) return "bg-orange-500";
    return "bg-red-500";
  };

  if (dataLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 text-lg">Loading parking locations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <span className="font-medium">Back to Dashboard</span>
            </Link>
          </div>

          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Find Parking
          </h1>
          <p className="text-gray-600 text-lg">
            Discover available parking spots near you
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search locations, streets, or landmarks..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
                />
              </div>
            </div>

            {/* Sort */}
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
              >
                <option value="distance">Sort by Distance</option>
                <option value="price">Sort by Price</option>
                <option value="availability">Sort by Availability</option>
                <option value="rating">Sort by Rating</option>
              </select>

              <button className="flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-200">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z"
                  />
                </svg>
                Filters
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Mobile Toggle for Map/List View */}
          <div className="lg:hidden mb-4">
            <div className="flex bg-gray-100 rounded-xl p-1">
              <button className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-200">
                Map View
              </button>
              <button className="flex-1 py-2 px-4 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200">
                List View
              </button>
            </div>
          </div>
          {/* Map Area */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg h-[600px] relative overflow-hidden">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Interactive Map
              </h3>
              <ParkingMap parkingLocations={filteredSpots} selectedLocation={selectedSpot} onLocationSelect={setSelectedSpot} />
            </div>
          </div>

          {/* Parking List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900">
              Available Spots ({filteredSpots.length})
            </h3>

            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {filteredSpots.map((spot) => (
                <div
                  key={spot.id}
                  className={`bg-white/80 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 cursor-pointer ${
                    selectedSpot?.id === spot.id
                      ? "border-blue-300 shadow-lg shadow-blue-100 bg-blue-50/50"
                      : "border-white/50 shadow-md hover:shadow-lg hover:border-blue-200"
                  }`}
                  onClick={() => setSelectedSpot(spot)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {spot.name}
                      </h4>
                      <p className="text-sm text-gray-600">{spot.address}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-blue-600">
                        ${spot.pricing.average?.toFixed(2) || '0.00'}
                      </p>
                      <p className="text-xs text-gray-500">avg per hour</p>
                      {spot.pricing.min !== spot.pricing.max && (
                        <p className="text-xs text-gray-400">
                          ${spot.pricing.min?.toFixed(2) || '0.00'} - ${spot.pricing.max?.toFixed(2) || '0.00'}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor(
                        spot.availability?.available || 0,
                        spot.availability?.total || 0
                      )}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${getAvailabilityDot(
                          spot.availability?.available || 0,
                          spot.availability?.total || 0
                        )}`}
                      ></div>
                      {spot.availability?.available || 0} of {spot.availability?.total || 0} available
                    </div>

                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-orange-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        {spot.rating?.toFixed(1) || 'N/A'}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>
                        {spot.distance ? `${spot.distance} km away` : 'Distance unknown'}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {spot.features.slice(0, 2).map((feature, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                      {spot.features.length > 2 && (
                        <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                          +{spot.features.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  <ActionButton
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation();
                      setSelectedSpot(spot);
                      setShowBookingModal(true);
                    }}
                    variant="primary"
                    fullWidth
                  >
                    Book Now
                  </ActionButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedSpot && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md transform transition-all duration-300 scale-100">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">
                Book Parking Spot
              </h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-1">
                {selectedSpot.name}
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                {selectedSpot.address}
              </p>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Rate:</span>
                  <span className="font-semibold text-gray-900">
                    ${selectedSpot.pricing.min?.toFixed(2) || '0.00'} - ${selectedSpot.pricing.max?.toFixed(2) || '0.00'}/hour
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Availability:</span>
                  <span
                    className={`font-semibold ${
                      (selectedSpot.availability?.available || 0) > 10
                        ? "text-green-600"
                        : (selectedSpot.availability?.available || 0) > 5
                        ? "text-orange-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedSpot.availability?.available || 0} spots
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select
                  value={durationHours}
                  onChange={(e) => setDurationHours(parseInt(e.target.value, 10))}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
                >
                  <option value={1}>1 hour - ${selectedSpot.pricing.average?.toFixed(2) || '0.00'}</option>
                  <option value={2}>
                    2 hours - ${((selectedSpot.pricing.average || 0) * 2).toFixed(2)}
                  </option>
                  <option value={3}>
                    3 hours - ${((selectedSpot.pricing.average || 0) * 3).toFixed(2)}
                  </option>
                  <option value={4}>
                    4 hours - ${((selectedSpot.pricing.average || 0) * 4).toFixed(2)}
                  </option>
                  <option value={8}>
                    All day - ${((selectedSpot.pricing.average || 0) * 8).toFixed(2)}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Time
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <ActionButton
                onClick={() => setShowBookingModal(false)}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </ActionButton>
              <ActionButton
                onClick={async () => {
                  if (!selectedSpot) return;
                  try {
                    setIsLoading(true);

                    // Try local slots first
                    let availableSlot = selectedSpot.slots?.find(s => s.status === 'AVAILABLE');
                    let slotId = availableSlot?.id;
                    let pricePerHour = availableSlot?.basePrice
                      ? Number(availableSlot.basePrice as any)
                      : (selectedSpot.pricing?.average || 0);

                    // Fallback: ask server for an available slot if slots are not loaded
                    if (!slotId) {
                      const res = await fetch(`/api/parking-locations/${selectedSpot.id}/available-slot`);
                      if (!res.ok) {
                        const err = await res.json().catch(() => ({}));
                        alert(err.error || 'No available slots at this location right now.');
                        return;
                      }
                      const data = await res.json();
                      slotId = data.slotId;
                      pricePerHour = Number(data.pricePerHour) || 0;
                    }

                    // Compute times and price
                    const start = startTime ? new Date(startTime) : new Date();
                    const end = new Date(start.getTime() + durationHours * 60 * 60 * 1000);
                    const totalAmount = Number((pricePerHour * durationHours).toFixed(2));

                    // Create booking
                    const bookingRes = await fetch('/api/bookings', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        slotId,
                        startTime: start.toISOString(),
                        endTime: end.toISOString(),
                        totalAmount,
                      }),
                    });

                    if (bookingRes.status === 401) {
                      alert('Please log in to complete your booking. Redirecting to login...');
                      router.push('/login');
                      return;
                    }
                    if (!bookingRes.ok) {
                      const err = await bookingRes.json().catch(() => ({}));
                      throw new Error(err.error || 'Failed to create booking');
                    }

                    const booking = await bookingRes.json();

                    // Initiate Telebirr (dummy mode auto-completes)
                    const payRes = await fetch('/api/payments', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        bookingId: booking.id,
                        amount: totalAmount,
                        method: 'TELEBIRR',
                      }),
                    });

                    if (!payRes.ok) {
                      const err = await payRes.json().catch(() => ({}));
                      throw new Error(err.error || 'Failed to initiate payment');
                    }

                    const payment = await payRes.json();
                    setShowBookingModal(false);

                    if (payment.status === 'COMPLETED') {
                      // Try to refetch confirmed booking to get updated status (codes already exist from initial create)
                      try {
                        const refreshed = await fetch('/api/bookings?status=CONFIRMED', { cache: 'no-store' });
                        if (refreshed.ok) {
                          const list = await refreshed.json();
                          // Pick the first confirmed booking (or fallback to original)
                          const latest = Array.isArray(list) ? list.find((b:any)=> b.id === booking.id) || list[0] : null;
                          setConfirmedBooking(latest || booking);
                        } else {
                          setConfirmedBooking(booking);
                        }
                      } catch {
                        setConfirmedBooking(booking);
                      }
                      setShowConfirmation(true);
                    } else if (payment.paymentUrl) {
                      window.location.href = payment.paymentUrl;
                    } else {
                      alert('Payment started. Please follow the instructions.');
                    }
                  } catch (e: any) {
                    console.error(e);
                    alert(e.message || 'Something went wrong while booking.');
                  } finally {
                    setIsLoading(false);
                  }
                }}
                loading={isLoading}
                variant="primary"
                className="flex-1"
              >
                Confirm Booking
              </ActionButton>
            </div>
          </div>
        </div>
      )}
      {/* Confirmation Modal */}
      {showConfirmation && confirmedBooking && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-3 right-3 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed</h3>
            <p className="text-sm text-gray-600 mb-4">Show this QR code or provide the 6-digit code at the entrance.</p>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col items-center mb-4 w-full">
              {confirmedBooking.qrCode ? (
                <>
                  <img
                    src={confirmedBooking.qrCodeImage || `/api/qr/${confirmedBooking.qrCode}?size=240&ec=H`}
                    alt="Booking QR Code"
                    className="w-44 h-44 mb-3 border rounded-lg bg-white object-contain"
                  />
                  <div className="flex gap-2 mb-2">
                    <button
                      onClick={async () => {
                        try {
                          const url = confirmedBooking.qrCodeImage || `/api/qr/${confirmedBooking.qrCode}?format=png&size=600&ec=H`;
                          if (url.startsWith('data:')) {
                            // Direct download from data URL
                            const a = document.createElement('a');
                            a.href = url;
                            a.download = `wepark-${confirmedBooking.qrCode}.png`;
                            a.click();
                            return;
                          }
                          const res = await fetch(url);
                          const blob = await res.blob();
                          const objectUrl = URL.createObjectURL(blob);
                          const a = document.createElement('a');
                          a.href = objectUrl;
                          a.download = `wepark-${confirmedBooking.qrCode}.png`;
                          a.click();
                          setTimeout(() => URL.revokeObjectURL(objectUrl), 4000);
                        } catch (err) {
                          alert('Failed to download QR.');
                        }
                      }}
                      className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium"
                    >Download</button>
                    <button
                      onClick={async () => {
                        try {
                          await navigator.clipboard.writeText(confirmedBooking.qrCode);
                          alert('QR code value copied.');
                        } catch {}
                      }}
                      className="px-3 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-medium"
                    >Copy Code</button>
                  </div>
                </>
              ) : (
                <div className="w-44 h-44 flex items-center justify-center bg-white border rounded-lg mb-3 text-gray-400 text-xs text-center px-2">
                  QR code unavailable
                </div>
              )}
              <div className="text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wide">Check-In Code</p>
                <p className="text-2xl font-mono font-bold text-blue-600 mt-1">{confirmedBooking.checkInCode || '------'}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm w-full">
              <div className="flex justify-between"><span className="text-gray-500">Slot</span><span className="font-medium">{confirmedBooking.slot?.slotNumber || 'N/A'}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Location</span><span className="font-medium truncate max-w-[180px]">{confirmedBooking.slot?.location?.name || 'N/A'}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Status</span><span className="font-medium">{confirmedBooking.status}</span></div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => { setShowConfirmation(false); setConfirmedBooking(null); }}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-xl font-medium transition-colors"
              >Close</button>
              <button
                onClick={() => { setShowConfirmation(false); setConfirmedBooking(null); router.push('/dashboard'); }}
                className="flex-1 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors"
              >Go to Dashboard</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
