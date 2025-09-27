import express from "express";
import Earthquake from "../models/earthquakes.js";

const router = express.Router();

router.get("/recent", async (req, res) => {
  try {
    const earthquakes = await Earthquake.find()
      .sort({ time: -1 }) // newest first
       
    res.json(earthquakes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
