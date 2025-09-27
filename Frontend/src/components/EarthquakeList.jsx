import React from "react";

export default function EarthquakeList({ earthquakes, onSelect }) {
  return (
    <div className="w-full bg-gray-100 p-4">
      {/* Header with total count */}
      <h2 className="text-xl font-bold mb-4 flex items-center ">
        Recent Earthquakes -
        <span className="ml-2 text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded">
          {earthquakes.length}
        </span>
      </h2>

      {/* Dropdown */}
      <select
        className="w-full p-2 border rounded mb-4"
        onChange={(e) => {
          const eq = earthquakes.find((eq) => eq.usgsId === e.target.value);
          if (eq) onSelect(eq);
        }}
      >
        <option value="">Select an earthquake</option>
        {earthquakes.map((eq) => (
          <option key={eq.usgsId} value={eq.usgsId}>
            {eq.place} — Mag {eq.magnitude}
          </option>
        ))}
      </select>
    </div>
  );
}
