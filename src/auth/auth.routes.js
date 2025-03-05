import { Router } from 'express';
import { loginValidator } from '../middlewares/validar-auth.js';
import { login } from './auth.controller.js';

const router = Router()

router.post('/login', loginValidator, login)

export default router