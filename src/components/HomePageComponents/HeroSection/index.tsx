import React from 'react'
import CryptoCalculation from './components/CryptoCalculation' 
import * as animationData from './Animation.json'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; 
import { useNavigate } from 'react-router-dom';
import YouTube, { YouTubeProps } from 'react-youtube';
import ModalLayout from '../../ModalLayout';

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

    const [showModal, setShowModal] = React.useState(false)

  const onPlayerReady: YouTubeProps['onReady'] = (event: any) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  } 

    return (
        <div className=' w-full flex justify-center bg-[#f8f8f8]  ' > 
            <div className=' bg-[#f8f8f8] lg:h-[80vh] h-full relative lg:pb-24 pb-24 py-6 lg:py-24 lg:items-center max-w-[1440px] lg:justify-center px-6 lg:px-16 flex ' >
                <div className='   z-20 max-[1280px]:w-full flex lg:flex-row flex-col items-center ' >
                    <motion.div  ref={ref} initial={{x: -200}} animate={controls}  
                        transition={{ ease: "easeOut", duration: 1 }}  className=' w-full pt-8 ' >
                        <h1 className=' text-[#303179] text-3xl lg:text-5xl xl:text-6xl leading-[1.1] font-bold ' >Swap your crypto to Naira with ease.</h1>
                        <p className=' font-normal mt-4 ' >Ezyswap enables you to sell your crypto and receive Naira instantly. No waits or delays!! Sign-up today and experience the power of quick payments.</p>
                        <button onClick={()=> setShowModal(true)} className=' my-8 border-[#303179] flex  items-center gap-2 border font-semibold text-[#303179] rounded-[10px] px-5 h-[46px] ' >
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="play-circle-line">
                        <path id="Vector" d="M12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12C22.5 17.5228 18.0228 22 12.5 22ZM12.5 20C16.9183 20 20.5 16.4183 20.5 12C20.5 7.58172 16.9183 4 12.5 4C8.08172 4 4.5 7.58172 4.5 12C4.5 16.4183 8.08172 20 12.5 20ZM11.1219 8.41459L16.0008 11.6672C16.1846 11.7897 16.2343 12.0381 16.1117 12.2219C16.0824 12.2658 16.0447 12.3035 16.0008 12.3328L11.1219 15.5854C10.9381 15.708 10.6897 15.6583 10.5672 15.4745C10.5234 15.4088 10.5 15.3316 10.5 15.2526V8.74741C10.5 8.52649 10.6791 8.34741 10.9 8.34741C10.979 8.34741 11.0562 8.37078 11.1219 8.41459Z" fill="#303179"/>
                        </g>
                        </svg>
                        See how it works
                        </button>
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
                {/* {showModal && (
                    <>  
                         <YouTube videoId="rTNeaM7k96I" className=' absolute block inset-0 z-30 w-fit my-auto mx-auto h-auto '  onReady={onPlayerReady} />
                        <div onClick={()=> setShowModal(false)} className=' bg-[#51525C4D] fixed inset-0 z-20 ' />
                    </>
                )} */}
                <ModalLayout open={showModal} size={"2xl"} rounded={true} bg="transparent" close={setShowModal} > 
                    <div className=' w-full flex justify-center items-center ' > 
                        <YouTube videoId="rTNeaM7k96I" className='  w-full h-auto '  onReady={onPlayerReady} />
                    </div>
                </ModalLayout>
            </div> 
        </div>
    )
}
