import cron from "node-cron";
import { fetchAndStoreEarthquakes } from "../services/earthquakeService.js";

// Run every hour
const startJob = () => {
  cron.schedule("0 * * * *", async () => {
    console.log("Running earthquake fetch job...");
    await fetchAndStoreEarthquakes();
  });
};

export default startJob;
