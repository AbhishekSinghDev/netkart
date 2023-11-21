import express from "express";
import { orderProduct, orderInfo } from "../controllers/orderController.js";
import authorizeUser from "../middleware/authorizeUser.js";

const router = express.Router();

router.post("/", authorizeUser, orderProduct);
router.post("/:order_id", authorizeUser, orderInfo);

export default router;
