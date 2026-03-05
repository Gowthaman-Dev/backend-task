import mongoose from "mongoose"


const ConnectDb = async()=>{
try {
    const conn = await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Conneted ${conn.connection.host}`);
    
} catch (error) {

    console.log('something Error',error);
    
    
}
  
  
   
}

export default ConnectDb;