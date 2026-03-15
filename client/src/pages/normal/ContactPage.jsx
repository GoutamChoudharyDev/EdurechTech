import Navbar from "../../components/NormalComponents/HomePageComponents/Navbar"
import Contact from "../../components/NormalComponents/HomePageComponents/Contact"
import Footer from "../../components/NormalComponents/HomePageComponents/Footer"

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 md:pt-20">
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default ContactPage
