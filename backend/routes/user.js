import express from "express";
import { getUserDetails } from "../controllers/userController.js";

const router = express.Router();

router.post("/:user_id", getUserDetails);

export default router;
