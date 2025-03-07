import { Router } from "express"
import { createProductValidator, deleteProductValidator, updateProductValidator } from "../middlewares/validar-product.js"
import { createProduct, deleteProduct, exploreProducts, getProductById, updateProduct } from "./product.controller.js"


const router = Router()

router.post("/createProduct", createProductValidator, createProduct)

router.put("/updateProduct/:pid", updateProductValidator, updateProduct)

router.get("/exploreProducts", exploreProducts)

router.get("/searchProduct/:pid", getProductById)

router.delete("/deleteProduct/:pid", deleteProductValidator, deleteProduct)

export default router