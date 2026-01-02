export default function ContactoSection() {
    return (
        <section id="contacto"
        className='2xl:p-10 py-30 px-10 flex flex-col items-center gap-20 bg-black justify-center shadow-2xl'
        aria-label="Contactanos"
        >
            <h2
            className='text-3xl sm:text-5xl border-b-2 border-red-500 pb-3 tracking-widest'
            >
                CONTACTO
            </h2>

            <p
            className="lg:text-2xl text-xl leading-relaxed lg:p-20 md:p-10 p-5 -mx-10 bg-white/20 rounded-2xl"
            >
                Si quieres unirte al equipo, patrocinarnos o tienes alguna consulta puedes contactanos vía email:
                <span
                className="block text-red-500 lg:text-3xl text-xl text-center pt-20"
                >
                    afondusimracing@gmail.com
                </span>
            </p>
            

        </section>
    )
}