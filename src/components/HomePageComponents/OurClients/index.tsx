import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function OurClients() {

    const ref: any = React.useRef(null);
    const scroll = (scrolloffset: any) => {
        ref.current.scrollLeft += scrolloffset;
    };
    
    const controls = useAnimation(); 
    const controls2 = useAnimation(); 
    const controls3 = useAnimation(); 
    const controls4 = useAnimation(); 
    const [ ref1, inView ]  = useInView();  
    const [ ref2, inView2 ] = useInView();  
    const [ ref3, inView3 ] = useInView();    

    React.useEffect(() => { 
        if (inView) {
            controls.start({ x: 0});
        } 
        if (inView2) {
            controls2.start({ x: -200});
        }  
        if (inView3) {
            controls3.start({ x: 0});
        } 
    }, [controls, controls2, controls3, controls4, inView, inView2, inView3]) 

    return (
        <div className=' w-full py-6 lg:py-20 flex flex-col text-center items-center bg-[#F0F0F0] px-6 lg:x-14 ' >
            <motion.div ref={ref2} initial={{x: -200}} animate={controls}  
                    transition={{ ease: "easeOut", duration: 1 }}> 
                {/* <p className=' text-lg font-normal ' >Hear from others</p> */}
                <p className=' font-bold text-2xl lg:text-4xl text-[#303179] mt-3' >What our clients are saying</p>
            </motion.div>
            <motion.div  ref={ref1} initial={{x: +200}} animate={controls}  
                    transition={{ ease: "easeOut", duration: 1 }} className=' w-full scroll_event ' > 
                <div ref={ref} className=" scroll_event w-full flex mt-14 lg:flex-row overflow-x-auto pb-4  " >
                    <div className=" scroll_event w-auto flex gap-5 lg:px-4 ">
                        <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >Ezyswap is one of the best platforms I have used to sell my crypto for naira within minutes easily.</p>
                                <div className=' mt-auto ' >
                                    <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                    <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                                </div>
                            </div>
                        </div> 
                        <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I endorse Ezyswap, It is fast, cheap, and very secure.</p>
                                <div className=' mt-auto ' >
                                    <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                    <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                                </div>
                            </div>
                        </div> 
                        <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I must admit that Ezyswap surpassed my expectations. Transactions are fast and cheap with no problems.</p>
                                <div className=' mt-auto ' >
                                    <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                    <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                                </div>
                            </div>
                        </div> 
                        <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I must admit that Ezyswap surpassed my expectations. Transactions are fast and cheap with no problems.</p>
                                <div className=' mt-auto ' >
                                    <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                    <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                                </div>
                            </div>
                        </div> 
                        <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I must admit that Ezyswap surpassed my expectations. Transactions are fast and cheap with no problems.</p>
                                <div className=' mt-auto ' >
                                    <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                    <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                                </div>
                            </div>
                        </div> 
                        <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I must admit that Ezyswap surpassed my expectations. Transactions are fast and cheap with no problems.</p>
                                <div className=' mt-auto ' >
                                    <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                    <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                                </div>
                            </div>
                        </div> 
                        <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I must admit that Ezyswap surpassed my expectations. Transactions are fast and cheap with no problems.</p>
                                <div className=' mt-auto ' >
                                    <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                    <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className=' w-full flex pt-12 lg:pb-0 pb-8 justify-center items-center ' >
                    <div onClick={()=> scroll(-400)} role="button" style={{boxShadow: "0px 15.829999923706055px 10.670000076293945px 0px #0000001F"}} className=' w-[59px] h-[59px] bg-white flex justify-center items-center rounded-full ' >
                        <svg className=' rotate-180 ' width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.91509 28.5009L15.5518 15.8617C15.6899 15.7112 15.788 15.5482 15.846 15.3727C15.904 15.1971 15.9325 15.0091 15.9316 14.8084C15.9316 14.6078 15.9026 14.4197 15.8446 14.2442C15.7866 14.0686 15.689 13.9056 15.5518 13.7552L3.91509 1.07839C3.59281 0.727302 3.18996 0.551758 2.70653 0.551758C2.22311 0.551758 1.80875 0.739841 1.46345 1.11601C1.11814 1.49217 0.945492 1.93103 0.945492 2.43259C0.945492 2.93414 1.11814 3.373 1.46345 3.74917L11.6153 14.8084L1.46345 25.8677C1.14116 26.2188 0.980021 26.6516 0.980021 27.1662C0.980021 27.6808 1.15267 28.1257 1.49798 28.5009C1.84328 28.877 2.24613 29.0651 2.70653 29.0651C3.16694 29.0651 3.56979 28.877 3.91509 28.5009Z" fill="#303179"/>
                        </svg>
                    </div>
                    <div className=' w-3 h-3 rounded-full bg-[#1D2939] mx-20 ' />
                    <div onClick={()=> scroll(400)} role="button" style={{boxShadow: "0px 15.829999923706055px 10.670000076293945px 0px #0000001F"}} className=' w-[59px] h-[59px] bg-white flex justify-center items-center rounded-full ' >
                        <svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.91509 28.5009L15.5518 15.8617C15.6899 15.7112 15.788 15.5482 15.846 15.3727C15.904 15.1971 15.9325 15.0091 15.9316 14.8084C15.9316 14.6078 15.9026 14.4197 15.8446 14.2442C15.7866 14.0686 15.689 13.9056 15.5518 13.7552L3.91509 1.07839C3.59281 0.727302 3.18996 0.551758 2.70653 0.551758C2.22311 0.551758 1.80875 0.739841 1.46345 1.11601C1.11814 1.49217 0.945492 1.93103 0.945492 2.43259C0.945492 2.93414 1.11814 3.373 1.46345 3.74917L11.6153 14.8084L1.46345 25.8677C1.14116 26.2188 0.980021 26.6516 0.980021 27.1662C0.980021 27.6808 1.15267 28.1257 1.49798 28.5009C1.84328 28.877 2.24613 29.0651 2.70653 29.0651C3.16694 29.0651 3.56979 28.877 3.91509 28.5009Z" fill="#303179"/>
                        </svg>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
