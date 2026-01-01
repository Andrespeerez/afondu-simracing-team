export default function PatrocinioItem ({ img, title, url = "" }) {
    const Imagen = (
        <img 
            src={img} 
            alt={title} 
            width="240" 
            height="240"
            className="rounded-2xl aspect-auto object-contain h-full w-full" 
        />
    ) 

    const classNameDefault = "size-60 bg-white/10 p-10 flex items-center justify-center overflow-hidden rounded-2xl "
    const classNameEnlace = "hover:scale-105 active:scale-95 cursor-pointer"

    return (
        <figure
            aria-label={title}
            className={ url != "" ? classNameDefault + classNameEnlace : classNameDefault}
        >
            {url !== "" ? (
                <a href={url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full h-full"
                aria-label={title}
                >
                    {Imagen}
                </a>
            ) : (
                Imagen
            )}
        </figure>
    );
}