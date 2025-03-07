import { Router } from 'express';
import { agregarAlCarrito, verCarrito, eliminarDelCarrito } from './cart.controller.js';
import { addToCartValidator } from '../middlewares/validar-cart.js';

const router = Router()

router.post('/cartAdd', addToCartValidator, agregarAlCarrito)

router.get('/getCart', addToCartValidator, verCarrito)

router.get('/deleteCart', addToCartValidator, eliminarDelCarrito )

export default router