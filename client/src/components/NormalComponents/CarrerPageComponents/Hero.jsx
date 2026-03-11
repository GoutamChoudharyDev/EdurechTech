import { useState } from "react";

const Hero = () => {

    // fetch jobs

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        experience: "",
        resume: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            {/* Hero with Header overlaid */}
            <section
                className="relative h-[70vh] w-full flex items-center justify-center"
                style={{
                    backgroundImage: "url('/careerPage.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    minHeight: "420px",
                }}
            >

                {/* Careers title */}
                <h1
                    className="relative z-10 text-white font-bold"
                    style={{
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        letterSpacing: "0.02em",
                        textShadow: "0 2px 16px rgba(0,0,0,0.3)",
                    }}
                >
                    Careers
                </h1>
            </section>

            {/* Sub-heading */}
            <section className="text-center py-10">
                <h2 className="text-3xl font-bold text-gray-800">Career</h2>
                <p className="text-gray-500 mt-2 text-base">Job Opening in IT Company. Apply Now!</p>
            </section>

            {/* Career Form */}
            <div className="flex justify-center px-6 pb-20">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 space-y-6"
                >
                    <input type="text" name="name" placeholder="Name" required onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />

                    <input type="tel" name="phone" pattern="[0-9]{10}" maxLength="10"
                        placeholder="Contact number" required onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />

                    <input type="email" name="email" placeholder="Email" required onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />

                    <div>
                        <h2 className="font-semibold mb-3 text-gray-700">Apply For Which Post?</h2>

                        <div className="space-y-3">
                            {[
                                "Digital Marketer Expert",
                                "Business Development Associate",
                                "Talent Acquisition Expert (Staffing)",
                                "HR Executive",
                            ].map((job, index) => (
                                <label
                                    key={index}
                                    className="flex items-center gap-3 border border-gray-300 rounded-lg p-3 cursor-pointer
        transition-all duration-200
        hover:border-orange-400 hover:bg-orange-50
        peer-checked:border-orange-500"
                                >

                                    <span className="text-gray-700 peer-checked:text-orange-600 font-medium">
                                        {job}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <input type="number" name="experience" placeholder="Years of Experience" required
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400" />

                    {/* <textarea name="details" placeholder="Other Details" required rows={4}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none" /> */}

                    <div>
                        <h2 className="font-semibold mb-2 text-gray-700">Upload Your Resume</h2>
                        <input type="file" name="resume" accept=".doc,.docx,.pdf" onChange={handleChange}
                            className="text-sm text-gray-500" />
                    </div>

                    <button type="submit"
                        className="w-full bg-orange-500 text-white py-3 rounded-md font-semibold hover:bg-orange-600 transition">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Hero;