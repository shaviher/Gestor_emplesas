import { body } from "express-validator";
import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";


export const updateUserValidator = [
    validarCampos,
    validateJWT,
    handleErrors
]

export const deleteUserValidator = [
    body("username").notEmpty().withMessage("Username is required"),
    body("email").notEmpty().withMessage("Email is required"),
    validarCampos,
    validateJWT,
    handleErrors
]