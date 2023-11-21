import express from "express";
import { getUserDetails } from "../controllers/userController.js";
import authorizeUser from "../middleware/authorizeUser.js";

const router = express.Router();

router.post("/:user_id", authorizeUser, getUserDetails);

export default router;
