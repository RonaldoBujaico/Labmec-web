import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

const categories = [
    "Todos",
    "Medición eléctrica",
    "Diagnóstico",
    "Laboratorio",
    "Accesorios",
]

const products = [
    {
        name: "Megóhmetro",
        brand: "Kyoritsu",
        model: "3005",
        category: "Medición eléctrica",
        description:
            "Equipo para pruebas de aislamiento eléctrico en mantenimiento industrial.",
        specs: ["250V / 500V / 1000V", "Hasta 2000MΩ", "Uso industrial"],
        image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Megóhmetro digital",
        brand: "Prasek",
        model: "PR-512",
        category: "Medición eléctrica",
        description:
            "Instrumento para pruebas de aislamiento en tableros, motores y sistemas eléctricos.",
        specs: ["500V a 2500V", "Hasta 100GΩ", "Alta precisión"],
        image:
            "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Megóhmetro",
        brand: "Fluke",
        model: "1507",
        category: "Medición eléctrica",
        description:
            "Equipo confiable para verificación y diagnóstico eléctrico en campo.",
        specs: ["Prueba de aislamiento", "Portátil", "Uso técnico"],
        image:
            "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Pinza amperimétrica",
        brand: "Fluke",
        model: "376 FC",
        category: "Medición eléctrica",
        description:
            "Herramienta para medición de corriente, tensión y diagnóstico eléctrico.",
        specs: ["CA / CC", "Hasta 1000A", "Trabajo en campo"],
        image:
            "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Multímetro digital",
        brand: "DT9205A",
        model: "DT9205A",
        category: "Medición eléctrica",
        description:
            "Instrumento básico para mediciones eléctricas, mantenimiento y revisión técnica.",
        specs: ["Voltaje CA/CC", "Resistencia", "Corriente"],
        image:
            "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Cámara termográfica",
        brand: "Fluke",
        model: "Ti10",
        category: "Diagnóstico",
        description:
            "Equipo para inspección térmica, prevención de fallas y mantenimiento predictivo.",
        specs: ["Inspección térmica", "Diagnóstico", "Mantenimiento"],
        image:
            "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Telurómetro",
        brand: "Megabras",
        model: "MTD",
        category: "Medición eléctrica",
        description:
            "Equipo para medición de puesta a tierra en instalaciones eléctricas.",
        specs: ["Puesta a tierra", "Seguridad eléctrica", "Campo"],
        image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    },
    {
        name: "Analizador de redes",
        brand: "Metrel",
        model: "MI 2892",
        category: "Diagnóstico",
        description:
            "Equipo para análisis de calidad de energía y parámetros eléctricos industriales.",
        specs: ["Calidad de energía", "Redes eléctricas", "Análisis"],
        image:
            "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    },
]

function VentaEquipos() {
    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=1800&q=80"
                            alt="Equipos industriales"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                Equipos disponibles
                            </p>

                            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                                Productos en venta para medición, control y mantenimiento
                            </h1>

                            <p className="mt-6 text-lg leading-relaxed text-white/80">
                                Comercializamos equipos industriales, instrumentos de medición, prueba,
                                control y accesorios para empresas, laboratorios e industrias.
                            </p>

                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <a
                                    href="#catalogo"
                                    className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                >
                                    Ver catálogo
                                </a>

                                <a
                                    href="https://wa.me/51977193979?text=Hola,%20deseo%20cotizar%20equipos%20en%20venta%20de%20LABMEC."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-md border border-white px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#231F20]"
                                >
                                    Consultar por WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="catalogo" className="bg-[#F7F7F7] px-5 py-16 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Catálogo referencial
                                </p>
                                <h2 className="text-3xl font-extrabold md:text-4xl">
                                    Equipos e instrumentos disponibles
                                </h2>
                                <p className="mt-3 max-w-2xl text-gray-600">
                                    Consulta disponibilidad, marcas, modelos y cotización personalizada
                                    según tu requerimiento.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/51977193979?text=Hola,%20deseo%20consultar%20la%20disponibilidad%20de%20equipos%20en%20venta."
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-[#ED7D31] px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                            >
                                Consultar disponibilidad
                            </a>
                        </div>

                        <div className="mb-10 flex flex-wrap gap-3">
                            {categories.map((category, index) => (
                                <button
                                    key={category}
                                    className={`rounded-full border px-5 py-2 text-sm font-semibold transition hover:-translate-y-1 ${index === 0
                                            ? "border-[#ED7D31] bg-[#ED7D31] text-white"
                                            : "border-gray-200 bg-white text-[#231F20] hover:border-[#ED7D31] hover:text-[#ED7D31]"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                            {products.map((product) => (
                                <article
                                    key={`${product.name}-${product.model}`}
                                    className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                                >
                                    <div className="relative h-60 overflow-hidden bg-white">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                                        />

                                        <div className="absolute left-4 top-4 rounded-full bg-[#ED7D31] px-3 py-1 text-xs font-bold uppercase text-white">
                                            Venta
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#231F20]/80 to-transparent p-4">
                                            <p className="text-sm font-semibold text-[#FFDD55]">
                                                {product.category}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="text-xl font-extrabold">{product.name}</h3>

                                        <div className="mt-3 grid grid-cols-2 gap-2 text-xs uppercase tracking-wide text-gray-500">
                                            <p>
                                                <span className="block font-bold text-[#231F20]">Marca</span>
                                                {product.brand}
                                            </p>
                                            <p>
                                                <span className="block font-bold text-[#231F20]">Modelo</span>
                                                {product.model}
                                            </p>
                                        </div>

                                        <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                                            {product.description}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2">
                                            {product.specs.map((spec) => (
                                                <span
                                                    key={spec}
                                                    className="rounded-full bg-[#FFF5EC] px-3 py-1 text-xs font-semibold text-[#ED7D31]"
                                                >
                                                    {spec}
                                                </span>
                                            ))}
                                        </div>

                                        <a
                                            href={`https://wa.me/51977193979?text=Hola,%20deseo%20cotizar%20el%20producto:%20${encodeURIComponent(
                                                product.name
                                            )}%20${encodeURIComponent(product.model)}.`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="mt-6 rounded-md bg-[#FFDD55] px-5 py-3 text-center font-extrabold text-[#231F20] transition hover:-translate-y-1 hover:bg-[#ED7D31] hover:text-white"
                                        >
                                            Cotizar ahora
                                        </a>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-white px-5 py-16 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-[#231F20] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
                        <div>
                            <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                Cotización personalizada
                            </p>
                            <h2 className="text-3xl font-extrabold">
                                ¿No encuentras el equipo que necesitas?
                            </h2>
                            <p className="mt-3 max-w-2xl text-white/75">
                                Escríbenos y te ayudamos a ubicar el equipo, modelo o alternativa técnica
                                más adecuada para tu operación.
                            </p>
                        </div>

                        <a
                            href="https://wa.me/51977193979?text=Hola,%20necesito%20ayuda%20para%20cotizar%20un%20equipo%20que%20no%20aparece%20en%20el%20cat%C3%A1logo."
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                        >
                            Solicitar ayuda
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default VentaEquipos