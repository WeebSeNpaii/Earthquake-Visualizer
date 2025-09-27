import axios from "axios";

const API_URL = "http://localhost:5000/earthquakes";

export const getRecentEarthquakes = async () => {
  const res = await axios.get(`${API_URL}/recent`);
  return res.data;
};
