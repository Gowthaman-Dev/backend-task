import express from 'express'
import { added, getdata, getdataandupdate, getdatabyid, getiddelete } from '../controller/movieController.js'

const route = express.Router()

route.post('/add',added) 
route.get('/get',getdata)
route.get('/getbyid/:userid',getdatabyid)
route.put('/getdandupdate/:userid',getdataandupdate)
route.delete('/getidanddelete/:userid',getiddelete)

export default route

