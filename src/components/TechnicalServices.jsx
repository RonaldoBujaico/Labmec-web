const technicalServices = [
    {
        id: "mantenimiento",
        title: "Mantenimiento preventivo y correctivo",
        description:
            "Realizamos diagnóstico, revisión, reparación y mantenimiento para equipos de medición, prueba y control.",
        items: [
            "Diagnóstico de fallas",
            "Inspección técnica",
            "Limpieza y ajuste",
            "Reparación de equipos",
            "Pruebas de funcionamiento",
            "Recomendaciones técnicas",
        ],
    },
    {
        id: "calibracion",
        title: "Calibración y verificación",
        description:
            "Brindamos soporte técnico para instrumentos utilizados en electricidad, laboratorio, industria y mantenimiento.",
        items: [
            "Instrumentos eléctricos",
            "Equipos de medición",
            "Temperatura y presión",
            "Masa y longitud",
            "Verificación operativa",
            "Reportes técnicos",
        ],
    },
    {
        id: "servicios-tecnicos",
        title: "Servicios técnicos especializados",
        description:
            "Atendemos requerimientos técnicos para empresas que necesitan soluciones confiables y atención personalizada.",
        items: [
            "Servicios eléctricos",
            "Asesoría técnica",
            "Evaluación de equipos",
            "Soporte industrial",
            "Capacitaciones",
            "Atención a empresas",
        ],
    },
]

function TechnicalServices() {
    return (
        <section className="bg-white px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                            Servicios técnicos
                        </p>
                        <h2 className="text-3xl font-extrabold md:text-4xl">
                            Mantenimiento, calibración y soporte para tus equipos
                        </h2>
                    </div>

                    <p className="text-lg leading-relaxed text-gray-600">
                        Nuestro servicio está orientado a empresas que necesitan reducir fallas,
                        mantener sus equipos operativos y recibir atención técnica confiable.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {technicalServices.map((service) => (
                        <article
                            id={service.id}
                            key={service.title}
                            className="rounded-xl border border-gray-100 bg-[#F7F7F7] p-7 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                        >
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ED7D31] text-2xl font-bold text-white">
                                ✓
                            </div>

                            <h3 className="text-2xl font-extrabold">{service.title}</h3>
                            <p className="mt-4 text-gray-600">{service.description}</p>

                            <ul className="mt-6 space-y-3">
                                {service.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm text-gray-700">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-[#ED7D31]"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contacto"
                                className="mt-7 inline-block rounded-md border border-[#ED7D31] px-5 py-3 font-semibold text-[#ED7D31] transition hover:bg-[#ED7D31] hover:text-white"
                            >
                                Solicitar servicio
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TechnicalServices