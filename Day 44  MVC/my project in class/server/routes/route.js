import express from 'express'
import { confirst } from '../controller/controllerfile.js'

const route = express.Router()

route.post("/register",confirst)
route.post("/login",)

export default route