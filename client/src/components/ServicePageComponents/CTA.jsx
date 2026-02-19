const CTA = () => {
  return (
    <section className="py-20 text-white text-center bg-[#0a0a0a]">

      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-[2.5rem] font-bold mb-5 animate-fadeUp">
          Ready to Take the Next Step?
        </h2>

        {/* Text */}
        <p className="text-[1.2rem] mb-10 opacity-90 animate-fadeUp delay-200">
          Join thousands of professionals who have transformed their careers with our expert guidance and cutting-edge solutions.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-5 flex-wrap animate-fadeUp delay-300">

          {/* Primary */}
          <a
            href="#services"
            className="
            bg-gradient-to-br from-[#ff6b35] to-[#f7931e]
            px-[35px] py-[15px]
            rounded-[30px]
            font-semibold text-[1.1rem]
            transition-all duration-300
            hover:-translate-y-[3px]
            hover:shadow-[0_10px_25px_rgba(255,107,53,0.4)]
            inline-block"
          >
            Explore Services
          </a>

          {/* Secondary */}
          <a
            href="#contact"
            className="
            bg-transparent
            border-2 border-white
            px-[35px] py-[15px]
            rounded-[30px]
            font-semibold text-[1.1rem]
            transition-all duration-300
            hover:bg-white hover:text-[#333]
            hover:-translate-y-[3px]
            hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]
            inline-block"
          >
            Get Free Consultation
          </a>

        </div>
      </div>
    </section>
  );
};

export default CTA;
