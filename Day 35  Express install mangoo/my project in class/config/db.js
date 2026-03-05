import mongoose from "mongoose"

import dotenv from 'dotenv'



const contectDB = async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        
        //console.log(`database connected succesfully ${conn.connection.host}`);  //thevna use pannikalam poda yentha host la run agumkuratha sollum 
        
        console.log(`Database Connected Successfully ${conn.connection.host}`);
        
    }catch(error){
        console.log(`Something Error`);
        
    }
}

export default contectDB