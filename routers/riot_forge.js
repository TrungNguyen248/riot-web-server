import express from "express"
import { getRiotForge } from "../controllers/riot_forge.js"

const router = express.Router()

router.get("/", getRiotForge)

export default router