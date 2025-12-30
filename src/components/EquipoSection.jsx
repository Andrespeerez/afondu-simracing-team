import PalmaresGallery from './PalmaresGallery'

export default function EquipoSection() {
    return (
        <section id="equipo"
        className='2xl:p-10 py-30 px-10 flex flex-col items-center'
        >
          <h2
          className='text-5xl border-b-2 border-red-500 pb-3 tracking-widest'
          >
            NUESTRO EQUIPO
          </h2>
          <section className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-30 2xl:w-4/6 lg:w-5/6 w-full'>

            <section
            className='text-2xl span-1 flex flex-col gap-15'
            >
              <header
              className='flex justify-center gap-10 text-3xl font-semibold items-center'
              >
                <h3
                className='pb-2 border-b border-red-500 tracking-wider'
                >QUIÉNES SOMOS</h3>
              </header>

              <p
              className='leading-relaxed'
              >Afondu Simracing lo formamos un grupo de amigos que comparte una misma forma de entender el simracing: con seriedad, respeto por el crono y una clara especialización en el Rally y las Subidas en Cuesta.</p>
              <p
              className='leading-relaxed'
              >Para nosotros, la confianza que tenemos como grupo es la base para trabajar mejor en cada tramo. No entendemos la competición como algo individual, sino como un esfuerzo colectivo donde compartir información, reglajes y trazadas es lo que nos hace avanzar.</p>
              <article
              className='flex flex-col gap-1'
              >
                <h3
                className='text-3xl pb-2 border-b-1 border-red-500 inline'
                >Nuestra actividad</h3>
                <p
                className='leading-relaxed'
                >Actualmente, nuestra actividad principal se centra en simuladores como Assetto Corsa, donde aprovechamos la versatilidad de la plataforma para competir en los campeonatos de montaña y rally más exigentes. Es aquí donde hemos consolidado nuestra estructura y donde dedicamos la mayor parte de nuestras horas de entrenamiento.</p>
              </article>
              <article
              className='flex flex-col gap-1'
              >
                <h3
                className='text-3xl pb-2 border-b-1 border-red-500'
                >Próximos objetivos: Proyecto 2026</h3>
                <p
                className='leading-relaxed'
                >Mirando hacia el futuro cercano, el equipo se encuentra en una fase de expansión. Para la temporada 2026, nos hemos marcado el objetivo de dar el salto a iRacing, afrontando el reto de adaptar nuestra metodología de trabajo a la estructura competitiva de esta plataforma.</p>
              </article>
              
              <p
                className='leading-relaxed'
              >Es un paso que afrontamos con la misma filosofía de siempre: paso a paso, con rigor y manteniendo el buen ambiente que nos define como equipo.</p>
            </section>

            <section 
            className='flex flex-col gap-10'
            >
              
              <header
              className='flex justify-center gap-10 text-3xl font-semibold items-center'
              >
                <h3
                className='pb-2 border-b border-red-500 tracking-wider'
                >PALMARÉS</h3>
              </header>
                
              <PalmaresGallery />
              
            </section>

                      
          </section>
        </section>
    );
}