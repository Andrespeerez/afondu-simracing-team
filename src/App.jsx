import { useState } from 'react'
import Header from './components/Header'
import EquipoSection from './components/EquipoSection'
import BannerSection from './components/BannerSection'
import MediaSection from './components/MediaSection'

export default function App() {
  return (
    <div className="text-white">
      <Header />

      <main>
        <BannerSection /> 
     
        <EquipoSection />
        
        <MediaSection />


      </main>

      

      

    </div>
  )
}
