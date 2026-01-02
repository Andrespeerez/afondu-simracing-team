import RedesSociales from "./RedesSociales";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
        className="md:p-20 p-10 py-20 bg-black border-t border-[#222222]"
        >
            <div
            className="grid md:grid-cols-3 grid-cols-1 text-center"
            >
                <div
                className="pb-20"
                >
                    <h3
                    className="text-red-500 text-2xl mb-10 tracking-widest"
                    >
                        AFUNDU SIMRACING
                    </h3>
                    <p
                    className="text-xl"
                    >
                        &copy; {currentYear} - Afondu SimRacing. <br />Todos los derechos reservados.
                    </p>
                </div>
                <div
                className="pb-20"
                >
                    <h3
                    className="text-red-500 text-2xl mb-10 tracking-widest"
                    >
                        NAVEGACIÓN
                    </h3>
                    <nav>
                        <ul
                        className="flex flex-col gap-4 text-xl"
                        >
                            <li>
                                <a href="#" className="hover:text-red-500 tracking-widest">INICIO</a>
                            </li>
                            <li>
                                <a href="#equipo" className="hover:text-red-500 tracking-widest">EQUIPO</a>
                            </li>
                            <li>
                                <a href="#media" className="hover:text-red-500 tracking-widest">MEDIA</a>
                            </li>
                            <li>
                                <a href="#patrocinios" className="hover:text-red-500 tracking-widest">PATROCINIOS</a>
                            </li>
                            <li>
                                <a href="#contacto" className="hover:text-red-500 tracking-widest">CONTACTO</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div
                className="pb-20"
                >
                    <h3
                    className="text-red-500 text-2xl mb-10 tracking-widest"
                    >
                        REDES SOCIALES
                    </h3>
                    <div
                    className="flex justify-center pb-10 border-b border-white/15"
                    >
                        <RedesSociales />
                    </div>

                    <p
                    className="text-xl hover:text-red-500 pt-10"
                    >
                        afondusimracing@gmail.com
                    </p>
                    
                </div>
            </div>

            <p
            className="h-20 border-t border-[#222222] text-center text-white/40 pt-10"
            >
                Diseñada por Andrespeerez
            </p>
            
            
        </footer>
    );
}