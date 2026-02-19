const Hero = () => {
    return (
        <main className="p-0">
            <section className="relative text-center py-[120px] text-white overflow-hidden
bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617]">

                {/* Floating Shapes */}
                <div className="absolute inset-0 z-[1] overflow-hidden">

                    <div className="absolute top-[10%] left-[10%] w-[60px] h-[60px] rounded-full opacity-10 
          bg-gradient-to-br from-[#ff6b35] to-[#f7931e] animate-float"></div>

                    <div className="absolute top-[20%] right-[15%] w-[40px] h-[40px] rounded-[20%] opacity-10 
          bg-gradient-to-br from-[#667eea] to-[#764ba2] animate-float delay-[1000ms]"></div>

                    <div className="absolute bottom-[30%] left-[20%] w-[50px] h-[50px] rounded-[10px] opacity-10 
          bg-gradient-to-br from-[#f7931e] to-[#ff6b35] animate-float delay-[2000ms]"></div>

                    <div className="absolute bottom-[10%] right-[10%] w-[70px] h-[70px] rounded-full opacity-10 
          bg-gradient-to-br from-[#764ba2] to-[#667eea] animate-float delay-[3000ms]"></div>

                    <div className="absolute top-[40%] left-[5%] w-[35px] h-[35px] rounded-full opacity-10 
          bg-gradient-to-br from-[#ff6b35] to-[#667eea] animate-float delay-[4000ms]"></div>

                    <div className="absolute top-[60%] right-[25%] w-[45px] h-[45px] rounded-[15px] opacity-10 
          bg-gradient-to-br from-[#f7931e] to-[#764ba2] animate-float delay-[5000ms]"></div>
                </div>

                {/* Content */}
                <div className="relative z-[2] max-w-7xl mt-28 mx-auto">

                    <h1 className="text-2xl md:text-7xl mb-5 font-bold
bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent animate-slideDown">

                        Powering Careers & Businesses with

                        <span className="block mt-6 md:mt-10">
                            Future-Ready Technology
                        </span>

                    </h1>


                    <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fadeUp mt-11">
                        Cloud • AI • Software • IT Consulting • Career Enablement
                    </p>

                    <p className="text-lg max-w-[800px] mx-auto mb-10 opacity-80 leading-8 animate-fadeUp delay-300">
                        Edurech Technology is a next-generation IT consulting and career
                        enablement company helping students, professionals, and businesses
                        succeed in the digital era. From cloud-native development and AI-driven solutions to staffing,
                        resume marketing, and interview readiness — we don’t just provide
                        services, we deliver outcomes.
                    </p>

                </div>
            </section>
        </main>


    );
};

export default Hero;
