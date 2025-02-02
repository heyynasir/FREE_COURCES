import express from 'express'
import { createUser, login } from '../controller/userContoller.js';

const router = express.Router()

router.post('/signup' , createUser)
router.post('/login' , login)

export default router;
