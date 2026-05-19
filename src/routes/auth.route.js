import express from "express"
import { registerSchema, validate } from "../validators/auth.validator.js"
import { register } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/register", validate(registerSchema), register)

export default router