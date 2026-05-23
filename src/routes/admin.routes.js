import express from 'express'
import { protect } from '../middleware/auth.middleware.js';
import { restricTo } from '../middleware/roles.middlewares.js';

import { getUsers, removeUser } from '../controllers/admin.controller.js';

const router = express.Router()

router.use(protect)
router.use(restricTo("admin"))

router.get("/users", getUsers)
router.delete("/users/:id", removeUser)


export default router

// http://localhost:5000/api/admin/users
// http://localhost:5000/api/admin/users/6a11549e8aa8b7caca2f78bc