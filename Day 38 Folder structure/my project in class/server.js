import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './route/movieRoute.js'
import connectdp from './config/dp.js'

dotenv.config()

connectdp()

const moviedir = express()

moviedir.use(cors())
moviedir.use(express.json())

moviedir.use('/api/movirdepartment',route)

const PORT = process.env.PORT || 3000

moviedir.listen(PORT,()=>{
    console.log(`Server Connected Succesfully http://localhost:${PORT}`);
    
})