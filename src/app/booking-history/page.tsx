"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type BookingItem = {
  id: string;
  qrCode: string;
  checkInCode: string;
  status: string;
  totalAmount: number;
  startTime?: string;
  endTime?: string;
  qrCodeImage?: string;
  slot: { slotNumber: string; location: { name: string; address: string } };
};

export default function BookingHistoryPage() {
  const [data, setData] = useState<BookingItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    const run = async () => {
      try {
        setLoading(true);
        setError(null);
        const qs = status ? `?status=${encodeURIComponent(status)}` : "";
        const res = await fetch(`/api/bookings${qs}`, { signal: controller.signal });
        if (res.status === 401) {
          throw new Error("Please sign in to view your bookings.");
        }
        if (!res.ok) throw new Error(await res.text());
        const json = await res.json();
        setData(json || []);
      } catch (e: any) {
        if (e?.name !== "AbortError") setError(e?.message || "Failed to load bookings");
      } finally {
        setLoading(false);
      }
    };
    run();
    return () => controller.abort();
  }, [status]);

  const total = useMemo(() => data.reduce((sum, b) => sum + (Number(b.totalAmount) || 0), 0), [data]);

  return (
    <main className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 rounded-full mix-blend-multiply blur-2xl opacity-10"></div>
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply blur-2xl opacity-10"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-8">
      <header className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">My Booking History</h1>
          <p className="text-gray-600">Review your past and current bookings.</p>
        </div>
        <Link href="/find-parking" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium">
          New Booking
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </header>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="text-sm text-gray-600">Filter:</label>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="px-3 py-2 rounded-xl border bg-white">
          <option value="">All</option>
          <option value="PENDING">Pending</option>
          <option value="CONFIRMED">Confirmed</option>
          <option value="ACTIVE">Active</option>
          <option value="COMPLETED">Completed</option>
          <option value="CANCELLED">Cancelled</option>
        </select>
        <div className="ml-auto text-sm text-gray-600">Count: {data.length} • Total: {total.toFixed(2)}</div>
      </div>

      {loading && (
        <div className="p-6 rounded-xl border bg-white">Loading...</div>
      )}
      {error && !loading && (
        <div className="p-4 rounded-xl border border-red-200 bg-red-50 text-red-700">
          {error} {error.includes('sign in') && (
            <>
              <span className="mx-2">•</span>
              <Link href="/login" className="underline text-blue-700">Sign In</Link>
            </>
          )}
        </div>
      )}

      {!loading && !error && data.length === 0 && (
        <div className="p-6 rounded-xl border bg-white">
          <p className="text-gray-600">No bookings yet. <Link href="/find-parking" className="text-blue-600 underline">Find a spot</Link>.</p>
        </div>
      )}

      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full hidden md:table border bg-white rounded-xl overflow-hidden">
          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="px-4 py-3">When</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Slot</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3 text-right">Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((b) => (
              <tr key={b.id} className="border-t">
                <td className="px-4 py-3 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{b.startTime ? new Date(b.startTime).toLocaleString() : '-'}</div>
                  <div className="text-xs text-gray-500">{b.endTime ? new Date(b.endTime).toLocaleString() : ''}</div>
                </td>
                <td className="px-4 py-3">
                  <div className="max-w-xs truncate" title={b.slot.location.address}>{b.slot.location.name}</div>
                  <div className="text-xs text-gray-500 truncate">{b.slot.location.address}</div>
                </td>
                <td className="px-4 py-3">{b.slot.slotNumber}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs border capitalize">
                    <span className={`w-1.5 h-1.5 rounded-full ${b.status === 'ACTIVE' ? 'bg-green-500' : b.status === 'PENDING' ? 'bg-yellow-500' : b.status === 'CANCELLED' ? 'bg-red-500' : 'bg-blue-500'}`}></span>
                    {b.status.toLowerCase()}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">{Number(b.totalAmount).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="md:hidden grid gap-3">
          {data.map((b) => (
            <div key={b.id} className="p-4 rounded-xl border bg-white">
              <div className="flex justify-between items-center mb-1">
                <div className="font-medium">{b.slot.location.name}</div>
                <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full text-xs border capitalize">
                  <span className={`w-1.5 h-1.5 rounded-full ${b.status === 'ACTIVE' ? 'bg-green-500' : b.status === 'PENDING' ? 'bg-yellow-500' : b.status === 'CANCELLED' ? 'bg-red-500' : 'bg-blue-500'}`}></span>
                  {b.status.toLowerCase()}
                </span>
              </div>
              <div className="text-xs text-gray-500 mb-2 truncate" title={b.slot.location.address}>{b.slot.location.address}</div>
              <div className="text-sm">Slot: <span className="font-medium">{b.slot.slotNumber}</span></div>
              <div className="text-sm">Start: {b.startTime ? new Date(b.startTime).toLocaleString() : '-'}</div>
              <div className="text-sm">End: {b.endTime ? new Date(b.endTime).toLocaleString() : '-'}</div>
              <div className="text-right font-semibold mt-2">{Number(b.totalAmount).toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
}
