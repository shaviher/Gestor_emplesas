import express, { Router } from "express"
import { createCategoryValidator, categoriesGeneralValidator, cageoryAdminValidator } from "../middlewares/validar-category.js"
import { createCategory, deleteCategory, getCategories, updateCategory } from "./category.controller.js"

const router = express.Router()

/**
 * @swagger
 * /createCategory:
 *   post:
 *     summary: Crear categoría
 *     description: Crea una nueva categoría.
 *     requestBody:
 *       description: Datos de la categoría a crear.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.post("/createCategory", createCategoryValidator, createCategory)

/**
 * @swagger
 * /getCategories:
 *   get:
 *     summary: Listar categorías
 *     description: Obtiene una lista de categorías.
 *     responses:
 *       200:
 *         description: Lista de categorías obtenida exitosamente.
 *       400:
 *         description: Error en la solicitud.
 */
router.get("/getCategories", categoriesGeneralValidator, getCategories)

/**
 * @swagger
 * /updateCategory/{cid}:
 *   put:
 *     summary: Actualizar categoría
 *     description: Actualiza la información de una categoría existente.
 *     parameters:
 *       - in: path
 *         name: cid
 *         required: true
 *         description: ID de la categoría a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos de la categoría a actualizar.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente.
 *       400:
 *         description: Error en la solicitud.
 *       404:
 *         description: Categoría no encontrada.
 */
router.put("/updateCategory/:cid", cageoryAdminValidator, updateCategory)

/**
 * @swagger
 * /deleteCategory/{cid}:
 *   delete:
 *     summary: Eliminar categoría
 *     description: Elimina una categoría existente.
 *     parameters:
 *       - in: path
 *         name: cid
 *         required: true
 *         description: ID de la categoría a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente.
 *       400:
 *         description: Error en la solicitud.
 *       404:
 *         description: Categoría no encontrada.
 */
router.delete("/deleteCategory/:cid", cageoryAdminValidator, deleteCategory)

export default router