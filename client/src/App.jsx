import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/normal/HomePage"
import AboutPage from "./pages/normal/AboutPage"
import CareerPage from "./pages/normal/CareerPage"
import ServicePage from "./pages/normal/ServicePage"
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard"
import CreateJob from "./pages/admin/CreateJob"
import EditJob from "./pages/admin/EditJob"
import ApplicationsPage from "./pages/admin/ApplicationsPage"
import JobApplicationForm from "./pages/normal/JobApplicationForm"
import ContactPage from "./pages/normal/ContactPage"
import ContactInformation from "./pages/admin/ContactInformation"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/career-page" element={<CareerPage />} />
      <Route path="/service-page" element={<ServicePage />} />
      <Route path="/job-application/:id" element={<JobApplicationForm />} />
      <Route path="/contact-page" element={<ContactPage />} />

      {/* Admin routes */}
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/admin/create-job" element={<CreateJob />} />
      <Route path="/admin/edit-job/:id" element={<EditJob />} />
      <Route path="/admin/applications" element={<ApplicationsPage />} />
      <Route path="/admin/contact" element={<ContactInformation />} />
    </Routes >
  )
}

export default App