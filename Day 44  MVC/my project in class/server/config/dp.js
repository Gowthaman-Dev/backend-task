import mongoose from "mongoose";

const connectdp = async()=>{
    try {
         const conn = await mongoose.connect(process.env.MONGODB_URL)
    console.log(`Mongose connected succesfully ${conn.connection.host}`)
    } catch (error) {
        console.log(`moogoose dp connetions errors`);
        
    }
   
}

export default connectdp