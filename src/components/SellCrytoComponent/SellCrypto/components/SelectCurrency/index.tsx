import { Input } from '@chakra-ui/react'
import React from 'react'

export default function SelectCurrency() {

    const [showModal, setShowModal] = React.useState(false)

    return (
        <div className=' w-full relative' >
            <p className=' font-normal text-[#334155] mb-2 ' >Local Currency</p>
            <div onClick={()=> setShowModal(true)} role='button' className=' w-full rounded-lg border border-[#CBD5E1] flex items-center justify-between h-[45px] bg-[#F8FAFC] relative ' >
                <div className=' flex items-center ' >
                    <div className=' h-full z-10 flex items-center pl-3 ' >  
                        <div className=' w-[24px] h-[24px] rounded-full bg-green-800 ' >

                        </div>
                    </div>
                    <p className=' text-[#647488] font-medium ml-2 ' >NGN</p>
                </div>
                <div className=' h-full w-[45px] border-l flex justify-center items-center border-[#CBD5E1] rounded-lg ' >
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00025 7.00025C5.74425 7.00025 5.48825 6.90225 5.29325 6.70725L0.29325 1.70725C-0.09775 1.31625 -0.09775 0.68425 0.29325 0.29325C0.68425 -0.09775 1.31625 -0.09775 1.70725 0.29325L6.00025 4.58625L10.2933 0.29325C10.6842 -0.09775 11.3162 -0.09775 11.7072 0.29325C12.0982 0.68425 12.0982 1.31625 11.7072 1.70725L6.70725 6.70725C6.51225 6.90225 6.25625 7.00025 6.00025 7.00025Z" fill="#5C5F62"/>
                    </svg>
                </div>
            </div>
            {showModal && (
                <> 
                    <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className=' mt-4 z-30 bg-white absolute flex flex-col w-[500px] mb-20 rounded-lg px-5 py-4 ' >
                        <div className=' w-full flex items-center justify-between ' >
                            <p>Select Network</p>
                            <button onClick={()=> setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div className=' w-full py-6 ' > 
                            <div className=' w-full relative ' >
                                <Input height="45px" paddingLeft="60px" borderColor="#CBD5E1" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1' />
                                <div className=' h-[45px] absolute border-r border-[#CBD5E1] top-0 px-4 flex items-center ' >
                                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.9661 12.8209L10.6467 9.50149C10.5839 9.4386 10.5018 9.40579 10.4143 9.40579H10.0534C10.9147 8.40779 11.4369 7.10903 11.4369 5.68722C11.4369 2.54558 8.89137 0 5.74972 0C2.60808 0 0.0625 2.54558 0.0625 5.68722C0.0625 8.82887 2.60808 11.3744 5.74972 11.3744C7.17153 11.3744 8.47029 10.8522 9.46829 9.99092V10.3518C9.46829 10.4393 9.50384 10.5214 9.56399 10.5842L12.8834 13.9036C13.0119 14.0321 13.2197 14.0321 13.3482 13.9036L13.9661 13.2857C14.0946 13.1572 14.0946 12.9494 13.9661 12.8209ZM5.74972 10.062C3.33265 10.062 1.37494 8.10429 1.37494 5.68722C1.37494 3.27015 3.33265 1.31244 5.74972 1.31244C8.16679 1.31244 10.1245 3.27015 10.1245 5.68722C10.1245 8.10429 8.16679 10.062 5.74972 10.062Z" fill="#667085"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className=' w-full flex flex-col gap-3 overflow-y-auto max-h-64 ' >
                            <div role="button" onClick={()=> setShowModal(false)} className=' w-full flex items-center gap-3 ' >
                                <div className=' w-[40px] h-[40px] rounded-full bg-red-500 ' >

                                </div>
                                <div className='' >
                                    <p className=' text-[#333] font-semibold ' >Ghana (GHS)</p> 
                                </div>
                            </div>
                            <div role="button" onClick={()=> setShowModal(false)} className=' w-full flex items-center gap-3 ' >
                                <div className=' w-[40px] h-[40px] rounded-full bg-red-500 ' >

                                </div>
                                <div className='' >
                                    <p className=' text-[#333] font-semibold ' >Kenya (KES)</p>  
                                </div>
                            </div>
                            <div role="button" onClick={()=> setShowModal(false)} className=' w-full flex items-center gap-3 ' >
                                <div className=' w-[40px] h-[40px] rounded-full bg-red-500 ' >

                                </div>
                                <div className='' >
                                    <p className=' text-[#333] font-semibold ' >Ruwanda (RUPE)</p> 
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
