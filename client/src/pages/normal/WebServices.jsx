import WebDevHero from "../../components/NormalComponents/ServicePageComponents/web-devlopment/WebDevHero"
import CoreEssentials from "../../components/NormalComponents/ServicePageComponents/web-devlopment/CoreEssentials"
import WhyUs from "../../components/NormalComponents/ServicePageComponents/web-devlopment/WhyUs"
import CTA from "../../components/NormalComponents/ServicePageComponents/CTA"
import WebDevTechTools from "../../components/NormalComponents/ServicePageComponents/web-devlopment/WebDevTechTools"

const WebServices = () => {
    return (
        <main className="bg-[#020c1b] text-white pt-14 md:pt-5 min-h-screen">
            <WebDevHero />
            <CoreEssentials />
            <WhyUs />
            <WebDevTechTools/>
            <CTA />
        </main>
    )
}

export default WebServices