import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import FadeInOnScroll from "../components/FadeInOnScroll";

const products = [
    {
        id: 1,
        name: "Telurómetro",
        brand: "SONEL",
        model: "MRU10",
        specs: ["Resistencia: 0 - 10 kΩ", "Tensión: 0 - 100 V~", "Puesta a tierra"],
        image: "/alquiler/telurometro_sonel.webp",
    },
    {
        id: 2,
        name: "Telurómetro",
        brand: "VICTOR",
        model: "4105A",
        specs: ["Resistencia: 0 - 2000 Ω", "Tensión: 0 - 200 V~", "Display digital"],
        image: "/alquiler/telurometro_victor.webp",
    },
    {
        id: 3,
        name: "Megóhmetro",
        brand: "SONEL",
        model: "MIC-10",
        specs: ["0.01 MΩ a 10 GΩ", "Voltajes: 50V a 1000V", "Prueba de aislamiento"],
        image: "/alquiler/megohmetro_sonel.webp",
    },
    {
        id: 4,
        name: "Megóhmetro",
        brand: "SONEL",
        model: "MIC-5001",
        specs: [
            "Rango: 0.01 MΩ a 5 TΩ",
            "Voltajes: 50V a 5000V",
            "Uso industrial",
        ],
        image: "/alquiler/mehogmetro_sonel_1.webp",
    },
    {
        id: 5,
        name: "Analizador de Redes",
        brand: "CIRCUTOR",
        model: "AR6",
        specs: ["4 canales tensión (800V)", "4 canales corriente (100A-1KA)"],
        image: "/alquiler/analizador_de_redes_circutor.webp",
    },
    {
        id: 6,
        name: "Analizador de Redes",
        brand: "CIRCUTOR",
        model: "AR5-1L",
        specs: [
            "4 canales tensión (500V)",
            "4 canales corriente (200A-2000A)",
            "Registro de datos",
        ],
        image: "/alquiler/analizador_de_redes_circutor_1.webp",
    },
];

const categories = ["Todos", "Telurómetro", "Megóhmetro", "Analizador de Redes"];

function AlquilerEquipos() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredProducts =
        selectedCategory === "Todos"
            ? products
            : products.filter((p) => p.name === selectedCategory);

    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                {/* Banner principal */}
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="/alquiler/alquiler_1.webp"
                            alt="Alquiler de equipos de medición"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <FadeInOnScroll>
                            <div className="max-w-3xl">
                                <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                    Equipos para alquiler
                                </p>

                                <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                                    Alquiler de equipos para pruebas, medición y diagnóstico
                                </h1>

                                <p className="mt-6 text-lg leading-relaxed text-white/80">
                                    Prestamos el servicio de alquiler de equipos de medición con certificado de calibración. Para ello, contamos con una amplia gama de instrumentos garantizados para tu proyecto.
                                </p>

                                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                    <a
                                        href="#catalogo"
                                        className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                    >
                                        Ver catálogo
                                    </a>

                                    <a
                                        href="https://wa.me/51977193979?text=Hola,%20deseo%20consultar%20por%20alquiler%20de%20equipos%20en%20LABMEC."
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

                {/* Catálogo de Productos */}
                <section id="catalogo" className="bg-[#F7F7F7] px-5 py-16 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <FadeInOnScroll>
                            <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                                <div>
                                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                        Catálogo referencial
                                    </p>
                                    <h2 className="text-3xl font-extrabold md:text-4xl">
                                        Equipos disponibles para alquiler
                                    </h2>
                                    <p className="mt-3 max-w-2xl text-gray-600">
                                        Consulta disponibilidad, tiempo de alquiler y equipo adecuado según tu servicio o proyecto. Todos los equipos incluyen certificado de calibración.
                                    </p>
                                </div>

                                <a
                                    href="https://wa.me/51977193979?text=Hola,%20deseo%20consultar%20disponibilidad%20de%20equipos%20en%20alquiler."
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-md bg-[#ED7D31] px-6 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                >
                                    Consultar disponibilidad
                                </a>
                            </div>

                            {/* Filtros de Categoría */}
                            <div className="mb-8 flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${selectedCategory === cat
                                            ? "bg-[#231F20] text-white shadow-md"
                                            : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </FadeInOnScroll>

                        {/* Grid de Productos */}
                        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {filteredProducts.map((product) => (
                                <FadeInOnScroll key={product.id}>
                                    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                        {/* Imagen y Badge */}
                                        <div className="relative h-60 overflow-hidden bg-white p-4">
                                            <img
                                                src={product.image}
                                                alt={`${product.name} ${product.brand} ${product.model}`}
                                                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute left-4 top-4 rounded-full bg-[#ED7D31] px-3 py-1 text-xs font-bold uppercase text-white">
                                                Con Calibración
                                            </div>
                                        </div>

                                        {/* Información */}
                                        <div className="flex flex-1 flex-col p-6">
                                            <h3 className="text-xl font-extrabold text-[#231F20]">
                                                {product.name}
                                            </h3>

                                            <div className="mt-3 grid grid-cols-2 gap-2 text-xs uppercase tracking-wide text-gray-500">
                                                <div>
                                                    <span className="block font-bold text-[#231F20]">Marca</span>
                                                    <span className="font-semibold text-gray-700">{product.brand}</span>
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-[#231F20]">Modelo</span>
                                                    <span className="font-semibold text-gray-700">{product.model}</span>
                                                </div>
                                            </div>

                                            {/* Specs */}
                                            <div className="mt-5 flex flex-1 flex-wrap gap-2">
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
                                                href={`https://wa.me/51977193979?text=Hola,%20deseo%20alquilar%20el%20equipo:%20${encodeURIComponent(
                                                    product.name
                                                )}%20MARCA:%20${encodeURIComponent(product.brand)}%20MODELO:%20${encodeURIComponent(
                                                    product.model
                                                )}.`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-6 rounded-md bg-[#FFDD55] px-5 py-3 text-center font-extrabold text-[#231F20] transition hover:-translate-y-1 hover:bg-[#ED7D31] hover:text-white"
                                            >
                                                Alquilar ahora
                                            </a>
                                        </div>
                                    </article>
                                </FadeInOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sección CTA */}
                <section className="bg-white px-5 py-16 lg:px-8">
                    <FadeInOnScroll>
                        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl bg-[#231F20] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
                            <div>
                                <p className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                    Atención personalizada
                                </p>
                                <h2 className="text-3xl font-extrabold">
                                    ¿Necesitas un equipo por días o por proyecto?
                                </h2>
                                <p className="mt-3 max-w-2xl text-white/75">
                                    Escríbenos y te ayudamos a elegir el equipo correcto según el trabajo, tiempo de alquiler y disponibilidad.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/51977193979?text=Hola,%20necesito%20informaci%C3%B3n%20sobre%20alquiler%20de%20equipos."
                                target="_blank"
                                rel="noreferrer"
                                className="rounded-md bg-[#ED7D31] px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                            >
                                Solicitar información
                            </a>
                        </div>
                    </FadeInOnScroll>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default AlquilerEquipos;