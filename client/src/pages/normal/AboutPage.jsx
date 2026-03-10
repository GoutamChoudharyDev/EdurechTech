import Header from '../../components/NormalComponents/ServicePageComponents/Header'
import Footer from '../../components/NormalComponents/HomePageComponents/Footer'
import Hero from '../../components/NormalComponents/AboutPageComponents/Hero'
import About from '../../components/NormalComponents/AboutPageComponents/About'
import MissionVision from '../../components/NormalComponents/AboutPageComponents/MissionVision'
import Values from '../../components/NormalComponents/AboutPageComponents/Values'
import Team from '../../components/NormalComponents/AboutPageComponents/Team'
import Testimonials from '../../components/NormalComponents/AboutPageComponents/Testimonials'

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="pt-24 md:pt-12">
        <Hero />
        <About />
        <MissionVision />
        <Values />
        <Team />
        <Testimonials />
      </main>
      
      <Footer />
    </>
  )
}

export default AboutPage
