import axios from "axios";
import Earthquake from "../models/earthquakes.js";

export const fetchAndStoreEarthquakes = async () => {
  try {
    const { data } = await axios.get(process.env.USGS_API);

    const earthquakes = data.features.map((eq) => ({
      usgsId: eq.id,
      place: eq.properties.place,
      magnitude: eq.properties.mag,
      time: new Date(eq.properties.time),
      longitude: eq.geometry.coordinates[0],
      latitude: eq.geometry.coordinates[1],
      depth: eq.geometry.coordinates[2],
    }));

    for (let quake of earthquakes) {
      await Earthquake.findOneAndUpdate(
        { usgsId: quake.usgsId },
        quake,
        { upsert: true, new: true }
      );
    }

    console.log(`Earthquakes updated: ${earthquakes.length}`);
  } catch (error) {
    console.error("Error fetching earthquakes:", error.message);
  }
};
