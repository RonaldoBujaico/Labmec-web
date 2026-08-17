import { useState, useEffect } from "react"

function CookieBanner() {
    const [accepted, setAccepted] = useState(true)

    useEffect(() => {
        const cookieConsent = localStorage.getItem("cookieConsent")
        if (!cookieConsent) {
            setAccepted(false)
        }
    }, [])

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "true")
        setAccepted(true)
    }

    if (accepted) return null

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-4xl rounded-xl border border-gray-200 bg-[#231F20] p-4 text-white shadow-2xl md:p-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="text-sm text-gray-300">
                    <p>
                        Utilizamos cookies propias y de terceros para mejorar tu experiencia y analizar el uso de nuestro sitio web. Al continuar navegando, aceptas su uso.
                    </p>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                    <button
                        onClick={handleAccept}
                        className="rounded-md bg-[#ED7D31] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#d96d24]"
                    >
                        Aceptar cookies
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CookieBanner