import mongoose from "mongoose";

const modleschema = new mongoose.Schema({
    name:String,
    email:String,
    number:String,
    password:String
},{timestamps:true})

const modlemothods = mongoose.model("konjanerampratices",modleschema)
export default modlemothods