import { body } from "express-validator"
import { validarCampos } from "./validar-campos.js"
import { handleErrors } from "./handleErrors.js"
import { hasRoles } from "./validar-roles.js"
import { emailExists } from "../helpers/validar-db.js"
import { validateJWT } from "./validate-jwt.js"


export const loginValidator = [
    body("email").optional().isEmail().withMessage("The email is not valid"),
    body("password").isString().withMessage("Invalid password"),
    validarCampos,
    handleErrors
]

export const registerValidator = [
    validateJWT,
    hasRoles("ADMIN"),
    body("name").notEmpty().withMessage("El nombre es requerido"),
    body("email").notEmpty().withMessage("El email es requerido"),
    body("email").isEmail().withMessage("No es un email válido"),
    body("email").custom(emailExists),
    validarCampos,
    handleErrors
]