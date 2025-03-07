import express, { Router } from "express"
import { createCategoryValidator, getCategoriesValidator, updateCategoryValidator } from "../middlewares/validar-category.js"
import { createCategory, deleteCategory, getCategories, updateCategory } from "./category.controller.js"

const router = express.Router()

router.post("/createCategory", createCategoryValidator, createCategory)

router.get("/getCategories", getCategoriesValidator, getCategories)

router.put("/updateCategory/:cid", updateCategoryValidator, updateCategory)

router.delete("/deleteCategory/:cid", getCategoriesValidator, deleteCategory)

export default router