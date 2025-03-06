import { body } from "express-validator"
import { validarCampos } from "./validar-campos.js"
import { handleErrors } from "./handleErrors.js"
import { hasRoles } from "./validar-roles.js"
import { emailExists, userExists } from "../helpers/validar-db.js"
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
    body("name").notEmpty().withMessage("The name is required"),
    body("username").notEmpty().withMessage("Username is required"),
    body("email").notEmpty().withMessage("Email is required"),
    body("email").isEmail().withMessage("It is not a valid email"),
    body("email").custom(emailExists),
    validarCampos,
    handleErrors
]