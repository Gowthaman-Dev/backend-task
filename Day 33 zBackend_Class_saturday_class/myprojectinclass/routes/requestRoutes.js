import express from 'express'
import { adddata, getdataByheader, getdatabynumber, getdataByquery } from '../controller/requestController.js'

//http://localhost:5000/api/request/createdata
//http://localhost:5000/api/request/getdatabyNumber/1000
//http://localhost:5000/api/request/getdatabyquery
//http://localhost:5000/api/request/header


const reqRoute  = express.Router()

reqRoute.post("/createdata",adddata)
reqRoute.get("/getdatabyNumber/:useridbynumber",getdatabynumber)
reqRoute.get("/getdatabyquery",getdataByquery)
reqRoute.get("/header",getdataByheader)


export default reqRoute