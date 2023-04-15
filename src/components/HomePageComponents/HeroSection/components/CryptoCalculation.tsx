import { Input } from '@chakra-ui/react'
import React from 'react'

export default function CryptoCalculation() {

    const [isShown, setIsShown] = React.useState(0)

    const clickHandler =(item: number)=> {
        if(item ===isShown){ 
            setIsShown(0)
        } else { 
            setIsShown(item)
        }
    }

    return (
        <div className=' w-full lg:mt-0 mt-6 lg:w-[450px] h-fit rounded-lg bg-white py-9 px-6 ' >
            <p className=' font-bold text-[#303179] mb-4 ' >1 BUSD = 732.29 NGN</p>
            {/* <div className=' w-full border border-[#94A3B8] h-[60px] rounded-lg px-[26px] flex items-center justify-between ' >
                <div className=' w-full ' >
                    <p className=' font-semibold text-[#475569] text-sm ' >Send</p>
                    <input className=' border-0 font-bold text-lg outline-none ' placeholder="0000" />
                </div>
                <div className=' w-fit flex items-center font-bold gap-[10px] ' >
                    <p className=' ' >BUSD</p>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5.35742L9.53674e-07 0.357421L10 0.357422L5 5.35742Z" fill="black"/>
                    </svg>
                </div>
            </div> */}
            <div className=' relative w-full border border-[#94A3B8] h-[60px] mt-4 rounded-lg px-4 lg:px-[26px] flex items-center justify-between ' >
                <div className=' w-full ' >
                    <p className=' font-semibold text-[#475569] text-sm ' >Send</p>
                    <input className=' w-full border-0 font-bold text-lg outline-none ' placeholder="0000" />
                </div>
                <div onClick={()=> clickHandler(1)} role="button" className=' w-fit flex items-center font-bold gap-[10px] ' >
                    <p className=' ' >BUSD</p>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5.35742L9.53674e-07 0.357421L10 0.357422L5 5.35742Z" fill="black"/>
                    </svg>
                </div>
                {isShown === 1 && ( 
                    <> 
                        <div style={{boxShadow: "0px 8px 20px -4px #1718181F"}} className=' w-[89px] bg-white right-4 z-50 absolute top-3 rounded-lg p-2 ' >
                            <p role='button' onClick={()=> clickHandler(1)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(1)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(1)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(1)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(1)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                        </div>
                        <div className=' fixed inset-0 z-20 ' onClick={()=> clickHandler(1)} />
                    </>
                )}
            </div> 
            <div className=' w-full relative border border-[#94A3B8] h-[60px] mt-4 rounded-lg px-4 lg:px-[26px] flex items-center justify-between ' >
                <div className=' w-full ' >
                    <p className=' font-semibold text-[#475569] text-sm ' >Receive</p>
                    <input className=' w-full border-0 font-bold text-lg outline-none ' placeholder="0000" />
                </div>
                <div onClick={()=> clickHandler(2)} role="button" className='  w-fit flex items-center font-bold gap-[10px] ' >
                    <p className=' ' >BUSD</p>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5.35742L9.53674e-07 0.357421L10 0.357422L5 5.35742Z" fill="black"/>
                    </svg>
                </div>
                {isShown === 2 && ( 
                    <> 
                        <div style={{boxShadow: "0px 8px 20px -4px #1718181F"}} className=' w-[89px] bg-white right-4 z-50 absolute top-3 rounded-lg p-2 ' >
                            <p role='button' onClick={()=> clickHandler(2)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(2)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(2)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(2)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                            <p role='button' onClick={()=> clickHandler(2)} className=' text-sm font-semibold p-2 my-1 hover:bg-[#3031791A] rounded ' >BTC</p>
                        </div>
                        <div className=' fixed inset-0 z-20 ' onClick={()=> clickHandler(2)} />
                    </>
                )}
            </div> 
            <button style={{boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)"}} className=' bg-[#303179] font-semibold text-[#FCFCFD] font-sembold w-full mt-6 rounded h-[45px] ' >Sell crypto in minutes</button>
        </div>
    )
}
