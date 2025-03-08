import { Router } from "express"
import { updateUser, deleteUser } from "../user/user.controller.js"
import { deleteUserValidator, updateUserValidator } from "../middlewares/validar-user.js"

const router = Router()

/**
 * @swagger
 * /updateUser/{uid}:
 *   put:
 *     summary: Actualizar usuario
 *     description: Actualiza la información de un usuario existente.
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: ID del usuario a actualizar.
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Datos del usuario a actualizar.
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
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 *       404:
 *         description: Usuario no encontrado.
 */
router.put("/updateUser/:uid", updateUserValidator,  updateUser)

/**
 * @swagger
 * /deleteUser/{uid}:
 *   delete:
 *     summary: Eliminar usuario
 *     description: Elimina un usuario existente.
 *     parameters:
 *       - in: path
 *         name: uid
 *         required: true
 *         description: ID del usuario a eliminar.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente.
 *       400:
 *         description: Error en la solicitud.
 *       404:
 *         description: Usuario no encontrado.
 */
router.delete("/deleteUser/:uid", deleteUserValidator,  deleteUser)

export default router;