import express from 'express'
import { addjob, getjobdata } from '../controller/jobcontroller.js'

const route = express.Router()

route.post('/addeddata',addjob)
route.get("/getdata",getjobdata)

export default route