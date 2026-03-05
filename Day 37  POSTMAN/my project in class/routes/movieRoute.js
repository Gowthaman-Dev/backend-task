import express from 'express'
import { createData, getbyid, getData } from '../controller/movieController.js'

const movieroute = express.Router()

movieroute.post("/create",createData)
movieroute.get("/get",getData)
movieroute.get("/getid/:userid",getbyid)

export default movieroute


//http://localhost:5000/api/movie/create
//http://localhost:5000/api/movie/getid/699966a14dbf0b1690ab1af2
