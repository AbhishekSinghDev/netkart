import express from "express";
import { orderProduct, orderInfo } from "../controllers/orderController.js";

const router = express.Router();

router.post("/", orderProduct);
router.post("/:order_id", orderInfo);

export default router;
