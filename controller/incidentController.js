import Incident from "../models/incidentModels.js";
import { calculateDistance } from "../utils/distance.js";

export async function reportIncident(req, res) {
  try {
    const { location, currentLocation } = req.body;

    if (!location || !currentLocation) {
      return res.status(400).json({
        error: "Location and Current Location are required",
      });
    }

    // Save incident (clicked marker)
    const incident = new Incident({ location });
    await incident.save();

    // Check distance between current location and incident location
    const distance = calculateDistance(
      currentLocation.lat,
      currentLocation.lng,
      location.lat,
      location.lng
    );

    let alertMessage = null;
    if (distance <= 1) {
      alertMessage = `⚠️ Incident within 1km of your location (${distance.toFixed(
        2
      )} km)`;
    }

    res.status(201).json({
      message: "Successfully added incident",
      incident,
      alert: alertMessage,
    });
  } catch (error) {
    res.status(500).json({
      error: "Server error",
      details: error.message,
    });
  }
}
