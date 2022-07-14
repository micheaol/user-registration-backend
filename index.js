import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';


import usersRoutes from './routes/user.js';
import connectDB from "./config/db.js";

const app = express();

app.use('/api/v1/users', usersRoutes);


const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());


app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`))
connectDB();