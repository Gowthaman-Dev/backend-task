import mongoose from "mongoose";

const hasheddatabase = async()=>{
    try {
        const res = await mongoose.connect(process.env.MONGOOSE_URL)
        console.log(`Mongoose is connected ${res.connection.host}`);
        
    } catch (error) {
        console.log(`Database didn't connected`,error);
    }
}

export default hasheddatabase