import { Input } from '@chakra-ui/react'
import React from 'react'
import CoinNetwork from '../SellCrypto/components/CoinNetwork'
import ButtonComponent from '../../ButtonComponent'

export default function TrackTransaction() {
    return (
        <div className=' w-full flex flex-col items-center font-medium ' >
            <p className=' text-[#6B6B93] font-medium text-lg ' >Track your transaction status here</p>
            <div className=' w-full ' > 
                <div className=' w-full mt-10 flex flex-col gap-4 pb-8 ' >
                    <div className=' w-full   ' >
                    <p className=' font-normal text-[#334155] mb-2 ' >Transaction ID:</p>
                        <Input  onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} height="45px" type='text' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                    </div>
                    <CoinNetwork />
                    <ButtonComponent name="Track Transaction" bgcolor=' text-[#F1F1F1] bg-[#303179] mt-4  ' />
                </div>
            </div>
        </div>
    )
}
