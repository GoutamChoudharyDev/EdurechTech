const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2c3e50] to-[#34495e] text-white pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6">

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              About Edurech Technology
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Leading the way in digital transformation, career development,
              and technology solutions. We empower individuals and businesses
              to achieve their full potential in the digital age.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              Our Services
            </h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Digital Marketing Solutions",
                "Profile & Personal Branding",
                "Professional Resume Writing",
                "Interview Coaching",
                "Web Development",
                "IT Support & Consulting",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-500 cursor-pointer transition"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Home",
                "About Us",
                "Services",
                "Portfolio",
                "Blog",
                "Contact",
                "Career Opportunities",
              ].map((link, i) => (
                <li
                  key={i}
                  className="hover:text-orange-500 cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-5">
              Get In Touch
            </h3>

            <div className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-xl">

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📧</span>
                <span className="text-gray-200">info@edurechtech.com</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📞</span>
                <span className="text-gray-200">+1(408)709-5143</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📍</span>
                <span className="text-gray-200">California US</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">in</span>
                <a
                  href="https://linkedin.com/company/edurech-technology"
                  target="_blank"
                  className="hover:text-orange-500 transition"
                >
                  LinkedIn
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">📷</span>
                <a
                  href="https://www.instagram.com/edurechtechnology/"
                  target="_blank"
                  className="hover:text-orange-500 transition"
                >
                  Instagram
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-gray-400 text-sm">
          © 2025 Edurech Technology. All rights reserved. | Designed with ❤️ for your success
        </div>

      </div>
    </footer>
  );
};

export default Footer;
