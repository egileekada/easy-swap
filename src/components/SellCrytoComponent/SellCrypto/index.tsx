import React from 'react'
import CoinSelection from './components/CoinSelection'
import CoinNetwork from './components/CoinNetwork'
import Bank from './components/Bank'
import { Input, useToast } from '@chakra-ui/react'
import ButtonComponent from '../../ButtonComponent'
import { IUser, UserContext } from '../../../context/userContext'
import { useBankDetailCallback, useExchangeRateCallback, useGetDataCallback, useSwapCoinCallback } from '../../../action/useAction'
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
    const [coinName, setcoinName] = React.useState("")
    const [accountName, setAccountName] = React.useState("")
    const [network, setNetwork] = React.useState("")
    const [value, setValue] = React.useState("")
    const [bankCode, setBankCode] = React.useState("")
    const [AcountNumber, setAcountNumber] = React.useState("")
    const [bankName, setBankName] = React.useState("")
    
    const { handleSwapCoin } = useSwapCoinCallback();
    const { handleBankDetail } = useBankDetailCallback();
    const { handleExchangeRate } = useExchangeRateCallback(); 
    const { handleGetData } = useGetDataCallback()

    React.useEffect(()=> {
        const fetchData =async()=> {
            setLoadingBank(true)
            const request = await handleBankDetail(JSON.stringify({ 
                "account_number": AcountNumber,
                "bank_code": bankCode
            }))   
            setAccountName(request?.data?.account_name) 
            setLoadingBank(false)
        } 

        if(AcountNumber?.length === 10 && bankCode){
            fetchData()
        }
    }, [AcountNumber, bankCode])

    React.useEffect(()=> { 
        const fetchData = async () => {
            setLoading(true);  
            const request: any = await handleGetData("/swap/bank-details")  
            
            console.log(request?.data);
            if(request?.data?.account_name) {
                setAccountName(request?.data?.account_name)
                // setBankCode
                setAcountNumber(request?.data?.account_number)
                setBankName(request?.data?.bank_name) 
            }

            const t1 = setTimeout(() => {
                setLoading(false);  
                clearTimeout(t1);
            }, 1000);  
        }

        // call the function
        fetchData()

        // make sure to catch any error
        .catch(console.error);;
    }, []) 
    
    React.useEffect(()=> { 

        const exchangeRate =async()=> {
            setLoadingRate(true)
            let Str = coinName.charAt(0).toUpperCase() + coinName.slice(1)
            const request = await handleExchangeRate(JSON.stringify({
                    "coin_name": ( coinName === "Bitcoin" ? Str:coinName === "Tether" ? "USDT": "USDT_TRON"),
                    "coin_amount_to_calc": value
                }))   
            setExchangeRate(request?.data?.total_coin_price_ngn)     
            setLoadingRate(false)        
        }

        if(coinName && value){
            exchangeRate()
        } 

    }, [coinName, value]) 

    const submit = async () => { 
        setLoading(true);
        const request = await handleSwapCoin(JSON.stringify({
            "coin_amount_to_swap":value,
            "bank_acc_name": bankName,
            "bank_code": userContext.sellCrypto.bank_code,
            "bank_acc_number": AcountNumber,
            "phone_number": userContext.sellCrypto.phone_number,
            "coin_name": (coinName === "Bitcoin" ? "Bitcoin":network === "BSC" ? "USDT_BSC":network === "TRON" ? "USDT_TRON": "USDT"),
            "network": network
        }))   
        
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
                title: (request?.data?.error?.details[0] ? request?.data?.error?.details[0] : "Error Occured"),
                position: "bottom",
                status: "error",
                isClosable: true,
            }) 
            setLoading(false)  
        } 
        setLoading(false);
    }  

    const CoinName =(item: any, net: any, val?:any)=>{
        userContext.setSellCrypto({...userContext.sellCrypto, "coin_name": item, network: net})
        setcoinName(item)
        setNetwork(net)
        if(val > -1){
            setValue(val)

            console.log(val);
            userContext.setSellCrypto({...userContext.sellCrypto, "coin_amount_to_swap": val})
        }
    }

    const BankHandler =(item: any, code: any)=>{
        userContext.setSellCrypto({...userContext.sellCrypto, "bank_acc_name": item, "bank_code": code}) 
        setBankName(item)
        setBankCode(code)
    } 

    const GetAmount =(item: any)=> {
        setValue(item.target.value)
        userContext.setSellCrypto({...userContext.sellCrypto, "coin_amount_to_swap": item.target.value})
    } 

    const ChangeNetwork =(item: any)=> {
        setNetwork(item)
    }

    const ChangeAccountNumber =(item: any)=> {
        userContext.setSellCrypto({...userContext.sellCrypto, "bank_acc_number": item})
        setAcountNumber(item)
    }

    const ChangePhoneNumber= (item: any)=> {
        userContext.setSellCrypto({...userContext.sellCrypto, "phone_number":item})
    }

    const ChangeBankCode =(item: any)=> {
        setBankCode(item)
        userContext.setSellCrypto({...userContext.sellCrypto, "bank_code": item})
    }    

    return (
        <div className=' w-full flex flex-col items-center font-medium ' >
            <p className=' text-[#757575] font-medium text-lg ' >To swap your Crypto to Naira, select your coin to proceed.</p>
            <div className=' w-full mt-10 flex flex-col gap-4 pb-8 ' >
                <CoinSelection data={CoinName} />
                {coinName && ( 
                    <div className=' w-full ' > 
                        <p className=' font-normal text-[#334155] mb-2 ' >Amount of asset you want to sell</p>
                        <div className=' w-full mb-1   ' >
                            <Input onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} value={value} onChange={GetAmount} placeholder='Enter Amount' height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
                        </div>
                        <div className=' w-full flex justify-end ' >  
                            <p className=' text-xs text-[#475467] font-medium  ' >Est Price = <span className='font-semibold' >NGN</span> {loadingRate? "...": cashFormat(exchangeRate)}</p>
                        </div>
                    </div>
                )}
                {userContext?.sellCrypto?.coin_amount_to_swap && ( 
                    <> 
                        <CoinNetwork data={ChangeNetwork} network={network} />
                        <Bank data={BankHandler} holder={bankName} code={ChangeBankCode} />
                    </>
                )}
                {userContext?.sellCrypto?.coin_amount_to_swap && (bankCode || accountName) && ( 
                    <div className=' w-full ' > 
                        <p className=' font-normal text-[#334155] mb-2 ' >Bank account number</p>
                        <div className=' w-full   ' >
                            <Input value={AcountNumber} onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })} placeholder='Enter Account Number' onChange={(e)=> ChangeAccountNumber(e.target.value)} height="45px" type='number' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
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
                {userContext?.sellCrypto?.coin_amount_to_swap && AcountNumber && ( 
                    <div className=' w-full ' > 
                        <p className=' font-normal text-[#334155] mb-2 ' >Phone number</p>
                        <div className=' w-full   ' >
                            <Input onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}  onChange={(e)=> ChangePhoneNumber(e.target.value)} placeholder='Enter your phone number' height="45px" type='tel' fontSize="sm" borderColor="#CBD5E1" backgroundColor="#F8FAFC" borderWidth="1px" borderRadius="4px" outline="none" focusBorderColor='#CBD5E1'  />
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
