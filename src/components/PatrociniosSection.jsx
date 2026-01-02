import PatrocinioItem from "./PatrocinioItem";

export default function PatrociniosSection () {
    const patrocinadores = [
        {img: "/patrocinadores/1_escuder_letras.webp", title: "Textiles Escuder", url: "https://www.vicenteescuder.com/"},
        {img: "/patrocinadores/2_logocompleto1sinfondo.webp", title: "Adenasim perifericos simracing", url: "https://www.adrenasim.com/"},
        {img: "/patrocinadores/3_Logo_Juan_Guardiola_2.webp", title: "Koses online - cosas antiguas", url: "https://kosasonline.com/"},
        {img: "/patrocinadores/4_ar_blanco.webp", title: "AR photo racing", url: "https://www.instagram.com/arphotoracing/"},
        {img: "/patrocinadores/5_joval_logo__letras_hor.webp", title: "joval", url: "https://www.joval.es/"},
        {img: "/patrocinadores/6_Totalitym-Blanco-1024x155.webp", title: "totalitym - camisetas e-sports"},
        {img: "/patrocinadores/7_logo-instant-gaming.webp", title: "Instant Gaming - Juegos al Mejor precio", url: "https://www.instant-gaming.com/?igr=afondusimracing"},
        {img: "/patrocinadores/8_DG.webp", title: "diseño gráfico DG", url: "https://www.instagram.com/dg.sign/"},
        {img: "/patrocinadores/9_Logo_Piston_Arts_5.webp", title: "diseño gráfico Liston Arts", url: "https://www.instagram.com/pistonarts_designs/"},
        {img: "/patrocinadores/10_GT2i_Officiel.webp", title: "GT2i - tienda motor sport", url: "https://www.gt2i.es/es/"},
        {img: "/patrocinadores/11_Logo_Siller_Madridderally.webp", title: "Canal de Siller", url: "https://www.youtube.com/@madridderally"},
    ];

    return (
        <section id="patrocinios"
        className='2xl:p-10 py-30 px-10 flex flex-col items-center'
        aria-label='nuestros patrocinadores'
        >
            <h2
            className='text-3xl sm:text-5xl border-b-2 border-red-500 pb-3 tracking-widest'
            >
                PATROCINADORES
            </h2>

            <section className='grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 py-20 gap-20'>
                {patrocinadores.map((elem, index) => (
                    <PatrocinioItem key={index} img={elem.img} url={elem.url} title={elem.title} />
                ))}
            </section>
        </section>
    )
}