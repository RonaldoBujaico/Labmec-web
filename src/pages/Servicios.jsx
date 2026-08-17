import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import FadeInOnScroll from "../components/FadeInOnScroll"

const services = [
    {
        title: "Calibración y verificación",
        description:
            "Servicios técnicos para instrumentos de medición utilizados en electricidad, masa, temperatura, presión, longitud y otras magnitudes.",
        icon: "📏",
        items: ["Electricidad", "Temperatura", "Masa", "Longitud", "Presión", "Volumen"],
    },
    {
        title: "Venta de equipos",
        description:
            "Comercialización de equipos industriales, instrumentos de medición, accesorios y repuestos para empresas e industrias.",
        icon: "🛒",
        items: ["Megóhmetros", "Multímetros", "Pinzas", "Telurómetros", "Analizadores", "Accesorios"],
    },
    {
        title: "Alquiler de equipos",
        description:
            "Alquiler temporal de equipos para pruebas, inspecciones, mantenimiento, diagnóstico y proyectos técnicos.",
        icon: "📦",
        items: ["Cámaras térmicas", "Telurómetros", "Analizadores", "Megóhmetros", "Pinzas", "Equipos especiales"],
    },
    {
        title: "Mantenimiento preventivo y correctivo",
        description:
            "Diagnóstico, revisión, reparación y mantenimiento de equipos de medición, prueba, control y uso técnico.",
        icon: "🛠️",
        items: ["Diagnóstico", "Reparación", "Limpieza", "Ajuste", "Pruebas", "Informe técnico"],
    },
    {
        title: "Servicios eléctricos e industriales",
        description:
            "Soporte técnico para instalaciones, diagnóstico eléctrico, inspección y soluciones para operaciones industriales.",
        icon: "⚡",
        items: ["Diagnóstico eléctrico", "Inspección", "Mediciones", "Soporte", "Evaluación", "Recomendaciones"],
    },
    {
        title: "Capacitaciones y asesorías",
        description:
            "Orientación técnica para uso de equipos, selección de instrumentos, mantenimiento y buenas prácticas operativas.",
        icon: "👨‍🏫",
        items: ["Asesoría técnica", "Uso de equipos", "Selección", "Buenas prácticas", "Soporte", "Consultoría"],
    },
]

const process = [
    {
        step: "01",
        title: "Nos contactas",
        text: "Nos indicas el servicio, equipo o necesidad técnica que tienes.",
    },
    {
        step: "02",
        title: "Evaluamos el requerimiento",
        text: "Revisamos el alcance, disponibilidad y solución más adecuada.",
    },
    {
        step: "03",
        title: "Cotizamos",
        text: "Te enviamos una propuesta clara según el servicio o equipo requerido.",
    },
    {
        step: "04",
        title: "Atendemos el servicio",
        text: "Coordinamos la entrega, revisión, alquiler, mantenimiento o soporte.",
    },
]

function Servicios() {
    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="/public/img/servicio_tecnico.webp"
                            alt="Servicios técnicos industriales"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <FadeInOnScroll>
                            <div className="max-w-3xl">
                                <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                    Servicios técnicos
                                </p>

                                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                                    Soluciones técnicas para empresas e industrias
                                </h1>

                                <p className="mt-6 text-lg leading-relaxed text-white/80">
                                    Brindamos venta, alquiler, calibración, mantenimiento, servicios eléctricos,
                                    asesoría técnica y soporte especializado para operaciones industriales.
                                </p>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#servicios"
                                        className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                    >
                                        Ver servicios
                                    </a>

                                    <a
                                        href="https://wa.me/51977193979?text=Hola,%20deseo%20informaci%C3%B3n%20sobre%20los%20servicios%20t%C3%A9cnicos%20de%20LABMEC."
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

                {/* Sección Servicios Principales */}
                <section id="servicios" className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <FadeInOnScroll>
                            <div className="mx-auto max-w-3xl text-center">
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Qué ofrecemos
                                </p>
                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    Nuestros servicios principales
                                </h2>
                                <p className="mt-4 text-lg text-gray-600">
                                    Organizamos nuestras soluciones para que encuentres rápido el servicio que tu empresa necesita.
                                </p>
                            </div>
                        </FadeInOnScroll>

                        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
                            {services.map((service) => (
                                <FadeInOnScroll key={service.title}>
                                    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                        <div className="flex h-44 items-center justify-center bg-white">
                                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#FFF5EC] text-5xl transition group-hover:scale-110">
                                                {service.icon}
                                            </div>
                                        </div>

                                        <div className="bg-[#ED7D31] px-6 py-4">
                                            <h3 className="text-lg font-extrabold uppercase text-white">
                                                {service.title}
                                            </h3>
                                        </div>

                                        <div className="p-6">
                                            <p className="text-sm leading-relaxed text-gray-600">
                                                {service.description}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {service.items.map((item) => (
                                                    <span
                                                        key={item}
                                                        className="rounded-full bg-[#F7F7F7] px-3 py-1 text-xs font-semibold text-gray-700"
                                                    >
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>

                                            <a
                                                href={`https://wa.me/51977193979?text=Hola,%20deseo%20informaci%C3%B3n%20sobre:%20${encodeURIComponent(
                                                    service.title
                                                )}.`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-6 inline-block rounded-md border border-[#ED7D31] px-5 py-3 text-sm font-bold text-[#ED7D31] transition hover:bg-[#ED7D31] hover:text-white"
                                            >
                                                Solicitar información
                                            </a>
                                        </div>
                                    </article>
                                </FadeInOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sección Proceso de Trabajo */}
                <section className="bg-white px-5 py-20 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <FadeInOnScroll>
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Cómo trabajamos
                                </p>
                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    Atención técnica clara y personalizada
                                </h2>
                                <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                    Nuestro proceso permite entender tu necesidad, proponer una solución adecuada
                                    y coordinar el servicio de manera ordenada.
                                </p>

                                <a
                                    href="https://wa.me/51977193979?text=Hola,%20deseo%20coordinar%20un%20servicio%20t%C3%A9cnico."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-7 inline-block rounded-md bg-[#ED7D31] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                >
                                    Coordinar servicio
                                </a>
                            </div>
                        </FadeInOnScroll>

                        <div className="grid gap-5 sm:grid-cols-2">
                            {process.map((item) => (
                                <FadeInOnScroll key={item.step}>
                                    <article className="rounded-xl bg-[#F7F7F7] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl">
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

                {/* Call to Action Final */}
                <section className="bg-white px-5 pb-20 lg:px-8">
                    <FadeInOnScroll>
                        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-[#231F20] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
                            <div>
                                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                    Cotización
                                </p>
                                <h2 className="text-3xl font-extrabold">
                                    ¿Necesitas un servicio técnico para tu empresa?
                                </h2>
                                <p className="mt-3 max-w-2xl text-white/75">
                                    Escríbenos y cuéntanos qué necesitas. Te ayudamos a definir el servicio,
                                    equipo o solución más adecuada.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/51977193979?text=Hola,%20necesito%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20t%C3%A9cnico."
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                            >
                                Solicitar cotización
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

export default Servicios