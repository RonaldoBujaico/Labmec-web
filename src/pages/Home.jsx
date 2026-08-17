import Hero from "../components/Hero"
import WhyChooseUs from "../components/WhyChooseUs"
import TechnicalServices from "../components/TechnicalServices"
import FeaturedProducts from "../components/FeaturedProducts"
import ProcessSection from "../components/ProcessSection"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import FadeInOnScroll from "../components/FadeInOnScroll";

export default function Home() {
    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                {/* 1. Impacto inicial */}
                <Hero />

                {/* 2. ¿Quiénes somos / Por qué elegirnos? */}
                <WhyChooseUs />

                {/* 3. Servicios Técnicos principales (Mantenimiento, Calibración, etc.) */}
                <TechnicalServices />

                {/* 4. Muestra de Equipos Destacados (Venta y Alquiler) */}
                <FeaturedProducts />

                {/* 5. Cómo trabajamos */}
                <ProcessSection />

                {/* 6. Llamado a la acción final dinámico (sin cargar el formulario pesado) */}
                <section className="bg-[#231F20] px-5 py-16 text-white lg:px-8">
                    <div className="mx-auto max-w-7xl text-center">
                        <h2 className="text-3xl font-extrabold md:text-4xl">
                            ¿Tienes un requerimiento técnico o necesitas cotizar?
                        </h2>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
                            Nuestro equipo está listo para asesorarte en la adquisición, alquiler o servicio técnico para tus equipos.
                        </p>
                        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="https://wa.me/51977193979?text=Hola,%20deseo%20cotizar%20un%20servicio%20o%20equipo."
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-[#ED7D31] px-8 py-3.5 font-bold text-white transition hover:bg-[#d96d24]"
                            >
                                Cotizar por WhatsApp
                            </a>
                            <a
                                href="/contacto"
                                className="rounded-md border border-white px-8 py-3.5 font-bold text-white transition hover:bg-white hover:text-[#231F20]"
                            >
                                Ir a Contacto
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}