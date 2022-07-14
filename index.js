import express from "express";
import cors from 'cors';


import usersRoutes from './routes/user.js';
import authRoutes from './routes/auth.js';
import setPasswordRoutes from './routes/setPassword.js';
import connectDB from "./config/db.js";


const app = express();


const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: false }));
app.use(cors());


app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
connectDB();


app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/password', setPasswordRoutes);