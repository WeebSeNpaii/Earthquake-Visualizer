import React, { useEffect, useState, useRef } from "react";
import { getRecentEarthquakes } from "../services/earthquakeService";
import MapView from "../components/MapView";
import EarthquakeList from "../components/EarthquakeList";
import { MapContainer } from "react-leaflet";

export default function Home() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [selectedEq, setSelectedEq] = useState(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getRecentEarthquakes();
      setEarthquakes(data);
    };
    fetchData();
  }, []);

  const handleSelect = (eq) => {
    setSelectedEq(eq); // store selection
    if (mapRef.current) {
      mapRef.current.setView([eq.latitude, eq.longitude], 6, {
        animate: true,
      });
    }
  };

  return (
    <div className="flex flex-col h-screen">
      
      {/* Left panel */}
      <div className="flex justify-center overflow-y-auto border-r p-4">
        <EarthquakeList earthquakes={earthquakes} onSelect={handleSelect} />
      </div>

      {/* Right map panel */}
      <div className=" h-full">
        {earthquakes.length > 0 && (
          <MapContainer
            center={[20, 0]}
            zoom={2}
            className="h-full w-full"
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          >
            <MapView earthquakes={earthquakes} selectedEq={selectedEq} />
          </MapContainer>
        )}
      </div>
    </div>
  );
}
