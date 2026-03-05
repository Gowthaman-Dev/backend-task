import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectdb from './config/db.js'
import movieroute from './routes/movieRoute.js'

dotenv.config()
connectdb()

const movie = express()

movie.use(cors())
movie.use(express.json())
movie.use("/api/movie",movieroute)

const PORT = process.env.PORT || 3000

movie.listen(PORT,()=>{
    console.log(`server connected succesfully http://localhost:${PORT}`);
    
})

//http://localhost:5000/api/movie