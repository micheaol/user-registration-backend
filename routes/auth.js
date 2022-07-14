import express from "express";
import { authRoutes } from "../controllers/auth.js";
import { auth } from '../middlewares/auth.js'

const router = express.Router();

router.get('/', auth, authRoutes);


export default router;