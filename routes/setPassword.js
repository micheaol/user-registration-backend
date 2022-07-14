import express from "express";
import { setPasswordRoutes, getPasswordRoutes } from "../controllers/setPassword.js";
import { auth } from '../middlewares/auth.js'
import { validatePassword } from "../validators/password.js";

const router = express.Router();


router.get('/me', auth, getPasswordRoutes);
router.post('/', validatePassword, auth, setPasswordRoutes);


export default router;