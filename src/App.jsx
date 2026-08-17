import { BrowserRouter, Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import VentaEquipos from "./pages/VentaEquipos"
import AlquilerEquipos from "./pages/AlquilerEquipos"
import Mantenimiento from "./pages/Mantenimiento"
import Calibracion from "./pages/Calibracion"
import Servicios from "./pages/Servicios"
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto"
import CookieBanner from "./components/CookieBanner"

function App() {
  return (
    <BrowserRouter>
      {/* Reinicia el scroll al inicio de la pantalla al cambiar de ruta */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/venta-equipos" element={<VentaEquipos />} />
        <Route path="/alquiler-equipos" element={<AlquilerEquipos />} />
        <Route path="/mantenimiento" element={<Mantenimiento />} />
        <Route path="/calibracion" element={<Calibracion />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App