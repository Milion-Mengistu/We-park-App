"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Mock parking data with realistic coordinates (centered around a city)
const mockParkingSpots = [
  {
    id: 1,
    name: "Downtown Plaza",
    address: "123 Main Street",
    price: 8.5,
    available: 12,
    total: 50,
    coordinates: [40.7128, -74.0060] as [number, number], // NYC area
  },
  {
    id: 2,
    name: "City Center Garage",
    address: "456 Oak Avenue",
    price: 6.75,
    available: 8,
    total: 75,
    coordinates: [40.7589, -73.9851] as [number, number],
  },
  {
    id: 3,
    name: "Mall Parking",
    address: "789 Shopping Blvd",
    price: 5.25,
    available: 25,
    total: 120,
    coordinates: [40.7505, -73.9934] as [number, number],
  },
  {
    id: 4,
    name: "Business District",
    address: "321 Corporate Way",
    price: 12.0,
    available: 3,
    total: 30,
    coordinates: [40.7614, -73.9776] as [number, number],
  },
  {
    id: 5,
    name: "Airport Parking",
    address: "555 Terminal Drive",
    price: 15.0,
    available: 45,
    total: 200,
    coordinates: [40.6892, -74.1745] as [number, number],
  },
];

// Custom icon for user location
const userLocationIcon = new L.Icon({
  iconUrl: 'data:image/svg+xml;base64,' + btoa(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3B82F6" width="32" height="32">
      <circle cx="12" cy="12" r="10" stroke="#1E40AF" stroke-width="2" fill="#3B82F6"/>
      <circle cx="12" cy="12" r="4" fill="white"/>
    </svg>
  `),
  iconSize: [32, 32],
  iconAnchor: [16, 16],
  popupAnchor: [0, -16],
});

// Custom icon for parking spots with availability colors
const createParkingIcon = (available: number, total: number) => {
  const percentage = (available / total) * 100;
  let color = '#10B981'; // green
  if (percentage <= 50 && percentage > 20) color = '#F59E0B'; // orange
  if (percentage <= 20) color = '#EF4444'; // red
  
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="28" height="28">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      <text x="12" y="10" text-anchor="middle" fill="white" font-size="6" font-weight="bold">P</text>
    </svg>
  `;
  
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(svgIcon),
    iconSize: [28, 28],
    iconAnchor: [14, 28],
    popupAnchor: [0, -28],
  });
};

export default function ParkingMap() {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([40.7128, -74.0060]); // Default to NYC
  const [isLocationLoading, setIsLocationLoading] = useState(true);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords: [number, number] = [position.coords.latitude, position.coords.longitude];
          setUserLocation(coords);
          setMapCenter(coords);
          setIsLocationLoading(false);
        },
        (error) => {
          console.warn('Geolocation error:', error);
          // Fallback to default location
          setIsLocationLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 300000, // 5 minutes
        }
      );
    } else {
      setIsLocationLoading(false);
    }
  }, []);

  const getAvailabilityInfo = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return { color: 'text-green-600', status: 'High availability' };
    if (percentage > 20) return { color: 'text-orange-600', status: 'Medium availability' };
    return { color: 'text-red-600', status: 'Low availability' };
  };

  if (isLocationLoading) {
    return (
      <div className="h-[600px] w-full rounded-2xl overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading map...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-lg">
      <MapContainer
        center={mapCenter}
        zoom={13}
        scrollWheelZoom={true}
        className="h-full w-full"
        style={{ borderRadius: '1rem' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* User Location Marker */}
        {userLocation && (
          <Marker position={userLocation} icon={userLocationIcon}>
            <Popup className="custom-popup">
              <div className="text-center py-2">
                <div className="w-6 h-6 bg-blue-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="font-semibold text-blue-600">Your Location</p>
              </div>
            </Popup>
          </Marker>
        )}

        {/* Parking Spots */}
        {mockParkingSpots.map((spot) => {
          const availabilityInfo = getAvailabilityInfo(spot.available, spot.total);
          return (
            <Marker 
              key={spot.id} 
              position={spot.coordinates} 
              icon={createParkingIcon(spot.available, spot.total)}
            >
              <Popup className="custom-popup">
                <div className="space-y-3 min-w-[200px]">
                  <div>
                    <h4 className="font-bold text-lg text-gray-900">{spot.name}</h4>
                    <p className="text-sm text-gray-600">{spot.address}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Price:</span>
                      <span className="font-semibold text-blue-600">${spot.price}/hour</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Available:</span>
                      <span className={`font-semibold ${availabilityInfo.color}`}>
                        {spot.available}/{spot.total} spots
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-gray-200">
                    <p className={`text-xs ${availabilityInfo.color} font-medium`}>
                      {availabilityInfo.status}
                    </p>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                    View Details
                  </button>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-white/50 z-[1000]">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Parking Availability</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-gray-700">High (50%+)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-gray-700">Medium (20-50%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-gray-700">Low (&lt;20%)</span>
          </div>
        </div>
        
        <div className="mt-3 pt-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-700">Your Location</span>
          </div>
        </div>
      </div>

      {/* Location controls */}
      <div className="absolute top-4 right-4 space-y-2 z-[1000]">
        <button
          onClick={() => {
            if (userLocation) {
              setMapCenter(userLocation);
            }
          }}
          className="bg-white/95 hover:bg-white text-gray-700 p-2 rounded-lg shadow-lg border border-white/50 transition-colors duration-200"
          title="Center on your location"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
