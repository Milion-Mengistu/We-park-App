import Image from "next/image";
import React from "react";

type RoleInfo = {
  role: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  roles: RoleInfo[];
  bookingCount: number;
  createdAt: string | Date;
};

type Pagination = {
  page: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  hasPrev: boolean;
  hasNext: boolean;
};

type UserTableProps = {
  users: User[];
  loading: boolean;
  pagination?: Pagination;
  page: number;
  setPage: (page: number) => void;
  getRoleColor: (role: string) => string;
  formatDate: (date: string | Date) => string;
  handleRemoveRole: (userId: string, role: string) => void;
  setSelectedUser: (user: User) => void;
  setShowRoleModal: (show: boolean) => void;
};

export default function UserTable({
  users,
  loading,
  pagination,
  page,
  setPage,
  getRoleColor,
  formatDate,
  handleRemoveRole,
  setSelectedUser,
  setShowRoleModal,
}: UserTableProps) {
  return (
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
        <div className="overflow-x-auto">
          <table className="w-full text-sm sm:text-base">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Roles
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Bookings
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Image
                        src={user.image || "/logo.png"}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="rounded-full border-2 border-gray-200"
                      />
                      <div className="max-w-[200px] sm:max-w-none">
                        <p className="font-medium text-gray-900 truncate" title={user.name}>{user.name}</p>
                        <p className="text-sm text-gray-500 truncate" title={user.email}>{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {user.roles.length === 0 ? (
                        <span className="text-sm text-gray-500">No roles</span>
                      ) : (
                        user.roles.map((roleInfo, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <span
                              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(roleInfo.role)}`}
                            >
                              {roleInfo.role}
                            </span>
                            {roleInfo.role !== 'USER' && (
                              <button
                                onClick={() => handleRemoveRole(user.id, roleInfo.role)}
                                className="text-red-500 hover:text-red-700 ml-1"
                                title={`Remove ${roleInfo.role} role`}
                              >
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            )}
                          </div>
                        ))
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-900">{user.bookingCount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">{formatDate(user.createdAt)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => {
                        setSelectedUser(user);
                        setShowRoleModal(true);
                      }}
                      className="flex items-center gap-2 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg font-medium transition-colors duration-200"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Add Role
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
  );
}