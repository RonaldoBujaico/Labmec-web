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
        model: "MRU-30",
        voltajePrueba: "25V / 50V",
        rangoMedicion: "0.00 Ω - 9.99 kΩ",
        image: "/ventas/telurometro_sonel.webp",
    },
    {
        id: 2,
        name: "Telurómetro",
        brand: "KYORITSU",
        model: "4105A",
        voltajePrueba: "2mA (820Hz)",
        rangoMedicion: "0 - 2000 Ω",
        image: "/ventas/telurometro_kyoritsu.webp",
    },
    {
        id: 3,
        name: "Telurómetro",
        brand: "VICTOR",
        model: "4105A",
        voltajePrueba: "2mA (820Hz)",
        rangoMedicion: "0 - 2000 Ω",
        image: "/ventas/telurometro_victor.webp",
    },
    {
        id: 4,
        name: "Megóhmetro",
        brand: "SONEL",
        model: "MIC-10",
        voltajePrueba: "50V a 1000V",
        rangoMedicion: "Hasta 10 GΩ",
        image: "/ventas/megometro_sonel.webp",
    },
    {
        id: 5,
        name: "Pinza Amperimétrica",
        brand: "CEM",
        model: "DT-3349WW",
        voltajePrueba: "1000V CA/CC",
        rangoMedicion: "0 - 1000A",
        image: "/ventas/pinza_amperimetrica_cem.webp",
    },
    {
        id: 6,
        name: "Megóhmetro",
        brand: "KYORITSU",
        model: "3005",
        voltajePrueba: "250V / 500V / 1000V",
        rangoMedicion: "Hasta 2000 MΩ",
        image: "/ventas/megometro_kyoritsu.webp",
    },
    {
        id: 7,
        name: "Megóhmetro",
        brand: "VICTOR",
        model: "VC60D",
        voltajePrueba: "250V / 500V / 1000V",
        rangoMedicion: "0.1 MΩ - 2000 MΩ",
        image: "/ventas/megometro_victor.webp",
    },
    {
        id: 8,
        name: "Analizador de Redes",
        brand: "CIRCUTOR",
        model: "AR5-1L",
        voltajePrueba: "10V - 600V CA",
        rangoMedicion: "1A - 2000A",
        image: "/ventas/analizador_de_redes_circutor.webp",
    },
    {
        id: 9,
        name: "Analizador de Redes",
        brand: "SONEL",
        model: "PQM-700",
        voltajePrueba: "CAT IV 600V",
        rangoMedicion: "0 - 1000V / 3000A",
        image: "/ventas/analizador_de_redes_sonel.webp",
    },
];

const categories = ["Todos", "Telurómetro", "Megóhmetro", "Pinza Amperimétrica", "Analizador de Redes"];

function VentaEquipos() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");

    const filteredProducts =
        selectedCategory === "Todos"
            ? products
            : products.filter((p) => p.name === selectedCategory);

    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="/ventas/portada_ventas.webp"
                            alt="Equipos industriales"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <FadeInOnScroll>
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
                        </FadeInOnScroll>
                    </div>
                </section>

                {/* Catálogo Section */}
                <section id="catalogo" className="bg-[#F7F7F7] px-5 py-16 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <FadeInOnScroll>
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
                                        <div className="relative h-60 overflow-hidden bg-white">
                                            <img
                                                src={product.image}
                                                alt={`${product.name} ${product.brand} ${product.model}`}
                                                className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-105"
                                            />
                                            <div className="absolute left-4 top-4 rounded-full bg-[#ED7D31] px-3 py-1 text-xs font-bold uppercase text-white">
                                                Venta
                                            </div>
                                        </div>

                                        {/* Información de Tarjeta */}
                                        <div className="flex flex-1 flex-col p-6">
                                            <h3 className="text-xl font-extrabold text-[#231F20]">
                                                {product.name}
                                            </h3>

                                            <div className="mt-3 grid grid-cols-2 gap-2 text-xs uppercase tracking-wide text-gray-500">
                                                <div>
                                                    <span className="block font-bold text-[#231F20]">MARCA</span>
                                                    <span className="font-semibold text-gray-700">{product.brand}</span>
                                                </div>
                                                <div>
                                                    <span className="block font-bold text-[#231F20]">MODELO</span>
                                                    <span className="font-semibold text-gray-700">{product.model}</span>
                                                </div>
                                            </div>

                                            {/* Especificaciones */}
                                            <div className="mt-4 flex flex-1 flex-col justify-center space-y-2 text-xs">
                                                <div className="rounded-lg bg-[#FFF5EC] p-2">
                                                    <span className="font-bold text-[#231F20]">Voltaje de prueba: </span>
                                                    <span className="font-semibold text-[#ED7D31]">{product.voltajePrueba}</span>
                                                </div>
                                                <div className="rounded-lg bg-[#FFF5EC] p-2">
                                                    <span className="font-bold text-[#231F20]">Rango de medición: </span>
                                                    <span className="font-semibold text-[#ED7D31]">{product.rangoMedicion}</span>
                                                </div>
                                            </div>

                                            <a
                                                href={`https://wa.me/51977193979?text=Hola,%20deseo%20cotizar%20el%20producto:%20${encodeURIComponent(
                                                    product.name
                                                )}%20MARCA:%20${encodeURIComponent(product.brand)}%20MODELO:%20${encodeURIComponent(
                                                    product.model
                                                )}.`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="mt-6 rounded-md bg-[#FFDD55] px-5 py-3 text-center font-extrabold text-[#231F20] transition hover:-translate-y-1 hover:bg-[#ED7D31] hover:text-white"
                                            >
                                                Cotizar ahora
                                            </a>
                                        </div>
                                    </article>
                                </FadeInOnScroll>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Banner inferior */}
                <section className="bg-white px-5 py-16 lg:px-8">
                    <FadeInOnScroll>
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
                    </FadeInOnScroll>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default VentaEquipos;