import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import FadeInOnScroll from "../components/FadeInOnScroll"

const calibrationAreas = [
    {
        icon: "📏",
        title: "Longitud",
        description:
            "Verificación de instrumentos dimensionales para control de calidad, mantenimiento y medición técnica.",
        equipment: [
            "Vernier",
            "Micrómetros",
            "Flexómetros",
            "Reglas metálicas",
            "Medidores de espesor",
            "Comparadores",
        ],
    },
    {
        icon: "⚡",
        title: "Electricidad",
        description:
            "Calibración y verificación de instrumentos eléctricos usados en mantenimiento e instalaciones.",
        equipment: [
            "Multímetros",
            "Pinzas amperimétricas",
            "Megóhmetros",
            "Telurómetros",
            "Analizadores de redes",
            "Fuentes de alimentación",
        ],
    },
    {
        icon: "🔌",
        title: "Potencia y energía",
        description:
            "Servicios para equipos relacionados con análisis eléctrico, consumo, potencia y calidad de energía.",
        equipment: [
            "Analizadores de redes",
            "Medidores de energía",
            "Vatímetros",
            "Registradores eléctricos",
            "Medidores de potencia",
            "Equipos de calidad de energía",
        ],
    },
    {
        icon: "🩺",
        title: "Equipos biomédicos",
        description:
            "Atención técnica para equipos biomédicos utilizados en evaluación, control y diagnóstico.",
        equipment: [
            "Desfibriladores",
            "Audiómetros",
            "Tensiómetros",
            "Termómetros clínicos",
            "Equipos médicos",
            "Instrumentos biomédicos",
        ],
    },
    {
        icon: "🧪",
        title: "Volumen",
        description:
            "Calibración y verificación de instrumentos volumétricos para laboratorio y procesos técnicos.",
        equipment: [
            "Pipetas",
            "Buretas",
            "Probetas",
            "Matraces",
            "Dispensadores",
            "Material volumétrico",
        ],
    },
    {
        icon: "⚖️",
        title: "Masa",
        description:
            "Servicios para instrumentos de pesaje utilizados en laboratorio, industria, producción y control.",
        equipment: [
            "Balanzas digitales",
            "Balanzas analíticas",
            "Balanzas industriales",
            "Pesas patrón",
            "Básculas",
            "Indicadores de peso",
        ],
    },
    {
        icon: "🔥",
        title: "Temperatura",
        description:
            "Verificación de instrumentos usados en medición y control de temperatura en campo o laboratorio.",
        equipment: [
            "Termómetros",
            "Termohigrómetros",
            "Cámaras termográficas",
            "Dataloggers",
            "Sensores de temperatura",
            "Controladores",
        ],
    },
    {
        icon: "🛠️",
        title: "Fuerza y presión",
        description:
            "Servicios para instrumentos utilizados en medición de presión, torque, fuerza y vacío.",
        equipment: [
            "Manómetros",
            "Transmisores de presión",
            "Torquímetros",
            "Dinamómetros",
            "Vacúometros",
            "Presostatos",
        ],
    },
    {
        icon: "📈",
        title: "Otras magnitudes",
        description:
            "Atención para equipos especiales de medición utilizados en seguridad, ambiente e industria.",
        equipment: [
            "Sonómetros",
            "Tacómetros",
            "Luxómetros",
            "Anemómetros",
            "Cronómetros",
            "Medidores especiales",
        ],
    },
]

const process = [
    {
        step: "01",
        title: "Consulta del equipo",
        text: "Nos indicas el instrumento, marca, modelo y tipo de servicio requerido.",
    },
    {
        step: "02",
        title: "Evaluación técnica",
        text: "Validamos el área de calibración o verificación correspondiente.",
    },
    {
        step: "03",
        title: "Coordinación del servicio",
        text: "Definimos tiempos, disponibilidad, condiciones y cotización.",
    },
    {
        step: "04",
        title: "Entrega y soporte",
        text: "Brindamos información técnica y recomendaciones para el uso del equipo.",
    },
]

