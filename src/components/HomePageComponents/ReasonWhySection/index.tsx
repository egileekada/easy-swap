import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ReasonWhySection() {
    
    const controls = useAnimation(); 
    const controls2 = useAnimation(); 
    const controls3 = useAnimation(); 
    const controls4 = useAnimation(); 
    const [ ref, inView ]  = useInView();  
    const [ ref2, inView2 ] = useInView();  
    const [ ref3, inView3 ] = useInView(); 
    const [ ref4, inView4 ] = useInView();     

    React.useEffect(() => { 
        if (inView) {
            controls.start({ x: 0});
        } 
        if (inView2) {
            controls2.start({x: 0});
        }  
        if (inView3) {
            controls3.start({ x: 0});
        } 
        if (inView4) {
            controls4.start({ x: 0});
        } 
    }, [controls, controls2, controls3, controls4, inView, inView2, inView3, inView4]) 

    return (
        <div className=' w-full py-20 flex lg:px-0 px-6  flex-col items-center ' >
            <motion.div ref={ref4} initial={{x: -200}} animate={controls}  
                        transition={{ ease: "easeOut", duration: 1 }}> 
                <p className=' text-center text-lg font-normal ' >Here are a few reasons why you should chose Easyswap</p>
                <p className=' text-center text-[#303179] font-bold text-3xl lg:text-4xl lg:max-w-2xl mt-3 ' >A Trusted and Secured Crypto Exchange Platform</p>
            </motion.div>
            <div className=' xl:w-[1366px]  lg:w-full mt-8 px-0 lg:px-14 flex lg:flex-row flex-col lg:gap-12 ' >
                <motion.div ref={ref} initial={{x: -200}} animate={controls}  
                        transition={{ ease: "easeOut", duration: 1 }}  className=' w-full  lg:text-center ' >
                    <img src='/images/secure.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Easier</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >We make selling crypto simple and easy to understand. Anyone can sell on Ezyswap. </p>
                </motion.div>
                <motion.div ref={ref2} initial={{x: -200}} animate={controls}  
                        transition={{ ease: "easeOut", duration: 1 }} className=' w-full lg:text-center ' >
                    <img src='/images/Personalised.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Faster</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >Selling crypto with Ezyswap takes less than 5 minutes - Much faster than other services.</p>
                </motion.div>
                <motion.div ref={ref3} initial={{x: +200}} animate={controls}  
                        transition={{ ease: "easeOut", duration: 1 }} className=' w-full lg:text-center ' >
                    <img src='/images/data.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Cheaper</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >We offer the best exchange rate with no hidden fees. You get the best value for your money when you use Ezyswap.</p>
                </motion.div>
            </div>
        </div>
    )
}
