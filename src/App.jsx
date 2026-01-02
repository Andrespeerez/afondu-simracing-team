import { useState } from 'react'
import Header from './components/Header'
import EquipoSection from './components/EquipoSection'
import BannerSection from './components/BannerSection'
import MediaSection from './components/MediaSection'
import PatrociniosSection from './components/PatrociniosSection'
import ContactoSection from './components/ContactoSection'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="flex flex-col text-slate-100">
      <Header />

      <main className='relative'>
        <BannerSection /> 
     
        <EquipoSection />
        
        <MediaSection />

        <PatrociniosSection />

        <ContactoSection />

        <Footer />

      </main>

    </div>
  )
}
