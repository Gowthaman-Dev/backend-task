import express from 'express'
import dotenv from 'dotenv'
// console.log(express);

const app = express()

dotenv.config()

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`server connect http://localhost${PORT}`);
     
})