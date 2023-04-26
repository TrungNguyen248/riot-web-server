import { authController } from "../controllers/authController.js"
import express from "express"

const router = express.Router()

//REGISTER
router.post("/register", authController.registerUser);

//LOG IN
router.post("/login", authController.loginUser);

//LOG OUT
router.post("/logout", authController.logOut);

export default router