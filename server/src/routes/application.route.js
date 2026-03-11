import { Router } from "express";
import { applyJobs } from "../controllers/application.controller.js";

const router = Router();

// job apply api (user api)
router.post("/jobs/:id/apply", applyJobs);

// export router
export default router;