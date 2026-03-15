import { Link } from "react-router-dom";

const Sidebar = ({ open }) => {
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
          className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white"
        >
          Job Listings
        </Link>

        <Link
          to="/admin/applications"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
        >
          Job Applications
        </Link>

        <Link
          to="/admin/contact"
          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800"
        >
          Contact Information
        </Link>
      </nav>

      {/* Profile */}
      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold">
            AD
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Admin User
            </p>
            <p className="text-xs text-slate-500">
              Super Admin
            </p>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;