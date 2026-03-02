// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cookieParser from "cookie-parser";

// Initialize Express app
const app = express();


// Middlewares.........................................
// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// cookiesimport cookieParser from "cookie-parser";
app.use(cookieParser());


// Api routes............................................ 
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

export default app;