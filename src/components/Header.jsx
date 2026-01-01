import { useState } from "react"
import RedesSociales from "./RedesSociales";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

export default function Header () {
    const [isOpen, setIsOpen] = useState(false)
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="p-10 py-2.5 sticky top-0 w-full flex lg:justify-around justify-between items-center bg-black border-b border-[#222222] z-9999">
            <a href="/" className="flex items-center"
            aria-label="Al Inicio"
            >
                <img src="/logo-afondu.webp" alt="Logo de Afondu" 
                className="rounded-full" width="80" height="80" />
            </a>

            <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 focus:outline-none"
            aria-label="Abrir menú"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`h-1 w-full bg-red-600 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`h-1 w-full bg-red-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-1 w-full bg-red-600 transition-all ${-isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>

            <NavDesktop />
            
            <NavMobile isOpen={isOpen} toggleMenu={toggleMenu} />
            
            <div className="hidden lg:flex gap-8 items-center justify-between">
                <a
                href="#contacto"
                className="border border-red-500 text-red-500 p-3 rounded-md font-bold text-lg hover:bg-red-500 hover:text-slate-900 transition hover:scale-105">
                    CONTACTO
                </a>
                <RedesSociales />
            </div>
        </header>
    )
}