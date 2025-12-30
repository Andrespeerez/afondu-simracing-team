export default function PalmaresItem({titulo, anyos}) {
    return(
        <article
        className="bg-slate-400 h-25 rounded-3xl p-5 border-3 border-red-500"
        >
            <h3>{titulo}</h3>
            <p>{anyos}</p>
        </article>
    )
}