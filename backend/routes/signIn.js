import express from 'express'
const router = express.Router();

import { User } from '../controllers/signIn.js'
 
router.post ('/signin', User)

export default router;
  