// import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import HowItWorks from '../../components/HomePageComponents/HowItWorks'
import ReasonWhySection from '../../components/HomePageComponents/ReasonWhySection'
import OurClients from '../../components/HomePageComponents/OurClients'
import FAQ from '../../components/HomePageComponents/FAQ'
import Footer from '../../components/Footer'
import SellCryptoPage from '../SellCryptoPage' 
import { useEffect } from 'react' 

export default function HomePage() {  

    useEffect(() => {
        var Tawk_API: any = Tawk_API || {};
        (function () {
            var s1 = document.createElement("script"),
                s0: any = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/647b0a547957702c744b8a2e/1h20a0nu5';
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
        })();
        
        return () => {
            console.log("Funny maan!!!!");
            const tawkEl = document.querySelector('.widget-visible');
            tawkEl?.remove();
            // window.removeEventListener('beforeunload', showWarning);
         }
    }, []);
    

    return (
        <div className=' w-full h-screen relative overflow-x-hidden   ' >
            <div className=' w-full sticky z-[200] top-0 inset-x-0 ' >
                <Navbar />
            </div>
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
