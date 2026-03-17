import { Link, useNavigate } from "react-router-dom";
import api from "../../service/api";

const Sidebar = ({ open }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await api.get("/api/admin/logout");
      navigate("/admin-login");
    } catch (error) {
      console.log("Logout Error:", error);
    }
  };

  return (
    <aside
      className={`
      fixed md:static top-0 left-0 z-40
      h-screen w-64 bg-slate-900 text-slate-300 flex flex-col
      transform transition-transform duration-300
      ${open ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0
      `}
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-white text-xl font-bold flex items-center gap-2">
          JobPortal Admin
        </h1>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <Link
          to="/admin-dashboard"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-800 text-white"
        >
          Job Listings
        </Link>

        <Link
          to="/admin/applications"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-800 text-white"
        >
          Job Applications
        </Link>

        <Link
          to="/admin/contact"
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-800 text-white"
        >
          Contact Information
        </Link>
      </nav>

      {/* Logout */}
      <div className="p-6 border-t border-slate-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 
    bg-gradient-to-r from-[#ff6b35] to-[#f7931e]
    text-white font-semibold 
    py-3 rounded-xl cursor-pointer
    transition-all duration-200 
    hover:shadow-lg hover:shadow-red-500/20 
    active:scale-95"
        >
          Logout
        </button>

        <p className="text-xs text-slate-500 text-center mt-2">
          End your admin session securely
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;