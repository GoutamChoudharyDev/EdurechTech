import Header from "../components/ServicePageComponents/Header"
import Hero from "../components/ServicePageComponents/Hero"
import Stats from "../components/ServicePageComponents/Stats"
import Footer from "../components/HomePageComponents/Footer"
import CTA from "../components/ServicePageComponents/CTA"
import Services from "../components/ServicePageComponents/Services"

const ServicePage = () => {
  return (
    <div >
      <Header />
      <main className="pt-24 md:pt-12">
        <Hero />
        <Stats />
        <CTA />
        <Services />
      </main>

      <Footer />
    </div>
  )
}

export default ServicePage
