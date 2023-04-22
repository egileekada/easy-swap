import React from 'react'
import CoinSelection from '../SellCrypto/components/CoinSelection'
import ButtonComponent from '../../ButtonComponent'
import { Input, Textarea } from '@chakra-ui/react'
import SelectCurrency from '../SellCrypto/components/SelectCurrency'

export default function RateCalculator() {
    return (
        <div className=' w-full flex flex-col items-center font-medium ' >
            <p className=' text-[#6B6B93] font-medium text-lg ' >Track your transaction status here</p>
            <div className=' w-full ' > 
                <div className=' w-full mt-10 flex flex-col items-center gap-4 pb-8 ' >
                    <div className=' w-full flex  bg-[#F5F5F5] px-6 rounded-t-xl items-center h-[104px] ' > 
                        <div>
                            <p className=' text-sm font-medium text-[#475467] ' >You Have</p>
                            <Input  placeholder='0000' fontSize="lg" borderColor="#F5F5F5" backgroundColor="#F5F5F5" borderWidth="0px" paddingLeft="0px" borderRadius="4px" outline="none" focusBorderColor='#F5F5F5'  />
                        </div> 
                        <CoinSelection rate={true} />
                    </div>
                    <svg className=' my-1 ' width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="22" cy="21.5" r="21.5" transform="rotate(-90 22 21.5)" fill="#303179"/>
                        <path d="M14.4429 25.7266L18.2076 29.4038C18.3535 29.5497 18.5797 29.6445 18.7766 29.6445C19.2363 29.6445 19.55 29.3235 19.55 28.8712C19.55 28.6523 19.4771 28.4772 19.3238 28.3313L17.7625 26.8283L16.6535 25.8652L18.2003 25.9236H27.2983C27.7579 25.9236 28.0863 25.5953 28.0863 25.1429C28.0863 24.6906 27.7579 24.3696 27.2983 24.3696H18.2003L16.6535 24.4206L17.7625 23.4649L19.3238 21.9619C19.4771 21.816 19.55 21.6336 19.55 21.4147C19.55 20.9697 19.2363 20.6486 18.7766 20.6486C18.5797 20.6486 18.3535 20.7435 18.2076 20.8894L14.4429 24.5666C14.1072 24.8876 14.0999 25.3983 14.4429 25.7266ZM27.8309 16.1106L24.0662 12.4334C23.913 12.2875 23.6868 12.1926 23.4898 12.1926C23.0375 12.1926 22.7238 12.5137 22.7238 12.966C22.7238 13.1849 22.7967 13.36 22.9426 13.5059L24.504 15.0089L25.6129 15.9719L24.0662 15.9136L14.9682 15.9136C14.5231 15.9136 14.1875 16.2419 14.1875 16.6942C14.1875 17.1393 14.5231 17.4676 14.9682 17.4676H24.0662L25.6129 17.4165L24.504 18.3723L22.9426 19.8753C22.7967 20.0212 22.7238 20.2036 22.7238 20.4152C22.7238 20.8675 23.0375 21.1885 23.4898 21.1885C23.6868 21.1885 23.913 21.0937 24.0662 20.9478L27.8309 17.2706C28.1738 16.9496 28.1811 16.4389 27.8309 16.1106Z" fill="white"/>
                    </svg> 
                    <div className=' w-full flex  bg-[#F5F5F5] px-6 rounded-b-xl items-center h-[104px] ' > 
                        <div>
                            <p className=' text-sm font-medium text-[#475467] ' >You Get</p>
                            <Input  placeholder='0000' fontSize="lg" borderColor="#F5F5F5" backgroundColor="#F5F5F5" borderWidth="0px" paddingLeft="0px" borderRadius="4px" outline="none" focusBorderColor='#F5F5F5'  />
                        </div> 
                        <SelectCurrency rate={true} />
                    </div> 
                    <ButtonComponent name="Track Transaction" bgcolor=' text-[#F1F1F1] bg-[#303179] mt-4  ' />
                </div>
            </div>
        </div>
    )
}
