import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import HowItWorks from '../../components/HomePageComponents/HowItWorks'
import ReasonWhySection from '../../components/HomePageComponents/ReasonWhySection'
import OurClients from '../../components/HomePageComponents/OurClients'
import FAQ from '../../components/HomePageComponents/FAQ'
import Footer from '../../components/Footer'

export default function HomePage() {
    return (
        <div className=' w-full h-full overflow-x-hidden   ' >
            <Navbar />
            <HeroSection />
            <HowItWorks />
            <ReasonWhySection /> 
            <OurClients />
            <FAQ />
            <Footer />
        </div>
    )
}
