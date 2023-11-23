// import React from 'react'
import Navbar from '../../components/Navbar'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import HowItWorks from '../../components/HomePageComponents/HowItWorks'
import ReasonWhySection from '../../components/HomePageComponents/ReasonWhySection'
import OurClients from '../../components/HomePageComponents/OurClients'
import FAQ from '../../components/HomePageComponents/FAQ'
import Footer from '../../components/Footer'
import SellCryptoPage from '../SellCryptoPage'
import { Helmet } from 'react-helmet'

export default function HomePage() {

    return (
        <div className=' w-full h-screen relative overflow-x-hidden   ' >
            <Helmet>
                <script type="text/javascript">{`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/647b0a547957702c744b8a2e/1h20a0nu5';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();`}
                </script>
            </Helmet>
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
