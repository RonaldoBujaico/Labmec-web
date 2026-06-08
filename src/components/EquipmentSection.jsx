const equipmentItems = [
    {
        title: "Venta de equipos",
        description:
            "Equipos industriales, instrumentos de medición, accesorios y repuestos para empresas, laboratorios e industrias.",
        button: "Ver equipos en venta",
        image:
            "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=900&q=80",
    },
    {
        title: "Alquiler de equipos",
        description:
            "Soluciones temporales para trabajos técnicos, pruebas eléctricas, mantenimiento y mediciones especializadas.",
        button: "Cotizar alquiler",
        image:
            "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80",
    },
]

const productCategories = [
    "Megóhmetros",
    "Multímetros",
    "Pinzas amperimétricas",
    "Telurómetros",
    "Analizadores de redes",
    "Cámaras termográficas",
    "Calibradores de procesos",
    "Accesorios y repuestos",
]

function EquipmentSection() {
    return (
        <section className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                            Equipos
                        </p>
                        <h2 className="text-3xl font-extrabold md:text-4xl">
                            Venta y alquiler de equipos técnicos
                        </h2>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-600">
                        Contamos con soluciones para empresas que necesitan comprar, alquilar o consultar
                        por equipos de medición, prueba, control y mantenimiento industrial.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    {equipmentItems.map((item) => (
                        <article
                            key={item.title}
                            className="overflow-hidden rounded-xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="h-72 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-7">
                                <h3 className="text-2xl font-extrabold">{item.title}</h3>
                                <p className="mt-3 text-gray-600">{item.description}</p>
                                <a
                                    href="#contacto"
                                    className="mt-6 inline-block rounded-md bg-[#ED7D31] px-6 py-3 font-semibold text-white transition hover:bg-[#d96d24]"
                                >
                                    {item.button}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-12 rounded-xl bg-white p-7 shadow-sm">
                    <h3 className="text-2xl font-extrabold">Categorías disponibles</h3>
                    <p className="mt-3 text-gray-600">
                        Estas son algunas de las categorías que podemos atender para venta, alquiler,
                        mantenimiento o consulta técnica.
                    </p>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {productCategories.map((category) => (
                            <div
                                key={category}
                                className="rounded-lg border border-gray-100 bg-[#F7F7F7] px-4 py-3 font-semibold"
                            >
                                {category}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EquipmentSection