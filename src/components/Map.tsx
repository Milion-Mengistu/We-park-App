"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useState } from "react";

const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet/dist/images/marker-shadow.png",
});

interface Spot {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  isTaken: boolean;
}

export default function Map() {
  const [spots, setSpots] = useState<Spot[]>([]);

  useEffect(() => {
    fetchSpots();
  }, []);

  const fetchSpots = async () => {
    const res = await fetch("/api/spots");
    const data = await res.json();
    setSpots(data);
  };

  const handleBooking = async (id: number, isTaken: boolean) => {
    await fetch(`/api/spots/${id}/book`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ isTaken: !isTaken }), // toggle status
    });
    fetchSpots(); // refresh map
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={[9.03, 38.74]} zoom={14} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a>'
        />

        {spots.map((spot) => (
          <Marker key={spot.id} position={[spot.latitude, spot.longitude]} icon={icon}>
            <Popup>
              <b>{spot.name}</b> <br />
              Status: {spot.isTaken ? "Occupied ❌" : "Available ✔️"} <br />
              <button
                onClick={() => handleBooking(spot.id, spot.isTaken)}
                style={{
                  marginTop: "5px",
                  padding: "5px 10px",
                  backgroundColor: spot.isTaken ? "red" : "green",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                {spot.isTaken ? "Release" : "Book"}
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
