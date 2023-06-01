import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import HowItWorks from '../../components/HomePageComponents/HowItWorks'
import ReasonWhySection from '../../components/HomePageComponents/ReasonWhySection'
import OurClients from '../../components/HomePageComponents/OurClients'
import FAQ from '../../components/HomePageComponents/FAQ'
import Footer from '../../components/Footer'
import SellCryptoPage from '../SellCryptoPage'

export default function HomePage() {
    return (
        <div className=' w-full h-full relative overflow-x-hidden   ' >
            <Navbar />
            <HeroSection />
            <HowItWorks />
            <SellCryptoPage />
            <ReasonWhySection /> 
            <OurClients />
            <FAQ />
            <Footer />
        </div>
    )
}
