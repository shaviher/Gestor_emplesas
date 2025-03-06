import express from "express"
import { createCategoryValidator } from "../middlewares/validar-category.js"
import { createCategory } from "./category.controller.js"

const router = express.Router()

router.post("/createCategory", createCategoryValidator, createCategory)

export default router