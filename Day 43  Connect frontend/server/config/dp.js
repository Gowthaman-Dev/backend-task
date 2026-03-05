import mongoose from "mongoose";

const connectdp = async()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_DP)
        console.log(`Moogodp connected successfully ${conn.connection.host}`);
    } catch (error) {
     console.log(`Moongoose Not Connected`);
        
    }
}

export default connectdp