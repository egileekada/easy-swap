import React from 'react'
import SellCrypto from '../../components/SellCrytoComponent/SellCrypto'
import { Input } from '@chakra-ui/react'
import PaymentDetails from '../../components/SellCrytoComponent/PaymentDetails'
import TrackTransaction from '../../components/SellCrytoComponent/TrackTransaction'
import RateCalculator from '../../components/SellCrytoComponent/RateCalculator'

export default function SellCryptoPage() {

  const [tab, setTab] = React.useState(0)
  const [isShown, setIsShown] = React.useState(false)

  return (
    <div className=' w-full h-full flex flex-col lg:bg-transparent bg-white items-center py-10 '  >
        <p className=' text-3xl font-semibold text-[#303179]  ' >Easyswap Services</p>
        {!isShown && (
          <div className=' w-full lg:w-[680px] flex flex-col items-center mt-6 lg:mt-12 text-sm font-medium rounded-lg bg-white ' >
            <div className=' border-b w-fit lg:w-full lg:flex grid lg:grid-cols-4 grid-cols-2 justify-center items-center  gap-3 px-4 lg:px-9 py-8 border-[#ECEBF5] ' >
              <button onClick={()=> setTab(0)} className={tab === 0 ? ' py-1 px-4 rounded-2xl  text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' rounded-3xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 px-3  '} >Sell Crypto</button>
              <button onClick={()=> setTab(1)} className={tab === 1 ? ' py-1 px-4 rounded-2xl  text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' rounded-3xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 px-3  '} >Track Transaction</button>
              <button onClick={()=> setTab(2)} className={tab === 2 ? ' py-1 px-4 rounded-2xl  text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' rounded-3xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 px-3  '} >Rate Calculator</button>
              <button onClick={()=> setTab(3)} className={tab === 3 ? ' py-1 px-4 rounded-2xl  text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' rounded-3xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 px-3  '} >Price Chart</button>
            </div>
            <div className=' w-full flex justify-center items-center gap-3 px-4 lg:px-9 py-8 pb-2 ' >
              {tab === 0 && (
                <SellCrypto next={setIsShown} />
              )}
              {tab === 1 && (
                <TrackTransaction  />
              )}
              {tab === 2 && (
                <RateCalculator  />
              )}
            </div>
          </div>
        )}
        {isShown && ( 
          <PaymentDetails />
        )}
    </div>
  )
}
