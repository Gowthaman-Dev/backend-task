import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connecteddp from './config/dp.js'
import route from './route/jobroute.js'

dotenv.config()
connecteddp()

const jobsdetails = express()

jobsdetails.use(cors())
jobsdetails.use(express.json())

jobsdetails.use('/api/jobportal',route)

const PORT = process.env.PORT || 3000

jobsdetails.listen(PORT,()=>{
    console.log(`Server local host connected http://localhost:${PORT} `);
    
})