import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import hashedroutes from './route/hashedroute.js'
import hasheddatabase from './config/dp.js'

dotenv.config()
hasheddatabase()
const hashed = express()

hashed.use(cors())
hashed.use(express.json())
hashed.use("/api/hashed",hashedroutes)

const PORT = process.env.PORT || 3000

hashed.listen(PORT,()=>{
    console.log(`Server is Connected http://localhost:${PORT}`);
})