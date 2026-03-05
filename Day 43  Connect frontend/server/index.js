import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectdp from './config/dp.js'
import route from './route/jwtroutes.js'

dotenv.config()

connectdp()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/jwttokenmethod",route)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server Connected Successfully http://localhost:${PORT}`);
    
})