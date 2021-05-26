import express from 'express'
const router = express.Router();
import  UserResult  from '../models/showResults.js'
import unirest from 'unirest'
//to imporst the function/ logec from the conterollers
import { showMihany } from '../controllers/showResults.js'

//to imoprt from the models
//GET all Users




router.get('/showMihany', showMihany)
export default router;
