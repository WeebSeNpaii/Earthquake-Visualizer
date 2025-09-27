import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";
import startJob from "./jobs/fetchEarthquake.js";
import { fetchAndStoreEarthquakes } from "./services/earthquakeService.js";

dotenv.config();

const PORT = process.env.PORT || 6000;

// Connect DB
connectDB();

// Initial fetch when server starts
fetchAndStoreEarthquakes();

// Start cron job
startJob();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
