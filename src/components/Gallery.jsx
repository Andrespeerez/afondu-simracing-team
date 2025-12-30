import { useState } from "react";
import GalleryItem from "./GalleryItem";

export default function Gallery() {
    const galeriaList = [
        "/src/assets/gallery/1.webp",
        "/src/assets/gallery/2.webp",
        "/src/assets/gallery/3.webp",
        "/src/assets/gallery/5.webp",
        "/src/assets/gallery/6.webp",
        "/src/assets/gallery/7.webp",        
        "/src/assets/gallery/8.webp",
    ];

    const [selectedImage, setSelectedImage] = useState(null);
    
    return (
        <section>
            <header
            className='flex justify-center gap-10 text-3xl font-semibold items-center pb-20'
            >
                <h3
                className='pb-2 border-b border-red-500'
                >GALERÍA</h3>
            </header>

            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
            >
                {galeriaList.map( (elem, index) => (
                    <GalleryItem 
                    key={index}
                    src={elem}
                    onClick={() => setSelectedImage(elem)}
                    />
                ))}
                <a
                className="border-2 border-red-500 font-semibold rounded-2xl cursor-pointer flex items-center justify-center text-3xl text-red-500 hover:bg-red-500 hover:text-white py-5"
                href="https://www.instagram.com/afondu_simracing/"
                target="_blank"
                >
                    Ver más ...
                </a>
            </div>

            {selectedImage && (
            <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
            >
                <div className="relative max-w-3xl max-h-[90vh]">
                    <img
                    src={selectedImage}
                    alt="Galería ampliada"
                    className="rounded-xl max-h-[90vh] object-contain"
                    />
                    <button
                    className="absolute -top-13 -right-10 text-white text-5xl font-bold cursor-pointer"
                    onClick={() => setSelectedImage(null)}
                    >
                    &times;
                    </button>
                </div>
            </div>
        )}

        </section>
    );
}