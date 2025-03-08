import { Router } from 'express';
import { agregarAlCarrito, verCarrito, eliminarDelCarrito } from './cart.controller.js';
import { addToCartValidator } from '../middlewares/validar-cart.js';

const router = Router()

/**
 * @swagger
 * /cartAdd:
 *   post:
 *     summary: Agregar al carrito
 *     description: Agrega un producto al carrito.
 *     requestBody:
 *       description: Datos del producto a agregar al carrito.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto agregado al carrito exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.post('/cartAdd', addToCartValidator, agregarAlCarrito)

/**
 * @swagger
 * /getCart:
 *   get:
 *     summary: Ver carrito
 *     description: Obtiene los productos en el carrito.
 *     responses:
 *       200:
 *         description: Carrito obtenido exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.get('/getCart', addToCartValidator, verCarrito)

/**
 * @swagger
 * /deleteCart:
 *   get:
 *     summary: Eliminar del carrito
 *     description: Elimina un producto del carrito.
 *     parameters:
 *       - in: query
 *         name: productId
 *         required: true
 *         description: ID del producto a eliminar del carrito.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado del carrito exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.get('/deleteCart', addToCartValidator, eliminarDelCarrito)

export default router