import React from 'react'

export default function ReasonWhySection() {
    return (
        <div className=' w-full py-20 flex lg:px-0 px-6  flex-col items-center ' >
            <p className=' text-center text-lg font-normal ' >Here are a few reasons why you should chose Easyswap</p>
            <p className=' text-center text-[#303179] font-bold text-3xl lg:text-4xl lg:max-w-2xl mt-3 ' >A Trusted and Secured Crypto Exchange Platform</p>
            <div className=' xl:w-[1366px]  lg:w-full mt-8 px-0 lg:px-14 flex lg:flex-row flex-col lg:gap-12 ' >
                <div className=' w-full  lg:text-center ' >
                    <img src='/images/secure.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Easier</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >We make selling crypto simple and easy to understand. Anyone can sell on Ezyswap. </p>
                </div>
                <div className=' w-full lg:text-center ' >
                    <img src='/images/Personalised.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Faster</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >Selling crypto with Ezyswap takes less than 5 minutes - Much faster than other services.</p>
                </div>
                <div className=' w-full lg:text-center ' >
                    <img src='/images/data.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Cheaper</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >We offer the best exchange rate with no hidden fees. You get the best value for your money when you use Ezyswap.</p>
                </div>
            </div>
        </div>
    )
}
