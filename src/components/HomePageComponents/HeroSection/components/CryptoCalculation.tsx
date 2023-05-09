import { Input } from '@chakra-ui/react'
import React from 'react'
import { useExchangeRateCallback, useGetDataCallback } from '../../../../action/useAction'
import { cashFormat } from '../../../../config/utils/cashFormat'
import { IUser, UserContext } from '../../../../context/userContext'
import { useNavigate } from 'react-router-dom'

export default function CryptoCalculation() {

    const [isShown, setIsShown] = React.useState(false) 
    const [value, setValue] = React.useState(0)
    const [loadingRate, setLoadingRate] = React.useState(false) 
    const [loading, setLoading] = React.useState(false) 
    const [exchangeRate, setExchangeRate] = React.useState("")
    const [rate, setRate] = React.useState("") 


    const { handleGetData } = useGetDataCallback() 
    
    const { handleExchangeRate } = useExchangeRateCallback();
    const navigate = useNavigate()

    const [selectCoinTicker, setSelectCoinTicker] = React.useState("BTC")
    const [selectCoin, setSelectCoin] = React.useState("Bitcoin")
    const [coinImage, setcoinImage] = React.useState('/images/Bitcoin.png')
    const [network, setNetwork] = React.useState('Bitcoin')
    const bitpowr_coin_ticker = [
        {'coin_name': 'Bitcoin', 'network': 'Bitcoin','coin_ticker': 'BTC', image: '/images/Bitcoin.png'},
        // {'coin_name': 'Ethereum', 'coin_ticker': 'ETH', image: '/images/ethereum.png'},
        {'coin_name': 'Tether', 'network': 'ERC20', 'coin_ticker': 'USDT', image: '/images/tether.webp'}, 
        {'coin_name': 'Tether Tron', 'network': 'TRON', 'coin_ticker': 'USDT_TRON', image: '/images/tether.webp'}, 
    ]

    React.useEffect(()=> { 

        const exchangeRate =async()=> {
            setLoadingRate(true)
            let Str = selectCoin.charAt(0).toUpperCase() + selectCoin.slice(1)
            const request = await handleExchangeRate(JSON.stringify({
                    "coin_name": ( selectCoin === "Bitcoin" ? selectCoin:selectCoin === "Tether" ? "USDT": "USDT_TRON"),
                    "coin_amount_to_calc": value
                }))   
            setExchangeRate(request?.data?.total_coin_price_ngn)     
            setLoadingRate(false)        
        }

        if(selectCoin && value){
            exchangeRate()
        } 

    }, [selectCoin, value])

    const userContext: IUser = React.useContext(UserContext);
    
    const modalHandler =(item: any, value: string, image:string, net: string)=> {  
        setSelectCoinTicker(value)
        setSelectCoin(item)
        setIsShown(false)
        setNetwork(net) 
        userContext.setSellCrypto({...userContext.sellCrypto, "coin_name": item, network: net})
        setcoinImage(image)
    } 

    const SubmitHandler =()=> { 
        if(userContext.userInfo?.email){
            navigate("/dashboard/sellcrypto") 
        } else { 
            navigate("/signin")
        } 
    }
    
    const handleAmount =(item: any)=> { 
        setValue(item)
        userContext.setSellCrypto({...userContext.sellCrypto, "coin_amount_to_swap": item+""})
    }

    React.useEffect(()=> { 
        const fetchData = async () => {
            setLoading(true);  
            const request: any = await handleGetData("/swap/usd-rate")   
            setRate(request?.data?.usdt_ngn_rate)

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

    console.log(userContext.sellCrypto);
    
    return (
        <div className=' w-full lg:mt-0 mt-6 lg:w-[400px] h-fit border-[1.5px] border-[#D0D5DD] rounded-lg bg-white py-9 px-6 ' >
            
            <p className=' font-bold text-[#303179] mb-4 ' >{rate && "1 USD = "+(loadingRate? "...": cashFormat(rate))+" NGN"}</p> 
            <div className=' relative w-full border border-[#94A3B8] h-[60px] mt-4 rounded-lg px-4 lg:px-[26px] flex items-center justify-between ' >
                <div className=' w-full ' >
                    <p className=' font-semibold text-[#475569] text-sm ' >Send</p>
                    <input onChange={(e)=> handleAmount(e.target.value)} type='number' className=' w-full border-0 font-medium text-lg outline-none ' placeholder="0000" />
                </div> 
                <div onClick={()=> setIsShown(true)} role='button' className=' h-full w-fit pr-2 flex justify-center items-center gap-2  ' >
                    {selectCoinTicker && (
                        <div className=' w-[24px] h-[24px] rounded-full ' >
                            <img src={coinImage} alt="coin" className=' w-full h-full  rounded-full' />
                        </div>
                    )}
                    <p className=' font-semibold text-sm ' >{selectCoinTicker ? selectCoinTicker: ""}</p>
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.98902 6.99763C6.75578 6.99809 6.52974 6.91676 6.35014 6.76775L0.360621 1.77034C0.156761 1.60069 0.0285612 1.3569 0.00422411 1.09261C-0.020113 0.828322 0.0614062 0.565176 0.230848 0.361065C0.40029 0.156954 0.643776 0.0285965 0.90774 0.00422933C1.1717 -0.0201378 1.43452 0.0614814 1.63838 0.231132L6.98902 4.70882L12.3397 0.39105C12.4418 0.308027 12.5593 0.246028 12.6854 0.208615C12.8115 0.171203 12.9438 0.159115 13.0746 0.173047C13.2054 0.186979 13.3321 0.226656 13.4475 0.289797C13.563 0.352938 13.6648 0.438299 13.7472 0.540973C13.8386 0.643741 13.9079 0.764305 13.9506 0.895111C13.9933 1.02592 14.0086 1.16415 13.9954 1.30114C13.9823 1.43813 13.9411 1.57093 13.8743 1.69123C13.8076 1.81152 13.7167 1.91672 13.6074 2.00022L7.61792 6.82772C7.43316 6.95317 7.21173 7.013 6.98902 6.99763V6.99763Z" fill="#101828"/>
                    </svg>
                </div>
                {isShown && ( 
                    <> 
                        <div style={{boxShadow: "0px 8px 20px -4px #1718181F"}} className=' w-fit bg-white right-4 z-50 absolute top-3 rounded-lg p-2 ' >
                            {bitpowr_coin_ticker.map((item: any, index: number) => {
                                return ( 
                                    <div key={index} role="button" onClick={()=> modalHandler(item?.coin_name, item?.coin_ticker, item?.image, item?.network)} className=' w-full flex py-2 items-center gap-3 ' >
                                        <div className=' w-[40px] h-[40px] rounded-full bg-white '>
                                            <img src={item?.image} alt="coin" className=' w-full h-full  rounded-full ' />
                                        </div>
                                        <div className='' >
                                            <p className=' text-[#333] font-semibold text-sm ' >{item?.coin_ticker}</p>
                                            <p className=' font-normal text-[#8994A1] text-xs ' >{item?.coin_name}</p> 
                                        </div>
                                    </div> 
                                )
                            })}
                        </div>
                        <div className=' fixed inset-0 z-20 ' onClick={()=> setIsShown(false)} />
                    </>
                )}
            </div> 
            <div className=' w-full relative border border-[#94A3B8] h-[60px] mt-4 rounded-lg px-4 lg:px-[26px] flex items-center justify-between ' >
                <div className=' w-full ' >
                    <p className=' font-semibold text-[#475569] text-sm ' >Receive</p>
                    <p className='w-full border-0 font-medium text-lg outline-none '  >{loadingRate? "...": cashFormat(exchangeRate)}</p>
                </div>
                <div className='  w-fit flex items-center font-bold gap-[10px] ' >
                    <p className=' ' >NGN</p> 
                </div>
            </div> 
            <button onClick={SubmitHandler} disabled={cashFormat(exchangeRate) === "0"? true: false} style={{boxShadow: "0px 1px 0px rgba(0, 0, 0, 0.05)"}} className={` ${cashFormat(exchangeRate) === "0" ? " bg-[#F1F1F1] text-[#667085]" : " bg-[#303179] text-[#FCFCFD] "}  font-semibold font-sembold w-full mt-6 rounded h-[45px] `} >Sell crypto in minutes</button>
        </div>
    )
}
