import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

const values = [
    {
        title: "Compromiso",
        text: "Atendemos cada requerimiento con responsabilidad, orden y enfoque técnico.",
    },
    {
        title: "Calidad",
        text: "Buscamos brindar soluciones confiables para empresas, industrias y operaciones técnicas.",
    },
    {
        title: "Asesoría",
        text: "Orientamos al cliente para elegir el equipo, servicio o mantenimiento más adecuado.",
    },
    {
        title: "Soporte",
        text: "Acompañamos al cliente antes, durante y después del servicio solicitado.",
    },
]

function Nosotros() {
    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1800&q=80"
                            alt="Empresa técnica industrial"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                Nosotros
                            </p>

                            <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                                Sobre LABMEC ENERGÍA XXI EIRL
                            </h1>

                            <p className="mt-6 text-lg leading-relaxed text-white/80">
                                Somos una empresa orientada a brindar soluciones técnicas para equipos,
                                energía, mantenimiento, calibración, verificación, venta y alquiler de
                                instrumentos para empresas e industrias.
                            </p>

                            <div className="mt-8">
                                <a
                                    href="/contacto"
                                    className="rounded-md bg-[#ED7D31] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                                >
                                    Contáctanos
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-5 py-20 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?auto=format&fit=crop&w=1200&q=80"
                                alt="Equipo técnico LABMEC"
                                className="h-[460px] w-full object-cover"
                            />
                        </div>

                        <div>
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                Quiénes somos
                            </p>

                            <h2 className="text-3xl font-extrabold md:text-4xl">
                                Soluciones técnicas para la continuidad operativa
                            </h2>

                            <p className="mt-5 text-lg leading-relaxed text-gray-600">
                                LABMEC ENERGÍA XXI EIRL atiende necesidades relacionadas con venta de
                                equipos, alquiler de instrumentos, mantenimiento preventivo y correctivo,
                                calibración, verificación y soporte técnico especializado.
                            </p>

                            <p className="mt-4 text-lg leading-relaxed text-gray-600">
                                Nuestro objetivo es ayudar a empresas, industrias y clientes técnicos a
                                contar con equipos confiables, asesoría clara y soluciones oportunas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-7 lg:grid-cols-3">
                            <article className="rounded-2xl bg-white p-8 shadow-sm">
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Misión
                                </p>
                                <h3 className="text-2xl font-extrabold">Brindar soporte técnico confiable</h3>
                                <p className="mt-4 text-gray-600">
                                    Ofrecer soluciones técnicas en venta, alquiler, mantenimiento,
                                    calibración y servicios especializados, aportando valor a nuestros clientes.
                                </p>
                            </article>

                            <article className="rounded-2xl bg-white p-8 shadow-sm">
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Visión
                                </p>
                                <h3 className="text-2xl font-extrabold">Ser un aliado técnico estratégico</h3>
                                <p className="mt-4 text-gray-600">
                                    Ser reconocidos como una empresa confiable en soluciones para equipos,
                                    energía, mantenimiento y servicios industriales.
                                </p>
                            </article>

                            <article className="rounded-2xl bg-white p-8 shadow-sm">
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                    Enfoque
                                </p>
                                <h3 className="text-2xl font-extrabold">Atención clara y personalizada</h3>
                                <p className="mt-4 text-gray-600">
                                    Escuchamos cada necesidad para proponer el equipo, servicio o solución
                                    más adecuada según el requerimiento del cliente.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="bg-white px-5 py-20 lg:px-8">
                    <div className="mx-auto max-w-7xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                                Valores
                            </p>
                            <h2 className="text-3xl font-extrabold md:text-4xl">
                                Principios que guían nuestro servicio
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                            {values.map((value, index) => (
                                <article
                                    key={value.title}
                                    className="rounded-xl border border-gray-100 bg-[#F7F7F7] p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
                                >
                                    <div className="mb-5 text-3xl font-extrabold text-[#ED7D31]">
                                        0{index + 1}
                                    </div>
                                    <h3 className="text-xl font-extrabold">{value.title}</h3>
                                    <p className="mt-3 text-gray-600">{value.text}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Nosotros