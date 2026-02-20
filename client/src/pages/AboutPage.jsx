import Header from '../components/ServicePageComponents/Header'
import Footer from '../components/HomePageComponents/Footer'
import Hero from '../components/AboutPageComponents/Hero'
import About from '../components/AboutPageComponents/About'
import MissionVision from '../components/AboutPageComponents/MissionVision'
import Values from '../components/AboutPageComponents/Values'
import Team from '../components/AboutPageComponents/Team'
import Testimonials from '../components/AboutPageComponents/Testimonials'

const AboutPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <MissionVision />
      <Values />
      <Team />
      <Testimonials />
      <Footer />
    </>
  )
}

export default AboutPage
