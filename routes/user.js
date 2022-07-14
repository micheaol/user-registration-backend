import express from "express";
import { registerUsers } from "../controllers/user.js";
import { validateUser } from "../validators/user.js";


const router = express.Router();

router.post('/', validateUser, registerUsers);



export default router;