import React from 'react'

export default function ReasonWhySection() {
    return (
        <div className=' w-full py-20 flex px-14 text-center flex-col items-center ' >
            <p className=' text-lg font-normal ' >Here are a few reasons why you should chose Easyswap</p>
            <p className=' text-[#303179] font-bold text-4xl max-w-2xl mt-3 ' >A Trusted and Secured Crypto Exchange Platform</p>
            <div className=' w-auto mt-8 flex gap-6 ' >
                <div className=' w-[400px] text-left ' >
                    <img src='/images/secure.png' alt='data' className=' w-full ' />
                    <p className=' mt-8 font-bold text-2xl text-[#232323] ' >Secure Asset Fund for Users</p>
                    <p className=' font-normal text-[#757575] text-lg mt-2 ' >Hexacoin stores 10% of all trading fees in a secure asset fund to protect a share of user funds.</p>
                </div>
                <div className=' w-[400px] text-left ' >
                    <img src='/images/Personalised.png' alt='data' className=' w-full ' />
                    <p className=' mt-8 font-bold text-2xl text-[#232323] ' >Personalised Access Control</p>
                    <p className=' font-normal text-[#757575] text-lg mt-2 ' >Advanced access control allows you to restrict devices and addresses that can access your account, for greater ease of mind.</p>
                </div>
                <div className=' w-[400px] text-left ' >
                    <img src='/images/data.png' alt='data' className=' w-full ' />
                    <p className=' mt-8 font-bold text-2xl text-[#232323] ' >Advanced Data Encryption</p>
                    <p className=' font-normal text-[#757575] text-lg mt-2 ' >Your transaction data is secured via end-to-end encryption, ensuring that only you have access to your personal information.</p>
                </div>
            </div>
        </div>
    )
}
