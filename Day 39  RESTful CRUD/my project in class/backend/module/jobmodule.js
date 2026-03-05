import mongoose from "mongoose";

const jobschma = new mongoose.Schema({
    job_name:{type:String,required:true,trim:true},
    company_name:{type:String,required:true,},
    location:{type:String,required:true},
    job_type:{type:String,required:true,enum:["Full Time", "Part time" , "IntenShip", "Remote"]}
})

const modulejob =  mongoose.model("joblist",jobschma)

export default modulejob