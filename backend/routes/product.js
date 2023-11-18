import express from "express";
import {
  getAllCategories,
  getAllProducts,
  getSingleProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/single/", getSingleProduct);
router.get("/categories/", getAllCategories);

export default router;
