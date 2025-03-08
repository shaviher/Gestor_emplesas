import { Router } from "express";
import { crearFactura} from "../Invoice/invoice.controller.js";

const router = Router();

router.post("/create", crearFactura);



export default router