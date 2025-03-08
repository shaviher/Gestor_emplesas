import { Router } from 'express';
import { loginValidator, registerValidator } from '../middlewares/validar-auth.js';
import { login, register } from './auth.controller.js';

const router = Router()

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Iniciar sesión
 *     description: Inicia sesión con las credenciales del usuario.
 *     requestBody:
 *       description: Credenciales del usuario.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso.
 *       400:
 *         description: Error en la solicitud.
 *       401:
 *         description: Credenciales inválidas.
 */
router.post('/login', loginValidator, login)

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registrar usuario
 *     description: Registra un nuevo usuario.
 *     requestBody:
 *       description: Datos del usuario a registrar.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.post("/register", registerValidator, register)

export default router