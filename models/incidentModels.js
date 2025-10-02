import mongoose from "mongoose";

const incidentSchema = mongoose.Schema({
    location: {
        type: String,
        required : true
    },
    type: {
        type: String,
        required : true
    },
    date: {
        type: Date,
        default : Date.now
    }
})

const Incident = mongoose.model("incident", incidentSchema)
export default Incident;