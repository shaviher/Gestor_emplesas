import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";
import { hasRoles } from "./validar-roles.js";

export const createCategoryValidator = [
    hasRoles("ADMIN"),
    body("name").notEmpty().withMessage("Name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    validateJWT,
    validarCampos,
    handleErrors
]

export const cageoryAdminValidator = [
    hasRoles("ADMIN"),
    validateJWT,
    validarCampos,
    handleErrors
]

export const categoriesGeneralValidator = [
    validateJWT,
    validarCampos,
    handleErrors
]
