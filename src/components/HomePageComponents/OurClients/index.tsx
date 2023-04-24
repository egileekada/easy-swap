import React from 'react'

export default function OurClients() {

    const ref: any = React.useRef(null);
    const scroll = (scrolloffset: any) => {
        ref.current.scrollLeft += scrolloffset;
    };

    return (
        <div className=' w-full py-6 lg:py-20 flex flex-col text-center items-center bg-[#F0F0F0] px-6 lg:x-14 ' >
            <p className=' text-lg font-normal ' >Hear from others</p>
            <p className=' font-bold text-2xl lg:text-4xl text-[#303179] mt-3' >What our clients are saying</p>
            <div ref={ref} className=" scroll_event w-full flex mt-14 lg:flex-row overflow-x-auto pb-4  " >
                <div className=" w-auto flex gap-5 lg:px-4 ">
                    <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                        <div className=' w-fit h-fit ' > 
                            <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                            </div>
                        </div>
                        <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                            <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >Ezyswap is one of the best platforms I have used to sell my crypto for naira within minutes easily.</p>
                            <div className=' mt-auto ' >
                                <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                            </div>
                        </div>
                    </div> 
                    <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                        <div className=' w-fit h-fit ' > 
                            <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                            </div>
                        </div>
                        <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                            <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I endorse Ezyswap, It is fast, cheap, and very secure.</p>
                            <div className=' mt-auto ' >
                                <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                            </div>
                        </div>
                    </div> 
                    <div className=' w-[85vw] lg:w-[350px] flex flex-col items-center ' >
                        <div className=' w-fit h-fit ' > 
                            <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 lg:w-[130px] lg:h-[130px] w-[80px] h-[80px] rounded-full ' >

                            </div>
                        </div>
                        <div className=' w-full px-5 pb-6 -mt-[40px] h-full flex flex-col lg:-mt-[70px] pt-[50px] lg:pt-[80px] bg-white rounded-2xl ' >
                            <p className=' text-[#12121280]  font-medium leading-[24px] mb-auto lg:text-base text-sm ' >I must admit that Ezyswap surpassed my expectations. Transactions are fast and cheap with no problems.</p>
                            <div className=' mt-auto ' >
                                <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                                <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    )
}
