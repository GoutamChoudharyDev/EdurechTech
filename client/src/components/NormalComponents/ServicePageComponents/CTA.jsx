// const CTA = () => {
//   return (
//     <section className="md:py-15 py-12 text-white text-center bg-[#0a0a0a]">

//       <div className="max-w-5xl mx-auto px-6">

//         {/* Title */}
//         <h2 className="text-[2.5rem] font-bold mb-5 animate-fadeUp">
//           Ready to Take the Next Step?
//         </h2>

//         {/* Text */}
//         <p className="text-[1.2rem] mb-10 opacity-90 animate-fadeUp delay-200">
//           Join thousands of professionals who have transformed their careers with our expert guidance and cutting-edge solutions.
//         </p>

//         {/* Buttons */}
//         <div className="flex justify-center gap-5 flex-wrap animate-fadeUp delay-300">

//           {/* Primary */}
//           <a
//             href="#services"
//             className="
//             bg-gradient-to-br from-[#ff6b35] to-[#f7931e]
//             px-[35px] py-[15px]
//             rounded-[30px]
//             font-semibold text-[1.1rem]
//             transition-all duration-300
//             hover:-translate-y-[3px]
//             hover:shadow-[0_10px_25px_rgba(255,107,53,0.4)]
//             inline-block"
//           >
//             Explore Services
//           </a>

//           {/* Secondary */}
//           <a
//             href="#contact"
//             className="
//             bg-transparent
//             border-2 border-white
//             px-[35px] py-[15px]
//             rounded-[30px]
//             font-semibold text-[1.1rem]
//             transition-all duration-300
//             hover:bg-white hover:text-[#333]
//             hover:-translate-y-[3px]
//             hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)]
//             inline-block"
//           >
//             Get Free Consultation
//           </a>

//         </div>
//       </div>
//     </section>
//   );
// };

const CTA = () => {
  return (
    <section className="px-6 max-w-[1250px] mx-auto md:pt-20 md:pb-20 pt-6 pb-6 md:px-16">

      <div className="bg-[#0a0a0a] border border-orange-500 rounded-3xl p-10 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Build Your Future with{" "}
          <span className="text-orange-400">Edurech</span>
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl mx-auto">
          Partner with{" "}
          <span className="text-orange-400">Edurech Technology</span> to build
          scalable, modern, and future-ready digital solutions for your business.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button className="bg-orange-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-orange-300 transition">
            Start Your Project
          </button>

          <button className="border border-orange-500 px-6 py-3 rounded-xl text-white hover:bg-white/5 transition">
            View Our Portfolio
          </button>
        </div>

      </div>

    </section>
  );
};

export default CTA;