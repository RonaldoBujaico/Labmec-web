function ContactSection() {
    return (
        <section id="contacto" className="bg-white px-5 py-20 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#ED7D31]">
                        Contacto
                    </p>
                    <h2 className="text-3xl font-extrabold md:text-4xl">
                        Solicita información o cotización
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Cuéntanos qué equipo o servicio necesitas y te responderemos a la brevedad.
                    </p>
                </div>

                <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <form className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
                        <div className="grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-bold">Nombre completo *</label>
                                <input
                                    type="text"
                                    placeholder="Tu nombre"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold">Empresa</label>
                                <input
                                    type="text"
                                    placeholder="Nombre de la empresa"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold">Teléfono *</label>
                                <input
                                    type="tel"
                                    placeholder="+51 999 999 999"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-bold">Correo electrónico *</label>
                                <input
                                    type="email"
                                    placeholder="correo@empresa.com"
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                />
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block text-sm font-bold">Servicio de interés</label>
                                <select className="w-full rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]">
                                    <option>Seleccionar servicio</option>
                                    <option>Venta de equipos</option>
                                    <option>Alquiler de equipos</option>
                                    <option>Mantenimiento preventivo y correctivo</option>
                                    <option>Calibración y verificación</option>
                                    <option>Servicios técnicos</option>
                                </select>
                            </div>

                            <div className="md:col-span-2">
                                <label className="mb-2 block text-sm font-bold">Mensaje</label>
                                <textarea
                                    rows="5"
                                    placeholder="Describe tu requerimiento"
                                    className="w-full resize-none rounded-md border border-gray-200 px-4 py-3 outline-none transition focus:border-[#ED7D31]"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="mt-6 w-full rounded-md bg-[#ED7D31] px-6 py-3 font-semibold text-white transition hover:bg-[#d96d24] md:w-auto"
                        >
                            Enviar mensaje
                        </button>
                    </form>

                    <aside className="space-y-5">
                        <div className="rounded-xl bg-[#231F20] p-7 text-white">
                            <h3 className="text-2xl font-extrabold">Información de contacto</h3>

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
                                    <span className="block font-bold text-white">Horario</span>
                                    Lunes a viernes: 8:00 a.m. - 6:00 p.m.
                                </p>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-xl border border-gray-100 bg-[#F7F7F7] shadow-sm">
                            <div className="flex h-72 items-center justify-center p-6 text-center">
                                <div>
                                    <p className="text-5xl">📍</p>
                                    <h3 className="mt-4 text-xl font-extrabold">Ubicación</h3>
                                    <p className="mt-2 text-gray-600">Mapa de referencia: Lima, Perú</p>
                                    <p className="mt-3 text-sm text-gray-500">
                                        Luego reemplazamos este bloque por Google Maps real.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    )
}

export default ContactSection