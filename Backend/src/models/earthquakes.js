import mongoose from "mongoose";

const earthquakeSchema = new mongoose.Schema({
  usgsId: { type: String, unique: true }, // unique ID from USGS
  place: String,
  magnitude: Number,
  time: Date,
  longitude: Number,
  latitude: Number,
  depth: Number,
});

export default mongoose.model("Earthquake", earthquakeSchema);
