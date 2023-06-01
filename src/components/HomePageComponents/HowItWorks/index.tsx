import React from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowItWorks() { 
    
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
            controls2.start({ x: 0});
        }  
    }, [controls, controls2, controls3, controls4, inView, inView2]) 

    return (
        <div className=' w-full flex lg:justify-center font-medium relative z-40 bg-[#303179] ' > 
            <div className=' max-w-[1440px] flex pt-6 lg:flex-row flex-col lg:pt-24 lg:pb-24 pb-12  text-[#F0EBEB] text-lg bg-[#303179] ' >
                <motion.div ref={ref} initial={{x: -200}} animate={controls}  
                    transition={{ ease: "easeOut", duration: 1 }} className=' w-full flex flex-col px-6 lg:px-16 pt-10 ' >
                    <h1 className=' text-3xl lg:text-[48px] text-[#00BAF0] font-bold ' >How Ezyswap works</h1>
                    <p className=' max-w-2xl mt-6 ' >Complete your transactions within 5 minutes by using the following steps. </p>
                    <div className=' max-w-2xl mt-8 lg:mt-[58px] flex lg:flex-row flex-col gap-2 lg:gap-6 ' >
                        <div className=' lg:w-fit items-center flex gap-3 ' >
                            <div className=' lg:w-[72px] lg:h-[72px] w-[44px] h-[44px] rounded-lg bg-white flex justify-center items-center ' >
                                <svg className=' lg:w-[32px] w-[20px] ' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.0801 8.33331H26.8934C26.6401 7.97331 26.3734 7.63997 26.0934 7.30664L25.0801 8.33331Z" fill="#00BAF0"/>
                                    <path d="M24.6932 5.89375C24.3598 5.61375 24.0265 5.34708 23.6665 5.09375V6.90708L24.6932 5.89375Z" fill="#00BAF0"/>
                                    <path d="M26.1067 7.30659L30.04 3.37326C30.4267 2.98659 30.4267 2.34659 30.04 1.95992C29.6534 1.57326 29.0134 1.57326 28.6267 1.95992L24.6934 5.89326C25.2 6.33326 25.6667 6.81326 26.1067 7.30659Z" fill="#00BAF0"/>
                                    <path d="M23.6668 4C23.6668 3.45333 23.2135 3 22.6668 3C22.1335 3 21.7068 3.42667 21.6802 3.94667C22.3735 4.28 23.0402 4.65333 23.6668 5.09333V4Z" fill="#00BAF0"/>
                                    <path d="M29.0002 9.33301C29.0002 8.78634 28.5469 8.33301 28.0002 8.33301H26.8936C27.3336 8.95967 27.7202 9.62634 28.0402 10.3197C28.5736 10.293 29.0002 9.86634 29.0002 9.33301Z" fill="#00BAF0"/>
                                    <path d="M17 19.6671H17.4C17.92 19.6671 18.3333 19.2004 18.3333 18.6271C18.3333 17.9071 18.1333 17.8004 17.68 17.6404L17 17.4004V19.6671Z" fill="#00BAF0"/>
                                    <path d="M28.0532 10.3203C28.0398 10.3203 28.0265 10.3337 27.9998 10.3337H22.6665C22.5332 10.3337 22.4132 10.307 22.2798 10.2537C22.0398 10.147 21.8398 9.96033 21.7332 9.70699C21.6932 9.58699 21.6665 9.46699 21.6665 9.33366V4.00033C21.6665 3.98699 21.6798 3.97366 21.6798 3.94699C19.9465 3.13366 18.0265 2.66699 15.9998 2.66699C8.63984 2.66699 2.6665 8.64033 2.6665 16.0003C2.6665 23.3603 8.63984 29.3337 15.9998 29.3337C23.3598 29.3337 29.3332 23.3603 29.3332 16.0003C29.3332 13.9737 28.8665 12.0537 28.0532 10.3203ZM18.3332 15.7603C19.1865 16.0537 20.3332 16.6803 20.3332 18.6403C20.3332 20.307 19.0132 21.6803 17.3998 21.6803H16.9998V22.0137C16.9998 22.5603 16.5465 23.0137 15.9998 23.0137C15.4532 23.0137 14.9998 22.5603 14.9998 22.0137V21.6803H14.8932C13.1198 21.6803 11.6665 20.187 11.6665 18.347C11.6665 17.787 12.1198 17.3337 12.6665 17.3337C13.2132 17.3337 13.6665 17.787 13.6665 18.3337C13.6665 19.067 14.2132 19.667 14.8932 19.667H14.9998V16.707L13.6665 16.2403C12.8132 15.947 11.6665 15.3203 11.6665 13.3603C11.6665 11.6937 12.9865 10.3203 14.5998 10.3203H14.9998V10.0003C14.9998 9.45366 15.4532 9.00033 15.9998 9.00033C16.5465 9.00033 16.9998 9.45366 16.9998 10.0003V10.3337H17.1065C18.8798 10.3337 20.3332 11.827 20.3332 13.667C20.3332 14.2137 19.8798 14.667 19.3332 14.667C18.7865 14.667 18.3332 14.2137 18.3332 13.667C18.3332 12.9337 17.7865 12.3337 17.1065 12.3337H16.9998V15.2937L18.3332 15.7603Z" fill="#00BAF0"/>
                                    <path d="M13.6665 13.373C13.6665 14.093 13.8665 14.1997 14.3198 14.3597L14.9998 14.5997V12.333H14.5998C14.0932 12.333 13.6665 12.7997 13.6665 13.373Z" fill="#00BAF0"/>
                                </svg>
                            </div>
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:hidden  ' >Step 1</p>
                        </div>
                        <div className='  ' >
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:block hidden  ' >Step 1</p>
                            <p className=' mt-3 font-normal text-sm lg:text-base  lg:font-medium ' >Select the cryptocurrency of your choice and input the amount you want to sell. The naira amount is calculated automatically using the latest rates. </p>
                        </div>
                    </div>
                    <div className=' max-w-2xl mt-6 lg:mt-[40px] flex lg:flex-row flex-col gap-2 lg:gap-6 ' >
                        <div className='  lg:w-fit items-center flex gap-3 ' >
                            <div className=' lg:w-[72px] lg:h-[72px] w-[44px] h-[44px] rounded-lg bg-white flex justify-center items-center ' >
                                <svg className=' lg:w-[32px] w-[20px] ' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.9999 18.667C9.31988 18.667 3.87988 23.147 3.87988 28.667C3.87988 29.0403 4.17322 29.3337 4.54655 29.3337H27.4532C27.8266 29.3337 28.1199 29.0403 28.1199 28.667C28.1199 23.147 22.6799 18.667 15.9999 18.667Z" fill="#00BAF0"/>
                                    <path d="M16.0002 2.66699C14.4268 2.66699 12.9868 3.21366 11.8402 4.13366C10.3068 5.34699 9.3335 7.22699 9.3335 9.33366C9.3335 10.587 9.68016 11.7603 10.3068 12.7603C11.4535 14.6937 13.5602 16.0003 16.0002 16.0003C17.6802 16.0003 19.2135 15.387 20.3868 14.3337C20.9068 13.8937 21.3602 13.3603 21.7068 12.7603C22.3202 11.7603 22.6668 10.587 22.6668 9.33366C22.6668 5.65366 19.6802 2.66699 16.0002 2.66699ZM19.4535 8.61366L15.8935 11.8937C15.6535 12.1203 15.3468 12.227 15.0402 12.227C14.7202 12.227 14.4002 12.107 14.1602 11.867L12.5202 10.2137C12.0268 9.72032 12.0268 8.93366 12.5202 8.44033C13.0135 7.94699 13.8002 7.94699 14.2935 8.44033L15.0802 9.22699L17.7602 6.76033C18.2668 6.29366 19.0535 6.32033 19.5202 6.82699C19.9868 7.34699 19.9602 8.14699 19.4535 8.61366Z" fill="#00BAF0"/>
                                </svg>
                            </div>
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:hidden' >Step 2</p>
                        </div>
                        <div className='  ' >
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:block hidden' >Step 2</p>
                            <p className=' mt-3 font-normal text-sm lg:text-base  lg:font-medium ' >Once you’re satisfied with the amount, click on sell crypto to proceed to the next step.</p>
                        </div>
                    </div>
                    <div className=' max-w-2xl mt-6 lg:mt-[40px] flex lg:flex-row flex-col gap-2 lg:gap-6 ' >
                        <div className='  lg:w-fit items-center flex gap-3 ' >
                            <div className=' lg:w-[72px] lg:h-[72px] w-[44px] h-[44px] rounded-lg bg-white flex justify-center items-center ' >
                                <svg className=' lg:w-[32px] w-[20px] ' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.9998 20.6667C19.9998 25.4533 16.1198 29.3333 11.3332 29.3333C6.5465 29.3333 2.6665 25.4533 2.6665 20.6667C2.6665 15.88 6.5465 12 11.3332 12C11.5598 12 11.7998 12.0133 12.0265 12.0267C16.2532 12.36 19.6398 15.7467 19.9732 19.9733C19.9865 20.2 19.9998 20.44 19.9998 20.6667Z" fill="#00BAF0"/>
                                    <path d="M29.3331 11.3337C29.3331 15.6803 26.1331 19.267 21.9731 19.8937V19.8137C21.5598 14.6403 17.3598 10.4403 12.1464 10.027H12.1064C12.7331 5.86699 16.3198 2.66699 20.6664 2.66699C25.4531 2.66699 29.3331 6.54699 29.3331 11.3337Z" fill="#00BAF0"/>
                                    <path d="M7.45317 2.66699H3.99984C3.2665 2.66699 2.6665 3.26699 2.6665 4.00033V7.45366C2.6665 8.64033 4.1065 9.24033 4.9465 8.40033L8.39984 4.94699C9.2265 4.10699 8.63984 2.66699 7.45317 2.66699Z" fill="#00BAF0"/>
                                    <path d="M24.5466 29.3334H28C28.7333 29.3334 29.3333 28.7334 29.3333 28V24.5467C29.3333 23.36 27.8933 22.76 27.0533 23.6L23.6 27.0534C22.7733 27.8934 23.36 29.3334 24.5466 29.3334Z" fill="#00BAF0"/>
                                </svg>
                            </div>
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:hidden' >Step 3</p>
                        </div>
                        <div className='  ' >
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:block hidden' >Step 3</p>
                            <p className=' mt-3 font-normal text-sm lg:text-base  lg:font-medium ' >Complete the registration process to create an account on Ezyswap. Include your default bank account details to receive payment.</p>
                        </div>
                    </div>
                    <div className=' max-w-2xl mt-6 lg:mt-[40px] flex lg:flex-row flex-col gap-2 lg:gap-6 ' >
                        <div className='  lg:w-fit items-center flex gap-3 ' >
                            <div className=' lg:w-[72px] lg:h-[72px] w-[44px] h-[44px] rounded-lg bg-white flex justify-center items-center ' >
                                <svg className=' lg:w-[33px] w-[20px] ' viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0636 13.1469C27.9835 13.1432 27.9032 13.1419 27.823 13.1429H24.4749C21.7359 13.1429 19.3901 15.2509 19.3901 18.0003C19.3901 20.7496 21.7359 22.8576 24.4763 22.8576H27.8216C27.9055 22.8576 27.9866 22.8576 28.0623 22.8523C28.6276 22.8173 29.1606 22.5841 29.5618 22.1963C29.963 21.8085 30.2051 21.2924 30.243 20.7443C30.2485 20.6656 30.2485 20.5816 30.2485 20.5043V15.4963C30.2485 15.4189 30.2485 15.3349 30.243 15.2563C30.2052 14.7084 29.9632 14.1925 29.5623 13.8047C29.1614 13.4169 28.6288 13.1836 28.0636 13.1483V13.1469ZM24.182 19.2949C24.8874 19.2949 25.4608 18.7163 25.4608 18.0003C25.4608 17.2843 24.8874 16.7056 24.182 16.7056C23.4766 16.7056 22.9046 17.2843 22.9046 18.0003C22.9046 18.7163 23.4753 19.2949 24.182 19.2949Z" fill="#00BAF0"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8217 24.8003C27.8678 24.7988 27.9136 24.8077 27.9555 24.8265C27.9973 24.8452 28.034 24.8732 28.0627 24.9082C28.0913 24.9433 28.111 24.9843 28.1203 25.0281C28.1296 25.0719 28.1281 25.1172 28.116 25.1603C27.8493 26.083 27.4271 26.8697 26.7493 27.531C25.7579 28.5003 24.4998 28.931 22.946 29.135C21.4362 29.3337 19.5085 29.3337 17.072 29.3337H14.2711C11.836 29.3337 9.90687 29.3337 8.39712 29.135C6.84337 28.931 5.58525 28.5003 4.59388 27.531C3.6025 26.563 3.1625 25.3337 2.9535 23.815C2.75 22.339 2.75 20.4537 2.75 18.0737V17.927C2.75 15.547 2.75 13.6603 2.9535 12.1857C3.1625 10.667 3.6025 9.44033 4.5925 8.46833C5.58387 7.50033 6.842 7.06833 8.39575 6.86566C9.90687 6.66699 11.836 6.66699 14.2711 6.66699H17.072C19.5071 6.66699 21.4362 6.66699 22.946 6.86566C24.4998 7.06966 25.7579 7.50033 26.7493 8.46833C27.4271 9.13099 27.8493 9.91766 28.116 10.8417C28.1278 10.8847 28.1291 10.9298 28.1197 10.9734C28.1103 11.0171 28.0906 11.0579 28.062 11.0928C28.0333 11.1277 27.9967 11.1555 27.955 11.1742C27.9133 11.1929 27.8677 11.2018 27.8217 11.2003H24.4764C20.7171 11.2003 17.4047 14.103 17.4047 18.0003C17.4047 21.8977 20.7185 24.8003 24.4778 24.8003H27.8217ZM7.71925 11.8483C7.58834 11.8488 7.45882 11.8744 7.33808 11.9234C7.21734 11.9725 7.10774 12.0441 7.01556 12.1343C6.92337 12.2244 6.8504 12.3313 6.8008 12.4488C6.7512 12.5662 6.72596 12.692 6.7265 12.819C6.7265 13.3563 7.17062 13.791 7.71925 13.791H13.0213C13.5712 13.791 14.0154 13.3563 14.0154 12.819C14.0161 12.5625 13.9118 12.3162 13.7254 12.1342C13.539 11.9522 13.2858 11.8494 13.0213 11.8483H7.71925Z" fill="#00BAF0"/>
                                    <path d="M10.6934 5.36547L13.3856 3.44147C14.0882 2.93782 14.9388 2.66602 15.8125 2.66602C16.6862 2.66602 17.5368 2.93782 18.2394 3.44147L20.9467 5.37613C19.8137 5.33347 18.5487 5.33347 17.1641 5.33347H14.1804C12.9126 5.33347 11.748 5.33347 10.6934 5.36547Z" fill="#00BAF0"/>
                                </svg>
                            </div>
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:hidden' >Step 4</p>
                        </div>
                        <div className='  ' >
                            <p className=' text-[#00BAF0] text-2xl font-semibold lg:block hidden' >Step 4</p>
                            <p className=' mt-3 font-normal text-sm lg:text-base  lg:font-medium ' >Send the crypto from any wallet to the unique crypto address generated for your transactions. Once confirmed, payment is automatically sent to your bank account.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div ref={ref2} initial={{x: +200}} animate={controls}  
                        transition={{ ease: "easeOut", duration: 1 }} className='  w-full flex justify-center lg:mt-0 mt-8 ' >
                        <img alt='first' className=' h-full object-contain ' src='/images/iPhone.png' />
                </motion.div>
            </div>
        </div>
    )
}
