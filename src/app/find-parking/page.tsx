"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ParkingMap from "@/src/components/ParkingMap";

// Mock parking data
const mockParkingSpots = [
  {
    id: 1,
    name: "Downtown Plaza",
    address: "123 Main Street",
    price: 8.5,
    available: 12,
    total: 50,
    distance: 0.2,
    rating: 4.8,
    features: ["Covered", "24/7", "Security"],
    coordinates: { x: 35, y: 25 },
  },
  {
    id: 2,
    name: "City Center Garage",
    address: "456 Oak Avenue",
    price: 6.75,
    available: 8,
    total: 75,
    distance: 0.4,
    rating: 4.6,
    features: ["Electric Charging", "Covered"],
    coordinates: { x: 60, y: 40 },
  },
  {
    id: 3,
    name: "Mall Parking",
    address: "789 Shopping Blvd",
    price: 5.25,
    available: 25,
    total: 120,
    distance: 0.8,
    rating: 4.3,
    features: ["Free 2hrs", "Shopping"],
    coordinates: { x: 20, y: 60 },
  },
  {
    id: 4,
    name: "Business District",
    address: "321 Corporate Way",
    price: 12.0,
    available: 3,
    total: 30,
    distance: 0.3,
    rating: 4.9,
    features: ["Valet", "Premium", "Covered"],
    coordinates: { x: 75, y: 20 },
  },
  {
    id: 5,
    name: "Airport Parking",
    address: "555 Terminal Drive",
    price: 15.0,
    available: 45,
    total: 200,
    distance: 2.1,
    rating: 4.4,
    features: ["Long-term", "Shuttle", "Security"],
    coordinates: { x: 85, y: 75 },
  },
];

export default function FindParkingPage() {
  const [selectedSpot, setSelectedSpot] = useState<
    (typeof mockParkingSpots)[0] | null
  >(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("distance");
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [filteredSpots, setFilteredSpots] = useState(mockParkingSpots);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    let filtered = mockParkingSpots.filter(
      (spot) =>
        spot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        spot.address.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort spots
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "distance":
          return a.distance - b.distance;
        case "availability":
          return b.available - a.available;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

    setFilteredSpots(filtered);
  }, [searchQuery, sortBy]);

  const getAvailabilityColor = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "text-green-600 bg-green-50 border-green-200";
    if (percentage > 20)
      return "text-orange-600 bg-orange-50 border-orange-200";
    return "text-red-600 bg-red-50 border-red-200";
  };

  const getAvailabilityDot = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return "bg-green-500";
    if (percentage > 20) return "bg-orange-500";
    return "bg-red-500";
  };

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
              <ParkingMap />
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
                        ${spot.price}
                      </p>
                      <p className="text-xs text-gray-500">per hour</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium border ${getAvailabilityColor(
                        spot.available,
                        spot.total
                      )}`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full ${getAvailabilityDot(
                          spot.available,
                          spot.total
                        )}`}
                      ></div>
                      {spot.available} of {spot.total} available
                    </div>

                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4 text-orange-400 fill-current"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        {spot.rating}
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
                      <span>{spot.distance} mi away</span>
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

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSpot(spot);
                      setShowBookingModal(true);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Book Now
                  </button>
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
                    ${selectedSpot.price}/hour
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Availability:</span>
                  <span
                    className={`font-semibold ${
                      selectedSpot.available > 10
                        ? "text-green-600"
                        : selectedSpot.available > 5
                        ? "text-orange-600"
                        : "text-red-600"
                    }`}
                  >
                    {selectedSpot.available} spots
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300">
                  <option>1 hour - ${selectedSpot.price}</option>
                  <option>
                    2 hours - ${(selectedSpot.price * 2).toFixed(2)}
                  </option>
                  <option>
                    3 hours - ${(selectedSpot.price * 3).toFixed(2)}
                  </option>
                  <option>
                    4 hours - ${(selectedSpot.price * 4).toFixed(2)}
                  </option>
                  <option>
                    All day - ${(selectedSpot.price * 8).toFixed(2)}
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
                  defaultValue={
                    mounted ? new Date().toISOString().slice(0, 16) : ""
                  }
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowBookingModal(false)}
                className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  setIsLoading(true);
                  // Simulate booking process
                  await new Promise((resolve) => setTimeout(resolve, 1500));
                  setIsLoading(false);
                  setShowBookingModal(false);
                  // Show success message
                  alert(
                    "🎉 Booking confirmed! You will receive a confirmation shortly."
                  );
                }}
                disabled={isLoading}
                className={`flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300 ${
                  isLoading ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing...
                  </div>
                ) : (
                  "Confirm Booking"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
