import Header from "../../components/NormalComponents/ServicePageComponents/Header"
import Hero from "../../components/NormalComponents/ServicePageComponents/Hero"
import Stats from "../../components/NormalComponents/ServicePageComponents/Stats"
import Footer from "../../components/NormalComponents/HomePageComponents/Footer"
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"
import Services from "../../components/NormalComponents/ServicePageComponents/Services"

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
