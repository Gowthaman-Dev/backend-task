import express from 'express'
import { addlogin, conRegister } from '../controller/jwtController.js'
import { validateregister, validationlogin } from '../middleware/validateUser.js'

const route = express.Router()

route.post("/register",validateregister,conRegister)
route.post("/login",validationlogin,addlogin)

export default route