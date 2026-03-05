import mongoose from "mongoose";

const connecteddp = async()=>{
    try {
        const res = await mongoose.connect(process.env.MOOGOOSE_URL)
        console.log(`mongoose is connected successfully ${res.connection.host}`);
        
    } catch (error) {
        console.log(`somthing mongoose connections error`,error);
        
    }
}

export default connecteddp