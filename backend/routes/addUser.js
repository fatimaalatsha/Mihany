import express from 'express'
const router = express.Router();

import { addUser } from '../controllers/addUser.js'

router.post('/adduser', addUser)

export default router;
  