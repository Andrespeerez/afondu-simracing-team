import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
    const galeriaList = [
        {src: "/gallery/1.webp", alt: ""},
        {src: "/gallery/2.webp", alt: ""},
        {src: "/gallery/3.webp", alt: ""},
        {src: "/gallery/5.webp", alt: ""},
        {src: "/gallery/6.webp", alt: ""},
        {src: "/gallery/7.webp", alt: "Foto grupal de la Quedada 2025"},        
        {src: "/gallery/8.webp", alt: ""},
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);

    const handlers = useSwipeable({
        onSwipedLeft: () => nextPicture(),
        onSwipedRight: () => prevPicture(),
        trackMouse: true,
        preventScrollOnSwipe: true,
    })
  

    function nextPicture () {
        setSelectedIndex((currentIndex) => (currentIndex + 1) % galeriaList.length)
    }

    function prevPicture () {
        setSelectedIndex((currentIndex) => (currentIndex - 1 + galeriaList.length) % galeriaList.length)
    }
    
    return (
        <section
        aria-label="Galería de Fotos del equipo"
        >
            <header
            className='flex justify-center gap-10 text-3xl font-semibold items-center pb-20'
            >
                <h3
                className='pb-2 border-b border-red-500'
                >
                    GALERÍA
                </h3>
            </header>

            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
            >
                {galeriaList.map( (elem, index) => (
                    <GalleryItem 
                    key={index}
                    src={elem.src}
                    alt={elem.alt}
                    onClick={() => setSelectedIndex(index)}
                    />
                ))}
                <a
                className="border-2 border-red-500 font-semibold rounded-2xl cursor-pointer flex items-center justify-center text-3xl text-red-500 hover:bg-red-500 hover:text-white py-5"
                href="https://www.instagram.com/afondu_simracing/"
                target="_blank"
                aria-label="Ver fotos en Instagram del Equipo"
                >
                    Ver más ...
                </a>
            </div>

            {selectedIndex !== null && (
            <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 gap-30 text-8xl text-gray-500"
            role="dialog" 
            aria-modal="true"
            aria-label="Vista ampliada de la imagen"
            {...handlers}

            >
                <div className="absolute inset-0" onClick={() => setSelectedIndex(null)} />

                <button 
                className="absolute top-10 right-5 text-white/70 hover:text-white cursor-pointer z-50 sm:hidden"
                onClick={() => setSelectedIndex(null)}
                aria-label="Cerrar Galería"
                >
                    <X size={60} />
                </button>

                <button 
                className="absolute left-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 cursor-pointer hidden sm:block"
                onClick={(e) => { e.stopPropagation(); prevPicture();} }
                aria-label="Imagen anterior"
                >
                    <ChevronLeft size={60} />
                </button>

                <div className="max-w-3xl max-h-[90vh]">
                    <img
                    src={galeriaList[selectedIndex].src}
                    alt={galeriaList[selectedIndex].alt}
                    className="rounded-xl max-h-[90vh] object-contain"
                    />
                    <div 
                    className="text-white/50 mt-4 font-light tracking-widest text-sm"
                    aria-live="polite"
                    >
                        Imagen {selectedIndex + 1} de {galeriaList.length}
                    </div>
                </div>

                <button 
                className="absolute right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 cursor-pointer hidden sm:block"
                onClick={(e) => { e.stopPropagation(); nextPicture();}}
                aria-label="Siguiente Imagen"
                >
                    <ChevronRight size={60} />
                </button>
            </div>
            )}

        </section>
    );
}