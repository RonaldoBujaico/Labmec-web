import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        empresa: "",
        ruc: "",
        telefono: "",
        correo: "",
        servicio: "",
        mensaje: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const sendToWhatsApp = (event) => {
        event.preventDefault()

        const message = `Hola, deseo solicitar información a LABMEC ENERGÍA XXI EIRL.%0A%0A` +
            `Nombre: ${formData.nombre}%0A` +
            `Empresa: ${formData.empresa}%0A` +
            `RUC: ${formData.ruc}%0A` +
            `Teléfono: ${formData.telefono}%0A` +
            `Correo: ${formData.correo}%0A` +
            `Servicio de interés: ${formData.servicio}%0A` +
            `Mensaje: ${formData.mensaje}`

        window.open(`https://wa.me/51977193979?text=${message}`, "_blank")
    }

    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1800&q=80"
                            alt="Contacto LABMEC"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl text-center">
                        <p className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                            Contacto
                        </p>

                        <h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
                            Contáctenos
                        </h1>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/80">
                            Estamos listos para atender tus consultas, cotizaciones y requerimientos
                            técnicos.
                        </p>
                    </div>
                </section>

                <section className="bg-[#F7F7F7] px-5 py-20 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <form
                            onSubmit={sendToWhatsApp}
                            className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
                        >
                            <h2 className="text-3xl font-extrabold">Envíanos un mensaje</h2>
                            <p className="mt-3 text-gray-600">
                                Completa el formulario y se abrirá WhatsApp con tu solicitud lista para enviar.
                            </p>

                            <div className="mt-8 grid gap-5 md:grid-cols-2">
                                <div>
                                    <label className="mb-2 block text-sm font-bold">Nombre completo *</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tu nombre"
                                        className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold">Empresa</label>
                                    <input
                                        type="text"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleChange}
                                        placeholder="Nombre de la empresa"
                                        className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold">RUC</label>
                                    <input
                                        type="text"
                                        name="ruc"
                                        value={formData.ruc}
                                        onChange={handleChange}
                                        placeholder="20XXXXXXXXX"
                                        className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold">Teléfono *</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                        placeholder="+51 999 999 999"
                                        className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold">Correo electrónico *</label>
                                    <input
                                        type="email"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        required
                                        placeholder="correo@empresa.com"
                                        className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                    />
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-bold">Servicio de interés</label>
                                    <select
                                        name="servicio"
                                        value={formData.servicio}
                                        onChange={handleChange}
                                        className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                    >
                                        <option value="">Seleccionar servicio</option>
                                        <option>Venta de equipos</option>
                                        <option>Alquiler de equipos</option>
                                        <option>Mantenimiento preventivo y correctivo</option>
                                        <option>Calibración y verificación</option>
                                        <option>Servicios técnicos</option>
                                        <option>Asesoría técnica</option>
                                    </select>
                                </div>

                                <div className="md:col-span-2">
                                    <label className="mb-2 block text-sm font-bold">Mensaje</label>
                                    <textarea
                                        name="mensaje"
                                        value={formData.mensaje}
                                        onChange={handleChange}
                                        rows="5"
                                        placeholder="Describe tu requerimiento"
                                        className="w-full resize-none rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-6 rounded-md bg-[#ED7D31] px-7 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-[#d96d24]"
                            >
                                Enviar por WhatsApp
                            </button>
                        </form>

                        <aside className="space-y-5">
                            <div className="rounded-2xl bg-[#231F20] p-8 text-white">
                                <h2 className="text-2xl font-extrabold">Información de contacto</h2>

                                <div className="mt-6 space-y-5 text-white/80">
                                    <p>
                                        <span className="block font-bold text-white">Teléfono / WhatsApp</span>
                                        +51 977 193 979
                                    </p>
                                    <p>
                                        <span className="block font-bold text-white">Correo</span>
                                        oscarbujaico@gmail.com
                                    </p>
                                    <p>
                                        <span className="block font-bold text-white">Ubicación</span>
                                        Lima, Perú
                                    </p>
                                    <p>
                                        <span className="block font-bold text-white">Horario de atención</span>
                                        Lunes a viernes: 8:00 a.m. - 6:00 p.m.
                                    </p>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                                <div className="border-b border-gray-100 p-5">
                                    <h3 className="text-2xl font-extrabold">Ubicación</h3>
                                    <p className="mt-2 text-sm text-gray-600">
                                        LABMEC ENERGÍA XXI EIRL - Lima, Perú
                                    </p>
                                </div>

                                <iframe
                                    title="Ubicación LABMEC ENERGÍA XXI EIRL"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.550716711737!2d-76.99408942493955!3d-12.004578888228933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c78e7957a2cf%3A0x16ab9a830931a80e!2sLABMEC%20ENERGIA%20XXI%20EIRL!5e1!3m2!1ses!2spe!4v1779170742500!5m2!1ses!2spe"
                                    width="100%"
                                    height="360"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="block w-full"
                                ></iframe>
                            </div>
                        </aside>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Contacto