import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/normal/HomePage"
import AboutPage from "./pages/normal/AboutPage"
import CareerPage from "./pages/normal/CareerPage"
import ServicePage from "./pages/normal/ServicePage"
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard"
import CreateJob from "./pages/admin/CreateJob"
import JobApplicationForm from "./pages/normal/JobApplicationForm"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/career-page" element={<CareerPage />} />
      <Route path="/service-page" element={<ServicePage />} />
      <Route path="/job-application/:id" element={<JobApplicationForm />} />

      {/* Admin routes */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin/create-job" element={<CreateJob />} />
    </Routes >
  )
}

export default App