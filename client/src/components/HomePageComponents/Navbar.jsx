import { useState, useEffect } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
        ? "bg-[#0a0a0a]/95 shadow-[0_2px_20px_rgba(255,107,0,0.1)] backdrop-blur-md"
        : "bg-[#0a0a0a]/90 backdrop-blur-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center relative overflow-hidden">
            <span className="text-white font-bold">E</span>

            {/* pulse square */}
            <div className="absolute w-4 h-4 bg-white rounded animate-pulse"></div>
          </div>

          <span className="uppercase tracking-wider text-white text-lg">
            EDURECH TECHNOLOGY
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">

          <li className="group relative cursor-pointer">
            <a href="home" className="text-white hover:text-orange-500 transition">
              Home
            </a>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative cursor-pointer">
            <a href="service-page" className="text-white hover:text-orange-500 transition">
              Services
            </a>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative cursor-pointer">
            <a href="about-page" className="text-white hover:text-orange-500 transition">
              About
            </a>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

          <li className="group relative cursor-pointer">
            <a href="contact-page" className="text-white hover:text-orange-500 transition">
              Contact
            </a>
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-[3px] bg-orange-500"></span>
          <span className="w-6 h-[3px] bg-orange-500"></span>
          <span className="w-6 h-[3px] bg-orange-500"></span>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0a0a0a]/95 backdrop-blur-md transition-all duration-300 overflow-hidden
        ${open ? "max-h-60 py-4" : "max-h-0"}`}
      >
        <ul className="flex flex-col items-center gap-6">

          <li>
            <a href="home" onClick={() => setOpen(false)} className="text-white hover:text-orange-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="service-page" onClick={() => setOpen(false)} className="text-white hover:text-orange-500 transition">
              Services
            </a>
          </li>

          <li>
            <a href="about-page" onClick={() => setOpen(false)} className="text-white hover:text-orange-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="contact-page" onClick={() => setOpen(false)} className="text-white hover:text-orange-500 transition">
              Contact
            </a>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;
