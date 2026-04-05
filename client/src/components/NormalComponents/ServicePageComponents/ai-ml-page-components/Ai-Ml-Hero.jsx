import React from "react";
import { ArrowRight } from "lucide-react";

const AiMlHero = () => {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#020617] via-[#020617] to-[#0f172a] px-6 pt-24 pb-6 md:pt-6 md:px-16">
      <div className="max-w-[1250px] mx-auto w-full grid md:grid-cols-2 gap-6  items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <div className="inline-block bg-[#0b1a2e] border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="text-xs text-gray-300">
              NEXT-GEN INTELLIGENCE
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] text-gray-200">
            Intelligent{" "}
            <span className="text-orange-500">Systems</span> for{" "}
            Tomorrow’s Business.
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-400 max-w-lg">
            We bridge the gap between complex data and actionable intelligence.
            Edurech Technologies builds bespoke AI solutions that automate
            decisions and accelerate growth.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-orange-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-orange-300 transition flex items-center gap-2">
              Explore Solutions <ArrowRight size={18} />
            </button>

            <button className="border border-white/10 px-6 py-3 rounded-xl text-gray-300 hover:border-orange-400 hover:text-white transition">
              View Process
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                        src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                        alt="Web Development"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* subtle glow behind image */}
                <div className="absolute -inset-2 bg-orange-500/10 blur-2xl rounded-2xl -z-10">
                </div>
            </div>
      </div>
    </section>
  );
};

export default AiMlHero;