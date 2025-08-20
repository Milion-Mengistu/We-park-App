"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface ParkingLocation {
  id: string;
  name: string;
  address: string;
  latitude?: number;
  longitude?: number;
  description?: string;
  features: string[];
  isActive: boolean;
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
}

export default function AdminLocations() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [locations, setLocations] = useState<ParkingLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<ParkingLocation | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    if (status === "loading") return;
    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }
    fetchLocations();
  }, [session, status, router]);

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/parking-locations');
      if (response.ok) {
        const data = await response.json();
        setLocations(data);
      }
    } catch (error) {
      console.error('Failed to fetch locations:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleStatus = async (locationId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/locations/${locationId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: 'toggle_status',
          isActive: !currentStatus,
        }),
      });

      if (response.ok) {
        setLocations(prev =>
          prev.map(loc =>
            loc.id === locationId ? { ...loc, isActive: !currentStatus } : loc
          )
        );
      }
    } catch (error) {
      console.error('Failed to toggle location status:', error);
    }
  };

  const handleDeleteLocation = async (locationId: string) => {
    if (!confirm('Are you sure you want to delete this location? This action cannot be undone.')) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/locations/${locationId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setLocations(prev => prev.filter(loc => loc.id !== locationId));
      }
    } catch (error) {
      console.error('Failed to delete location:', error);
    }
  };

  if (status === "loading" || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-gray-600 font-medium">Loading locations...</p>
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
              <h1 className="text-xl font-bold text-gray-900">Manage Locations</h1>
            </div>
            
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Add Location
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div key={location.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
              {/* Location Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{location.name}</h3>
                  <p className="text-sm text-gray-600">{location.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${
                    location.isActive ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <span className={`text-xs font-medium ${
                    location.isActive ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {location.isActive ? 'Active' : 'Inactive'}
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-1 mb-2">
                  {location.features.slice(0, 3).map((feature, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      {feature}
                    </span>
                  ))}
                  {location.features.length > 3 && (
                    <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      +{location.features.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">{location.availability.total}</p>
                  <p className="text-xs text-gray-500">Total Slots</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600">{location.availability.available}</p>
                  <p className="text-xs text-gray-500">Available</p>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Price Range:</span>
                  <span className="font-semibold text-gray-900">
                    ${location.pricing.min} - ${location.pricing.max}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Average:</span>
                  <span className="font-medium text-blue-600">${location.pricing.average}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setSelectedLocation(location);
                    setShowEditModal(true);
                  }}
                  className="flex-1 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors duration-200"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleToggleStatus(location.id, location.isActive)}
                  className={`flex-1 px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                    location.isActive
                      ? 'bg-red-50 hover:bg-red-100 text-red-600'
                      : 'bg-green-50 hover:bg-green-100 text-green-600'
                  }`}
                >
                  {location.isActive ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => handleDeleteLocation(location.id)}
                  className="px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Location Modal */}
      {showAddModal && (
        <LocationModal
          isOpen={showAddModal}
          onClose={() => setShowAddModal(false)}
          onSuccess={() => {
            setShowAddModal(false);
            fetchLocations();
          }}
        />
      )}

      {/* Edit Location Modal */}
      {showEditModal && selectedLocation && (
        <LocationModal
          isOpen={showEditModal}
          location={selectedLocation}
          onClose={() => {
            setShowEditModal(false);
            setSelectedLocation(null);
          }}
          onSuccess={() => {
            setShowEditModal(false);
            setSelectedLocation(null);
            fetchLocations();
          }}
        />
      )}
    </div>
  );
}

// Location Modal Component
function LocationModal({ 
  isOpen, 
  location, 
  onClose, 
  onSuccess 
}: { 
  isOpen: boolean; 
  location?: ParkingLocation; 
  onClose: () => void; 
  onSuccess: () => void; 
}) {
  const [formData, setFormData] = useState({
    name: location?.name || '',
    address: location?.address || '',
    description: location?.description || '',
    latitude: location?.latitude?.toString() || '',
    longitude: location?.longitude?.toString() || '',
    features: location?.features.join(', ') || '',
  });
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = location ? `/api/admin/locations/${location.id}` : '/api/admin/locations';
      const method = location ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          latitude: formData.latitude ? parseFloat(formData.latitude) : null,
          longitude: formData.longitude ? parseFloat(formData.longitude) : null,
          features: formData.features.split(',').map(f => f.trim()).filter(Boolean),
        }),
      });

      if (response.ok) {
        onSuccess();
      }
    } catch (error) {
      console.error('Failed to save location:', error);
    } finally {
      setSaving(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold text-gray-900 mb-6">
          {location ? 'Edit Location' : 'Add New Location'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
            <input
              type="text"
              value={formData.address}
              onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Latitude</label>
              <input
                type="number"
                step="any"
                value={formData.latitude}
                onChange={(e) => setFormData(prev => ({ ...prev, latitude: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Longitude</label>
              <input
                type="number"
                step="any"
                value={formData.longitude}
                onChange={(e) => setFormData(prev => ({ ...prev, longitude: e.target.value }))}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Features (comma-separated)</label>
            <input
              type="text"
              value={formData.features}
              onChange={(e) => setFormData(prev => ({ ...prev, features: e.target.value }))}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
              placeholder="Covered, Security, EV Charging"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all duration-300 disabled:opacity-50"
            >
              {saving ? 'Saving...' : location ? 'Update' : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
