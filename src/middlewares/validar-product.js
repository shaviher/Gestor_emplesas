import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";

export const createProductValidator = [
    body("name").notEmpty().withMessage("Name is required"),
    body("price").notEmpty().withMessage("Price is required"),
    body("category").notEmpty().withMessage("Category is required"),
    validateJWT,
    validarCampos,
    handleErrors
]

export const updateProductValidator = [
    validateJWT,
    validarCampos,
    handleErrors
]