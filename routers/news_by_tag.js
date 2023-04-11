import express from "express"
import { getNewsByTag } from "../controllers/news.js"

const router = express.Router()

router.get("/", getNewsByTag)   

export default router