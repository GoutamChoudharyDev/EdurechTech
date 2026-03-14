import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
      <div className="p-6 border-b border-slate-800">
        <h1 className="text-white text-xl font-bold flex items-center gap-2">
          JobPortal Admin
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
          Dashboard
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg bg-blue-600 text-white">
          Job Listings
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
          Candidates
        </a>

        <a className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
          Settings
        </a>
      </nav>

      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-semibold">
            AD
          </div>
          <div>
            <p className="text-sm font-medium text-white">Admin User</p>
            <p className="text-xs text-slate-500">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;