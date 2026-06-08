import logo from "../assets/logo.png"

function Footer() {
    return (
        <footer id="contacto" className="bg-[#111111] px-5 py-16 text-white lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <img
                        src={logo}
                        alt="LABMEC ENERGÍA XXI EIRL"
                        className="h-16 w-auto rounded bg-white p-2"
                    />
                    <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                        Soluciones técnicas para equipos, energía, mantenimiento, calibración y servicios
                        industriales.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 font-bold">Enlaces rápidos</h3>
                    <div className="flex flex-col gap-3 text-sm text-white/70">
                        <a href="#" className="hover:text-[#ED7D31]">Inicio</a>
                        <a href="#nosotros" className="hover:text-[#ED7D31]">Nosotros</a>
                        <a href="#servicios" className="hover:text-[#ED7D31]">Servicios</a>
                        <a href="#venta-equipos" className="hover:text-[#ED7D31]">Venta de equipos</a>
                        <a href="#alquiler-equipos" className="hover:text-[#ED7D31]">Alquiler de equipos</a>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-bold">Servicios</h3>
                    <div className="flex flex-col gap-3 text-sm text-white/70">
                        <a href="#mantenimiento" className="hover:text-[#ED7D31]">
                            Mantenimiento preventivo
                        </a>
                        <a href="#calibracion" className="hover:text-[#ED7D31]">
                            Calibración y verificación
                        </a>
                        <a href="#servicios" className="hover:text-[#ED7D31]">
                            Servicios técnicos
                        </a>
                        <a href="#contacto" className="hover:text-[#ED7D31]">
                            Asesoría técnica
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className="mb-4 font-bold">Contacto</h3>
                    <div className="space-y-3 text-sm text-white/70">
                        <p>📞 +51 977 193 979</p>
                        <p>✉️ oscarbujaico@gmail.com</p>
                        <p>📍 Lima, Perú</p>
                        <p>🕘 Lunes a viernes: 8:00 a.m. - 6:00 p.m.</p>
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">
                © 2025 LABMEC ENERGÍA XXI EIRL. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer