import Navbar from "../components/HomePageComponents/Navbar"
import Hero from "../components/HomePageComponents/Hero"
import Services from "../components/HomePageComponents/Services"
import About from "../components/HomePageComponents/About"
import Contact from "../components/HomePageComponents/Contact"
import Footer from "../components/HomePageComponents/Footer"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-5 md:pt-3">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
