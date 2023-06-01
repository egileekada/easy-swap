import React from 'react'
import CryptoCalculation from './components/CryptoCalculation' 
import * as animationData from './Animation.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {


    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const navigate = useNavigate()

    const controls = useAnimation(); 
    const controls2 = useAnimation(); 
    const controls3 = useAnimation(); 
    const controls4 = useAnimation(); 
    const [ ref, inView ]  = useInView();  
    const [ ref2, inView2 ] = useInView();     

    React.useEffect(() => { 
        if (inView) {
            controls.start({ x: 0});
        } 
        if (inView2) {
            controls2.start({ scale: 1});
        }  
    }, [controls, controls2, controls3, controls4, inView, inView2]) 

    return (
        <div className=' w-full flex justify-center bg-[#f8f8f8]  ' > 
            <div className=' bg-[#f8f8f8] lg:h-[80vh] h-full relative lg:pb-24 pb-24 py-6 lg:py-24 lg:items-center max-w-[1440px] lg:justify-center px-6 lg:px-16 flex ' >
                <div className='   z-20 max-[1280px]:w-full flex lg:flex-row flex-col items-center ' >
                    <motion.div  ref={ref} initial={{x: -200}} animate={controls}  
                        transition={{ ease: "easeOut", duration: 1 }}  className=' w-full pt-8 ' >
                        <h1 className=' text-[#303179] text-3xl lg:text-5xl xl:text-6xl leading-[1.1] font-bold ' >Buy, sell, and swap your cryptocurrencies with ease.</h1>
                        <p className=' font-normal mt-4 ' >Eyswap enables you to sell your crypto and receive Naira instantly. No waits or delays!! Sign-up today and experience the power of quick payments.</p>
                        <button onClick={()=> navigate("/dashboard/sellcrypto")} className=' mt-8 border-[#303179] border font-semibold text-[#303179] rounded-[10px] px-5 h-[46px] ' >Swap Now</button>
                    </motion.div>
                    <motion.div ref={ref2} initial={{ scale: 0}} animate={controls2}  
                    transition={{ ease: "easeOut", duration: 1 }}   className=' w-full flex lg:justify-end  ' >
                        <CryptoCalculation />
                    </motion.div>
                </div>

                <video className=' absolute lg:block hidden inset-0 z-10 lg:w-[100%] h-[100vh] lg:h-[80vh] '
                        autoPlay={true} 
                        loop={true}
                        controls={false} 
                        playsInline
                        muted   >
                <source src="/video.mp4" type="video/mp4"/>
                </video>
                <video className=' absolute lg:hidden inset-0 z-10 lg:w-[100%] h-[100vh] lg:h-[80vh] '
                        autoPlay={true} 
                        loop={true}
                        controls={false} 
                        playsInline
                        muted   >
                <source src="/mvideo.mp4" type="video/mp4"/>
                </video> 
            </div> 
        </div>
    )
}
