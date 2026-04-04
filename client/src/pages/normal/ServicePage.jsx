import Hero from "../../components/NormalComponents/ServicePageComponents/Hero"
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"
import Services from "../../components/NormalComponents/ServicePageComponents/Services"
// import Stats from "../../components/NormalComponents/ServicePageComponents/Stats"

const ServicePage = () => {
  return (
    <>
      <main className="bg-[#020c1b] text-white min-h-screen">
        <Hero />
        <Services />
        <CTA />
        {/* <Stats /> */}
      </main>
    </>
  )
}

export default ServicePage
