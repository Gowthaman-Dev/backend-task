import express from 'express'
import { createresponce, getDataJson } from '../controller/responseController.js'

//http://localhost:5000/api/response/create  -   Text Responce using send()
//http://localhost:5000/api/response/getjsondata/1 

const route = express.Router()

route.post("/create",createresponce)
route.get("/getjsondata/:userid",getDataJson) 

export default route 