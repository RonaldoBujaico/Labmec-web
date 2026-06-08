const steps = [
    {
        number: "01",
        title: "Solicitud de cotización",
        description:
            "El cliente nos contacta por WhatsApp, correo o formulario indicando el equipo o servicio requerido.",
    },
    {
        number: "02",
        title: "Evaluación técnica",
        description:
            "Revisamos la necesidad, tipo de equipo, condiciones del servicio y disponibilidad.",
    },
    {
        number: "03",
        title: "Propuesta y coordinación",
        description:
            "Enviamos la cotización y coordinamos entrega, alquiler, mantenimiento o servicio técnico.",
    },
    {
        number: "04",
        title: "Atención y seguimiento",
        description:
            "Realizamos el servicio y brindamos soporte posterior según el requerimiento del cliente.",
    },
]

function ProcessSection() {
    return (
        <section className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                        Proceso de atención
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-4xl">
                        Atención clara, rápida y orientada a tu necesidad
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Trabajamos con un proceso simple para ayudarte a cotizar, coordinar y recibir
                        soporte técnico de forma ordenada.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step) => (
                        <article
                            key={step.number}
                            className="rounded-xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mb-6 text-4xl font-extrabold text-[#ED7D31]">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-extrabold">{step.title}</h3>
                            <p className="mt-3 text-gray-600">{step.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProcessSection