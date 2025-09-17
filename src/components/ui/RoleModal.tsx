import Image from "next/image";
import React from "react";

type RoleInfo = {
  role: string;
};

type SelectedUser = {
  image?: string;
  name: string;
  email: string;
  roles: RoleInfo[];
};

type RoleModalProps = {
  show: boolean;
  selectedUser: SelectedUser | null;
  newRole: string;
  setNewRole: (role: string) => void;
  assigningRole: boolean;
  handleAssignRole: () => void;
  getRoleColor: (role: string) => string;
  onClose: () => void;
};

export default function RoleModal({
  show,
  selectedUser,
  newRole,
  setNewRole,
  assigningRole,
  handleAssignRole,
  getRoleColor,
  onClose,
}: RoleModalProps) {
  if (!show || !selectedUser) return null;
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md transform transition-all duration-300 scale-100">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">Assign Role</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={selectedUser.image || "/logo.png"}
              alt={selectedUser.name}
              width={48}
              height={48}
              className="rounded-full border-2 border-gray-200"
            />
            <div>
              <p className="font-medium text-gray-900">{selectedUser.name}</p>
              <p className="text-sm text-gray-500">{selectedUser.email}</p>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-2">Current roles:</p>
            <div className="flex flex-wrap gap-1">
              {selectedUser.roles.length === 0 ? (
                <span className="text-sm text-gray-500">No roles assigned</span>
              ) : (
                selectedUser.roles.map((roleInfo, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getRoleColor(roleInfo.role)}`}
                  >
                    {roleInfo.role}
                  </span>
                ))
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Role to Assign
            </label>
            <select
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300"
            >
              <option value="">Choose a role...</option>
              <option value="USER">User</option>
              <option value="ATTENDANT">Attendant</option>
              <option value="ADMIN">Admin</option>
              <option value="SUPER_ADMIN">Super Admin</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleAssignRole}
            disabled={assigningRole || !newRole}
            className={`flex-1 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              assigningRole || !newRole
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
            }`}
          >
            {assigningRole ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Assigning...
              </div>
            ) : (
              'Assign Role'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}