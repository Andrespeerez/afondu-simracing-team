export default function BannerSection() {
    return (
        <section
        className='flex items-center flex-col gap-20 bg-black h-dvh justify-center shadow-2xl'
        >
          <img src="/log_casco_relieve_negro.webp" alt="Logo de Afondu" 
          className="" width="400" height="400"
          />

          <p
          className='text-slate-200 text-3xl font-semibold text-center'
          >
            SUBIDAS DE MONTAÑA · RALLY · CIRCUITOS
          </p>

          <div 
          className='flex gap-4'
          >
            <a href="#equipo"
            className="border border-red-500 rounded-md font-bold bg-red-500 text-slate-900 transition hover:scale-105 hover:bg-red-800 hover:border-red-800 p-5 text-2xl">
                EQUIPO
            </a>
            <a href="#contacto"
            className="border border-red-500 text-red-500 rounded-md font-bold hover:bg-red-500 hover:text-slate-900 transition hover:scale-105 p-5 text-2xl">
                CONTACTO
            </a>
          </div>
        
        </section>
    );
}