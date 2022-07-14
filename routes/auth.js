import express from "express";
import { authRoutes } from "../controllers/auth.js";


const router = express.Router();

router.post('/', authRoutes);


export default router;