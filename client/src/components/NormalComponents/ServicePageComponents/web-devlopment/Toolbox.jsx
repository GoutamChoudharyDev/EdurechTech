import { Code, Database, Cloud, Layers } from "lucide-react";

const Toolbox = () => {
  const tools = [
    { title: "HTML", subtitle: "HTML5", icon: Code },
    { title: "CSS", subtitle: "CSS3", icon: Code },
    { title: "JS", subtitle: "JavaScript", icon: Code },
    { title: "SQL & Data", subtitle: "SQL & Data", icon: Database },
    { title: "Cloud Services", subtitle: "Cloud Services", icon: Cloud },
    { title: "Modern Frameworks", subtitle: "Frameworks", icon: Layers },
  ];

  return (
    <section className="bg-[#020617] px-6 md:px-16 py-20">
      <div className="max-w-[1250px] mx-auto w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-3">
            Our Technology Toolbox
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We use industry-leading tools to ensure your website is modern, scalable, and powerful.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {tools.map((tool, index) => {
            const Icon = tool.icon;

            return (
              <div
                key={index}
                className="group bg-[#0b1a2e] border border-white/10 rounded-xl p-5 text-center hover:border-orange-400 hover:shadow-[0_0_20px_rgba(255,115,0,0.15)] transition"
              >
                <div className="flex justify-center mb-3">
                  <Icon className="text-orange-400 group-hover:scale-110 transition" />
                </div>

                <h3 className="text-sm font-semibold text-gray-200">
                  {tool.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1">
                  {tool.subtitle}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Toolbox;