import { Input } from '@chakra-ui/react'
import React from 'react'
import CoinNetwork from '../SellCrypto/components/CoinNetwork'
import ButtonComponent from '../../ButtonComponent'

export default function TrackTransaction() {

    const [hash, setHash] = React.useState("")
    const [network, setNetwork] = React.useState("")

    const ChangeNetwork =(item: any)=> {
        setNetwork(item)
    }

    // console.log(network);
    
    // BSC
    // index.tsx:15 BSC
    // index.tsx:15 TRON https://tronscan.org/#/transaction/
    // index.tsx:15 TRON
    // index.tsx:15 ETHEREUM
    // index.tsx:15 ETHEREUM
    // const url = (network === "TRON" ? "https://tronscan.org/#/transaction/" :"ETHEREUM" ? "https://etherscan.io/tx/":"BSC" ?"https://bscscan.com/tx/" : "")

    return (
        <div className=' w-full flex flex-col items-center font-medium ' >
            <p className=' text-[#6B6B93] font-medium text-lg ' >Track your transaction status here</p>
            <div className=' w-full ' > 
                <div className=' w-full mt-10 flex flex-col gap-4 pb-8 ' >
                    <div className=' w-full   ' >
                        <p className=' font-normal text-[#334155] mb-2 ' >Transaction ID:</p>
                        <Input onChange={(e)=> setHash(e.target.value)} onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} height="45px" type='text' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                    </div>
                    <CoinNetwork data={ChangeNetwork} network={network} />
                    {(hash && network) ? 
                        <>
                            {network === "TRON" && 
                                <a target="_blank" href={"https://tronscan.org/#/transaction/"+hash} className={(hash && network) ? 'w-full flex items-center justify-center font-semibold text-sm rounded-md h-[50px] text-[#F1F1F1] bg-[#303179] mt-4 ' : ' bg-[#F1F1F1] w-full flex items-center justify-center font-semibold text-sm rounded-md h-[50px] text-[#667085] mt-4 '} >  
                                    Track Transaction
                                </a> 
                            }
                            {network === "ETHEREUM" && 
                                <a target="_blank" href={"https://etherscan.io/tx/"+hash} className={(hash && network) ? 'w-full flex items-center justify-center font-semibold text-sm rounded-md h-[50px] text-[#F1F1F1] bg-[#303179] mt-4 ' : ' bg-[#F1F1F1] w-full flex items-center justify-center font-semibold text-sm rounded-md h-[50px] text-[#667085] mt-4 '} >  
                                    Track Transaction
                                </a> 
                            }
                            {network === "BSC" && 
                                <a target="_blank" href={"https://bscscan.com/tx/"+hash} className={(hash && network) ? 'w-full flex items-center justify-center font-semibold text-sm rounded-md h-[50px] text-[#F1F1F1] bg-[#303179] mt-4 ' : ' bg-[#F1F1F1] w-full flex items-center justify-center font-semibold text-sm rounded-md h-[50px] text-[#667085] mt-4 '} >  
                                    Track Transaction
                                </a> 
                            }
                        </>
                        :
                            <ButtonComponent name="Track Transaction" bgcolor=' mt-4  ' /> 
                    }
                </div>
            </div>
        </div>
    )
}
