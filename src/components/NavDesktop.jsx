export default function NavDesktop() {
    return (
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
                <a href="#patrocinios"
                className="text-lg hover:text-red-500">
                    PATROCINADORES
                </a>
            </div>
        </nav>
    );
}