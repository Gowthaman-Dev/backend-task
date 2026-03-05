import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ResponseRoutes from "./routes/ResponseRoutes.js"

dotenv.config()

const mainapp = express()

mainapp.use(cors())

mainapp.use(express.json())

mainapp.use("/api/response",ResponseRoutes)

const PORT = process.env.PORT || 3000

mainapp.listen(PORT,()=>{
    console.log(`server connceted via http://localhost:${PORT}`);
    
})


//http://localhost:5000/api/response