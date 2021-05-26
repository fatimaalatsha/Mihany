import express from 'express'
const router = express.Router();
import AddUser from '../models/newUser.js';
import unirest from 'unirest'

import { addUser } from '../controllers/addUser.js'

router.post('/adduser', addUser)

export default router;
  