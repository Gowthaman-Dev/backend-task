import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectdp from './config/dp.js'
import route from './routes/route.js'

const app = express()

dotenv.config()
connectdp()
app.use(cors())
app.use(express.json())
app.use('/api/backedndhandle',route)

const PORT = process.env.PORT || 3000
app.listen(PORT,()=>{
    console.log(`Server connected Succesfully http://localhost:${PORT}`);
    
})
