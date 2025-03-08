import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validar-roles.js";

export const createProductValidator = [
    hasRoles("ADMIN"),
    body("name").notEmpty().withMessage("Name is required"),
    body("price").notEmpty().withMessage("Price is required"),
    body("category").notEmpty().withMessage("Category is required"),
    validateJWT,
    validarCampos,
    handleErrors
]

export const generalValidator = [
    hasRoles("ADMIN"),
    validateJWT,
    validarCampos,
    handleErrors
]
