import React from 'react'

export default function OurClients() {

    const ref: any = React.useRef(null);
  const scroll = (scrolloffset: any) => {
    ref.current.scrollLeft += scrolloffset;
  };


    return (
        <div className=' w-full py-20 flex flex-col text-center items-center bg-[#F0F0F0] px-14 ' >
            <p className=' text-lg font-normal ' >Hear from others</p>
            <p className=' font-bold text-4xl text-[#303179] mt-3' >What our clients are saying</p>
            <div ref={ref} className=" scroll_event w-full flex mt-14 lg:flex-row overflow-x-auto pb-4  " >
                <div className=" w-auto flex gap-5 px-4 ">
                    <div className=' w-[350px] flex flex-col items-center ' >
                        <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 w-[130px] h-[130px] rounded-full ' >

                        </div>
                        <div className=' w-full px-5 pb-6 -mt-[70px] pt-[80px] bg-white rounded-2xl ' >
                            <p className=' text-[#12121280]  font-medium leading-[24px] ' >“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”</p>
                            <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                            <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                        </div>
                    </div>
                    <div className=' w-[350px] flex flex-col items-center ' >
                        <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 w-[130px] h-[130px] rounded-full ' >

                        </div>
                        <div className=' w-full px-5 pb-6 -mt-[70px] pt-[80px] bg-white rounded-2xl ' >
                            <p className=' text-[#12121280]  font-medium leading-[24px] ' >“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”</p>
                            <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                            <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                        </div>
                    </div>
                    <div className=' w-[350px] flex flex-col items-center ' >
                        <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 w-[130px] h-[130px] rounded-full ' >

                        </div>
                        <div className=' w-full px-5 pb-6 -mt-[70px] pt-[80px] bg-white rounded-2xl ' >
                            <p className=' text-[#12121280]  font-medium leading-[24px] ' >“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”</p>
                            <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                            <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                        </div>
                    </div>
                    <div className=' w-[350px] flex flex-col items-center ' >
                        <div style={{ filter: "drop-shadow(0px 14px 34px rgba(0, 0, 0, 0.2))"}} className=' bg-blue-600 w-[130px] h-[130px] rounded-full ' >

                        </div>
                        <div className=' w-full px-5 pb-6 -mt-[70px] pt-[80px] bg-white rounded-2xl ' >
                            <p className=' text-[#12121280]  font-medium leading-[24px] ' >“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”“Lorem ipsum dolor sit amet consectetur. Fusce sed euismod in turpis amet nulla. Interdum ut sed faucibus arcu tempus. Tellus cursus amet tellus facilisis donec magna. Suspendisse facilisi iaculis et amet malesuada enim sed.”</p>
                            <p className=' text-xl text-[#121212] font-bold mt-4 ' >Name Lastname</p>
                            <p className=' font-semibold  text-[#12121280] ' >Position @company</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
