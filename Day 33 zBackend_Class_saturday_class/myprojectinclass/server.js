import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import reqRoute from './routes/requestRoutes.js'
dotenv.config()

const app = express()

app.use(cors())

app.use(express.json())



app.use("/api/request",reqRoute)  //route mounting

//http://localhost:5000/api/request

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server successfully done http://localhost:${PORT}`);
    
    
})