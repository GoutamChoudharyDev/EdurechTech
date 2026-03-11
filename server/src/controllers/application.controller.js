import { Application } from "../models/application.model.js"
import { Job } from "../models/job.model.js";

// create job apply controller
const applyJobs = async (req, res) => {
    try {
        // get job id(req.params)
        const { id } = req.params;

        // get data from frontend (req.body)
        const { name, phone, email, experience, resume } = req.body;

        // validation
        if (!name || !phone || !email || !experience) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        // check jobs exists
        const job = await Job.findById(id);

        if (!job) {
            return res.status(404).json({
                message: "Job not found"
            })
        }

        // store in DB
        const application = await Application.create({
            job: id,
            name,
            phone,
            email,
            experience,
            resume
        })

        // return response
        return res.status(201).json({
            message: "Job Applied successfully",
            application
        })
    } catch (error) {
        console.log("Error in job Applicatoion", error)
        return res.status(500).json({
            message: "Internal error during job Application"
        })
    }
}

// export
export { applyJobs }