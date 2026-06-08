import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

const maintenanceTypes = [
    {
        title: "Mantenimiento preventivo",
        description:
            "Servicio orientado a evitar fallas, conservar el buen estado del equipo y asegurar su correcto funcionamiento.",
        items: [
            "Inspección técnica general",
            "Limpieza interna y externa",
            "Revisión de componentes",
            "Ajustes funcionales",
            "Pruebas de operación",
            "Recomendaciones técnicas",
        ],
    },
    {
        title: "Mantenimiento correctivo",
        description:
            "Servicio enfocado en diagnosticar fallas, corregir problemas y recuperar la operatividad de los equipos.",
        items: [
            "Diagnóstico de fallas",
            "Revisión de averías",
            "Reparación de componentes",
            "Cambio de piezas si aplica",
            "Pruebas finales",
            "Informe del servicio realizado",
        ],
    },
]

const equipmentList = [
    "Micrómetros",
    "Pinzas amperimétricas",
    "Calibradores de procesos",
    "Multímetros",
    "Megóhmetros",
    "Telurómetros",
    "Analizadores de redes",
    "Osciloscopios",
    "Interruptores de corriente",
    "Probadores de cables",
    "Hipot",
    "Desfibriladores",
    "Audiómetros",
    "Balanzas",
    "Torquímetros",
    "Dinamómetros",
]

const benefits = [
    {
        title: "Menos paradas operativas",
        text: "Ayuda a reducir interrupciones inesperadas en tus procesos.",
    },
    {
        title: "Mayor vida útil",
        text: "Conserva tus equipos en mejores condiciones por más tiempo.",
    },
    {
        title: "Mayor confiabilidad",
        text: "Permite trabajar con equipos revisados y funcionales.",
    },
    {
        title: "Soporte especializado",
        text: "Recibe orientación técnica según el tipo de equipo o falla.",
    },
]

function Mantenimiento() {
    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1800&q=80"
                            alt="Mantenimiento técnico industrial"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                Servicio técnico
                            </p>

                            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                                Mantenimiento preventivo y correctivo de equipos
                            </h1>

                            <p className="mt-6 text-lg leading-relaxed text-white/80">
                                Realizamos diagnóstico, revisión, mantenimiento y reparación de equipos
                                de medición, prueba, control y uso técnico industrial.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#detalle"
                                    className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                >
                                    Ver servicio
                                </a>

                                <a
                                    href="https://wa.me/51977193979?text=Hola,%20deseo%20solicitar%20mantenimiento%20preventivo%20o%20correctivo%20para%20un%20equipo."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-md border border-white px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#231F20]"
                                >
                                    Solicitar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="detalle" className="bg-white px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                            <div className="overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=1200&q=80"
                                    alt="Técnico revisando equipos"
                                    className="h-[460px] w-full object-cover"
                                />
                            </div>

                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Diagnóstico y reparación
                                </p>

                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    Servicio a la medida de tus necesidades
                                </h2>

                                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                    Atendemos equipos que requieren revisión, mantenimiento, diagnóstico,
                                    reparación o verificación de funcionamiento. Nuestro enfoque es ayudarte
                                    a mantener tus equipos operativos y seguros.
                                </p>

                                <div className="mt-8 rounded-xl bg-[#F7F7F7] p-6">
                                    <h3 className="text-xl font-extrabold">
                                        Equipos que podemos atender
                                    </h3>

                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {equipmentList.map((equipment) => (
                                            <div
                                                key={equipment}
                                                className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm font-semibold shadow-sm"
                                            >
                                                <span className="h-2 w-2 rounded-full bg-[#ED7D31]"></span>
                                                {equipment}
                                            </div>
                                        ))}
                                    </div>

                                    <p className="mt-5 text-sm text-gray-500">
                                        También atendemos otros equipos previa evaluación técnica.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                Tipos de mantenimiento
                            </p>
                            <h2 className="text-3xl font-extrabold md:text-4xl">
                                Prevenimos fallas y corregimos problemas técnicos
                            </h2>
                            <p className="mt-4 text-lg text-gray-600">
                                Ofrecemos mantenimiento preventivo y correctivo según el estado,
                                uso y necesidad del equipo.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-7 lg:grid-cols-2">
                            {maintenanceTypes.map((type) => (
                                <article
                                    key={type.title}
                                    className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                                >
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#ED7D31] text-2xl font-extrabold text-white">
                                        ✓
                                    </div>

                                    <h3 className="text-2xl font-extrabold">{type.title}</h3>
                                    <p className="mt-4 text-gray-600">{type.description}</p>

                                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                                        {type.items.map((item) => (
                                            <li key={item} className="flex gap-3 text-sm text-gray-700">
                                                <span className="mt-2 h-2 w-2 rounded-full bg-[#ED7D31]"></span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`https://wa.me/51977193979?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20${encodeURIComponent(
                                            type.title
                                        )}.`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-7 inline-block rounded-md border border-[#ED7D31] px-6 py-3 font-semibold text-[#ED7D31] transition hover:bg-[#ED7D31] hover:text-white"
                                    >
                                        Solicitar información
                                    </a>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Beneficios
                                </p>
                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    Mantén tus equipos operativos y confiables
                                </h2>
                                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                    El mantenimiento oportuno ayuda a reducir riesgos, evitar fallas mayores
                                    y mejorar la continuidad de tus operaciones.
                                </p>
                            </div>

                            <div className="grid gap-5 sm:grid-cols-2">
                                {benefits.map((benefit, index) => (
                                    <article
                                        key={benefit.title}
                                        className="rounded-xl bg-[#F7F7F7] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                                    >
                                        <div className="mb-5 text-3xl font-extrabold text-[#ED7D31]">
                                            0{index + 1}
                                        </div>
                                        <h3 className="text-xl font-extrabold">{benefit.title}</h3>
                                        <p className="mt-3 text-gray-600">{benefit.text}</p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-5 pb-20 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-[#231F20] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
                        <div>
                            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                Solicita evaluación
                            </p>
                            <h2 className="text-3xl font-extrabold">
                                ¿Tu equipo presenta fallas o necesita revisión?
                            </h2>
                            <p className="mt-3 max-w-2xl text-white/75">
                                Escríbenos y cuéntanos qué equipo tienes, qué problema presenta y qué
                                servicio necesitas.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/51977193979?text=Hola,%20necesito%20evaluaci%C3%B3n%20para%20mantenimiento%20de%20un%20equipo."
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                        >
                            Solicitar evaluación
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Mantenimiento