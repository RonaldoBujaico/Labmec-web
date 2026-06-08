const benefits = [
    {
        title: "Atención técnica especializada",
        text: "Orientación clara según el tipo de equipo, servicio o necesidad operativa.",
    },
    {
        title: "Soluciones para empresas",
        text: "Atendemos requerimientos industriales, eléctricos, técnicos y de laboratorio.",
    },
    {
        title: "Reportes técnicos",
        text: "Documentación y recomendaciones para mejorar la confiabilidad de tus equipos.",
    },
    {
        title: "Asesoría personalizada",
        text: "Te ayudamos a elegir la mejor solución antes de comprar, alquilar o reparar.",
    },
]

function WhyChooseUs() {
    return (
        <section id="nosotros" className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                        Por qué elegirnos
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-4xl">
                        Comprometidos con la continuidad operativa de tu empresa
                    </h2>
                    <p className="mt-5 text-lg leading-relaxed text-gray-600">
                        En LABMEC ENERGÍA XXI EIRL brindamos soluciones técnicas enfocadas en equipos,
                        energía, mantenimiento, calibración y servicios especializados para empresas e
                        industrias.
                    </p>
                    <a
                        href="#contacto"
                        className="mt-7 inline-block rounded-md bg-[#ED7D31] px-7 py-3 font-semibold text-white transition hover:bg-[#d96d24]"
                    >
                        Solicitar asesoría
                    </a>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                    {benefits.map((benefit, index) => (
                        <div key={benefit.title} className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF5EC] text-lg font-extrabold text-[#ED7D31]">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold">{benefit.title}</h3>
                            <p className="mt-3 text-gray-600">{benefit.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs