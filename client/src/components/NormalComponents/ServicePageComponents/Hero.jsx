// const Hero = () => {
//     //     return (
//     //         <main className="p-0">
//     //             <section className="relative text-center flex flex-col items-center justify-center min-h-screen text-white overflow-hidden
//     // bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]">

//     //                 {/* Floating Shapes */}
//     //                 <div className="absolute inset-0 z-[1] overflow-hidden">

//     //                     <div className="absolute top-[10%] left-[10%] w-[60px] h-[60px] rounded-full opacity-10 
//     //           bg-gradient-to-br from-[#ff6b35] to-[#f7931e] animate-float"></div>

//     //                     <div className="absolute top-[20%] right-[15%] w-[40px] h-[40px] rounded-[20%] opacity-10 
//     //           bg-gradient-to-br from-[#667eea] to-[#764ba2] animate-float delay-[1000ms]"></div>

//     //                     <div className="absolute bottom-[30%] left-[20%] w-[50px] h-[50px] rounded-[10px] opacity-10 
//     //           bg-gradient-to-br from-[#f7931e] to-[#ff6b35] animate-float delay-[2000ms]"></div>

//     //                     <div className="absolute bottom-[10%] right-[10%] w-[70px] h-[70px] rounded-full opacity-10 
//     //           bg-gradient-to-br from-[#764ba2] to-[#667eea] animate-float delay-[3000ms]"></div>

//     //                     <div className="absolute top-[40%] left-[5%] w-[35px] h-[35px] rounded-full opacity-10 
//     //           bg-gradient-to-br from-[#ff6b35] to-[#667eea] animate-float delay-[4000ms]"></div>

//     //                     <div className="absolute top-[60%] right-[25%] w-[45px] h-[45px] rounded-[15px] opacity-10 
//     //           bg-gradient-to-br from-[#f7931e] to-[#764ba2] animate-float delay-[5000ms]"></div>
//     //                 </div>

//     //                 {/* Content */}
//     //                 <div className="relative z-[2] max-w-7xl mx-auto px-6">

//     //                     <h1 className="text-3xl sm:text-5xl md:text-7xl mb-5 font-bold
//     // bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-slideDown">

//     //                         Powering Careers & Businesses with

//     //                         <span className="block mt-4 md:mt-6">
//     //                             Future-Ready Technology
//     //                         </span>

//     //                     </h1>

//     //                     <p className="text-lg md:text-2xl mb-6 opacity-90 animate-fadeUp">
//     //                         Cloud • AI • Software • IT Consulting • Career Enablement
//     //                     </p>

//     //                     <p className="text-lg max-w-[800px] mx-auto mb-10 opacity-80 leading-8 animate-fadeUp delay-300">
//     //                         Edurech Technology is a next-generation IT consulting and career
//     //                         enablement company helping students, professionals, and businesses
//     //                         succeed in the digital era. From cloud-native development and AI-driven solutions to staffing,
//     //                         resume marketing, and interview readiness — we don’t just provide
//     //                         services, we deliver outcomes.
//     //                     </p>
//     //                 </div>
//     //             </section>
//     //         </main>
//     //     );

import { Brain, Cloud, Code } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative pt-22 md:pt-10 min-h-screen flex items-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] overflow-hidden">


            {/* Floating Glow */}
            <div className="absolute inset-0 z-[1]">
                <div className="absolute top-[10%] left-[10%] w-16 h-16 rounded-full bg-orange-400/10 blur-xl animate-pulse"></div>
                <div className="absolute top-[30%] right-[15%] w-24 h-24 rounded-full bg-purple-500/10 blur-xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-[20%] left-[20%] w-20 h-20 rounded-full bg-orange-300/10 blur-xl animate-pulse delay-2000"></div>
            </div>

            {/* Main Layout */}
            <div className="relative z-[2] px-6 md:px-16 max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT CONTENT */}
                <div>
                    {/* Badge */}
                    <div className="inline-block bg-[#0b1a2e] border border-white/10 px-4 py-2 rounded-full mb-6">
                        <p className="text-orange-400 text-xs tracking-widest">
                            OUR CAPABILITIES
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] text-[#cbd5f5]">
                        Forging the{" "}
                        <span className="text-orange-400">Digital</span>
                        <br />
                        <span className="text-orange-400">Future.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-gray-400 mt-6 max-w-xl text-lg leading-relaxed">
                        We deliver specialized technology services designed to scale your
                        vision. From precision-engineered software to data-driven AI models,
                        we are the vanguard of your digital transformation.
                    </p>

                    {/* CTA */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={() => {
                                navigate("/contact-page")
                                window.scrollTo(0, 0);
                            }}
                            className="px-6 py-3 bg-orange-400 cursor-pointer text-black font-semibold rounded-xl hover:bg-orange-300 transition">
                            Get Started
                        </button>
                        <button
                            onClick={() => {
                                navigate("/contact-page")
                                window.scrollTo(0, 0);
                            }}
                            className="px-6 py-3 border cursor-pointer border-white/20 text-white rounded-xl hover:bg-white/10 transition">
                            Learn More
                        </button>
                    </div>
                </div>

                {/* RIGHT VISUAL */}
                <div className="relative hidden md:block">

                    {/* Glow */}
                    <div className="absolute -inset-10 bg-orange-500/10 blur-3xl rounded-full"></div>

                    {/* Card */}
                    <div className="relative bg-[#0b1a2e]/80 border border-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl space-y-5">

                        <div className="flex items-center gap-4">
                            <Brain className="text-orange-400" />
                            <div>
                                <p className="text-white font-semibold">AI Solutions</p>
                                <p className="text-gray-400 text-sm">Smart Automation</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Cloud className="text-purple-400" />
                            <div>
                                <p className="text-white font-semibold">Cloud Services</p>
                                <p className="text-gray-400 text-sm">Scalable Infra</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Code className="text-blue-400" />
                            <div>
                                <p className="text-white font-semibold">Development</p>
                                <p className="text-gray-400 text-sm">Modern Apps</p>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;