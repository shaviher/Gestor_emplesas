import { Router } from "express"
import { createProductValidator } from "../middlewares/validar-product.js"
import { createProduct } from "./product.controller.js"


const router = Router()

router.post("/createProduct", createProductValidator, createProduct)

export default router