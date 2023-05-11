import { Input } from '@chakra-ui/react'
import React from 'react'
import { IUser, UserContext } from '../../../../../context/userContext' 

interface Props {
    rate?: boolean,
    data?: any,
    network?: any
}

export default function CoinSelection({rate, data, network}: Props) {

    const [showModal, setShowModal] = React.useState(false)
    const [selectCoin, setSelectCoin] = React.useState("Tether")
    const [amount, setAmount] = React.useState("")
    const [selectedNetwork, setSelectedNetwork] = React.useState("ERC20")
    const [selectCoinTicker, setSelectCoinTicker] = React.useState("USDT")
    const userContext: IUser = React.useContext(UserContext); 
    const [coinImage, setcoinImage] = React.useState('/images/tether.webp')
    const bitpowr_coin_ticker = [
        {'coin_name': 'Bitcoin', 'network': 'Bitcoin','coin_ticker': 'BTC', image: '/images/Bitcoin.png'},
        // {'coin_name': 'Ethereum', 'coin_ticker': 'ETH', image: '/images/ethereum.png'},
        {'coin_name': 'Tether', 'network': 'ERC20', 'coin_ticker': 'USDT', image: '/images/tether.webp'}, 
        // {'coin_name': 'Tether Tron', 'network': 'TRON', 'coin_ticker': 'USDT_TRON', image: '/images/tether.webp'}, 
    ]

    const clickHandler =(item: any, value: string, image:string, net:string)=> { 
        data(item, net) 
        setSelectCoinTicker(value)
        setSelectCoin(item)
        setShowModal(false)
        setcoinImage(image)
    }

    const CoinList =()=> {

        return(
            <>
                <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className=' mt-4 z-[200] bg-white w-full lg:w-[500px] mb-20 rounded-lg px-5 py-4 ' > 
                    <div className=' w-full flex items-center justify-between ' >
                        <p className='font-bold text-lg ' >Select Coin</p>
                        <button onClick={()=> setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div> 
                    <div className=' w-full flex flex-col gap-3 pt-6 overflow-y-auto max-h-64 ' >
                        {bitpowr_coin_ticker.map((item: any, index: number) => {
                            return ( 
                                    <div key={index} role="button" onClick={()=> clickHandler(item?.coin_name, item?.coin_ticker, item?.image, item?.network)} className=' w-full flex items-center gap-3 ' >
                                        <div className=' w-[40px] h-[40px] rounded-full bg-white '>
                                            <img src={item?.image} alt="coin" className=' w-full h-full  rounded-full ' />
                                        </div>
                                        <div className='' >
                                            <p className=' text-[#333] font-semibold ' >{item?.coin_ticker}</p>
                                            <p className=' font-normal mt-1 text-[#8994A1] text-sm ' >{item?.coin_name}</p> 
                                        </div>
                                    </div> 
                            )
                        })}
                    </div>
                </div>
                <div className=' fixed z-[100] inset-0 bg-opacity-20 bg-black ' onClick={()=> setShowModal(false)} />
            </>
        )
    }
 
    React.useEffect(()=>{
        if(userContext.sellCrypto?.coin_name){
            // data(userContext.sellCrypto.coin_name, userContext.sellCrypto?.network)
            setSelectedNetwork(userContext.sellCrypto?.network)
            setSelectCoin(userContext.sellCrypto.coin_name) 
        }

        if(userContext.sellCrypto?.coin_amount_to_swap){
            setAmount(userContext.sellCrypto?.coin_amount_to_swap)
        }
    }, [userContext.sellCrypto?.coin_name])
  
 
    React.useEffect(()=>{  
        data(selectCoin, selectedNetwork, amount)   
        
    }, [selectedNetwork, selectCoin, amount])   

    return (
        <div className=' w-full lg:relative' >
            {!rate && ( 
                <p className=' font-normal text-[#334155] mb-2 ' >Which coin do you wish to sell?</p>
            )}
            <div onClick={()=> setShowModal(true)} role='button' className={rate ? ' w-fit ml-auto relative ': ' w-full rounded-lg border border-[#CBD5E1] flex items-center justify-between h-[45px] bg-[#F8FAFC] relative '} >
                {!rate && (
                    <div className=' flex items-center ' >
                        <div className=' h-full lg:z-10 flex items-center pl-3 ' > 
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.997 9.12042e-07C13.827 -0.000872552 15.602 0.625667 17.0259 1.77513C18.4498 2.92458 19.4366 4.52748 19.8217 6.31647C20.2068 8.10546 19.9669 9.97241 19.1421 11.6059C18.3172 13.2395 16.9573 14.5408 15.289 15.293C14.7558 16.4719 13.9446 17.5039 12.9249 18.3004C11.9052 19.097 10.7076 19.6343 9.43467 19.8663C8.16174 20.0984 6.85153 20.0182 5.6164 19.6327C4.38127 19.2472 3.25807 18.5678 2.34315 17.6529C1.42822 16.738 0.748867 15.6148 0.363349 14.3796C-0.0221685 13.1445 -0.102346 11.8343 0.129694 10.5614C0.361733 9.28844 0.899065 8.0908 1.69561 7.07114C2.49215 6.05148 3.52412 5.24024 4.70303 4.707C5.33718 3.30389 6.36262 2.1135 7.65638 1.27861C8.95014 0.443714 10.4573 -0.000237065 11.997 9.12042e-07ZM7.99703 6C7.2091 6 6.42889 6.1552 5.70093 6.45672C4.97298 6.75825 4.31154 7.20021 3.75439 7.75736C3.19724 8.31451 2.75529 8.97595 2.45376 9.7039C2.15223 10.4319 1.99703 11.2121 1.99703 12C1.99703 12.7879 2.15223 13.5681 2.45376 14.2961C2.75529 15.0241 3.19724 15.6855 3.75439 16.2426C4.31154 16.7998 4.97298 17.2417 5.70093 17.5433C6.42889 17.8448 7.2091 18 7.99703 18C9.58833 18 11.1145 17.3679 12.2397 16.2426C13.3649 15.1174 13.997 13.5913 13.997 12C13.997 10.4087 13.3649 8.88258 12.2397 7.75736C11.1145 6.63214 9.58833 6 7.99703 6ZM8.99703 7V8H10.997V10H6.99703C6.87209 9.99977 6.75158 10.0463 6.65925 10.1305C6.56692 10.2147 6.50945 10.3304 6.49816 10.4548C6.48687 10.5793 6.52258 10.7034 6.59825 10.8028C6.67393 10.9023 6.78409 10.9697 6.90703 10.992L6.99703 11H8.99703C9.66008 11 10.296 11.2634 10.7648 11.7322C11.2336 12.2011 11.497 12.837 11.497 13.5C11.497 14.163 11.2336 14.7989 10.7648 15.2678C10.296 15.7366 9.66008 16 8.99703 16V17H6.99703V16H4.99703V14H8.99703C9.12198 14.0002 9.24248 13.9537 9.33482 13.8695C9.42715 13.7853 9.48462 13.6696 9.49591 13.5452C9.5072 13.4207 9.47149 13.2966 9.39581 13.1972C9.32014 13.0977 9.20998 13.0303 9.08703 13.008L8.99703 13H6.99703C6.33399 13 5.69811 12.7366 5.22927 12.2678C4.76043 11.7989 4.49703 11.163 4.49703 10.5C4.49703 9.83696 4.76043 9.20107 5.22927 8.73223C5.69811 8.26339 6.33399 8 6.99703 8V7H8.99703ZM11.997 2C11.1497 1.99901 10.3119 2.17794 9.53886 2.52496C8.76586 2.87198 8.07536 3.37918 7.51303 4.013C8.6433 3.94439 9.77525 4.1165 10.834 4.51795C11.8928 4.9194 12.8543 5.54105 13.655 6.34178C14.4556 7.14252 15.0772 8.1041 15.4785 9.16293C15.8798 10.2218 16.0518 11.3537 15.983 12.484C16.8922 11.6756 17.5342 10.6099 17.8239 9.42831C18.1135 8.24668 18.037 7.00492 17.6047 5.86772C17.1723 4.73053 16.4045 3.75164 15.403 3.06088C14.4015 2.37013 13.2136 2.00014 11.997 2Z" fill="#647488"/>
                            </svg>
                        </div>
                        <p className={selectCoin ? ' text-[#000] font-medium ml-2 ': ' text-[#647488] font-medium ml-2 '} >{selectCoin ? selectCoin: "Select a coin to proceed"}</p>
                    </div>
                )}
                <div className=' h-full w-fit pr-2 flex justify-center items-center gap-2  ' >

                    {selectCoinTicker && (
                        <> 
                            {bitpowr_coin_ticker?.map((item: any)=> {
                                if(item?.coin_name === selectCoin){
                                    return( 
                                        <div className=' w-[24px] h-[24px] rounded-full ' >
                                            <img src={item?.image} alt="coin" className=' w-full h-full  rounded-full' />
                                        </div>
                                    )
                                }
                            })}
                        </>
                    )}
                    {/* {selectCoinTicker && (
                        <div className=' w-[24px] h-[24px] rounded-full ' >
                            <img src={coinImage} alt="coin" className=' w-full h-full  rounded-full' />
                        </div>
                    )} */}

                    {bitpowr_coin_ticker?.map((item: any)=> {
                        if(item?.coin_name === selectCoin){
                            return( 
                                <p className=' font-semibold text-xs ' >{item?.coin_ticker}</p>
                            )
                        }
                    })}
                    {/* <p className=' font-semibold text-xs ' >{selectCoin === "Bitcoin" ? selectCoinTicker : ""}</p> */}
                    <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.98902 6.99763C6.75578 6.99809 6.52974 6.91676 6.35014 6.76775L0.360621 1.77034C0.156761 1.60069 0.0285612 1.3569 0.00422411 1.09261C-0.020113 0.828322 0.0614062 0.565176 0.230848 0.361065C0.40029 0.156954 0.643776 0.0285965 0.90774 0.00422933C1.1717 -0.0201378 1.43452 0.0614814 1.63838 0.231132L6.98902 4.70882L12.3397 0.39105C12.4418 0.308027 12.5593 0.246028 12.6854 0.208615C12.8115 0.171203 12.9438 0.159115 13.0746 0.173047C13.2054 0.186979 13.3321 0.226656 13.4475 0.289797C13.563 0.352938 13.6648 0.438299 13.7472 0.540973C13.8386 0.643741 13.9079 0.764305 13.9506 0.895111C13.9933 1.02592 14.0086 1.16415 13.9954 1.30114C13.9823 1.43813 13.9411 1.57093 13.8743 1.69123C13.8076 1.81152 13.7167 1.91672 13.6074 2.00022L7.61792 6.82772C7.43316 6.95317 7.21173 7.013 6.98902 6.99763V6.99763Z" fill="#101828"/>
                    </svg>
                </div>
            </div>
            {showModal && (
                <> 
                    <div className=' w-full fixed z-50 inset-0  justify-center items-center h-full flex px-4 flex-col '  > 
                        <CoinList />
                    </div> 
                    {/* <div className=' w-full absolute z-20 hidden h-full lg:flex flex-col items-end '  > 
                        <CoinList />
                    </div> */}
                </>
            )}
        </div>
    )
}
