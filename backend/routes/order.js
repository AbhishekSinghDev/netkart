import express from "express";
import { orderProduct } from "../controllers/orderController.js";

const router = express.Router();

router.get("/", orderProduct);

export default router;
