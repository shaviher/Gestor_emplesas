import { body, param } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";


export const updateUserValidator = [
    validarCampos,
    validateJWT,
    handleErrors
]