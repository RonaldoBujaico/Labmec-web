import { useState } from "react"
import { useLocation } from "react-router-dom"
import logo from "../assets/logo.png"

const menuEquipos = [
    { name: "Venta de equipos", href: "/venta-equipos" },
    { name: "Alquiler de equipos", href: "/alquiler-equipos" },
]

const menuServicios = [
    { name: "Mantenimiento preventivo y correctivo", href: "/mantenimiento" },
    { name: "Calibración y verificación", href: "/calibracion" },
    { name: "Servicios técnicos", href: "/servicios" },
]

function Dropdown({ title, items, isActive, isItemActive }) {
    return (
        <div className="group relative">
            <button className={`flex items-center gap-1 text-sm font-medium transition hover:text-[#ED7D31] ${isActive ? "text-[#ED7D31]" : ""}`}>
                {title}
                <span className="text-xs">▼</span>
            </button>

            <div className="invisible absolute left-0 top-full z-50 mt-4 w-72 rounded-lg border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
                {items.map((item) => {
                    const active = isItemActive(item.href)

                    return (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`block rounded-md px-4 py-3 text-sm transition hover:bg-[#FFF5EC] hover:text-[#ED7D31] ${active ? "bg-[#FFF5EC] text-[#ED7D31]" : "text-[#231F20]"}`}
                        >
                            {item.name}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const { pathname } = useLocation()
    const isActive = (href) => pathname === href
    const hasActiveItem = (items) => items.some((item) => isActive(item.href))
    const linkClass = (href) =>
        `text-sm font-medium transition hover:text-[#ED7D31] ${isActive(href) ? "text-[#ED7D31]" : ""}`
    const mobileLinkClass = (href) =>
        `font-medium transition hover:text-[#ED7D31] ${isActive(href) ? "text-[#ED7D31]" : ""}`
    const mobileSubLinkClass = (href) =>
        `block rounded-md px-3 py-2 text-sm transition hover:bg-[#FFF5EC] hover:text-[#ED7D31] ${isActive(href) ? "bg-[#FFF5EC] text-[#ED7D31]" : ""}`

    return (
        <header className="sticky top-0 z-40 border-b border-gray-100 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                <a href="/" className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="LABMEC ENERGÍA XXI EIRL"
                        className="h-14 w-auto object-contain"
                    />
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    <a href="/" className={linkClass("/")}>
                        Inicio
                    </a>
                    <a href="/nosotros" className={linkClass("/nosotros")}>
                        Nosotros
                    </a>
                    <Dropdown title="Equipos" items={menuEquipos} isActive={hasActiveItem(menuEquipos)} isItemActive={isActive} />
                    <Dropdown title="Servicios" items={menuServicios} isActive={hasActiveItem(menuServicios)} isItemActive={isActive} />
                    <a href="/contacto" className={linkClass("/contacto")}>
                        Contacto
                    </a>
                </nav>

                <a
                    href="/contacto"
                    className="hidden rounded-md bg-[#ED7D31] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d96d24] lg:inline-block"
                >
                    Solicitar cotización
                </a>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-md border border-gray-200 px-3 py-2 text-sm font-bold lg:hidden"
                >
                    ☰
                </button>
            </div>

            {isOpen && (
                <div className="border-t border-gray-100 bg-white px-5 py-4 lg:hidden">
                    <nav className="flex flex-col gap-3">
                        <a href="/" onClick={() => setIsOpen(false)} className={mobileLinkClass("/")}>
                            Inicio
                        </a>
                        <a href="/nosotros" onClick={() => setIsOpen(false)} className={mobileLinkClass("/nosotros")}>
                            Nosotros
                        </a>

                        <div className="rounded-lg bg-gray-50 p-3">
                            <p className={`mb-2 text-sm font-bold ${hasActiveItem(menuEquipos) ? "text-[#ED7D31]" : ""}`}>Equipos</p>
                            {menuEquipos.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={mobileSubLinkClass(item.href)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <div className="rounded-lg bg-gray-50 p-3">
                            <p className={`mb-2 text-sm font-bold ${hasActiveItem(menuServicios) ? "text-[#ED7D31]" : ""}`}>Servicios</p>
                            {menuServicios.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={mobileSubLinkClass(item.href)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <a href="/contacto" onClick={() => setIsOpen(false)} className={mobileLinkClass("/contacto")}>
                            Contacto
                        </a>

                        <a
                            href="/contacto"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 rounded-md bg-[#ED7D31] px-5 py-3 text-center font-semibold text-white"
                        >
                            Solicitar cotización
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}

export default Header
