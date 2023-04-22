import { Input } from '@chakra-ui/react'
import React from 'react'

interface Props {
    rate?: boolean
}

export default function SelectCurrency({rate}: Props) {

    const [showModal, setShowModal] = React.useState(false)


    const CurrentList =()=> {
        return(
            <>
                <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className='mt-4 z-[200] lg:z-30 bg-white w-full lg:w-[500px] mb-20 rounded-lg px-5 py-4 ' >
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
                <div className=' fixed z-[100] lg:z-10 inset-0 lg:bg-transparent lg:bg-opacity-0 bg-opacity-20 bg-black ' onClick={()=> setShowModal(false)} />
            </>
        )
    }

    return (
        <div className=' w-full relative' >
            {!rate && ( 
                <p className=' font-normal text-[#334155] mb-2 ' >Local Currency</p>
            )}
            {!rate && ( 
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
            )}

            {rate && ( 
                <div  onClick={()=> setShowModal(true)} role='button' className=' h-full w-fit ml-auto pr-2 flex justify-center items-center gap-2  ' >
                    <div className=' w-[24px] h-[24px] rounded-full bg-red-600 ' >

                    </div>
                    <p className=' font-semibold text-xs ' >NGN</p>
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.98902 6.99763C6.75578 6.99809 6.52974 6.91676 6.35014 6.76775L0.360621 1.77034C0.156761 1.60069 0.0285612 1.3569 0.00422411 1.09261C-0.020113 0.828322 0.0614062 0.565176 0.230848 0.361065C0.40029 0.156954 0.643776 0.0285965 0.90774 0.00422933C1.1717 -0.0201378 1.43452 0.0614814 1.63838 0.231132L6.98902 4.70882L12.3397 0.39105C12.4418 0.308027 12.5593 0.246028 12.6854 0.208615C12.8115 0.171203 12.9438 0.159115 13.0746 0.173047C13.2054 0.186979 13.3321 0.226656 13.4475 0.289797C13.563 0.352938 13.6648 0.438299 13.7472 0.540973C13.8386 0.643741 13.9079 0.764305 13.9506 0.895111C13.9933 1.02592 14.0086 1.16415 13.9954 1.30114C13.9823 1.43813 13.9411 1.57093 13.8743 1.69123C13.8076 1.81152 13.7167 1.91672 13.6074 2.00022L7.61792 6.82772C7.43316 6.95317 7.21173 7.013 6.98902 6.99763V6.99763Z" fill="#101828"/>
                    </svg>
                </div>
            )}
            {showModal && (
                <>
                    <div className=' w-full lg:hidden fixed z-50 inset-0  justify-center items-center h-full flex px-4 flex-col '  > 
                        <CurrentList />
                    </div> 
                    <div className=' w-full absolute z-20 hidden h-full lg:flex flex-col items-end '  > 
                        <CurrentList />
                    </div>
                </>
            )}
        </div>
    )
}
