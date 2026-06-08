import Header from "../components/Header"
import Hero from "../components/Hero"
import ServicesSection from "../components/ServicesSection"
import EquipmentSection from "../components/EquipmentSection"
import WhyChooseUs from "../components/WhyChooseUs"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import TechnicalServices from "../components/TechnicalServices"
import FeaturedProducts from "../components/FeaturedProducts"
import ProcessSection from "../components/ProcessSection"

function Home() {
    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />
            <main>
                <Hero />
                <ServicesSection />
                <EquipmentSection />
                <FeaturedProducts />
                <TechnicalServices />
                <WhyChooseUs />
                <ProcessSection />
                <section className="bg-[#231F20] px-6 py-20 text-center text-white">
                    <div className="mx-auto max-w-4xl">
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                            Atención especializada
                        </p>
                        <h2 className="text-3xl font-bold md:text-4xl">
                            ¿Necesitas equipos, mantenimiento o soporte técnico?
                        </h2>
                        <p className="mx-auto mt-5 max-w-2xl text-white/80">
                            En LABMEC ENERGÍA XXI EIRL te ayudamos con soluciones técnicas para empresas,
                            industrias y operaciones que requieren equipos confiables.
                        </p>
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="https://wa.me/51977193979?text=Hola,%20deseo%20solicitar%20una%20cotizaci%C3%B3n%20para%20LABMEC%20ENERG%C3%8DA%20XXI%20EIRL."
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-[#ED7D31] px-7 py-3 font-semibold text-white transition hover:bg-[#d96d24]"
                            >
                                Cotizar por WhatsApp
                            </a>
                            <a
                                href="mailto:oscarbujaico@gmail.com"
                                className="rounded-md border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#231F20]"
                            >
                                Enviar correo
                            </a>
                        </div>
                    </div>
                </section>
                <ContactSection />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Home