function Calibracion() {
    const [openIndex, setOpenIndex] = useState(null)

    const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                {/* Banner Principal */}
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="/img/calibraciones_verificaciones.webp"
                            alt="Calibración y verificación de equipos"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <FadeInOnScroll>
                            <div className="max-w-3xl">
                                <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                    Calibración y verificación
                                </p>

                                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                                    Calibración y verificación de equipos por magnitud
                                </h1>

                                <p className="mt-6 text-lg leading-relaxed text-white/80">
                                    Brindamos servicios técnicos para instrumentos de medición utilizados en
                                    electricidad, longitud, masa, temperatura, presión, volumen, laboratorio,
                                    topografía, biomédica y otras magnitudes.
                                </p>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#areas"
                                        className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                    >
                                        Ver áreas
                                    </a>

                                    <a
                                        href="https://wa.me/51977193979?text=Hola,%20deseo%20solicitar%20informaci%C3%B3n%20sobre%20calibraci%C3%B3n%20y%20verificaci%C3%B3n%20de%20equipos."
                                        target="_blank"
                                        rel="noreferrer"
                                        className="rounded-md border border-white px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#231F20]"
                                    >
                                        Consultar por WhatsApp
                                    </a>
                                </div>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </section>

                {/* Sección de Áreas Técnicas */}
                <section id="areas" className="bg-white px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <FadeInOnScroll>
                            <div className="mx-auto max-w-3xl text-center">
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Áreas técnicas
                                </p>
                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    Servicios de calibración y verificación
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Selecciona el área correspondiente al equipo que necesitas calibrar,
                                    verificar o consultar.
                                </p>
                            </div>
                        </FadeInOnScroll>

                        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {calibrationAreas.map((area, index) => {
                                const isOpen = openIndex === index

                                return (
                                    <FadeInOnScroll key={area.title}>
                                        <article
                                            className={`overflow-hidden rounded-2xl border border-gray-100 bg-[#F7F7F7] shadow-sm transition duration-300 hover:shadow-xl ${isOpen ? "shadow-xl" : ""
                                                }`}
                                        >
                                            <div className="flex h-40 items-center justify-center bg-white">
                                                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF5EC] text-5xl transition hover:scale-110">
                                                    {area.icon}
                                                </div>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() => toggleCard(index)}
                                                aria-expanded={isOpen}
                                                aria-controls={`area-content-${index}`}
                                                className="flex w-full items-center justify-between gap-4 bg-[#ED7D31] px-6 py-4 text-left transition hover:bg-[#d96d24]"
                                            >
                                                <h3 className="text-lg font-extrabold uppercase text-white">
                                                    {area.title}
                                                </h3>

                                                <svg
                                                    className={`h-6 w-6 text-white transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                                        }`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2.5}
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>

                                            <div
                                                id={`area-content-${index}`}
                                                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                                    }`}
                                            >
                                                <div className="overflow-hidden">
                                                    <div className="p-6">
                                                        <p className="text-sm leading-relaxed text-gray-600">
                                                            {area.description}
                                                        </p>

                                                        <div className="mt-5 flex flex-wrap gap-2">
                                                            {area.equipment.map((item) => (
                                                                <span
                                                                    key={item}
                                                                    className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm"
                                                                >
                                                                    {item}
                                                                </span>
                                                            ))}
                                                        </div>

                                                        <a
                                                            href={`https://wa.me/51977193979?text=Hola,%20deseo%20solicitar%20calibraci%C3%B3n%20o%20verificaci%C3%B3n%20para%20el%20%C3%A1rea%20de%20${encodeURIComponent(
                                                                area.title
                                                            )}.`}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                            className="mt-6 inline-block rounded-md border border-[#ED7D31] px-5 py-3 text-sm font-bold text-[#ED7D31] transition hover:bg-[#ED7D31] hover:text-white"
                                                        >
                                                            Solicitar calibración
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </FadeInOnScroll>
                                )
                            })}
                        </div>
                    </div>
                </section>

                {/* Sección de Proceso */}
                <section className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <FadeInOnScroll>
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Proceso
                                </p>
                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    Atención técnica ordenada y clara
                                </h2>
                                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                    Seguimos un proceso simple para identificar el requerimiento, evaluar el
                                    instrumento y brindar una respuesta técnica adecuada.
                                </p>

                                <a
                                    href="https://wa.me/51977193979?text=Hola,%20deseo%20coordinar%20un%20servicio%20de%20calibraci%C3%B3n%20o%20verificaci%C3%B3n."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-7 inline-block rounded-md bg-[#ED7D31] px-7 py-[#ED7D31] font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                >
                                    Coordinar servicio
                                </a>
                            </div>
                        </FadeInOnScroll>

                        <div className="grid gap-5 sm:grid-cols-2">
                            {process.map((item) => (
                                <FadeInOnScroll key={item.step}>
                                    <article className="rounded-xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                                        <div className="mb-5 text-3xl font-extrabold text-[#ED7D31]">
                                            {item.step}
                                        </div>
                                        <h3 className="text-xl font-extrabold">{item.title}</h3>
                                        <p className="mt-3 text-gray-600">{item.text}</p>
                                    </article>
                                </FadeInOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Banner CTA Final */}
                <section className="bg-white px-5 py-20 lg:px-8">
                    <FadeInOnScroll>
                        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-[#231F20] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
                            <div>
                                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                    Consulta técnica
                                </p>
                                <h2 className="text-3xl font-extrabold">
                                    ¿Tienes un equipo que necesita calibración o verificación?
                                </h2>
                                <p className="mt-3 max-w-2xl text-white/75">
                                    Envíanos el nombre del equipo, marca, modelo y servicio requerido para ayudarte con
                                    una cotización.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/51977193979?text=Hola,%20tengo%20un%20equipo%20que%20necesita%20calibraci%C3%B3n%20o%20verificaci%C3%B3n."
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                            >
                                Consultar ahora
                            </a>
                        </div>
                    </FadeInOnScroll>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Calibracion