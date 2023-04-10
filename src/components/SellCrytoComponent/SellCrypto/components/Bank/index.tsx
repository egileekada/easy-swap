import { Input } from '@chakra-ui/react'
import React from 'react'

export default function CoinSelection() {

    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className=' w-full relative' >
            <p className=' font-normal text-[#334155] mb-2 ' >Select Bank</p>
            <div onClick={()=> setShowModal(true)} role='button' className=' w-full rounded-lg border border-[#CBD5E1] flex items-center justify-between h-[45px] bg-[#F8FAFC] relative ' >
                <div className=' flex items-center ' >
                    <div className=' h-full z-10 flex items-center px-3 ' > 
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.4453 0.16795C6.7812 -0.0559832 7.21881 -0.0559832 7.55471 0.16795L13.5547 4.16795C13.804 4.33413 13.9656 4.60333 13.9951 4.90146C14.0247 5.1996 13.919 5.49526 13.7071 5.70711L13 6.41421V11.0004C13.5845 11.2223 14 11.7876 14 12.45C14 13.306 13.306 14 12.45 14H1.55C0.693958 14 0 13.306 0 12.45C0 11.7876 0.415462 11.2223 1.00001 11.0004V6.41421L0.292899 5.70711C0.0810543 5.49526 -0.024649 5.1996 0.00487213 4.90146C0.0343934 4.60333 0.196029 4.33413 0.445305 4.16795L6.4453 0.16795ZM9 6C9.55228 6 10 6.44772 10 7V10C10 10.5523 9.55228 11 9 11C8.44771 11 8 10.5523 8 10V7C8 6.44772 8.44771 6 9 6ZM6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7V10C4 10.5523 4.44772 11 5 11C5.55228 11 6 10.5523 6 10V7Z" fill="#647488"/>
                        </svg>
                    </div>
                    <p className=' text-[#647488] font-medium ml-2 ' >Select Bank</p>
                </div>
                <div className=' h-full w-[45px] border-l flex justify-center items-center border-[#CBD5E1] rounded-lg ' >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00025 7.00025C5.74425 7.00025 5.48825 6.90225 5.29325 6.70725L0.29325 1.70725C-0.09775 1.31625 -0.09775 0.68425 0.29325 0.29325C0.68425 -0.09775 1.31625 -0.09775 1.70725 0.29325L6.00025 4.58625L10.2933 0.29325C10.6842 -0.09775 11.3162 -0.09775 11.7072 0.29325C12.0982 0.68425 12.0982 1.31625 11.7072 1.70725L6.70725 6.70725C6.51225 6.90225 6.25625 7.00025 6.00025 7.00025Z" fill="#5C5F62"/>
                    </svg>
                </div>
            </div>
            {showModal && (
                <> 
                    <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className=' mt-4 z-20 bg-white absolute flex flex-col w-full lg:w-[500px] mb-20 rounded-lg px-5 py-4 ' >
                        <div className=' w-full flex items-center justify-between ' >
                            <p>Select Network</p>
                            <button onClick={()=> setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div> 
                        <div className=' w-full flex font-medium pt-6 flex-col gap-3 overflow-y-auto max-h-64 ' >
                            <div role="button" onClick={()=> setShowModal(false)} className=' w-full flex items-center gap-3 ' >
                                <div className=' w-[40px] h-[40px] rounded-full bg-red-500 ' >

                                </div>
                                <div className='' >
                                    <p className=' text-[#8994A1] ' >9 Payment Solutions</p> 
                                </div>
                            </div>
                            <div role="button" onClick={()=> setShowModal(false)} className=' w-full flex items-center gap-3 ' >
                                <div className=' w-[40px] h-[40px] rounded-full bg-red-500 ' >

                                </div>
                                <div className='' >
                                    <p className=' text-[#8994A1] ' >AB Microfinance Bank</p> 
                                </div>
                            </div>
                            <div role="button" onClick={()=> setShowModal(false)} className=' w-full flex items-center gap-3 ' >
                                <div className=' w-[40px] h-[40px] rounded-full bg-red-500 ' >

                                </div>
                                <div className='' >
                                    <p className=' text-[#8994A1] ' >Abbey Mortgage Bank</p> 
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className=' fixed z-10 inset-0 ' onClick={()=> setShowModal(false)} />
                </>
            )}
        </div>
    )
}
