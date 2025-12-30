import { useState } from 'react'
import Header from './components/Header'
import PalmaresGallery from './components/PalmaresGallery'

export default function App() {

  return (
    <div className="text-white">
      <Header />

      <main>
        <section
        className='flex items-center flex-col gap-20 bg-black h-dvh justify-center'
        >
          <img src="\src\assets\log_casco_relieve_negro.webp" alt="Logo de Afondu" 
          className="" width="400" height="400"
          />

          <p
          className='text-slate-200 text-3xl font-semibold'
          >
            SUBIDAS DE MONTAÑA · RALLY · CIRCUITOS
          </p>

          <div 
          className='flex gap-4'
          >
            <a href="#equipo"
            className="border border-red-500 rounded-md font-bold bg-red-500 text-slate-900 transition hover:bg-red-800 hover:border-red-800 p-5 text-2xl">
                EQUIPO
            </a>
            <a href="#contacto"
            className="border border-red-500 text-red-500 rounded-md font-bold hover:bg-red-500 hover:text-slate-900 transition p-5 text-2xl">
                CONTACTO
            </a>
          </div>
        
        </section>
     
     
        <section id="equipo"
        className='lg:p-30 py-30 p-20 flex flex-col items-center'
        >
          <h2
          className='text-5xl border-b-2 border-red-500 pb-3 tracking-widest'
          >
            QUIÉNES SOMOS
          </h2>
          <div className='grid grid-cols-1 lg:grid-cols-2 py-20 gap-30 lg:w-5/6 w-full'>
            <div
            className='text-2xl span-1 flex flex-col gap-4'
            >
              <p>Afondu Simracing lo formamos un grupo de amigos que comparte una misma forma de entender el simracing: con seriedad, respeto por el crono y una clara especialización en el Rally y las Subidas en Cuesta.</p>
              <p>Para nosotros, la confianza que tenemos como grupo es la base para trabajar mejor en cada tramo. No entendemos la competición como algo individual, sino como un esfuerzo colectivo donde compartir información, reglajes y trazadas es lo que nos hace avanzar.</p>
              <article
              className='flex flex-col gap-1'
              >
                <h3
                className='text-3xl pb-2 border-b-1 border-red-500 inline'
                >Nuestra actividad</h3>
                <p>Actualmente, nuestra actividad principal se centra en simuladores como Assetto Corsa, donde aprovechamos la versatilidad de la plataforma para competir en los campeonatos de montaña y rally más exigentes. Es aquí donde hemos consolidado nuestra estructura y donde dedicamos la mayor parte de nuestras horas de entrenamiento.</p>
              </article>
              <article
              className='flex flex-col gap-1'
              >
                <h3
                className='text-3xl pb-2 border-b-1 border-red-500'
                >Próximos objetivos: Proyecto 2026</h3>
                <p>Mirando hacia el futuro cercano, el equipo se encuentra en una fase de expansión. Para la temporada 2026, nos hemos marcado el objetivo de dar el salto a iRacing, afrontando el reto de adaptar nuestra metodología de trabajo a la estructura competitiva de esta plataforma.</p>
              </article>
              
              <p>Es un paso que afrontamos con la misma filosofía de siempre: paso a paso, con rigor y manteniendo el buen ambiente que nos define como equipo.</p>
            </div>

            <section 
            className='flex flex-col gap-10'
            >
              
              <header
              className='flex justify-center gap-10 text-3xl font-semibold items-center'
              >
                <h3
                className='pb-2 border-b border-red-500'
                >NUESTRO PALMARÉS</h3>
              </header>
                
              <PalmaresGallery />
              
            </section>

                      
          </div>
        </section>
        
      </main>

      

      

    </div>
  )
}
