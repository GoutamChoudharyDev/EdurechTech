import { Contact } from "../models/contact.model.js";

// Controller function to handle contact form submission
const submitContactForm = async (req, res) => {
    try {
        // take data from frontend
        const { name, email, contactNumber, service, message } = req.body;

        // validation
        if (!name || !email || !contactNumber || !service || !message) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // create a new contact document
        const contact = await Contact.create({
            name,
            email,
            contactNumber,
            service,
            message
        })

        // validation
        if (!contact) {
            return res.status(400).json({
                message: "contact form submition failed!"
            })
        }

        // return response
        return res.status(200).json({
            success: true,
            message: "contact form subimitted successfully!",
            contact
        })
    } catch (error) {
        return res.status(500).json({
            message: "Server error during contact form"
        });
    }

}

export { submitContactForm };   