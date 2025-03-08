import { Router } from "express"
import { createProductValidator, generalValidator } from "../middlewares/validar-product.js"
import { createProduct, updateProduct, exploreProducts, getProductById, deleteProduct } from "./product.controller.js"

const router = Router()

/**
 * @swagger
 * /createProduct:
 *   post:
 *     summary: Crear producto
 *     description: Crea un nuevo producto.
 *     requestBody:
 *       description: Datos del producto a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.post("/createProduct", createProductValidator, createProduct)

/**
 * @swagger
 * /updateProduct/{pid}:
 *   put:
 *     summary: Actualizar producto
 *     description: Actualiza la información de un producto existente.
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: ID del producto a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos del producto a actualizar.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 *       404:
 *         description: Producto no encontrado.
 */
router.put("/updateProduct/:pid", generalValidator, updateProduct)

/**
 * @swagger
 * /exploreProducts:
 *   get:
 *     summary: Listar productos
 *     description: Obtiene una lista de productos.
 *     responses:
 *       200:
 *         description: Lista de productos obtenida exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.get("/exploreProducts", exploreProducts)

/**
 * @swagger
 * /searchProduct/{pid}:
 *   get:
 *     summary: Buscar producto
 *     description: Busca un producto por su ID.
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: ID del producto a buscar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto encontrado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 *       404:
 *         description: Producto no encontrado.
 */
router.get("/searchProduct/:pid", getProductById)

/**
 * @swagger
 * /deleteProduct/{pid}:
 *   delete:
 *     summary: Eliminar producto
 *     description: Elimina un producto existente.
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         description: ID del producto a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 *       404:
 *         description: Producto no encontrado.
 */
router.delete("/deleteProduct/:pid", generalValidator, deleteProduct)

export default router