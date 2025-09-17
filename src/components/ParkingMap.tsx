"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default markers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

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
}

interface ParkingMapProps {
  parkingLocations?: ParkingLocation[];
  selectedLocation?: ParkingLocation | null;
  onLocationSelect?: (location: ParkingLocation) => void;
}

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
const createParkingIcon = (available: number, total: number, isSelected: boolean = false) => {
  const percentage = (available / total) * 100;
  let color = '#10B981'; // green
  if (percentage <= 50 && percentage > 20) color = '#F59E0B'; // orange
  if (percentage <= 20) color = '#EF4444'; // red
  
  const size = isSelected ? 32 : 28;
  const strokeWidth = isSelected ? 3 : 2;
  const strokeColor = isSelected ? '#1E40AF' : '#FFFFFF';
  
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${color}" width="${size}" height="${size}">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="${strokeColor}" stroke-width="${strokeWidth}"/>
      <text x="12" y="10" text-anchor="middle" fill="white" font-size="6" font-weight="bold">P</text>
    </svg>
  `;
  
  return new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(svgIcon),
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
  });
};

// Component to handle map updates when selected location changes
function MapUpdater({ selectedLocation }: { selectedLocation: ParkingLocation | null }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedLocation && selectedLocation.latitude && selectedLocation.longitude) {
      map.setView([selectedLocation.latitude, selectedLocation.longitude], 15, {
        animate: true,
        pan: { duration: 0.5 }
      });
    }
  }, [selectedLocation, map]);
  
  return null;
}

export default function ParkingMap({ 
  parkingLocations = [], 
  selectedLocation = null, 
  onLocationSelect 
}: ParkingMapProps) {
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
          // Fallback to default location or use first parking location if available
          if (parkingLocations.length > 0 && parkingLocations[0].latitude && parkingLocations[0].longitude) {
            const coords: [number, number] = [parkingLocations[0].latitude, parkingLocations[0].longitude];
            setMapCenter(coords);
          }
          setIsLocationLoading(false);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 300000, // 5 minutes
        }
      );
    } else {
      // Fallback to first parking location if available
      if (parkingLocations.length > 0 && parkingLocations[0].latitude && parkingLocations[0].longitude) {
        const coords: [number, number] = [parkingLocations[0].latitude, parkingLocations[0].longitude];
        setMapCenter(coords);
      }
      setIsLocationLoading(false);
    }
  }, [parkingLocations]);

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

        <MapUpdater selectedLocation={selectedLocation} />

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
        {parkingLocations
          .filter(spot => spot.latitude && spot.longitude)
          .map((spot) => {
            const availabilityInfo = getAvailabilityInfo(spot.availability.available, spot.availability.total);
            const isSelected = selectedLocation?.id === spot.id;
            
            return (
              <Marker 
                key={spot.id} 
                position={[spot.latitude!, spot.longitude!]} 
                icon={createParkingIcon(spot.availability.available, spot.availability.total, isSelected)}
                eventHandlers={{
                  click: () => {
                    onLocationSelect?.(spot);
                  }
                }}
              >
                <Popup className="custom-popup">
                  <div className="space-y-3 min-w-[250px]">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{spot.name}</h4>
                      <p className="text-sm text-gray-600">{spot.address}</p>
                      {spot.description && (
                        <p className="text-xs text-gray-500 mt-1">{spot.description}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Price Range:</span>
                        <span className="font-semibold text-blue-600">
                          ${spot.pricing.min.toFixed(2)} - ${spot.pricing.max.toFixed(2)}/hour
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Available:</span>
                        <span className={`font-semibold ${availabilityInfo.color}`}>
                          {spot.availability.available}/{spot.availability.total} spots
                        </span>
                      </div>

                      {spot.rating && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Rating:</span>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-orange-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span className="font-semibold text-gray-700">{spot.rating.toFixed(1)}</span>
                          </div>
                        </div>
                      )}

                      {spot.distance && (
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Distance:</span>
                          <span className="font-semibold text-gray-700">{spot.distance} km</span>
                        </div>
                      )}
                    </div>

                    {spot.features.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-600 mb-2">Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {spot.features.slice(0, 4).map((feature, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {spot.features.length > 4 && (
                            <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                              +{spot.features.length - 4}
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="pt-2 border-t border-gray-200">
                      <p className={`text-xs ${availabilityInfo.color} font-medium`}>
                        {availabilityInfo.status}
                      </p>
                    </div>

                    <button 
                      onClick={() => onLocationSelect?.(spot)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                    >
                      Select Location
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
        
        {parkingLocations.length > 0 && (
          <button
            onClick={() => {
              // Center on all parking locations
              const validLocations = parkingLocations.filter(l => l.latitude && l.longitude);
              if (validLocations.length > 0) {
                const bounds = L.latLngBounds(
                  validLocations.map(l => [l.latitude!, l.longitude!])
                );
                // Get the map instance and fit bounds (this would need to be implemented with a ref)
                // For now, just center on the first location
                const firstLocation = validLocations[0];
                setMapCenter([firstLocation.latitude!, firstLocation.longitude!]);
              }
            }}
            className="bg-white/95 hover:bg-white text-gray-700 p-2 rounded-lg shadow-lg border border-white/50 transition-colors duration-200"
            title="Show all parking locations"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Parking locations count */}
      {parkingLocations.length > 0 && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-2 shadow-lg border border-white/50 z-[1000]">
          <p className="text-sm font-medium text-gray-700">
            {parkingLocations.length} location{parkingLocations.length !== 1 ? 's' : ''} found
          </p>
        </div>
      )}
    </div>
  );
}
