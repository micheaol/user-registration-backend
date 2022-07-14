import express from "express";
import { registerUsers } from "../controllers/user.js";


const router = express.Router();

router.post('/', registerUsers);



export default router;