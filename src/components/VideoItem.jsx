export default function VideoItem({ title, caratula, onClick }) {
    return (
        <article className="grow aspect-video rounded-xl cursor-zoom-in overflow-hidden shadow-lg bg-black">
            <img src={caratula} alt={title} onClick={onClick}/>
        </article>
    )
}


/*


*/