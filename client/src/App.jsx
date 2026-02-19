import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import CareerPage from "./pages/CareerPage"
import ServicePage from "./pages/ServicePage"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about-page" element={<AboutPage />} />
      <Route path="/career-page" element={<CareerPage />} />
      <Route path="service-page" element={<ServicePage />} />
    </Routes>
  )
}

export default App
