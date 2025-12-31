import { useState } from 'react'
import Header from './components/Header'
import EquipoSection from './components/EquipoSection'
import BannerSection from './components/BannerSection'
import MediaSection from './components/MediaSection'

export default function App() {
  return (
    <div className="flex flex-col text-slate-100">
      <Header />

      <main className=''>
        <BannerSection /> 
     
        <EquipoSection />
        
        <MediaSection />

        
      </main>

    </div>
  )
}
