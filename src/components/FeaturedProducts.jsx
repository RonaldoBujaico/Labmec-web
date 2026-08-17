import { useState } from "react"
import { Link } from "react-router-dom"
import FadeInOnScroll from "./FadeInOnScroll";

const products = [
    {
        name: "Megóhmetro Digital Sonel",
        category: "Pruebas de Aislamiento",
        description: "Equipo para verificación eléctrica e inspección de alta precisión.",
        type: "Venta",
        image: "/ventas/megometro_sonel.webp",
    },
    {
        name: "Pinza Amperimétrica CEM",
        category: "Instrumento Eléctrico",
        description: "Medición exacta de corriente, voltaje y diagnóstico rápido.",
        type: "Venta",
        image: "/ventas/pinza_amperimetrica_cem.webp",
    },
    {
        name: "Telurómetro Victor",
        category: "Pruebas de Pozo a Tierra",
        description: "Medición de resistencia de puesta a tierra y seguridad eléctrica.",
        type: "Venta",
        image: "/ventas/telurometro_victor.webp",
    },
    {
        name: "Analizador de Redes Circutor",
        category: "Calidad de Energía",
        description: "Monitoreo y análisis detallado de parámetros eléctricos industriales.",
        type: "Alquiler",
        image: "/alquiler/analizador_de_redes_circutor.webp",
    },
    {
        name: "Megóhmetro Sonel de Campo",
        category: "Medición Portátil",
        description: "Diseñado para pruebas exigentes en instalaciones y plantas industriales.",
        type: "Alquiler",
        image: "/alquiler/megohmetro_sonel.webp",
    },
    {
        name: "Telurómetro Sonel",
        category: "Seguridad Eléctrica",
        description: "Equipo calibrado listo para inspecciones y certificación técnica.",
        type: "Alquiler",
        image: "/alquiler/telurometro_sonel.webp",
    },
]

export default function FeaturedProducts() {
    const [filter, setFilter] = useState("Todos")

    const filteredProducts =
        filter === "Todos"
            ? products
            : products.filter((p) => p.type.toLowerCase() === filter.toLowerCase())

    return (
        <section className="bg-white px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Encabezado animado */}
                <FadeInOnScroll direction="up">
                    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                Equipos Destacados
                            </p>
                            <h2 className="text-3xl font-extrabold text-[#231F20] md:text-4xl">
                                Catálogo de Venta y Alquiler
                            </h2>
                            <p className="mt-4 max-w-2xl text-lg text-[#231F20]/70">
                                Contamos con instrumentos de medición calibrados e industriales listos para entrega inmediata.
                            </p>
                        </div>

                        <Link
                            to="/contacto"
                            className="inline-block rounded-md bg-[#ED7D31] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#d96d24]"
                        >
                            Consultar Disponibilidad
                        </Link>
                    </div>
                </FadeInOnScroll>

                {/* Filtros animados */}
                <FadeInOnScroll direction="up" delay={0.15}>
                    <div className="mt-8 flex flex-wrap gap-3 border-b border-gray-200 pb-4">
                        {["Todos", "Venta", "Alquiler"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`rounded-full px-5 py-2 text-sm font-bold transition-all ${filter === cat
                                    ? "bg-[#231F20] text-white shadow"
                                    : "bg-gray-100 text-[#231F20]/70 hover:bg-gray-200"
                                    }`}
                            >
                                {cat === "Todos" ? "Ver Todos" : cat}
                            </button>
                        ))}
                    </div>
                </FadeInOnScroll>

                {/* Tarjetas con animación secuencial */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredProducts.map((product, index) => (
                        <FadeInOnScroll key={product.name} direction="up" delay={(index % 3) * 0.12}>
                            <article className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                                <div>
                                    {/* Contenedor de Imagen */}
                                    <div className="relative mb-5 flex h-52 items-center justify-center overflow-hidden rounded-lg bg-[#F7F7F7] p-4">
                                        <span
                                            className={`absolute top-3 right-3 z-10 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${product.type === "Venta"
                                                ? "bg-emerald-100 text-emerald-800"
                                                : "bg-blue-100 text-blue-800"
                                                }`}
                                        >
                                            {product.type}
                                        </span>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>

                                    <p className="text-xs font-bold uppercase tracking-wide text-[#ED7D31]">
                                        {product.category}
                                    </p>
                                    <h3 className="mt-1 text-xl font-extrabold text-[#231F20]">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-[#231F20]/70">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Botones */}
                                <div className="mt-6 flex items-center justify-between gap-2 border-t border-gray-100 pt-4">
                                    <Link
                                        to="/contacto"
                                        className="rounded-md border border-[#ED7D31] px-4 py-2 text-sm font-semibold text-[#ED7D31] transition hover:bg-[#ED7D31] hover:text-white"
                                    >
                                        Cotizar
                                    </Link>

                                    <Link
                                        to={product.type === "Venta" ? "/venta-equipos" : "/alquiler-equipos"}
                                        className="text-sm font-bold text-[#231F20]/70 transition hover:text-[#ED7D31] hover:underline"
                                    >
                                        Ver en {product.type === "Venta" ? "Ventas" : "Alquiler"} →
                                    </Link>
                                </div>
                            </article>
                        </FadeInOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}