import { useState } from "react"
import RedesSociales from "./RedesSociales";

export default function Header () {
    const [isOpen, setIsOpen] = useState(false)
    function toggleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header className="p-10 py-2.5 sticky top-0 w-full flex lg:justify-around justify-between items-center bg-black border-b border-[#222222] z-[9999]">
            <a href="/" className="flex items-center">
                <img src="/logo-afondu.webp" alt="Logo de Afondu" 
                className="rounded-full" width="80" height="80" />
            </a>
            
            <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2 focus:outline-none"
            >
                <div className="w-6 h-5 flex flex-col justify-between">
                    <span className={`h-1 w-full bg-red-600 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`h-1 w-full bg-red-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-1 w-full bg-red-600 transition-all ${-isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </button>

            <div className={`
                fixed top-[72px] left-0 w-full bg-black border-b border-white/10 transition-all duration-300 lg:hidden
                ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}
                `}>
                <ul className="flex flex-col items-center gap-6 py-8 font-bold italic">
                    <li><a href="#" onClick={toggleMenu}>INICIO</a></li>
                    <li><a href="#equipo" onClick={toggleMenu}>EQUIPO</a></li>
                    <li><a href="#media" onClick={toggleMenu}>MEDIA</a></li>
                    <li><a href="#contacto" onClick={toggleMenu}>CONTACTO</a></li>
                    <li 
                    className="p-2"
                    >
                        <RedesSociales />
                    </li>
                </ul>
            </div>

            <nav className="hidden lg:flex gap-8 text-white text-xl font-semibold justify-center">
                <div>
                    <a href="#"
                    className="text-red-500 text-lg border-b-2 border-red-500 pb-1">
                        INICIO
                    </a>
                </div>
                <div>
                    <a href="#equipo"
                    className="text-lg hover:text-red-500">
                                EQUIPO
                    </a>
                </div>
                <div>
                    <a href="#media"
                    className="text-lg hover:text-red-500">
                        MEDIA
                    </a>
                </div>
                <div>
                    <a href="#patrocinadores"
                    className="text-lg hover:text-red-500">
                        PATROCINADORES
                    </a>
                </div>
            </nav>

            <div className="hidden lg:flex gap-8 items-center justify-between">
                <button
                className="border border-red-500 text-red-500 p-3 rounded-md font-bold text-lg hover:bg-red-500 hover:text-slate-900 transition hover:scale-105">
                    CONTACTO
                </button>
                <RedesSociales />
            </div>
        </header>
    )
}