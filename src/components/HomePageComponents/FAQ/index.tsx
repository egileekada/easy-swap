import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FAQ() {

    const controls = useAnimation(); 
    const controls2 = useAnimation(); 
    const controls3 = useAnimation(); 
    const controls4 = useAnimation(); 
    const [ ref, inView ]  = useInView();  
    const [ ref2, inView2 ] = useInView();     


    const [tab, setTab] = React.useState("one")

    React.useEffect(() => { 
        if (inView) {
            controls.start({ x: 0});
        } 
        if (inView2) {
            controls2.start({ scale: 1});
        }  
    }, [controls, controls2, controls3, controls4, inView, inView2]) 

    return (
        <div className=' w-full py-8 lg:py-20 flex flex-col text-center items-center bg-[#fff] px-6 lg:px-14 ' >
            <motion.div ref={ref2} initial={{ scale: 0}} animate={controls2}  
                transition={{ ease: "easeOut", duration: 1 }} > 
                <p className=' text-lg font-normal ' >FAQs</p>
                <p className=' font-bold text-2xl lg:text-4xl text-[#303179] mt-3  max-w-xl ' >Some questions you might already have</p> 
            </motion.div>
            <motion.div ref={ref} initial={{x: -200}} animate={controls}  
                transition={{ ease: "easeOut", duration: 1 }} className=' w-full lg:w-[750px] flex flex-col mt-12 gap-4 ' >
                <div className=' w-full ' > 
                    <div role='button' onClick={()=> setTab("one")} className=' border py-5 rounded-2xl border-[#00000033] w-full px-5 flex items-center justify-between ' >
                        <p className=' font-medium text-xl text-left ' >What is Ezyswap?</p>
                        <svg className={tab.includes("one") ? "": " -rotate-90"} role='button' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.235277 1.01457L0.766527 0.483325C0.907178 0.342683 1.09794 0.263672 1.29684 0.263672C1.49574 0.263672 1.6865 0.342683 1.82715 0.483325L5.00028 3.65832L8.17434 0.483949C8.24399 0.414264 8.32669 0.358984 8.41771 0.321269C8.50873 0.283553 8.60629 0.264141 8.70481 0.264141C8.80333 0.264141 8.90089 0.283553 8.99191 0.321269C9.08293 0.358984 9.16563 0.414264 9.23528 0.483949L9.76653 1.0152C9.83645 1.08488 9.89192 1.16767 9.92978 1.25884C9.96763 1.35 9.98712 1.44774 9.98712 1.54645C9.98712 1.64516 9.96763 1.7429 9.92978 1.83406C9.89192 1.92523 9.83645 2.00802 9.76653 2.0777L5.53153 6.30989C5.39088 6.45053 5.20012 6.52954 5.00121 6.52954C4.80231 6.52954 4.61155 6.45053 4.4709 6.30989L0.235277 2.0752C0.0946357 1.93455 0.015625 1.74379 0.015625 1.54489C0.015625 1.34598 0.0946357 1.15523 0.235277 1.01457Z" fill="#303179"/>
                        </svg>
                    </div>
                    {tab.includes("one") && (
                        <div className=' px-6 pt-4 pb-6 ' > 
                            {/* <p className=' font-bold text-xl mt-6 text-left ' >What is Ezyswap?</p> */}
                            <p className=' mt-2 font-medium text-left ' >Ezyswap is a one-stop solution for exchanging naira for crypto. You can easily change your crypto to naira within minutes without extra charges and hidden fees.</p>
                        </div>
                    ) }
                </div> 
                <div className=' w-full ' > 
                    <div role='button' onClick={()=> setTab("two")} className=' border py-5 rounded-2xl border-[#00000033] w-full px-5 flex items-center justify-between ' >
                        <p className=' font-medium text-xl text-left ' >What is the current exchange rate?</p>
                        <svg className={tab.includes("two") ? "": " -rotate-90"} role='button' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.235277 1.01457L0.766527 0.483325C0.907178 0.342683 1.09794 0.263672 1.29684 0.263672C1.49574 0.263672 1.6865 0.342683 1.82715 0.483325L5.00028 3.65832L8.17434 0.483949C8.24399 0.414264 8.32669 0.358984 8.41771 0.321269C8.50873 0.283553 8.60629 0.264141 8.70481 0.264141C8.80333 0.264141 8.90089 0.283553 8.99191 0.321269C9.08293 0.358984 9.16563 0.414264 9.23528 0.483949L9.76653 1.0152C9.83645 1.08488 9.89192 1.16767 9.92978 1.25884C9.96763 1.35 9.98712 1.44774 9.98712 1.54645C9.98712 1.64516 9.96763 1.7429 9.92978 1.83406C9.89192 1.92523 9.83645 2.00802 9.76653 2.0777L5.53153 6.30989C5.39088 6.45053 5.20012 6.52954 5.00121 6.52954C4.80231 6.52954 4.61155 6.45053 4.4709 6.30989L0.235277 2.0752C0.0946357 1.93455 0.015625 1.74379 0.015625 1.54489C0.015625 1.34598 0.0946357 1.15523 0.235277 1.01457Z" fill="#303179"/>
                        </svg>
                    </div>
                    {tab.includes("two") && (
                        <div className=' px-6 pt-4 pb-6 ' > 
                            {/* <p className=' font-bold text-xl mt-6 text-left ' >What is the current exchange rate?</p> */}
                            <p className=' mt-2 font-medium text-left ' >Our exchange rates are dynamic and change based on the market. Ezyswap offers a competitive exchange rate that provides value for money. </p>
                        </div>
                    ) }
                </div> 
                <div className=' w-full ' > 
                    <div role='button' onClick={()=> setTab("three")} className=' border py-5 rounded-2xl border-[#00000033] w-full px-5 flex items-center justify-between ' >
                        <p className=' font-medium text-xl text-left ' >How soon will I get an alert?</p>
                        <svg className={tab.includes("three") ? "": " -rotate-90"} role='button' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.235277 1.01457L0.766527 0.483325C0.907178 0.342683 1.09794 0.263672 1.29684 0.263672C1.49574 0.263672 1.6865 0.342683 1.82715 0.483325L5.00028 3.65832L8.17434 0.483949C8.24399 0.414264 8.32669 0.358984 8.41771 0.321269C8.50873 0.283553 8.60629 0.264141 8.70481 0.264141C8.80333 0.264141 8.90089 0.283553 8.99191 0.321269C9.08293 0.358984 9.16563 0.414264 9.23528 0.483949L9.76653 1.0152C9.83645 1.08488 9.89192 1.16767 9.92978 1.25884C9.96763 1.35 9.98712 1.44774 9.98712 1.54645C9.98712 1.64516 9.96763 1.7429 9.92978 1.83406C9.89192 1.92523 9.83645 2.00802 9.76653 2.0777L5.53153 6.30989C5.39088 6.45053 5.20012 6.52954 5.00121 6.52954C4.80231 6.52954 4.61155 6.45053 4.4709 6.30989L0.235277 2.0752C0.0946357 1.93455 0.015625 1.74379 0.015625 1.54489C0.015625 1.34598 0.0946357 1.15523 0.235277 1.01457Z" fill="#303179"/>
                        </svg>
                    </div>
                    {tab.includes("three") && (
                        <div className=' px-6 pt-4 pb-6 ' > 
                            {/* <p className=' font-bold text-xl mt-6 text-left ' >How soon will I get an alert?</p> */}
                            <p className=' mt-2 font-medium text-left ' >We complete transactions within minutes. Once we confirm your crypto has entered the network, a naira payment is made automatically, and you receive an alert instantly.</p>
                        </div>
                    ) }
                </div> 
                <div className=' w-full ' > 
                    <div role='button' onClick={()=> setTab("four")} className=' border py-5 rounded-2xl border-[#00000033] w-full px-5 flex items-center justify-between ' >
                        <p className=' font-medium text-xl text-left ' >How do I calculate my money?</p>
                        <svg className={tab.includes("four") ? "": " -rotate-90"} role='button' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.235277 1.01457L0.766527 0.483325C0.907178 0.342683 1.09794 0.263672 1.29684 0.263672C1.49574 0.263672 1.6865 0.342683 1.82715 0.483325L5.00028 3.65832L8.17434 0.483949C8.24399 0.414264 8.32669 0.358984 8.41771 0.321269C8.50873 0.283553 8.60629 0.264141 8.70481 0.264141C8.80333 0.264141 8.90089 0.283553 8.99191 0.321269C9.08293 0.358984 9.16563 0.414264 9.23528 0.483949L9.76653 1.0152C9.83645 1.08488 9.89192 1.16767 9.92978 1.25884C9.96763 1.35 9.98712 1.44774 9.98712 1.54645C9.98712 1.64516 9.96763 1.7429 9.92978 1.83406C9.89192 1.92523 9.83645 2.00802 9.76653 2.0777L5.53153 6.30989C5.39088 6.45053 5.20012 6.52954 5.00121 6.52954C4.80231 6.52954 4.61155 6.45053 4.4709 6.30989L0.235277 2.0752C0.0946357 1.93455 0.015625 1.74379 0.015625 1.54489C0.015625 1.34598 0.0946357 1.15523 0.235277 1.01457Z" fill="#303179"/>
                        </svg>
                    </div>
                    {tab.includes("four") && (
                        <div className=' px-6 pt-4 pb-6 ' > 
                            {/* <p className=' font-bold text-xl mt-6 text-left ' >How do I calculate my money?</p> */}
                            <p className=' mt-2 font-medium text-left ' >You can calculate your money using the rate calculator before selling your crypto. Ezyswap also provides an automatic calculator that provides the amount you will receive when selling your crypto.</p>
                        </div>
                    ) }
                </div> 
                <div className=' w-full ' > 
                    <div role='button' onClick={()=> setTab("five")} className=' border py-5 rounded-2xl border-[#00000033] w-full px-5 flex items-center justify-between ' >
                        <p className=' font-medium text-xl text-left ' >Is Ezyswap secure?</p>
                        <svg className={tab.includes("five") ? "": " -rotate-90"} role='button' width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.235277 1.01457L0.766527 0.483325C0.907178 0.342683 1.09794 0.263672 1.29684 0.263672C1.49574 0.263672 1.6865 0.342683 1.82715 0.483325L5.00028 3.65832L8.17434 0.483949C8.24399 0.414264 8.32669 0.358984 8.41771 0.321269C8.50873 0.283553 8.60629 0.264141 8.70481 0.264141C8.80333 0.264141 8.90089 0.283553 8.99191 0.321269C9.08293 0.358984 9.16563 0.414264 9.23528 0.483949L9.76653 1.0152C9.83645 1.08488 9.89192 1.16767 9.92978 1.25884C9.96763 1.35 9.98712 1.44774 9.98712 1.54645C9.98712 1.64516 9.96763 1.7429 9.92978 1.83406C9.89192 1.92523 9.83645 2.00802 9.76653 2.0777L5.53153 6.30989C5.39088 6.45053 5.20012 6.52954 5.00121 6.52954C4.80231 6.52954 4.61155 6.45053 4.4709 6.30989L0.235277 2.0752C0.0946357 1.93455 0.015625 1.74379 0.015625 1.54489C0.015625 1.34598 0.0946357 1.15523 0.235277 1.01457Z" fill="#303179"/>
                        </svg>
                    </div>
                    {tab.includes("five") && (
                        <div className=' px-6 pt-4 pb-6 ' > 
                            {/* <p className=' font-bold text-xl mt-6 text-left ' >Is Ezyswap secure?</p> */}
                            <p className=' mt-2 font-medium text-left ' >Ezyswap is safe, and you can do transactions with full assurance. We integrate the latest security measures to safeguard your details and transactions.</p>
                        </div>
                    ) }
                </div> 
            </motion.div>
        </div>
    )
}
