import mongoose from "mongoose";

const connectDB = async()=>{

    try {

        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongo DB Connected ${conn.connection.host}`);
             
    } catch (error) {

        console.log('error',error);
         process.exit(1)  
        
    }

}

export default connectDB