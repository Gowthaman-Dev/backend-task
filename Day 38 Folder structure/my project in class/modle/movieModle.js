import mongoose from "mongoose";

const movieschema = new mongoose.Schema({
    district_name: String,
    departments_name: String,
}, { timestamps: true })

const moviemodlue = mongoose.model("datasda",movieschema)

export default moviemodlue