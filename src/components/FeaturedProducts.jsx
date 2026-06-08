const products = [
    {
        name: "Megóhmetro digital",
        category: "Equipo de medición",
        description: "Equipo para pruebas de aislamiento y verificación eléctrica.",
        type: "Venta",
    },
    {
        name: "Pinza amperimétrica",
        category: "Instrumento eléctrico",
        description: "Medición de corriente, voltaje y diagnóstico eléctrico.",
        type: "Venta",
    },
    {
        name: "Multímetro digital",
        category: "Instrumento de medición",
        description: "Herramienta esencial para trabajos eléctricos y mantenimiento.",
        type: "Venta",
    },
    {
        name: "Cámara termográfica",
        category: "Diagnóstico térmico",
        description: "Ideal para inspección térmica, mantenimiento y prevención de fallas.",
        type: "Alquiler",
    },
    {
        name: "Telurómetro",
        category: "Pruebas eléctricas",
        description: "Equipo para medición de puesta a tierra y seguridad eléctrica.",
        type: "Alquiler",
    },
    {
        name: "Analizador de redes",
        category: "Calidad de energía",
        description: "Monitoreo y análisis de parámetros eléctricos industriales.",
        type: "Alquiler",
    },
]

function FeaturedProducts() {
    return (
        <section className="bg-white px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                            Equipos destacados
                        </p>
                        <h2 className="text-3xl font-extrabold md:text-4xl">
                            Productos para venta y alquiler
                        </h2>
                        <p className="mt-4 max-w-2xl text-lg text-gray-600">
                            Estos son algunos equipos que podemos atender para venta, alquiler o cotización técnica.
                        </p>
                    </div>

                    <a
                        href="#contacto"
                        className="inline-block rounded-md bg-[#ED7D31] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#d96d24]"
                    >
                        Consultar disponibilidad
                    </a>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((product) => (
                        <article
                            key={product.name}
                            className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-5 flex h-48 items-center justify-center rounded-lg bg-[#F7F7F7]">
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#FFF5EC] text-4xl">
                                        ⚙️
                                    </div>
                                    <p className="text-sm font-bold text-[#ED7D31]">{product.type}</p>
                                </div>
                            </div>

                            <p className="text-sm font-bold uppercase tracking-wide text-[#ED7D31]">
                                {product.category}
                            </p>
                            <h3 className="mt-2 text-xl font-extrabold">{product.name}</h3>
                            <p className="mt-3 text-gray-600">{product.description}</p>

                            <a
                                href="#contacto"
                                className="mt-6 inline-block rounded-md border border-[#ED7D31] px-5 py-3 font-semibold text-[#ED7D31] transition hover:bg-[#ED7D31] hover:text-white"
                            >
                                Cotizar
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts