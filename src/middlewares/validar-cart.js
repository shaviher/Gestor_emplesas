import { validarCampos } from "./validar-campos.js";
import { handleErrors } from "./handleErrors.js";
import { validateJWT } from "./validate-jwt.js";

export const addToCartValidator = [
    validateJWT,
    validarCampos,
    handleErrors
]