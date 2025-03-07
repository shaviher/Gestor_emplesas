// routes/invoice.routes.js
import { Router } from "express";
import { crearFactura} from "../Invoice/invoice.controller.js";

const router = Router();

// Crear una factura
router.post("/create", crearFactura);

export default router