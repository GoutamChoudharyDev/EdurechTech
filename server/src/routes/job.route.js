import { Router } from "express";
import { createJobs, deleteJobs, getJobs, updateJobs } from "../controllers/job.controller.js";

const router = Router();

// Api end points (Admin Api's)
router.post("/admin/jobs", createJobs);
router.put("/admin/jobs/:id", updateJobs);
router.delete("/admin/jobs/:id", deleteJobs);

// User Api
router.get("/jobs", getJobs);

// export router
export default router;