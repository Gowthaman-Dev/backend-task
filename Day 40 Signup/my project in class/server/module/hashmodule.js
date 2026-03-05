import mongoose from "mongoose";

const hasdschma = new mongoose.Schema({
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String,unique:true}
},{timestamps:true})

const modulehasd = mongoose.model('hashpassword',hasdschma)
export default modulehasd   