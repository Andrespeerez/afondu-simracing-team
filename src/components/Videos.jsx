import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import VideoItem from "./VideoItem";

export default function Videos() {
    const videosList = [
        {url: "https://www.youtube.com/embed/HOmF9rxv_40?si=Hhluqf2ULxPVu12g", 
            title: "", 
            caratula: "https://img.youtube.com/vi/HOmF9rxv_40/maxresdefault.jpg"},
        {url: "https://www.youtube.com/embed/3-ypBD7laF4?si=CkzZ_nCGHJ0uOurh", 
            title: "", 
            caratula: "https://img.youtube.com/vi/3-ypBD7laF4/maxresdefault.jpg"},
        {url: "https://www.youtube.com/embed/bKvYk0Y_GHU?si=H96dH_eM9_R9ZADy", 
            title: "", 
            caratula: "https://img.youtube.com/vi/bKvYk0Y_GHU/maxresdefault.jpg"},
        {url: "https://www.youtube.com/embed/GAUn7touwyc?si=4tzD0tQBFC2ducNN", 
            title: "", 
            caratula: "https://img.youtube.com/vi/GAUn7touwyc/maxresdefault.jpg"},
    ];

    const [selectedIndex, setSelectedIndex] = useState(null);
    
    const handlers = useSwipeable({
        onSwipedLeft: () => nextVideo(),
        onSwipedRight: () => prevVideo(),
        trackMouse: true,
        preventScrollOnSwipe: true,
    })
    

    function nextVideo () {
        setSelectedIndex((currentIndex) => (currentIndex + 1) % videosList.length)
    }

    function prevVideo () {
        setSelectedIndex((currentIndex) => (currentIndex - 1 + videosList.length) % videosList.length)
    }

    return (
        <section
        aria-label="Contenido Multimedia"
        >
            <header
            className='flex justify-center gap-10 text-3xl font-semibold items-center pb-20'
            >
                <h3
                className='pb-2 border-b border-red-500'
                >VIDEOS</h3>
            </header>

            <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto w-2/3"
            >
                {videosList.map( (elem, index) => (
                    <VideoItem key={index} 
                    title={elem.title} 
                    caratula={elem.caratula}
                    onClick={() => setSelectedIndex(index)}/>
                ))}
            </div>

            {selectedIndex !== null && (
            <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 gap-30 text-8xl text-gray-500"
            role="dialog" 
            aria-modal="true"
            aria-label="Vista previa del vídeo"
            {...handlers}>
                <button 
                className="absolute top-30 right-5 text-white/70 hover:text-white cursor-pointer z-50"
                onClick={() => setSelectedIndex(null)}
                aria-label="Cerrar Vista Video"
                >
                    <X size={60} />
                </button>

                <button 
                className="absolute left-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 cursor-pointer hidden sm:block"
                onClick={(e) => { e.stopPropagation(); prevVideo();} }
                aria-label="Video anterior"
                >
                    <ChevronLeft size={60} />
                </button>

                <div className="max-w-3xl w-full aspect-video">
                    <iframe frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
                    src={videosList[selectedIndex].url} title={videosList[selectedIndex].title}
                    className="w-full h-full rounded-xl shadow-2xl z-100"
                    ></iframe>
                    <div 
                    className="text-white/50 mt-4 font-light tracking-widest text-sm"
                    aria-live="polite"
                    >
                        Video {selectedIndex + 1} de {videosList.length}
                    </div>
                </div>

                <button 
                className="absolute right-4 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all z-50 cursor-pointer hidden sm:block"
                onClick={(e) => { e.stopPropagation(); nextVideo();}}
                aria-label="Siguiente Video"
                >
                    <ChevronRight size={60} />
                </button>
            </div>
            )}

        </section>
    );
}