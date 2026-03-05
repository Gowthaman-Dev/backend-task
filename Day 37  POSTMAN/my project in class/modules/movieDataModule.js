import mongoose from "mongoose";

const moviesechma = new mongoose.Schema({
movieName:{type:String},
ProducerName:{type:String},
DirectorName:{type:String},
accterName:{type:String},
acctressName:{type:String},
MovieType:{type:String},
movieLanguage:{type:String},
status:{type:String,default:"Active"},
RealingDate:{type:String},
createdBy:{type:String,default:"Admin"},
updatedBy:{type:String}    
},{timestamps:true})


const movieDataModules = mongoose.model("movieData",moviesechma)

export default movieDataModules

//ippudithan schema podu modules create pannanum 
//ithu create pannathan route write panna mudiyum controller write panna mudiyum file la data va poda mudiyum 