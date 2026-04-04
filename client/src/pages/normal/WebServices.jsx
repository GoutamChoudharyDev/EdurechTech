import WebDevHero from "../../components/NormalComponents/ServicePageComponents/web-devlopment/WebDevHero"
import CoreEssential from "../../components/NormalComponents/ServicePageComponents/web-devlopment/CoreEssentials"
import WhyUs from "../../components/NormalComponents/ServicePageComponents/web-devlopment/WhyUs"
import Toolbox from "../../components/NormalComponents/ServicePageComponents/web-devlopment/Toolbox"
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"

const WebServices = () => {
    return (
        <main className="bg-[#020c1b] text-white pt-14 md:pt-5 min-h-screen">
            <WebDevHero />
            <CoreEssential />
            <WhyUs />
            <Toolbox />
            <CTA />
        </main>
    )
}

export default WebServices