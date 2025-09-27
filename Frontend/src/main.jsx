import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "leaflet/dist/leaflet.css";   // ✅ Leaflet CSS
import "./fixLeafletIcons";         // ✅ Fix icons
import "./index.css";               // Tailwind

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
