import { Router } from 'express';
import { loginValidator, registerValidator } from '../middlewares/validar-auth.js';
import { login, register } from './auth.controller.js';

const router = Router()

router.post('/login', loginValidator, login)

router.post("/register", registerValidator, register)


export default router