import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/normal/HomePage"
import AboutPage from "./pages/normal/AboutPage"
import CareerPage from "./pages/normal/CareerPage"
import ServicePage from "./pages/normal/ServicePage"
import AdminLogin from "./pages/admin/AdminLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/career-page" element={<CareerPage />} />
      <Route path="service-page" element={<ServicePage />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  )
}

export default App