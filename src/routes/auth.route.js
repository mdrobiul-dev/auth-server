import express from "express"
import { loginSchema, registerSchema, validate } from "../validators/auth.validator.js"
import { login, register } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/register", validate(registerSchema), register)
router.post("/login", validate(loginSchema), login)

export default router