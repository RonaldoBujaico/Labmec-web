import { motion } from "framer-motion"

export default function FadeInOnScroll({ children, delay = 0, direction = "up" }) {
    // Configuración de los desplazamientos según la dirección
    const directionOffset = {
        up: { y: 40, x: 0 },
        down: { y: -40, x: 0 },
        left: { x: 40, y: 0 },
        right: { x: -40, y: 0 },
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: directionOffset[direction].x,
                y: directionOffset[direction].y
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-80px" }} // Anima una sola vez cuando entra en pantalla
            transition={{
                duration: 0.6,
                delay: delay,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    )
}