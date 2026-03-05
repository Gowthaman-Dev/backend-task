import mongoose from "mongoose";

const connectdp = async()=>{
    try {
        
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MOONGOOSE is Connected ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Something error `,error);
        
    }
}

export default connectdp