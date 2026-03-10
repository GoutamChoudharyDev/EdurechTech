import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/normal/HomePage"
import AboutPage from "./pages/normal/AboutPage"
import CareerPage from "./pages/normal/CareerPage"
import ServicePage from "./pages/normal/ServicePage"

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