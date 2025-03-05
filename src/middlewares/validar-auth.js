import { body } from "express-validator"
import { validarCampos } from "./validar-campos.js"
import { handleErrors } from "./handleErrors.js"
import { hasRoles } from "./validar-roles.js"


export const loginValidator = [
    body("email").optional().isEmail().withMessage("The email is not valid"),
    body("password").isString().withMessage("Invalid password"),
    validarCampos,
    handleErrors
]