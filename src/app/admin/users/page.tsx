"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RoleGuard } from "@/src/components/RoleGuard";
import SearchFilterBar from "@/src/components/ui/SearchFilterBar";
import UserTable from "@/src/components/ui/UserTable";
import RoleModal from "@/src/components/ui/RoleModal";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  createdAt: string;
  bookingCount: number;
  roles: Array<{
    role: string;
    locationId?: string;
    locationName?: string;
    isActive: boolean;
    createdAt: string;
  }>;
  primaryRole: string;
}

interface PaginationData {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

function UserManagementContent() {
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<PaginationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [assigningRole, setAssigningRole] = useState(false);
  const [newRole, setNewRole] = useState('');
  const [locations, setLocations] = useState<Array<{id: string; name: string}>>([]);

  useEffect(() => {
    fetchUsers();
    fetchLocations();
  }, [page, search, roleFilter]);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '10',
        ...(search && { search }),
        ...(roleFilter && { role: roleFilter }),
      });

      const response = await fetch(`/api/admin/users?${params}`);

      if (response.ok) {
        const data = await response.json();
        setUsers(data.users);
        setPagination(data.pagination);
      } else {
        console.error('Failed to fetch users');
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Failed to fetch users'}`);
        setUsers([]);
        setPagination(null);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Network error: Unable to fetch users');
      setUsers([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await fetch('/api/parking-locations');
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) {
          setLocations(data.map((loc: any) => ({ id: loc.id, name: loc.name })));
        } else {
          setLocations([]);
          console.error('Locations response is not an array:', data);
        }
      } else {
        const errorData = await response.json();
        console.error('Failed to fetch locations:', errorData.error || errorData);
        setLocations([]);
      }
    } catch (error) {
      console.error('Error fetching locations:', error);
      setLocations([]);
    }
  };

  const handleAssignRole = async () => {
    if (!selectedUser || !newRole) return;

    try {
      setAssigningRole(true);

      const response = await fetch(`/api/admin/users/${selectedUser.id}/roles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          role: newRole,
          // locationId can be added later for location-specific roles
        }),
      });

      if (response.ok) {
        await fetchUsers(); // Refresh user list
        setShowRoleModal(false);
        setSelectedUser(null);
        setNewRole('');
        alert('Role assigned successfully!');
      } else {
        const error = await response.json();
        alert(`Failed to assign role: ${error.error}`);
      }
    } catch (error) {
      console.error('Error assigning role:', error);
      alert('Network error: Failed to assign role');
    } finally {
      setAssigningRole(false);
    }
  };

  const handleRemoveRole = async (userId: string, role: string) => {
    if (!confirm(`Are you sure you want to remove the ${role} role from this user?`)) {
      return;
    }

    try {
      const response = await fetch(`/api/admin/users/${userId}/roles?role=${role}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchUsers(); // Refresh user list
        alert('Role removed successfully!');
      } else {
        const error = await response.json();
        alert(`Failed to remove role: ${error.error}`);
      }
    } catch (error) {
      console.error('Error removing role:', error);
      alert('Network error: Failed to remove role');
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'ADMIN':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'ATTENDANT':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'USER':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateInput: string | Date) => {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <Link
                  href="/admin"
                  className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Admin
                </Link>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                User Management
              </h1>
              <p className="text-gray-600">Manage user roles and permissions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Search and Filter Bar */}
        <SearchFilterBar 
          search={search}
          setSearch={setSearch}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
          setPage={setPage}
        />

        {/* Users Table */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Users {pagination && `(${pagination.totalCount})`}
              </h2>
              {pagination && (
                <div className="text-sm text-gray-500">
                  Page {pagination.page} of {pagination.totalPages}
                </div>
              )}
            </div>
          </div>

          {loading ? (
            <div className="p-8 text-center">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading users...</p>
            </div>
          ) : users.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">No users found</p>
            </div>
          ) : (
            <UserTable
              users={users}
              loading={loading}
              pagination={pagination || undefined}
              page={page}
              setPage={setPage}
              getRoleColor={getRoleColor}
              formatDate={formatDate}
              handleRemoveRole={handleRemoveRole}
              setSelectedUser={setSelectedUser}
              setShowRoleModal={setShowRoleModal}
            />
          )}

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing {((pagination.page - 1) * pagination.limit) + 1} to {Math.min(pagination.page * pagination.limit, pagination.totalCount)} of {pagination.totalCount} users
                </div>
                
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage(page - 1)}
                    disabled={!pagination.hasPrev}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      pagination.hasPrev
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <span className="px-3 py-2 text-sm text-gray-600">
                    Page {pagination.page} of {pagination.totalPages}
                  </span>
                  
                  <button
                    onClick={() => setPage(page + 1)}
                    disabled={!pagination.hasNext}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      pagination.hasNext
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Role Assignment Modal */}
      {showRoleModal && selectedUser && (
        <RoleModal
          show={showRoleModal}
          selectedUser={selectedUser}
          newRole={newRole}
          setNewRole={setNewRole}
          assigningRole={assigningRole}
          handleAssignRole={handleAssignRole}
          getRoleColor={getRoleColor}
          onClose={() => {
            setShowRoleModal(false);
            setSelectedUser(null);
            setNewRole('');
          }}
        />
      )}
    </div>
  );
}

export default function UserManagement() {
  return (
    <RoleGuard 
      requiredRoles={['ADMIN', 'SUPER_ADMIN']}
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Access Denied</h1>
            <p className="text-gray-600 mb-6">You need admin privileges to access user management.</p>
            <Link 
              href="/dashboard" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors"
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      }
    >
      <UserManagementContent />
    </RoleGuard>
  );
}
