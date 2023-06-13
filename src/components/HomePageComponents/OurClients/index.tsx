import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useIsOverflow } from './component/useIsOverflow';

export default function OurClients() {

    const ref: any = React.useRef(null);
    const width:  any = window.innerWidth 

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


    // const ref = React.useRef(null);  
    // const isOverflow = useIsOverflow(ref); 
    // const scroll = (scrolloffset: any) =>{
    //     ref.current.scrollLeft += scrolloffset 
    // };     

    const handleScroll = (e: any) => { 
        const bottom = e.target.scrollWidth - ref.current.scrollLeft === e.target.clientWidth;
        if (bottom) { 
            console.log("bottom")
            scroll(-100000)
        }
    }

    return (
        <div className=' w-full py-6 pb-20 lg:py-20 flex flex-col text-center items-center bg-[#F0F0F0] px-0 lg:px-14 ' >
            <motion.div ref={ref2} initial={{x: -200}} animate={controls}  
                    transition={{ ease: "easeOut", duration: 1 }}> 
                {/* <p className=' text-lg font-normal ' >Hear from others</p> */}
                <p className=' font-bold text-2xl lg:text-4xl text-[#303179] mt-3' >What our clients are saying</p>
            </motion.div>
            <motion.div  ref={ref1} initial={{x: +200}} animate={controls}  
                    transition={{ ease: "easeOut", duration: 1 }} className=' w-full scroll_event relative flex flex-col lg:pl-0 ' > 
                <div className='absolute left-4 h-full flex items-center justify-center ' >
                    <div onClick={()=> scroll(-(width+20))} role="button" style={{boxShadow: "0px 15.829999923706055px 10.670000076293945px 0px #0000001F"}} className=' w-[40px] h-[40px] lg:hidden bg-white flex justify-center items-center rounded-full ' >
                        <svg className=' rotate-180 w-[10px] ' viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.91509 28.5009L15.5518 15.8617C15.6899 15.7112 15.788 15.5482 15.846 15.3727C15.904 15.1971 15.9325 15.0091 15.9316 14.8084C15.9316 14.6078 15.9026 14.4197 15.8446 14.2442C15.7866 14.0686 15.689 13.9056 15.5518 13.7552L3.91509 1.07839C3.59281 0.727302 3.18996 0.551758 2.70653 0.551758C2.22311 0.551758 1.80875 0.739841 1.46345 1.11601C1.11814 1.49217 0.945492 1.93103 0.945492 2.43259C0.945492 2.93414 1.11814 3.373 1.46345 3.74917L11.6153 14.8084L1.46345 25.8677C1.14116 26.2188 0.980021 26.6516 0.980021 27.1662C0.980021 27.6808 1.15267 28.1257 1.49798 28.5009C1.84328 28.877 2.24613 29.0651 2.70653 29.0651C3.16694 29.0651 3.56979 28.877 3.91509 28.5009Z" fill="#303179"/>
                        </svg>
                    </div>
                </div>
                <div className='absolute right-4 h-full flex items-center justify-center ' >
                    <div onClick={()=> scroll(width+20)} role="button" style={{boxShadow: "0px 15.829999923706055px 10.670000076293945px 0px #0000001F"}} className='w-[40px] h-[40px] bg-white flex justify-center items-center rounded-full ' >
                        <svg className=' w-[10px] 'viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.91509 28.5009L15.5518 15.8617C15.6899 15.7112 15.788 15.5482 15.846 15.3727C15.904 15.1971 15.9325 15.0091 15.9316 14.8084C15.9316 14.6078 15.9026 14.4197 15.8446 14.2442C15.7866 14.0686 15.689 13.9056 15.5518 13.7552L3.91509 1.07839C3.59281 0.727302 3.18996 0.551758 2.70653 0.551758C2.22311 0.551758 1.80875 0.739841 1.46345 1.11601C1.11814 1.49217 0.945492 1.93103 0.945492 2.43259C0.945492 2.93414 1.11814 3.373 1.46345 3.74917L11.6153 14.8084L1.46345 25.8677C1.14116 26.2188 0.980021 26.6516 0.980021 27.1662C0.980021 27.6808 1.15267 28.1257 1.49798 28.5009C1.84328 28.877 2.24613 29.0651 2.70653 29.0651C3.16694 29.0651 3.56979 28.877 3.91509 28.5009Z" fill="#303179"/>
                        </svg>
                    </div>
                </div>
                <div onScroll={handleScroll} ref={ref} className=" scroll_event w-full flex mt-14 lg:flex-row overflow-x-auto pb-4  " >
                    <div className=" scroll_event w-auto flex gap-5 px-0 lg:px-4 ">
                        <div className={` w-[100vw] px-8 lg:w-[350px] flex flex-col items-center `} >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >
                                    <img className=' w-full h-full object-cover rounded-full ' alt='propic' src='https://pbs.twimg.com/profile_images/1650050214814703617/V9R4uw-Z_400x400.jpg'/>
                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I've been using <a target="_blank" href='https://twitter.com/ezyswap_' className=' text-blue-400 hover:underline ' >@ezyswap_ </a> for a while now, and I must say it's one of the best in the market. Seamless transactions, competitive rates, and a wide range of cryptocurrencies to choose from.</p>
                                <div className=' mt-auto ' >
                                </div>
                                <a  target="_blank" href='https://twitter.com/tom__tom1/status/1661048199912607744?t=2ftfFPJLAr09JYWNnLkxXg&s=19' role='button'  className=' mt-auto ' >
                                    <>
                                        <p className=' text-xl text-[#121212] font-bold mt-4 ' >tomtom</p>
                                        <p className=' font-semibold  text-[#12121280] ' >
                                            @tom__tom1
                                        </p>
                                    </>
                                </a>
                            </div>
                        </div> 
                        <div className={` w-[100vw] px-8 lg:w-[350px] flex flex-col items-center `} >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >
                                    <img className=' w-full h-full object-cover rounded-full ' alt='propic' src='https://pbs.twimg.com/profile_images/1658171613991378944/Czo8AB2R_400x400.jpg'/>
                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I've been using <a target="_blank" href='https://twitter.com/ezyswap_' className=' text-blue-400 hover:underline ' >@ezyswap_ </a> for both buying and selling cryptocurrencies, and I must say they offer competitive rates. Their transparent fee structure ensures that I get the best value for my trades</p>
                                <a  target="_blank" href='https://twitter.com/Ghyfty4/status/1661051996789522447?t=gH4YZG_3-I5KJD3-UoQWRg&s=19' role='button'  className=' mt-auto ' >
                                    <>
                                        <p className=' text-xl text-[#121212] font-bold mt-4 ' >Gifted</p>
                                        <p className=' font-semibold  text-[#12121280] ' >@Ghyfty4</p>
                                    </>
                                </a>
                            </div>
                        </div> 
                        <div className={` w-[100vw] px-8 lg:w-[350px] flex flex-col items-center `} >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >
                                    <img className=' w-full h-full object-cover rounded-full ' alt='propic' src='https://pbs.twimg.com/profile_images/1480389641731821571/Man6s6Iw_400x400.jpg'/>
                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I love the flexibility <a target="_blank" href='https://twitter.com/ezyswap_' className=' text-blue-400 hover:underline ' >@ezyswap_ </a> offers. Whether I want to buy USDT, ETH, or BTC, the process is seamless and efficient. Their wide range of available cryptocurrencies makes it a one-stop platform for all my trading needs.</p>
                                <a  target="_blank" href='https://twitter.com/geejayholufunm1/status/1661449261945442321?t=ziVSUX0EP6rpLP2MzjsMxQ&s=19' role='button'  className=' mt-auto ' >
                                    <>
                                        <p className=' text-xl text-[#121212] font-bold mt-4 ' >Adejumoke Gbadebo</p>
                                        <p className=' font-semibold  text-[#12121280] ' >@geejayholufunm1</p>
                                    </>
                                </a>
                            </div>
                        </div> 
                        <div className={` w-[100vw] px-8 lg:w-[350px] flex flex-col items-center `} >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >
                                    <img className=' w-full h-full object-cover rounded-full ' alt='propic' src='https://pbs.twimg.com/profile_images/1663851276776423424/SXPzffc-_400x400.jpg'/>
                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I can't say enough good things about <a target="_blank" href='https://twitter.com/ezyswap_' className=' text-blue-400 hover:underline ' >@ezyswap_ </a> Their customer service is exceptional, always responsive and helpful. I had an issue with a transaction, and they resolved it promptly. Great support team!</p>
                                <a  target="_blank" href='https://twitter.com/Austin__Ik/status/1661268382186962945?t=K7zuKkC1bmwgPbTOka2pCw&s=19' role='button'  className=' mt-auto ' >
                                    <>
                                        <p className=' text-xl text-[#121212] font-bold mt-4 ' >SmartScripts</p>
                                        <p className=' font-semibold  text-[#12121280] ' >@Austin__Ik</p>
                                    </>
                                </a>
                            </div>
                        </div> 
                        <div className={` w-[100vw] px-8 lg:w-[350px] flex flex-col items-center `} >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >
                                    <img className=' w-full h-full object-cover rounded-full ' alt='propic' src='https://pbs.twimg.com/profile_images/1633505070284242944/W0Aijju6_400x400.jpg'/>
                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >If you're looking for a reliable platform to buy/sell ETH, look no further than <a target="_blank" href='https://twitter.com/ezyswap_' className=' text-blue-400 hover:underline ' >@ezyswap_ </a> They offer a secure and hassle-free experience. Impressed with their service!</p>
                                <a  target="_blank" href='https://twitter.com/durojaiyeadeba3/status/1661248887720644608?t=k7dI_An_KoU5HA4UvfgZkw&s=19' role='button'  className=' mt-auto ' >
                                    <>
                                        <p className=' text-xl text-[#121212] font-bold mt-4 ' >duro_bayo 👑</p>
                                        <p className=' font-semibold  text-[#12121280] ' >@durojaiyeadeba3</p>
                                    </>
                                </a>
                            </div>
                        </div> 
                        <div className={` w-[100vw] px-8 lg:w-[350px] flex flex-col items-center `} >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >
                                    <img className=' w-full h-full object-cover rounded-full ' alt='propic' src='https://pbs.twimg.com/profile_images/1533401758449512450/i8SeCE6g_400x400.jpg'/>
                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' ><a target="_blank" href='https://twitter.com/ezyswap_' className=' text-blue-400 hover:underline ' >@ezyswap_ </a> is incredibly flexible. Buying USDT, ETH, or BTC is seamless and efficient. They offer a wide range of cryptocurrencies, making it a one-stop platform for all my trading needs.</p>
                                <a  target="_blank" href='https://twitter.com/Buildinghomes01/status/1662086277338996742' role='button'  className=' mt-auto ' >
                                    <>
                                        <p className=' text-xl text-[#121212] font-bold mt-4 ' >Online contractor🏡🏠</p>
                                        <p className=' font-semibold  text-[#12121280] ' >@Buildinghomes01</p>
                                    </>
                                </a>
                            </div>
                        </div> 
                        <div className={` w-[100vw] px-8 lg:w-[350px] flex flex-col items-center `} >
                            <div className=' w-fit h-fit ' > 
                                <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >
                                    <img className=' w-full h-full object-cover rounded-full ' alt='propic' src='https://pbs.twimg.com/profile_images/1635705505132732416/SmuasBEC_400x400.jpg'/>
                                </div>
                            </div>
                            <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                                <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' ><a target="_blank" href='https://twitter.com/ezyswap_' className=' text-blue-400 hover:underline ' >@ezyswap_ </a> is the epitome of flexibility. From purchasing USDT, ETH, or BTC to its seamless and efficient process, they cater to all my trading needs. With a diverse selection of cryptocurrencies, it's the ultimate one-stop platform.</p>
                                <a  target="_blank" href='https://twitter.com/galvaninat/status/1662086188029624321' role='button'  className=' mt-auto ' >
                                    <>
                                        <p className=' text-xl text-[#121212] font-bold mt-4 ' >galvainish</p>
                                        <p className=' font-semibold  text-[#12121280] ' >@galvaninat</p>
                                    </>
                                </a>
                            </div>
                        </div> 
                        <div className={` w-[100px] `} ></div>
                    </div>
                </div>
                <div className=' w-full hidden lg:flex pt-12 lg:pb-0 pb-8 justify-center items-center ' >
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
