import { Router } from "express";
import { submitContactForm } from "../controllers/contact.controller.js";

const router = Router();

// Contact form submission route
router.post("/contact", submitContactForm)

export default router;