import { Router } from "express"
import { updateUser, deleteUser } from "../user/user.controller.js"
import { deleteUserValidator, updateUserValidator } from "../middlewares/validar-user.js"

const router = Router()

router.put("/updateUser/:uid", updateUserValidator,  updateUser)

router.delete("/deleteUser/:uid", deleteUserValidator,  deleteUser)

export default router;
