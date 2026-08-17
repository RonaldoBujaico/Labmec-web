import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import FadeInOnScroll from "../components/FadeInOnScroll"

function Contacto() {
    const [formData, setFormData] = useState({
        nombre: "",
        telefono: "",
        correo: "",
        mensaje: "",
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target

        setFormData({
            ...formData,
            [name]: value,
        })

        // Limpia el error del campo cuando el usuario escribe
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            })
        }
    }

    const validate = () => {
        const newErrors = {}

        // Validar nombre (solo letras y espacios, mínimo 3 caracteres)
        const nombreRegex = /^[a-zA-AáéíóúÁÉÍÓÚñÑ\s]{3,}$/
        if (!formData.nombre.trim()) {
            newErrors.nombre = "El nombre es obligatorio."
        } else if (!nombreRegex.test(formData.nombre.trim())) {
            newErrors.nombre = "Ingresa un nombre válido (solo letras)."
        }

        // Validar teléfono (Perú: 9 dígitos iniciando en 9)
        const telefonoClean = formData.telefono.replace(/\s+/g, "")
        const telefonoRegex = /^9\d{8}$/
        if (!formData.telefono.trim()) {
            newErrors.telefono = "El teléfono es obligatorio."
        } else if (!telefonoRegex.test(telefonoClean)) {
            newErrors.telefono = "Ingresa un celular válido de 9 dígitos (ej. 987545415)."
        }

        // Validar correo electrónico
        const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!formData.correo.trim()) {
            newErrors.correo = "El correo electrónico es obligatorio."
        } else if (!correoRegex.test(formData.correo.trim())) {
            newErrors.correo = "Ingresa un correo electrónico válido."
        }

        // Validar mensaje (mínimo 10 caracteres)
        if (!formData.mensaje.trim()) {
            newErrors.mensaje = "El mensaje es obligatorio."
        } else if (formData.mensaje.trim().length < 10) {
            newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres."
        }

        return newErrors
    }

    const sendToWhatsApp = (event) => {
        event.preventDefault()

        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }

        // Estructura limpia del mensaje para WhatsApp
        const rawMessage =
            `Hola, deseo solicitar información a LABMEC ENERGÍA XXI EIRL.\n\n` +
            `*Nombre completo:* ${formData.nombre.trim()}\n` +
            `*Teléfono:* ${formData.telefono.trim()}\n` +
            `*Correo:* ${formData.correo.trim()}\n` +
            `*Mensaje:* ${formData.mensaje.trim()}`

        const encodedMessage = encodeURIComponent(rawMessage)
        window.open(`https://wa.me/51977193979?text=${encodedMessage}`, "_blank")
    }

    return (
        <div className="min-h-screen bg-white text-[#231F20]">
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative overflow-hidden bg-[#231F20] px-5 py-20 text-white lg:px-8">
                    <div className="absolute inset-0">
                        <img
                            src="/public/img/contacto.webp"
                            alt="Contacto LABMEC"
                            className="h-full w-full object-cover opacity-20"
                        />
                    </div>

                    <div className="relative mx-auto max-w-7xl text-center">
                        <FadeInOnScroll>
                            <p className="mb-3 inline-flex rounded-full bg-white/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.25em] text-[#FFDD55]">
                                Contacto
                            </p>

                            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">
                                Contáctenos
                            </h1>

                            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                                Estamos listos para atender tus consultas, cotizaciones y requerimientos técnicos.
                            </p>
                        </FadeInOnScroll>
                    </div>
                </section>

                {/* Formulario y Mapa */}
                <section className="bg-[#F7F7F7] px-5 py-14 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-start">
                        {/* Formulario con Validaciones */}
                        <FadeInOnScroll>
                            <form
                                onSubmit={sendToWhatsApp}
                                noValidate
                                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
                            >
                                <h2 className="text-2xl font-extrabold">Envíanos un mensaje</h2>
                                <p className="mt-2 text-sm text-gray-600">
                                    Completa el formulario y te responderemos a la brevedad vía WhatsApp.
                                </p>

                                <div className="mt-6 flex flex-col gap-4">
                                    {/* Nombre Completo */}
                                    <div>
                                        <label className="mb-1.5 block text-sm font-bold">
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Tu nombre completo"
                                            className={`w-full rounded-md border px-4 py-3 text-sm outline-none transition ${errors.nombre
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-[#ED7D31]"
                                                }`}
                                        />
                                        {errors.nombre && (
                                            <p className="mt-1 text-xs font-semibold text-red-500">{errors.nombre}</p>
                                        )}
                                    </div>

                                    {/* Teléfono */}
                                    <div>
                                        <label className="mb-1.5 block text-sm font-bold">
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            name="telefono"
                                            value={formData.telefono}
                                            onChange={handleChange}
                                            placeholder="987545415"
                                            className={`w-full rounded-md border px-4 py-3 text-sm outline-none transition ${errors.telefono
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-[#ED7D31]"
                                                }`}
                                        />
                                        {errors.telefono && (
                                            <p className="mt-1 text-xs font-semibold text-red-500">{errors.telefono}</p>
                                        )}
                                    </div>

                                    {/* Correo electrónico */}
                                    <div>
                                        <label className="mb-1.5 block text-sm font-bold">
                                            Correo electrónico *
                                        </label>
                                        <input
                                            type="email"
                                            name="correo"
                                            value={formData.correo}
                                            onChange={handleChange}
                                            placeholder="correo@empresa.com"
                                            className={`w-full rounded-md border px-4 py-3 text-sm outline-none transition ${errors.correo
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-[#ED7D31]"
                                                }`}
                                        />
                                        {errors.correo && (
                                            <p className="mt-1 text-xs font-semibold text-red-500">{errors.correo}</p>
                                        )}
                                    </div>

                                    {/* Mensaje */}
                                    <div>
                                        <label className="mb-1.5 block text-sm font-bold">
                                            Mensaje *
                                        </label>
                                        <textarea
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Escribe tu mensaje o requerimiento aquí..."
                                            className={`w-full resize-none rounded-md border px-4 py-3 text-sm outline-none transition ${errors.mensaje
                                                ? "border-red-500 focus:border-red-500"
                                                : "border-gray-200 focus:border-[#ED7D31]"
                                                }`}
                                        ></textarea>
                                        {errors.mensaje && (
                                            <p className="mt-1 text-xs font-semibold text-red-500">{errors.mensaje}</p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-6 w-full rounded-md bg-[#ED7D31] px-7 py-3.5 font-bold text-white transition hover:bg-[#d96d24]"
                                >
                                    Enviar mensaje
                                </button>
                            </form>
                        </FadeInOnScroll>

                        {/* Mapa directo */}
                        <FadeInOnScroll>
                            <div className="h-full min-h-[420px] overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
                                <iframe
                                    title="Ubicación LABMEC ENERGÍA XXI EIRL"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.550716711737!2d-76.99408942493955!3d-12.004578888228933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c78e7957a2cf%3A0x16ab9a830931a80e!2sLABMEC%20ENERGIA%20XXI%20EIRL!5e1!3m2!1ses!2spe!4v1779170742500!5m2!1ses!2spe"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0, minHeight: "450px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="block w-full"
                                ></iframe>
                            </div>
                        </FadeInOnScroll>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    )
}

export default Contacto