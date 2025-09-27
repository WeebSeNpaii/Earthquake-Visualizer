import Earthquake from "../models/earthquakes.js";

export const getEarthquakes = async (req, res) => {
  try {
    const { minMag, maxMag, startDate, endDate } = req.query;

    let filters = {};
    if (minMag) filters.magnitude = { $gte: Number(minMag) };
    if (maxMag) filters.magnitude = { ...filters.magnitude, $lte: Number(maxMag) };
    if (startDate || endDate) {
      filters.time = {};
      if (startDate) filters.time.$gte = new Date(startDate);
      if (endDate) filters.time.$lte = new Date(endDate);
    }

    const earthquakes = await Earthquake.find(filters).sort({ time: -1 }).limit(100);
    res.json(earthquakes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching earthquakes" });
  }
};
