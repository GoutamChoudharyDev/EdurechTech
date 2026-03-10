import Navbar from "../../components/NormalComponents/HomePageComponents/Navbar"
import Hero from "../../components/NormalComponents/HomePageComponents/Hero"
import Services from "../../components/NormalComponents/HomePageComponents/Services"
import About from "../../components/NormalComponents/HomePageComponents/About"
import Contact from "../../components/NormalComponents/HomePageComponents/Contact"
import Footer from "../../components/NormalComponents/HomePageComponents/Footer"

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
