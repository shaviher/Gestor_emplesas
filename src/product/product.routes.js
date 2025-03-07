import { Router } from "express"
import { createProductValidator, updateProductValidator } from "../middlewares/validar-product.js"
import { createProduct, exploreProducts, updateProduct } from "./product.controller.js"


const router = Router()

router.post("/createProduct", createProductValidator, createProduct)

router.put("/updateProduct/:pid", updateProductValidator, updateProduct)

router.get("/exploreProducts", exploreProducts)


export default router