import express from "express"
import authRoutes from "./auth.route.js"
import userRoutes from "./user.routes.js"

const router = express.Router()

router.use("/auth", authRoutes)
router.use("/auth", userRoutes)

export default router