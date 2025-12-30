export default function GalleryItem({ src, onClick }) {
    return (
        <article
        className="size-60 rounded-xl bg-fuchsia-400 cursor-zoom-in aspect-video overflow-hidden group"
        >
            <img src={src} alt="" 
            onClick={onClick}
            className="rounded-xl w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            />
        </article>
    )
}