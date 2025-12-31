import RedesSociales from "./RedesSociales";

export default function NavMobile({ isOpen, toggleMenu }) {
    return (
            
        <div className={`
            fixed top-18 left-0 w-full bg-black border-b border-white/10 transition-all duration-300 lg:hidden
            ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'}
            `}>
            <ul className="flex flex-col items-center gap-6 py-8 font-bold italic">
                <li><a href="#" onClick={toggleMenu}>INICIO</a></li>
                <li><a href="#equipo" onClick={toggleMenu}>EQUIPO</a></li>
                <li><a href="#media" onClick={toggleMenu}>MEDIA</a></li>
                <li><a href="#patrocinadores" onClick={toggleMenu}>PATROCINADORES</a></li>
                <li><a href="#contacto" onClick={toggleMenu}>CONTACTO</a></li>
                <li 
                className="p-2"
                >
                    <RedesSociales />
                </li>
            </ul>
        </div>

    )
}