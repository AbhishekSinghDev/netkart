import express from "express";
import {
  updatePassword,
  updateEmail,
  updateAddress,
  updatePhoneno,
} from "../controllers/updateUserController.js";

const router = express.Router();

router.patch("/update-password", updatePassword);
router.patch("/update-email", updateEmail);
router.patch("/update-address", updateAddress);
router.patch("/update-phoneno", updatePhoneno);

export default router;
