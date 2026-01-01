export default function Contenido() {
    const canales = [
        { nombre: "Afondu", media: [ 
                {tipo: "twitch", url: "https://www.twitch.tv/afondusimracing", desc: "Canal twitch oficial del equipo" },
                {tipo: "instagram", url: "https://www.instagram.com/afondu_simracing/", desc: "Canal instagram oficial del equipo" },
                {tipo: "twitter", url: "https://x.com/afondusimracing", desc: "Canal twitter oficial del equipo" },
            ] 
        },
        { nombre: "Juan Guardiola", media: [
                { tipo: "youtube", url: "https://www.youtube.com/@RunningPanda?sub_confirmation=1", desc: "Canal de piloto J. Guardiola" },
                { tipo: "instagram", url: "https://www.instagram.com/runningpanda106/", desc: "Instagram J. Guardiola" },
            ]
        },
        { nombre: "Alan Rua", media: [ 
                { tipo: "twitch", url: "https://www.twitch.tv/ar_simracer", desc: "Canal Twitch de piloto A. Rua" },
                { tipo: "instagram", url: "https://www.instagram.com/a.r_simracer/", desc: "Canal Instagram de piloto A. Rua" },   
                { tipo: "youtube", url: "https://www.youtube.com/@a.rsimracer7687?sub_confirmation=1", desc: "Canal Youtube de piloto A. Rua" },
            ]
        },
        { nombre: "Alan Rua", media: [ 
                { tipo: "youtube", url: "https://www.youtube.com/@a.rsimracer7687?sub_confirmation=1", desc: "Canal de piloto A. Rua" },
            ]
        },
    ];

    function handleTipo (tipo) {
        switch (tipo) {
            case "twitch":
                return (
                    <svg height="35px" width="35px" viewBox="0 0 24 24" fill="#9146FF" xmlns="http://www.w3.org/2000/svg"
                    aria-label="Logo de Twitch"
                    >
                        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                    </svg>
                );
            case "youtube":
                return (
                    <svg height="35px" width="35px" viewBox="0 0 461.001 461.001" fill="#000000" xmlns="http://www.w3.org/2000/svg"
                    aria-label="Logo de Youtube"
                    >
                        <g>
                            <path style={{ fill: "#F61C0D" }} d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
                        </g>
                    </svg>
                );
            case "instagram":
                return (
                    <svg height="35px" width="35px" viewBox="0 0 24 24" fill="#E4405F" xmlns="http://www.w3.org/2000/svg"
                    aria-label="Logo de Instagram"
                    >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                );
            case "twitter":
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter-x" viewBox="0 0 35 35" id="Twitter-X--Streamline-Bootstrap" height="35" width="35"
                    aria-label="Logo de Twitter"
                    >
                        <path d="M27.5625 1.640625h5.368125l-11.725000000000001 13.435625L35 33.359375h-10.799687500000001l-8.4590625 -11.090625000000001 -9.6796875 11.090625000000001H0.69125l12.5409375 -14.371875000000001L0 1.640625h11.075312499999999l7.6453125 10.1346875L27.5646875 1.640625Zm-1.8812499999999999 28.49875h2.975L9.4565625 4.6921875H6.2671875z" stroke-width="2.1875">
                    </path>
                    </svg>
                );
            default:
                return null;
        }
    }

    return (
        <section
        className="grid grid-cols-2 gap-10"
        aria-label="Canales de Contenido de Miembros de Afondu"
        >
            {canales.map((miembro, index) => (
                <article key={`miembro-${index}`}
                aria-label={miembro.name + " canales de contenido"}
                className="flex flex-row justify-between items-center gap-50 bg-white/10 p-5 px-10 rounded-full"
                >
                    <div
                    className="text-2xl leading-relaxed tracking-wider font-bold"
                    >{miembro.nombre}</div>
                    <div className="flex gap-4">
                        {miembro.media.map((red, subIndex) => (
                            <a 
                                key={`red-${index}-${subIndex}`} 
                                href={red.url} 
                                aria-label={red.desc}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {handleTipo(red.tipo)}
                            </a>
                        ))}
                    </div>
                </article>
            ))}          
        </section>
    );
}