import React from 'react'

export default function ReasonWhySection() {
    return (
        <div className=' w-full py-20 flex lg:px-0 px-6  flex-col items-center ' >
            <p className=' text-center text-lg font-normal ' >Here are a few reasons why you should chose Easyswap</p>
            <p className=' text-center text-[#303179] font-bold text-3xl lg:text-4xl lg:max-w-2xl mt-3 ' >A Trusted and Secured Crypto Exchange Platform</p>
            <div className=' xl:w-[1366px]  lg:w-full mt-8 px-0 lg:px-14 flex lg:flex-row flex-col lg:gap-12 ' >
                <div className=' w-full  lg:text-left ' >
                    <img src='/images/secure.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Secure Asset Fund for Users</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >Hexacoin stores 10% of all trading fees in a secure asset fund to protect a share of user funds.</p>
                </div>
                <div className=' w-full lg:text-center ' >
                    <img src='/images/Personalised.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Personalised Access Control</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                </div>
                <div className=' w-full lg:text-right ' >
                    <img src='/images/data.png'  alt='data' className=' object-fit w-full ' />
                    <p className=' mt-8 font-bold text-lg lg:text-2xl text-[#232323] ' >Advanced Data Encryption</p>
                    <p className=' font-normal text-[#757575] lg:text-lg mt-2 ' >Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.</p>
                </div>
            </div>
        </div>
    )
}
