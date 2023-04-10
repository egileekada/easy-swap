import React from 'react'
import InputComponent from '../../InputComponent'
import ButtonComponent from '../../ButtonComponent'

export default function MyProfile() {
    return (
        <div className=' w-full flex flex-col items-center lg:p-10 ' >
            <div className=' lg:w-[560px] w-full flex flex-col items-center py-14 ' >
                <div className=' w-[130px] relative h-[130px] bg-red-500 rounded-full ' >
                    <div className=' absolute top-2 right-0 rounded-full bg-white p-2 ' >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1101_18597)">
                                <path d="M13.1067 8.07174L11.9283 6.8934L4.16667 14.6551V15.8334H5.345L13.1067 8.07174ZM14.285 6.8934L15.4633 5.71507L14.285 4.53674L13.1067 5.71507L14.285 6.8934ZM6.035 17.5001H2.5V13.9642L13.6958 2.7684C13.8521 2.61218 14.064 2.52441 14.285 2.52441C14.506 2.52441 14.7179 2.61218 14.8742 2.7684L17.2317 5.1259C17.3879 5.28218 17.4757 5.4941 17.4757 5.71507C17.4757 5.93604 17.3879 6.14796 17.2317 6.30424L6.035 17.5001Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1101_18597">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <p className=' text-2xl font-semibold text-[#1D2939] mt-2 ' >Jayboss Jay</p>
                <div className=' mt-10 text-left w-full lg:w-[560px] mb-8 ' >
                    <InputComponent title='Full Name' placeholder='Enter Full Name' />
                    <InputComponent title='Email Address' placeholder='Enter Email Address' />
                    <InputComponent title='Address' placeholder='Enter Address' />
                    <InputComponent title='Contact Number' placeholder='Enter Contact Number' />
                </div>
                <ButtonComponent bgcolor=' bg-[#303179] text-white '  name="Save Changes" />
            </div>
        </div>
    )
}
