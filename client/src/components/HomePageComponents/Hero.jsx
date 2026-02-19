const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center pt-[120px] text-center
      bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] overflow-hidden"
    >
      {/* grid background */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(#ff6b00_1px,transparent_1px),linear-gradient(90deg,#ff6b00_1px,transparent_1px)] bg-[size:40px_40px] animate-[gridMove_20s_linear_infinite]" />

      {/* particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute w-[4px] h-[4px] bg-orange-500 rounded-full animate-[float_6s_ease-in-out_infinite]"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* content */}
      <div className="relative z-10 max-w-3xl px-6 animate-[slideInUp_1s_ease-out]">

        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
          Transform Your Digital Future
        </h1>

        <p className="text-gray-300 text-lg mb-10">
          Leading IT services and consulting company specializing in cutting-edge technology solutions
        </p>

        {/* buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold text-white
            bg-gradient-to-r from-orange-500 to-orange-400
            hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,107,0,0.4)]
            transition-all duration-300"
          >
            Book Your Expert Call
          </a>

          <a
            href="#contact"
            className="px-8 py-3 rounded-full font-semibold text-orange-500 border-2 border-orange-500
            hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,107,0,0.25)]
            transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* custom animations */}
      <style>
        {`
          @keyframes slideInUp {
            from { opacity:0; transform: translateY(30px); }
            to { opacity:1; transform: translateY(0); }
          }

          @keyframes float {
            0%,100% { transform: translateY(0px); opacity:0; }
            50% { transform: translateY(-100px); opacity:1; }
          }

          @keyframes gridMove {
            0% { transform: translate(0,0); }
            100% { transform: translate(40px,40px); }
          }
        `}
      </style>
    </section>
  );
};

export default Hero;
