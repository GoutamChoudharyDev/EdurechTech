import { useState, useEffect } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "Services", link: "#services" },
    { name: "About", link: "#about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 text-white
      bg-gradient-to-r from-[#ff6b35] to-[#f7931e]
      shadow-[0_2px_20px_rgba(0,0,0,0.1)]
      transition-all duration-300`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-4 cursor-pointer">
          <div className="relative w-12 h-12 rounded-xl flex items-center justify-center
                          bg-gradient-to-br from-[#ff6b35] to-[#f7931e]">
            
            {/* White square inside logo */}
            <div className="absolute w-5 h-5 bg-white rounded-sm"></div>
          </div>

          <span className="text-2xl font-bold tracking-wide">
            EDURECH TECHNOLOGY
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="transition duration-300 hover:text-yellow-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-between w-7 h-5"
        >
          <span
            className={`h-[3px] rounded bg-[#ff6b35] transition-all ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] rounded bg-[#ff6b35] transition-all ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`h-[3px] rounded bg-[#ff6b35] transition-all ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden text-center bg-black/95 backdrop-blur-md
        transition-all duration-300 overflow-hidden
        ${open ? "max-h-60 py-6" : "max-h-0"}`}
      >
        {navLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            onClick={() => setOpen(false)}
            className="block py-2 hover:text-[#ff6b35] transition"
          >
            {item.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
