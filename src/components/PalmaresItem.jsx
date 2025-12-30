export default function PalmaresItem({titulo, anyos, img}) {
    return(
        <article
        className="rounded-3xl p-8 bg-[#111111] hover:bg-slate-700 transition hover:scale-105 duration-500 h-70 shadow-xl flex flex-col justify-between items-center "
        >
            <img src={img} alt="" 
            loading="lazy"
            />

            <div className="flex flex-col justify-center text-center">
               <h3
               className="text-3xl font-semibold text-amber-300"
               >{titulo}</h3>
               <p>{anyos}</p> 
            </div>
        </article>
    )
}