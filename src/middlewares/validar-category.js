import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";

export const createCategoryValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    validateJWT,
    validarCampos,
    handleErrors
]

export const getCategoriesValidator = [
    validateJWT,
    validarCampos,
    handleErrors
]

export const updateCategoryValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    validateJWT,
    validarCampos,
    handleErrors

]