import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import middlewareRoute from './routes/middlewareRoutes.js'
import connectDb from './config/db.js'

dotenv.config()
connectDb()
const Dep_App = express()


Dep_App.use(cors())

Dep_App.use(express.json())

Dep_App.use("/api/middlewareroute",middlewareRoute)

const PORT = process.env.PORT || 4000

Dep_App.listen(PORT,()=>{
    console.log(`Server Connected Successfully http://localhost:${PORT}`);
    
})