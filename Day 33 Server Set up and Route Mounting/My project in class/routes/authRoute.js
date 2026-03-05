import express from 'express'
import { createUser, getUser } from '../controller/userControllers.js'


// API LINK FOR XXXX METHOD -  http://localhost:5000/api/route/myroute/user

// API FOR GET THE DATAS  -  http://localhost:5000/api/route/myroute/getuser


const route = express.Router()

route.post("/myroute/user",createUser)

route.post('/myroute/getuser',getUser)

export default route