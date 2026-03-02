// Load environment variables from .env file
import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cookieParser from "cookie-parser";
import contactRoutes from "./routes/contact.route.js";
import cors from "cors"

// Initialize Express app
const app = express();


// Middlewares.........................................
// Middleware to parse JSON bodies
app.use(express.json());

// cors
app.use(cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true, // Allow cookies to be sent
}))

// cookiesimport cookieParser from "cookie-parser";
app.use(cookieParser());


// Api routes............................................ 
app.get("/", (req, res) => {
    res.send("Backend is running!");
});

app.use("/api", contactRoutes)

export default app;