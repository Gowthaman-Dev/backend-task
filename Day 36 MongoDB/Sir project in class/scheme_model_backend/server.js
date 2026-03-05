import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import userRoute from './routes/userRoute.js'
import ConnectDb from './config/db.js'
dotenv.config()

ConnectDb()
const app = express()

app.use(cors())

app.use(express.json())


app.use("/api/user",userRoute)


// http://localhost:5000/api/user

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Succfully done http://localhost:${PORT}`);
    
})


