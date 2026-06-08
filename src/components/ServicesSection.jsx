const services = [
    {
        id: "venta-equipos",
        title: "Venta de equipos",
        text: "Comercializamos equipos industriales, instrumentos de medición, accesorios y repuestos.",
        image:
            "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "alquiler-equipos",
        title: "Alquiler de equipos",
        text: "Equipos disponibles para trabajos temporales, pruebas técnicas y operaciones especializadas.",
        image:
            "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "mantenimiento",
        title: "Mantenimiento preventivo y correctivo",
        text: "Diagnóstico, revisión, reparación y soporte para asegurar el funcionamiento de tus equipos.",
        image:
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "calibracion",
        title: "Calibración y verificación",
        text: "Servicios técnicos para instrumentos de medición usados en industria, electricidad y laboratorio.",
        image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: "servicios",
        title: "Servicios técnicos",
        text: "Soluciones eléctricas, asesoría técnica, diagnóstico y atención especializada para empresas.",
        image:
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    },
]

function ServicesSection() {
    return (
        <section className="bg-white px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                        Qué ofrecemos
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-4xl">
                        Soluciones para empresas e industrias
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Integramos venta, alquiler, mantenimiento y servicios técnicos para ayudarte a
                        mantener tu operación funcionando con seguridad y eficiencia.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <article
                            id={service.id}
                            key={service.title}
                            className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#231F20]/45"></div>
                                <div className="absolute bottom-0 left-0 p-5">
                                    <h3 className="text-2xl font-extrabold text-white">{service.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600">{service.text}</p>
                                <a
                                    href="#contacto"
                                    className="mt-5 inline-flex font-bold text-[#ED7D31] transition hover:text-[#231F20]"
                                >
                                    Solicitar información →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicesSection