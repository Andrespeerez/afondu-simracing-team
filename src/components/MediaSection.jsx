import { useState } from "react";
import Contenido from "./Contenido";
import Gallery from "./Gallery";

export default function MediaSection() {
    const [active, setActive] = useState("galeria");

    const sections = [
        { name: "GALERÍA", key: "galeria" },
        { name: "CONTENIDO", key: "contenido" },
    ];

    function renderizarSeccion() {
        switch (active) {
            case "galeria":
                return <Gallery />;
            case "contenido":
                return <Contenido />
            default:
                return null;
        }
    }

    return (
        <section id="media"
        className='2xl:p-10 py-30 px-10 flex flex-col items-center gap-20 bg-black justify-center shadow-2xl'
        aria-label="Multimedia"
        >
            <h2
            className='text-5xl border-b-2 border-red-500 pb-3 tracking-widest'
            >
                MEDIA
            </h2>

            <nav className="flex gap-5 text-3xl font-semibold">
                {sections.map((elem) => (
                    <button
                    className={`cursor-pointer pb-1 border-b-2 ${
                    active === elem.key
                        ? "border-red-500 text-red-500"
                        : "border-transparent text-white hover:text-red-500"
                    } transition-colors duration-300`}
                    key={elem.key}
                    onClick={() => setActive(elem.key)}
                    >
                        {elem.name}
                    </button>
                ))}
            </nav>

            { renderizarSeccion() }
        </section>
    )
}