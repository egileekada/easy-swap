import React from 'react'
import CoinSelection from './components/CoinSelection'
import CoinNetwork from './components/CoinNetwork'
import Bank from './components/Bank'
import { Input } from '@chakra-ui/react'
import ButtonComponent from '../../ButtonComponent'

type props = {
    next: any
}

export default function SellCrypto({next}: props) {
    return (
        <div className=' w-full flex flex-col items-center font-medium ' >
            <p className=' text-[#6B6B93] font-medium text-lg ' >To swap your Crypto to Naira, select your coin to proceed.</p>
            <div className=' w-full mt-10 flex flex-col gap-4 pb-8 ' >
                <CoinSelection />
                <CoinNetwork />
                <Bank />
                <div className=' w-full ' > 
                    <p className=' font-normal text-[#334155] mb-2 ' >Bank account number</p>
                    <div className=' w-full   ' >
                        <Input height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                    </div>
                    <div className=' flex gap-3 font-normal mt-2 text-[#303179] text-sm ' >
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="warning">
                                <circle id="Oval" cx="8" cy="8.99316" r="8" fill="#303179"/>
                                <g id="Group 12">
                                    <g id="Path">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.72372 6.08789V8.81516V6.08789Z" fill="#362A70"/>
                                        <path d="M7.72372 6.08789V8.81516" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <g id="Path_2">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.72359 12.2967V12.5171V12.2967Z" fill="#362A70"/>
                                        <path d="M7.72359 12.2967V12.5171" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        The name on your account must match the name provided on your BVN and Easyswap account
                    </div>
                </div> 
                <div className=' w-full ' > 
                    <p className=' font-normal text-[#334155] mb-2 ' >Phone number</p>
                    <div className=' w-full   ' >
                        <Input placeholder='Enter your phone number' height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                    </div>
                </div>
                <ButtonComponent onClick={()=> next(true)} name="Initialize Payment" bgcolor=' text-[#F1F1F1] bg-[#303179] mt-4  ' />
            </div>
        </div>
    )
}
