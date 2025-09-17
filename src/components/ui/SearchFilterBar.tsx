import React from "react";

type SearchFilterBarProps = {
  search: string;
  setSearch: (value: string) => void;
  roleFilter: string;
  setRoleFilter: (value: string) => void;
  setPage: (page: number) => void;
};

export default function SearchFilterBar({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
  setPage,
}: SearchFilterBarProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search users by name or email..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
          />
        </div>
        <div className="flex gap-4">
          <select
            value={roleFilter}
            onChange={(e) => {
              setRoleFilter(e.target.value);
              setPage(1);
            }}
            className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 transition-all duration-300"
          >
            <option value="">All Roles</option>
            <option value="SUPER_ADMIN">Super Admin</option>
            <option value="ADMIN">Admin</option>
            <option value="ATTENDANT">Attendant</option>
            <option value="USER">User</option>
          </select>
          <button
            onClick={() => {
              setSearch('');
              setRoleFilter('');
              setPage(1);
            }}
            className="px-4 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-medium transition-colors duration-200"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}