import { Router } from "express"
import { createProductValidator, updateProductValidator } from "../middlewares/validar-product.js"
import { createProduct, updateProduct } from "./product.controller.js"


const router = Router()

router.post("/createProduct", createProductValidator, createProduct)

router.put("/updateProduct/:pid", updateProductValidator, updateProduct)

export default router