import React from 'react'
import CoinSelection from './components/CoinSelection'
import CoinNetwork from './components/CoinNetwork'
import Bank from './components/Bank'
import { Input, useToast } from '@chakra-ui/react'
import ButtonComponent from '../../ButtonComponent'
import { IUser, UserContext } from '../../../context/userContext'
import { useBankDetailCallback, useExchangeRateCallback, useSwapCoinCallback } from '../../../action/useAction'
import { cashFormat } from '../../../config/utils/cashFormat'

type props = {
    next: any
}

export default function SellCrypto({next}: props) {

    const userContext: IUser = React.useContext(UserContext); 
    const toast = useToast() 

    React.useEffect(()=> {
        userContext.setSellCrypto({} as any)
    }, [])

    const [loading, setLoading] = React.useState(false)
    const [loadingRate, setLoadingRate] = React.useState(false)
    const [loadingBank, setLoadingBank] = React.useState(false)
    const [exchangeRate, setExchangeRate] = React.useState("")
    const [accountName, setAccountName] = React.useState("")
    
    const { handleSwapCoin } = useSwapCoinCallback();
    const { handleBankDetail } = useBankDetailCallback();
    const { handleExchangeRate } = useExchangeRateCallback();
    // {
    //     "coin_name": "string",
    //     "coin_amount_to_swap": "string",
    //     "network": "string",
    //     "phone_number": "string",
    //     "bank_acc_name": "string",
    //     "bank_acc_number": "string",
    //     "bank_code": "string"
    //     } 

    React.useEffect(()=> {
        const fetchData =async()=> {
            setLoadingBank(true)
            const request = await handleBankDetail(JSON.stringify({ 
                    "account_number": userContext.sellCrypto?.bank_acc_number,
                    "bank_code": userContext.sellCrypto?.bank_code
            }))   
            setAccountName(request?.data?.account_name) 
            setLoadingBank(false)
        } 

        if(userContext.sellCrypto?.bank_acc_number?.length === 10 && userContext.sellCrypto?.bank_code){
            fetchData()
        }
    }, [userContext.sellCrypto?.bank_acc_number, userContext.sellCrypto?.bank_code])
    
    React.useEffect(()=> { 

        const exchangeRate =async()=> {
            setLoadingRate(true)
            let Str = userContext.sellCrypto?.coin_name.charAt(0).toUpperCase() + userContext.sellCrypto?.coin_name.slice(1)
            const request = await handleExchangeRate(JSON.stringify({
                    "coin_name": ( userContext.sellCrypto?.coin_name === "Bitcoin" ? Str:userContext.sellCrypto?.coin_name === "Tether" ? "USDT": "USDT_TRON"),
                    "coin_amount_to_calc": userContext.sellCrypto?.coin_amount_to_swap
                }))   
            setExchangeRate(request?.data?.total_coin_price_ngn)     
            setLoadingRate(false)        
        }

        if(userContext.sellCrypto?.coin_name && userContext.sellCrypto?.coin_amount_to_swap){
            exchangeRate()
        } 

    }, [userContext.sellCrypto?.coin_name, userContext.sellCrypto?.coin_amount_to_swap])
    

    const submit = async () => { 
        setLoading(true);
        const request = await handleSwapCoin(JSON.stringify(userContext.sellCrypto))   

        console.log(request);
        
        if (request.status === 200) {  
            toast({
                title: "Transaction Successfully",
                position: "bottom",
                status: "success",
                isClosable: true,
            })
            userContext.setTransactionDetail(request?.data)
            const t1 = setTimeout(() => {
                setLoading(false);  
                next(true)
                clearTimeout(t1);
            }, 1000);  
        }else {  
            toast({
                title: request?.data?.error?.details[0],
                position: "bottom",
                status: "error",
                isClosable: true,
            }) 
            setLoading(false)  
        } 
        setLoading(false);
    }  

    const CoinName =(item: any, net: any)=>{
        userContext.setSellCrypto({...userContext.sellCrypto, "coin_name": item, network: net})
    }

    const BankHandler =(item: any, code: any)=>{
        userContext.setSellCrypto({...userContext.sellCrypto, "bank_acc_name": item, "bank_code": code})
    } 

    const GetAmount =(item: any)=> {
        userContext.setSellCrypto({...userContext.sellCrypto, "coin_amount_to_swap": item.target.value})
    }
    
    return (
        <div className=' w-full flex flex-col items-center font-medium ' >
            <p className=' text-[#757575] font-medium text-lg ' >To swap your Crypto to Naira, select your coin to proceed.</p>
            <div className=' w-full mt-10 flex flex-col gap-4 pb-8 ' >
                <CoinSelection data={CoinName} />
                {userContext?.sellCrypto?.coin_name && ( 
                    <div className=' w-full ' > 
                        <p className=' font-normal text-[#334155] mb-2 ' >Amount of asset you want to sell</p>
                        <div className=' w-full mb-1   ' >
                            <Input onChange={GetAmount} placeholder='Enter Amount' height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                        </div>
                        <div className=' w-full flex justify-end ' >  
                            <p className=' text-xs text-[#475467] font-medium  ' >Est Price = <span className='font-semibold' >NGN</span> {loadingRate? "...": cashFormat(exchangeRate)}</p>
                        </div>
                    </div>
                )}
                {userContext?.sellCrypto?.coin_amount_to_swap && ( 
                    <> 
                        <CoinNetwork />
                        <Bank data={BankHandler} />
                    </>
                )}
                {userContext.sellCrypto?.bank_code && ( 
                    <div className=' w-full ' > 
                        <p className=' font-normal text-[#334155] mb-2 ' >Bank account number</p>
                        <div className=' w-full   ' >
                            <Input placeholder='Enter Account Number' onChange={(e)=> userContext.setSellCrypto({...userContext.sellCrypto, "bank_acc_number": e.target.value})} height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                        </div>
                        <div className=' flex gap-2 lg:gap-3 font-normal mt-2 text-[#303179] text-sm ' >
                            <div className=' w-fit mt-[1px] ' >
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="warning">
                                        <circle id="Oval" cx="8" cy="8.99316" r="8" fill="#303179"/>
                                        <g id="Group 12">
                                            <g id="Path">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.72372 6.08789V8.81516V6.08789Z" fill="#362A70"/>
                                                <path d="M7.72372 6.08789V8.81516" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <g id="Path_2">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.72359 12.2967V12.5171V12.2967Z" fill="#362A70"/>
                                                <path d="M7.72359 12.2967V12.5171" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            The name on your account must match the name provided on your BVN and Easyswap account
                        </div>
                        {loadingBank ? <p className=' mt-2 font-bold  ' >Loading</p> :
                            <> 
                                {accountName &&
                                    <p className=' mt-2 font-bold  ' >{accountName}</p>
                                }
                            </>
                        }
                    </div>
                )} 
                {userContext.sellCrypto?.bank_acc_number && ( 
                    <div className=' w-full ' > 
                        <p className=' font-normal text-[#334155] mb-2 ' >Phone number</p>
                        <div className=' w-full   ' >
                            <Input onChange={(e)=> userContext.setSellCrypto({...userContext.sellCrypto, "phone_number": e.target.value})} placeholder='Enter your phone number' height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                        </div>
                    </div>
                )}
                {(userContext.sellCrypto.phone_number+"").length > 9 && ( 
                    <ButtonComponent onClick={()=> submit()} name={loading ? "Loading...":"Initialize Payment"} bgcolor={' text-[#F1F1F1] bg-[#303179] mt-4  '} />
                )}
            </div>
        </div>
    )
}
