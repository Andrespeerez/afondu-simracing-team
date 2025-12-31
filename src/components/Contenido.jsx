import ContenidoItem from "./ContenidoItem";

export default function Contenido() {
    const contenidoList = [
        0, 0, 0, 0, 0, 0, 0
    ];

    return (
        <section
        aria-label="Contenido Multimedia"
        >
            <header
            className='flex justify-center gap-10 text-3xl font-semibold items-center pb-20'
            >
                <h3
                className='pb-2 border-b border-red-500'
                >CONTENIDO</h3>
            </header>

            <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
            >
                {contenidoList.map( (elem, index) => (
                    <ContenidoItem key={index} />
                ))}
            </div>

        </section>
    );
}