import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/authRoute.js'
import cors from 'cors'

dotenv.config()

const app  =  express()

const PORT  = process.env.PORT || 3000

app.use(cors())

app.use(express.json())

app.use('/api/route',authRoutes)

app.listen(PORT,()=>{
    console.log(`server running successfully http://localhost:${PORT}`);

    
})


// API LINK FOR XXXX METHOD -  http://localhost:5000/api/route