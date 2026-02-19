const services = [
    {
        icon: "🚀",
        title: "Digital Marketing",
        desc: "Boost your online presence with our comprehensive digital marketing strategies.",
        features: [
            "Search Engine Optimization (SEO)",
            "Social Media Marketing",
            "Pay-Per-Click Advertising",
            "Content Marketing Strategy",
            "Email Marketing Campaigns",
        ],
        btn: "Learn More",
    },
    {
        icon: "👤",
        title: "Profile Marketing",
        desc: "Build a strong professional brand with our profile marketing services.",
        features: [
            "LinkedIn Profile Optimization",
            "Personal Brand Strategy",
            "Professional Photography",
            "Content Creation & Curation",
            "Network Building Strategies",
        ],
        btn: "Get Started",
    },
    {
        icon: "💻",
        title: "Web Development",
        desc: "Create stunning responsive websites using modern technologies.",
        features: [
            "Custom Website Development",
            "E-commerce Solutions",
            "Mobile-Responsive Design",
            "CMS Integration",
            "Website Maintenance",
        ],
        btn: "View Projects",
    },
    {
        icon: "☁️",
        title: "Cloud Development",
        desc: "Secure cloud-native solutions for scalable business applications.",
        features: [
            "AWS, Azure & Google Cloud",
            "Architecture Design",
            "Migration & Deployment",
            "DevOps & CI/CD",
            "Cloud Monitoring",
        ],
        btn: "Explore Cloud",
    },
    {
        icon: "📱",
        title: "Mobile App Development",
        desc: "High-performance mobile applications across platforms.",
        features: [
            "Android & iOS",
            "Flutter & React Native",
            "UI/UX Design",
            "API Integration",
            "App Maintenance",
        ],
        btn: "View Apps",
    },
    {
        icon: "🤖",
        title: "AI & Machine Learning",
        desc: "Intelligent automation and predictive AI solutions.",
        features: [
            "Predictive Analytics",
            "ML Models",
            "Automation",
            "NLP",
            "Computer Vision",
        ],
        btn: "Discover AI",
    },
    {
        icon: "📊",
        title: "Data Engineering & Analytics",
        desc: "Convert raw data into actionable insights with scalable data pipelines and analytics solutions.",
        features: [
            "Data Pipeline Development",
            "ETL & Data Warehousing",
            "Business Intelligence Dashboards",
            "Big Data Processing",
            "Data Visualization",
        ],
        btn: "Analyze Data",
    },
    {
        icon: "⚙️",
        title: "IT Services",
        desc: "Comprehensive IT solutions to keep your business running smoothly. From infrastructure setup to ongoing support, we've got you covered.",
        features: [
            "Network Setup & Management",
            "Cloud Solutions",
            "Cybersecurity Services",
            "IT Consulting",
            "24/7 Technical Support",
        ],
        btn: "Get Support",
    },
];

const Services = () => {
    return (
        <section id="services" className="bg-white text-black pt-24 pb-28 rounded-t-[40px]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 relative">
                    What We Offer
                    <span className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-20 h-1 rounded bg-gradient-to-r from-[#ff6b35] to-[#f7931e]"></span>
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="
                group relative bg-white p-10 rounded-2xl overflow-hidden
                shadow-[0_10px_30px_rgba(0,0,0,0.1)]
                border-2 border-transparent
                transition-all duration-300
                hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]
                hover:border-[#ff6b35]
                animate-fadeUp
              "
                        >

                            {/* Top gradient bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r from-[#ff6b35] to-[#f7931e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                            {/* Icon */}
                            <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center text-2xl text-white mb-6
                bg-gradient-to-br from-[#ff6b35] to-[#f7931e] animate-bounce">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-3 text-[#333]">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#666] leading-7 mb-5">
                                {service.desc}
                            </p>

                            {/* Features */}
                            <ul className="space-y-2 mb-6">
                                {service.features.map((f, i) => (
                                    <li key={i} className="relative pl-5 text-[#555]">
                                        <span className="absolute left-0 text-[#ff6b35] font-bold">✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Button */}
                            <a
                                href="#"
                                className="inline-block px-6 py-2 rounded-full text-white font-semibold
                  bg-gradient-to-r from-[#ff6b35] to-[#f7931e]
                  transition hover:scale-105
                  hover:shadow-[0_5px_15px_rgba(255,107,53,0.4)]"
                            >
                                {service.btn}
                            </a>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;
