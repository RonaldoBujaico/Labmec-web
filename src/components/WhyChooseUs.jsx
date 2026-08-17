import { Link } from "react-router-dom"
import FadeInOnScroll from "./FadeInOnScroll"

const benefits = [
    {
        tag: "Especialización",
        title: "Atención técnica especializada",
        text: "Orientación clara según el tipo de equipo, servicio o necesidad operativa.",
    },
    {
        tag: "Cobertura",
        title: "Soluciones para empresas",
        text: "Atendemos requerimientos industriales, eléctricos, técnicos y de laboratorio.",
    },
    {
        tag: "Garantía",
        title: "Reportes técnicos",
        text: "Documentación y recomendaciones para mejorar la confiabilidad de tus equipos.",
    },
    {
        tag: "Soporte",
        title: "Asesoría personalizada",
        text: "Te ayudamos a elegir la mejor solución antes de comprar, alquilar o reparar.",
    },
]

function WhyChooseUs() {
    return (
        <section id="nosotros" className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                {/* Lado Izquierdo: Entrada animada desde la izquierda */}
                <FadeInOnScroll direction="right">
                    <div>
                        <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                            Por qué elegirnos
                        </span>
                        <h2 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
                            Comprometidos con la continuidad operativa de tu empresa
                        </h2>
                        <p className="mt-5 text-lg leading-relaxed text-gray-600">
                            En <strong className="text-gray-800">LABMEC ENERGÍA XXI EIRL</strong> brindamos soluciones técnicas enfocadas en equipos, energía, mantenimiento, calibración y servicios especializados para empresas e industrias.
                        </p>

                        {/* Indicadores clave B2B */}
                        <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
                            <div>
                                <p className="text-3xl font-black text-[#ED7D31]">100%</p>
                                <p className="text-sm font-medium text-gray-600">Garantía técnica</p>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-[#ED7D31]">B2B</p>
                                <p className="text-sm font-medium text-gray-600">Atención corporativa</p>
                            </div>
                        </div>

                        {/* Botones de navegación */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link
                                to="/contacto"
                                className="inline-flex items-center rounded-md bg-[#ED7D31] px-7 py-3.5 font-semibold text-white shadow-sm transition hover:bg-[#d96d24] hover:shadow-md"
                            >
                                Solicitar asesoría →
                            </Link>

                            <Link
                                to="/nosotros"
                                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50"
                            >
                                Conócenos más
                            </Link>
                        </div>
                    </div>
                </FadeInOnScroll>

                {/* Lado Derecho: Tarjetas de Beneficios con entrada progresiva en cascada */}
                <div className="grid gap-5 sm:grid-cols-2">
                    {benefits.map((benefit, index) => (
                        <FadeInOnScroll key={benefit.title} direction="up" delay={index * 0.15}>
                            <div className="group h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#ED7D31] hover:shadow-md">
                                {/* Etiqueta / Pill en lugar de números o iconos */}
                                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#FFF5EC] px-3 py-1 text-xs font-bold text-[#ED7D31]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#ED7D31]"></span>
                                    {benefit.tag}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#ED7D31] transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                    {benefit.text}
                                </p>
                            </div>
                        </FadeInOnScroll>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default WhyChooseUs