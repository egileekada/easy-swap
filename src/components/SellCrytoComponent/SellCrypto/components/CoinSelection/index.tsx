// import { Input } from '@chakra-ui/react'
import React from 'react' 
import buycrypto from '../../../../../global-state/buycrypto'

interface Props {
    rate?: boolean,
    data?: any,
    network?: any
}

export default function CoinSelection({rate, data}: Props) {

    // global State 
    const selldata: any = buycrypto((state) => state.crypto)
    const updateCrypto: any = buycrypto((state) => state.updateCrypto)
    

    const [showModal, setShowModal] = React.useState(false)
    const [selectCoin, setSelectCoin] = React.useState("Tether")
    const [amount, setAmount] = React.useState("")
    const [selectedNetwork, setSelectedNetwork] = React.useState("ERC20")
    const [selectCoinTicker, setSelectCoinTicker] = React.useState("USDT")
    
    // const [coinImage, setcoinImage] = React.useState('/images/tether.webp')
    const bitpowr_coin_ticker = [
        {'coin_name': 'Bitcoin', 'network': 'Bitcoin','coin_ticker': 'BTC', image: '/images/Bitcoin.png'},
        // {'coin_name': 'Ethereum', 'coin_ticker': 'ETH', image: '/images/ethereum.png'},
        {'coin_name': 'Tether', 'network': 'ERC20', 'coin_ticker': 'USDT', image: '/images/tether.webp'},  
    ]

    const clickHandler =(item: any, value: string, net:string)=> { 
        data(item, net) 
        setSelectCoinTicker(value)
        setSelectCoin(item)
        setShowModal(false)

        updateCrypto({ ...selldata, "coin_name": item, network: net })
        // setcoinImage(image)
    }

    React.useEffect(()=>{
        if(selldata?.coin_name){
            
            data(selldata.coin_name, selldata?.network)
            setSelectedNetwork(selldata?.network)
            setSelectCoin(selldata.coin_name) 

            updateCrypto({ ...selldata, "coin_name": selldata.coin_name, network: selldata?.network })
        }else { 
            updateCrypto({ ...selldata, "coin_name": selectCoin, network: selectedNetwork})
        }

        if(selldata?.coin_amount_to_swap){
            setAmount(selldata?.coin_amount_to_swap)
        }
    }, []) 
  
 
    React.useEffect(()=>{  
        data(selectCoin, selectedNetwork, amount)   
        
    }, [selectedNetwork, selectCoin, amount])   

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
                        <div className=' py-[10px] w-full px-[10px] mb-5 gap-[8px] bg-[#F7F8FF] flex' >
                            <div className=' w-fit ' > 
                                <svg className=' w-[14px] mt-[3px] ' viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="warning">
                                        <circle id="Oval" cx="55.9932" cy="56.0068" r="55.9932" fill="#303179"/>
                                        <g id="Group 12">
                                            <g id="Path">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7529 29.8733V61.5716V29.8733Z" fill="#98A2B3"/>
                                                <path d="M55.7529 29.8733V61.5716" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                            <g id="Path_2">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M55.9164 79.4068V80.9493V79.4068Z" fill="#98A2B3"/>
                                                <path d="M55.9164 79.4068V80.9493" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <p className=' text-sm font-normal text-black leading-[20px] ' >Please note that only supported networks on Ezyswap platform are shown, if you deposit via another network, your assets may be lost.</p>
                        </div>
                        {bitpowr_coin_ticker.map((item: any, index: number) => {
                            return ( 
                                <div key={index} role="button" onClick={()=> clickHandler(item?.coin_name, item?.coin_ticker, item?.network)} className=' w-full flex items-center gap-3 ' >
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

    return (
        <div className=' w-full lg:relative' >
            {!rate && ( 
                <p className=' font-normal text-[#334155] mb-2 ' >Which coin do you wish to sell?</p>
            )}
            <div onClick={()=> setShowModal(true)} role='button' className={rate ? ' w-fit ml-auto relative ': ' w-full rounded-lg border border-[#CBD5E1] flex items-center justify-between h-[45px] bg-[#F8FAFC] relative '} >
                {!rate && (
                    <div className=' flex items-center pl-2 ' > 
                        <p className={selectCoin ? ' text-[#000] font-medium ml-2 ': ' text-[#647488] font-medium ml-2 '} >{selectCoin ? selectCoin: "Select a coin to proceed"}</p>
                    </div>
                )}
                <div className=' h-full w-fit pr-2 flex justify-center items-center gap-2  ' >

                    {selectCoinTicker && (
                        <> 
                            {bitpowr_coin_ticker?.map((item: any)=> {
                                if(item?.coin_name === selectCoin){
                                    return( 
                                        <div key={item?.image} className=' w-[24px] h-[24px] rounded-full ' >
                                            <img src={item?.image} alt="coin" className=' w-full h-full  rounded-full' />
                                        </div>
                                    )
                                }
                            })}
                        </>
                    )} 

                    {bitpowr_coin_ticker?.map((item: any)=> {
                        if(item?.coin_name === selectCoin){
                            return( 
                                <p  key={item?.image} className=' font-semibold text-xs ' >{item?.coin_ticker}</p>
                            )
                        }
                    })} 
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
                </>
            )}
        </div>
    )
} 