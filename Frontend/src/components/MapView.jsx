import React, { useEffect } from "react";
import { TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function MapView({ earthquakes, selectedEq }) {
  const map = useMap();

  useEffect(() => {
    if (selectedEq) {
      // Fly smoothly to the selected earthquake
      map.flyTo([selectedEq.latitude, selectedEq.longitude], 6, {
        duration: 2,
      });
    }
  }, [selectedEq, map]);

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      {earthquakes.map((eq) => (
        <Marker
          key={eq.usgsId}
          position={[eq.latitude, eq.longitude]}
        >
          <Popup autoOpen={selectedEq?.usgsId === eq.usgsId}>
            <strong>{eq.place}</strong>
            <br />
            Magnitude: {eq.magnitude}
            <br />
            {new Date(eq.time).toLocaleString()}
          </Popup>
        </Marker>
      ))}
    </>
  );
}
