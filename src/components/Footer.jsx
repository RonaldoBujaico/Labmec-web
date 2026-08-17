import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Footer() {
    return (
        <footer id="contacto" className="bg-[#111111] px-5 py-16 text-white lg:px-8">
            <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-4">

                {/* Columna 1: Logo, Descripción y Redes Sociales */}
                <div className="flex flex-col justify-between">
                    <div>
                        <img
                            src={logo}
                            alt="LABMEC ENERGÍA XXI EIRL"
                            className="h-16 w-auto rounded bg-white p-2"
                        />
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
                            Soluciones técnicas para equipos, energía, mantenimiento, calibración y servicios industriales.
                        </p>
                    </div>

                    {/* Redes Sociales */}
                    <div className="mt-6">
                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/50">
                            Síguenos en
                        </h4>
                        <div className="flex items-center gap-3">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/oscar.bujaicosantos.7"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-[#ED7D31] hover:text-white"
                                aria-label="Facebook"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/bujaicosantos"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-[#ED7D31] hover:text-white"
                                aria-label="Instagram"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/labmec-energia-xxi-eirl/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-[#ED7D31] hover:text-white"
                                aria-label="LinkedIn"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>

                            {/* TikTok */}
                            <a
                                href="https://www.tiktok.com/@oscar.bujaico.san"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-all hover:bg-[#ED7D31] hover:text-white"
                                aria-label="TikTok"
                            >
                                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.98-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.54-1.34 2.53-.05 1.25.68 2.49 1.78 3.03.95.47 2.1.42 3 .01.93-.41 1.62-1.31 1.73-2.32.06-1.84.02-3.68.03-5.52V.02z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Columna 2: Enlaces rápidos */}
                <div>
                    <h3 className="mb-4 text-base font-bold text-white">Enlaces rápidos</h3>
                    <div className="flex flex-col gap-3 text-sm text-white/70">
                        <Link to="/" className="transition-colors hover:text-[#ED7D31]">Inicio</Link>
                        <Link to="/nosotros" className="transition-colors hover:text-[#ED7D31]">Nosotros</Link>
                        <Link to="/servicios" className="transition-colors hover:text-[#ED7D31]">Servicios</Link>
                        <Link to="/venta-equipos" className="transition-colors hover:text-[#ED7D31]">Venta de equipos</Link>
                        <Link to="/alquiler-equipos" className="transition-colors hover:text-[#ED7D31]">Alquiler de equipos</Link>
                    </div>
                </div>

                {/* Columna 3: Servicios */}
                <div>
                    <h3 className="mb-4 text-base font-bold text-white">Servicios</h3>
                    <div className="flex flex-col gap-3 text-sm text-white/70">
                        <Link to="/mantenimiento" className="transition-colors hover:text-[#ED7D31]">
                            Mantenimiento preventivo
                        </Link>
                        <Link to="/calibracion" className="transition-colors hover:text-[#ED7D31]">
                            Calibración y verificación
                        </Link>
                        <Link to="/servicios" className="transition-colors hover:text-[#ED7D31]">
                            Servicios técnicos
                        </Link>
                        <Link to="/contacto" className="transition-colors hover:text-[#ED7D31]">
                            Asesoría técnica
                        </Link>
                    </div>
                </div>

                {/* Columna 4: Contacto y Libro de Reclamaciones */}
                <div>
                    <h3 className="mb-4 text-base font-bold text-white">Contacto</h3>
                    <div className="space-y-3 text-sm text-white/70">
                        <p className="flex items-center gap-2">
                            <span>📞</span> +51 916 819 196
                        </p>
                        <p className="flex items-center gap-2">
                            <span>✉️</span> victorbujaico@gmail.com
                        </p>
                        <p className="flex items-center gap-2">
                            <span>📍</span> San Juan de Lurigancho, Lima, Perú
                        </p>
                        <p className="flex items-center gap-2">
                            <span>🕘</span> Lunes a viernes: 9:00 a.m. - 6:00 p.m.
                        </p>
                    </div>

                    {/* Libro de Reclamaciones */}
                    <div className="mt-6 border-t border-white/10 pt-4">
                        <Link
                            to="/contacto"
                            className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 bg-white/5 px-3.5 py-2 text-xs font-medium text-white transition-all hover:border-[#ED7D31] hover:bg-[#ED7D31]/10 hover:text-[#ED7D31]"
                        >
                            <svg className="h-4 w-4 text-[#ED7D31]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span>Libro de Reclamaciones</span>
                        </Link>
                    </div>
                </div>

            </div>

            <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50">
                © {new Date().getFullYear()} LABMEC ENERGÍA XXI EIRL. Todos los derechos reservados.
            </div>
        </footer>
    )
}

export default Footer