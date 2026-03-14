import React from "react";

const Topbar = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <h2 className="text-xl font-semibold text-slate-800">Jobs</h2>

      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-64 px-3 py-2 border rounded-lg bg-slate-50 text-sm"
        />

        <button className="p-2 hover:bg-slate-100 rounded-full">
          🔔
        </button>
      </div>
    </header>
  );
};

export default Topbar;