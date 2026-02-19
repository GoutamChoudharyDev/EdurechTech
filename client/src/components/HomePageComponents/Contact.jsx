const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#111111] text-white">

      {/* Title */}
      <h2 className="text-4xl md:text-5xl text-center font-bold mb-14 text-orange-500">
        Get In Touch
      </h2>

      {/* Form Card */}
      <form className="max-w-2xl mx-auto px-8 py-10 rounded-2xl
        bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a]
        space-y-6">

        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 transition-all duration-300"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 transition-all duration-300"
          />
        </div>

        {/* Mobile */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter your mobile"
            className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 transition-all duration-300"
          />
        </div>

        {/* Message */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full p-3 rounded-lg bg-[#0a0a0a] border border-[#333]
            focus:outline-none focus:border-orange-500 transition-all duration-300 resize-none"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-full font-semibold
          bg-gradient-to-r from-orange-500 to-orange-400
          hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,107,0,0.35)]
          transition-all duration-300"
        >
          Send Message
        </button>

      </form>
    </section>
  );
};

export default Contact;
