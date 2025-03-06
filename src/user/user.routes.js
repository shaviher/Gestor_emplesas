import { Router } from "express"
import { updateUser } from "../user/user.controller.js"
import { updateUserValidator } from "../middlewares/validar-user.js"

const router = Router()

router.put("/updateUser/:uid", updateUserValidator,  updateUser)

export default router;
