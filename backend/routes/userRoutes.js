import express from 'express';
const router = express.Router();
import { authUser, authUserProfile, registerUser } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post("/login", authUser)
router.get("/profile", protect, authUserProfile)
router.post("/", registerUser);

export default router;