import mongoose from "mongoose";

const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGOOSE_URL)
        console.log(`mongodb connected ${conn.connection.host}`);
    } catch (error) {
        console.log(`something error`, error);

    } 
}
export default connectdb