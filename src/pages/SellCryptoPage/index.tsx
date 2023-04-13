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
    <div className=' w-full h-full overflow-x-hidden flex flex-col lg:bg-transparent bg-white items-center py-10 '  >
        {!isShown && (
          <div className=' w-full lg:w-[680px] flex flex-col items-center mt-6 lg:mt-12 text-sm font-medium rounded-lg bg-white ' > 
            <p className=' text-3xl font-semibold text-[#303179] lg:pb-0 pb-5 ' >Easyswap Services</p>
            <div  className=" scroll_event w-full flex lg:flex-row overflow-x-auto  " >
              <div className=" w-auto flex lg:w-full gap-5 lg:px-4 ">
                <div className=' lg:border-b w-auto lg:w-full flex justify-center items-center  gap-3 px-4 lg:px-9 lg:py-8 lg:border-[#ECEBF5] ' >
                  <button onClick={()=> setTab(0)} className={tab === 0 ? ' py-1 lg:px-4 rounded-2xl w-[120px] lg:w-fit text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' w-[120px] lg:w-fit rounded-2xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 lg:px-4  '} >Sell Crypto</button>
                  <button onClick={()=> setTab(1)} className={tab === 1 ? ' py-1 lg:px-4 rounded-2xl w-[150px] lg:w-fit text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' w-[150px] lg:w-fit rounded-2xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 lg:px-4  '} >Track Transaction</button>
                  <button onClick={()=> setTab(2)} className={tab === 2 ? ' py-1 lg:px-4 rounded-2xl w-[140px] lg:w-fit text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' w-[140px] lg:w-fit rounded-2xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 lg:px-4  '} >Rate Calculator</button>
                  <button onClick={()=> setTab(3)} className={tab === 3 ? ' py-1 lg:px-4 rounded-2xl w-[120px] lg:w-fit text-sm bg-[#303179] border border-[#303179] text-[#F8FAFC] ': ' w-[120px] lg:w-fit rounded-2xl text-[#1D1D1D]  text-sm border border-[#282828] py-1 lg:px-4  '} >Price Chart</button>
                </div>
              </div>
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
          <PaymentDetails close={setIsShown} />
        )}
    </div>
  )
}
