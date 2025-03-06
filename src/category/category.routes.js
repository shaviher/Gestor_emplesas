import express, { Router } from "express"
import { createCategoryValidator, getCategoriesValidator } from "../middlewares/validar-category.js"
import { createCategory, getCategories } from "./category.controller.js"

const router = express.Router()

router.post("/createCategory", createCategoryValidator, createCategory)

router.get("/getCategories", getCategoriesValidator, getCategories)

export default router