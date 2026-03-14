import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/AdminComponents/Sidebar";
import Topbar from "../../components/AdminComponents/Topbar";
import JobCard from "../../components/AdminComponents/JobCard"

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <div className="p-8 overflow-y-auto">
          <div className="flex justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold">All Job Listings</h1>
              <p className="text-gray-500">
                Manage all current job openings.
              </p>
            </div>

            <button
              onClick={() => navigate("/admin/create-job")}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Create New Job
            </button>
          </div>

          <JobCard />
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;