import express from 'express'
import { handpass } from '../controller/hashedcontoller.js'

const hashedroutes = express.Router()

hashedroutes.post('/hashedpassword',handpass)

export default hashedroutes