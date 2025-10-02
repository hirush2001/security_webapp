import Incident from "../models/incidentModels";

export async function reportIncident(req,res) {
    try {
        const { location , type } = req.body;
        if (!location && !type) 
            return res.status(400).json({
                error: "Location or Type are required"
            })
        else {
            res.json(
                {
                    message: "Succefully add Incident",
                    location : location
                }
            )
        }
    }
}