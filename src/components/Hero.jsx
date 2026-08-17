import FadeInOnScroll from "../components/FadeInOnScroll"

function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#231F20]">
            <div className="absolute inset-0">
                <img
                    src="/img/home.webp"
                    alt="Técnico industrial trabajando con equipos"
                    className="h-full w-full object-cover opacity-25"
                />
            </div>

            <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-20 lg:grid-cols-2 lg:px-8">
                <FadeInOnScroll>
                    <div>
                        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                            Soluciones técnicas para equipos, energía y mantenimiento.
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                            Venta, alquiler, calibración, verificación y mantenimiento preventivo/correctivo
                            para empresas e industrias en Lima y todo el Perú.
                        </p>

                        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                            <a
                                href="#ver-servicios"
                                className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:bg-[#d96d24]"
                            >
                                Ver servicios
                            </a>
                            <a
                                href="#contacto"
                                className="rounded-md border border-white px-7 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-[#231F20]"
                            >
                                Solicitar cotización
                            </a>
                        </div>
                    </div>
                </FadeInOnScroll>
            </div>
        </section>
    )
}

export default Hero