import mongoose from "mongoose";

const jwtshcema = new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
},{timestamps:true})

const modlejwt = mongoose.model("day43classmethod",jwtshcema)

export default modlejwt