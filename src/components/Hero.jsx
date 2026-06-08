function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#231F20]">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
                    alt="Técnico industrial trabajando con equipos"
                    className="h-full w-full object-cover opacity-25"
                />
            </div>

            <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center px-5 py-20 lg:grid-cols-2 lg:px-8">
                <div>
                    <p className="mb-5 inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-[#FFDD55]">
                        Soluciones técnicas industriales
                    </p>

                    <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
                        Soluciones técnicas para equipos, energía y mantenimiento industrial
                    </h1>

                    <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
                        Venta, alquiler, calibración, verificación y mantenimiento preventivo/correctivo
                        para empresas e industrias en Lima y todo el Perú.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                        <a
                            href="#servicios"
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
            </div>
        </section>
    )
}

export default Hero