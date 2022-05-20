import express from "express"
const router = express.Router()
import { dashboardHome } from "../controllers/dashboardController.js"

router.get("/", dashboardHome)

export default router
