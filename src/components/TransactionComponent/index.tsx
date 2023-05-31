import { Input, Select, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useGetDataCallback, useSortTnxCallback } from '../../action/useAction'
import { IUser, UserContext } from '../../context/userContext'
import { cashFormat } from '../../config/utils/cashFormat'
import { dateFormat } from '../../config/utils/dateFormat'
import CopyButtton from '../CopyButton'
import { useNavigate } from 'react-router-dom'

export default function TransactionComponent() {

    const [tab, setTab] = React.useState(false)
    const [show, setshow] = React.useState(-1)
    const [showModal, setShowModal] = React.useState(false)
    const [loading, setLoading] = React.useState(false)


    const { handleGetData } = useGetDataCallback()
    const { handlSortTnx } = useSortTnxCallback()
    
    const userContext: IUser = React.useContext(UserContext); 
    const [data, setData] = React.useState([] as any)
    
    const [payload, setPayload] = React.useState({} as any)
    const nav = useNavigate()

    React.useEffect(()=> { 
        const fetchData = async () => {
            setLoading(true);  
            const request: any = await handleGetData("/swap/transactions/"+userContext.userInfo?.id)  
            // userContext.setUserInformation(request?.data)
            console.log(request?.data); 
            if(userContext.userInfo?.id){ 
                let newArray: any = [...request?.data]
                newArray.reverse()
                setData(newArray) 
            }
            
            const t1 = setTimeout(() => {
                setLoading(false);  
                clearTimeout(t1);
            }, 1000);  
        }
  
        const clickHandler =async () => {   
            const request: any = await handlSortTnx(payload)   
            console.log(request); 
            if(userContext.userInfo?.id){ 
                let newArray: any = [...request?.data]
                newArray.reverse()
                setData(newArray) 
            }
        } 
        if(payload?.coin_name || payload?.trans_status || payload?.date ){
            clickHandler()
            .catch(console.error);
        } else {

            // call the function
            fetchData()

            // make sure to catch any error
            .catch(console.error);
        }
    }, [userContext.userInfo?.id, payload?.coin_name, payload?.trans_status, payload?.date])  

    const clearHandler =()=> { 
        setPayload({} as any)
        nav(0)
    }
    
    const changeHandler =(item: any, name: any)=> {        

        if(name === "Date"){
            setPayload({...payload, date: item.target.value })
        } else if(name === "Assets"){
            setPayload({...payload, coin_name: item.target.value })
        } else if(name === "Status"){
            setPayload({...payload, trans_status: item.target.value })
        }
    }

    return (
        <div className=' w-full  ' >
            <div className=' lg:grid grid-cols-auto hidden lg:grid-cols-5 gap-5 font-medium  ' >
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Type</p>
                    <Select disabled={true} fontSize="sm" backgroundColor="white" >
                        <option>Sell</option>
                    </Select>
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Date</p>
                    <Input onChange={(e)=> changeHandler(e, "Date")} value={payload?.date} fontSize="sm" backgroundColor="white" type='date' />
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Assets</p>
                    <Select placeholder='All' value={payload?.coin_name} onChange={(e)=> changeHandler(e, "Assets")} fontSize="sm" backgroundColor="white" > 
                        <option>BTC</option>
                        <option>USDT</option>
                        <option>USDT_BSC</option>
                        <option>USDT_TRON</option>
                    </Select>
                </div>
                <div className=' w-full flex flex-col justify-center relative ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Status</p>
                    <Select placeholder='All'  value={payload?.trans_status} onChange={(e)=>  changeHandler(e, "Status")} fontSize="sm" backgroundColor="white" > 
                        <option>FAILED</option>
                        <option>PENDING</option>
                        <option>SUCCESS</option> 
                    </Select>
                    {(payload?.coin_name || payload?.trans_status || payload?.date )&& (
                        <svg role='button' onClick={()=> clearHandler()} className=' absolute -right-12 top-12 ' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    )}
                </div>
            </div>

            <div className=' w-full mt-6 lg:block hidden ' >
                <TableContainer>
                    <Table variant='unstyled'> 
                        <Thead style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] font-bold bg-[#F9FAFB] text-[#000] ' >
                            <Tr> 
                                <Td>
                                    Date
                                </Td>
                                <Td>
                                    Full Name
                                </Td>
                                <Td>
                                    Type
                                </Td>
                                <Td>
                                    Asset
                                </Td>
                                <Td>
                                    Amount
                                </Td>
                                <Td>
                                    Deposit Wallet
                                </Td>
                                <Td>
                                    Txn Hash
                                </Td> 
                                <Td>
                                    Status
                                </Td> 
                                {/* <Td>
                                    Payout Status
                                </Td>  */}
                            </Tr>
                        </Thead>
                        <Tbody>
                            {!loading && (
                                <> 
                                    {data?.length > 0 && (
                                        <> 
                                            {data.map((item: any, index: number)=> {
                                                return( 
                                                    <Tr key={index} style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] bg-white text-[#202223] font-Inter-Regular border-t  ' >
                                                        <Td>{dateFormat(item?.created_at)}</Td>  
                                                        <Td>{userContext?.userInfo?.fullname}</Td>   
                                                        <Td>Deposit</Td>  
                                                        <Td>{parseFloat(item?.trans_amount ? item.trans_amount : item?.coin_amount_to_swap)} {item?.coin_name.includes("USDT") ? "USDT": "BTC"}</Td> 
                                                        <Td>{cashFormat(item?.ngn_equivalent)}</Td>  
                                                        <Td>
                                                            <CopyButtton hide={true} text={item?.coin_address} type={true} />    
                                                        </Td> 
                                                        <Td>
                                                            {item?.trans_hash && (

                                                                <CopyButtton text={item?.trans_hash} type={true} />  
                                                            )}
                                                        </Td> 
                                                        <Td>
                                                            {item?.payout_status === "Success" ? (
                                                                <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#AEE9D1] rounded-[10px] ' >
                                                                    PayOut Successful   
                                                                </div> 
                                                            ):item?.transaction_status === "FAILED" ? (
                                                                <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#FED3D1] rounded-[10px] ' >
                                                                    Cancelled    
                                                                </div> 
                                                            ): item?.transaction_status === "PENDING" ? (
                                                                <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#FED3D1] rounded-[10px] ' >
                                                                    Pending    
                                                                </div> 
                                                            ):( 
                                                                <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#AEE9D1] rounded-[10px] ' >
                                                                    Deposit Successful  
                                                                </div> 
                                                            )}   
                                                        </Td>    
                                                    </Tr>
                                                )
                                            })}
                                        </>
                                    )}
                                </>
                            )}
                        </Tbody> 
                    </Table>
                </TableContainer>
            </div>
            <div className=' w-full lg:hidden -mt-[50px] ' >
                <div className=' w-full flex justify-end items-center  ' > 
                    <svg role='buttton' onClick={()=> setShowModal(true)} width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11V17L6 19V11L0 2V0H16V2L10 11ZM2.4037 2L8 10.3944L13.5963 2H2.4037Z" fill="black"/>
                    </svg>
                </div> 
                <div className=' w-full mt-12 flex flex-col gap-4 '  >
                    {!loading && (
                        <> 
                            {data?.length > 0 && (
                                <> 
                                    {data?.map((item: any, index: number)=> {
                                        return( 
                                            <div key={index} className=' w-full flex justify-between ' >
                                                <div className=' flex gap-2 ' >
                                                    <div className=' w-[30px] h-[30px] bg-green-500 rounded-full ' >
                                                        
                                                    </div>
                                                    <div>
                                                        <p className=' font-semibold text-[#344054] ' ><span className=' text-[#F04438] ' >Sell</span> {item?.coin_name}</p>
                                                        <p className=' mt-2 text-[#98A2B3] text-xs ' >Amount: {cashFormat(item?.coin_amount_to_swap, 5)} {item?.coin_name}</p>
                                                    </div>
                                                </div>
                                                <div className=' flex flex-col ' >
                                                    <div role='button' onClick={()=> setshow(index)} className=' flex items-center justify-end gap-2 ' >
                                                        <p className={ item?.transaction_status === "FAILED" ? " text-xs text-[#F04438] font-semibold":item?.transaction_status === "PENDING" ? " text-xs text-[#F04438] font-semibold":' text-xs text-[#12B76A] font-semibold ' }>{item?.transaction_status === "FAILED" ? "Cancelled":item?.transaction_status === "PENDING" ? "Pending": "Success"}</p>
                                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.88379 6.00007C5.87814 5.80232 5.80469 5.62151 5.64648 5.47461L1.2507 1.18052C1.1264 1.05622 0.968192 0.98842 0.781738 0.98842C0.408831 0.98842 0.109375 1.28223 0.109375 1.65513C0.109375 1.83594 0.182826 2.01109 0.312779 2.14104L4.27351 5.99442L0.312779 9.8591C0.188477 9.98905 0.109375 10.1586 0.109375 10.345C0.109375 10.7179 0.408831 11.0117 0.781738 11.0117C0.968192 11.0117 1.1264 10.9439 1.2507 10.8196L5.64648 6.51988C5.80469 6.36733 5.88379 6.19782 5.88379 6.00007Z" fill="#1C1C1E"/>
                                                        </svg>
                                                    </div>
                                                    <p className=' text-sm text-[#333333] mt-2 font-medium ' >NGN {cashFormat(item?.ngn_equivalent)}</p>
                                                </div> 
                                                {show === index && (
                                                    <div className=' w-full  fixed bg-white overflow-y-auto inset-0 z-[100]  ' >
                                                        <div className=' bg-[#303179] w-full pt-9 pb-6 px-6 ' >
                                                            <svg role='button' onClick={()=> setshow(-1)}  width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.67578 13.6455C5.67578 13.9092 5.79004 14.1729 5.99219 14.3662L11.793 20.1582C12.0039 20.3604 12.2324 20.457 12.4873 20.457C13.041 20.457 13.4453 20.0615 13.4453 19.5254C13.4453 19.2441 13.3398 19.0068 13.1553 18.8311L11.1777 16.8271L8.62891 14.498L10.6768 14.6211H21.3291C21.9092 14.6211 22.3135 14.2168 22.3135 13.6455C22.3135 13.0654 21.9092 12.6611 21.3291 12.6611H10.6768L8.6377 12.7842L11.1777 10.4551L13.1553 8.45117C13.3398 8.27539 13.4453 8.03809 13.4453 7.75684C13.4453 7.2207 13.041 6.8252 12.4873 6.8252C12.2324 6.8252 11.9951 6.92188 11.7666 7.1416L5.99219 12.916C5.79004 13.1094 5.67578 13.373 5.67578 13.6455Z" fill="#F9FAFB"/>
                                                            </svg>
                                                            <div className=' w-full flex items-center text-white justify-between mt-2 ' >
                                                                <div> 
                                                                    <p className=' font-semibold text-[26px] ' >Sell order pending</p>
                                                                    <p className=' font-normal text-base ' >You successfully sold {parseFloat(item?.coin_amount_to_swap)} {item?.coin_name}</p>
                                                                </div>
                                                                {(item?.transaction_status === "FAILED" || item?.transaction_status === "PENDING") ? (
                                                                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M14.2469 1.09131L17.9658 3.80412L22.5691 3.79536L23.9832 8.17605L27.7124 10.8747L26.2816 15.2499L27.7124 19.6251L23.9832 22.3237L22.5691 26.7044L17.9658 26.6957L14.2469 29.4085L10.5279 26.6957L5.92466 26.7044L4.5105 22.3237L0.78125 19.6251L2.21207 15.2499L0.78125 10.8747L4.5105 8.17605L5.92466 3.79536L10.5279 3.80412L14.2469 1.09131Z" fill="#F04438" stroke="#F97066" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path d="M9.29297 15.2501L12.8326 18.7897L19.9119 11.7104" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M14.2469 1.09131L17.9658 3.80412L22.5691 3.79536L23.9832 8.17605L27.7124 10.8747L26.2816 15.2499L27.7124 19.6251L23.9832 22.3237L22.5691 26.7044L17.9658 26.6957L14.2469 29.4085L10.5279 26.6957L5.92466 26.7044L4.5105 22.3237L0.78125 19.6251L2.21207 15.2499L0.78125 10.8747L4.5105 8.17605L5.92466 3.79536L10.5279 3.80412L14.2469 1.09131Z" fill="#40B274" stroke="#009845" stroke-linecap="round" stroke-linejoin="round"/>
                                                                        <path d="M9.29297 15.2501L12.8326 18.7897L19.9119 11.7104" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                                                    </svg>
                                                                )} 
                                                            </div>
                                                        </div>
                                                        <div className=' w-full p-6 ' >
                                                            <p className=' text-[#344054] text-lg font-semibold ' >Transaction Details</p>
                                                            <p className=' text-[#667085] text-sm mt-1 ' >These are the details of the trade you selected</p>
                                                            <div className=' w-full flex justify-between items-center mt-9 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Date</p>
                                                                <p className=' text-[#344054] font-semibold ' >{dateFormat(item?.created_at)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Rate</p>
                                                                <p className=' text-[#344054] font-semibold ' >{cashFormat(item?.current_usdt_ngn_rate)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Asset Amount</p>
                                                                <p className=' text-[#344054] font-semibold ' >{parseFloat(item?.coin_amount_to_swap)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Cash Value</p>
                                                                <p className=' text-[#344054] font-semibold ' >{cashFormat(item?.ngn_equivalent)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Transaction ID</p>
                                                                <p className=' text-[#344054] font-semibold ' ><CopyButtton text={item?.transaction_ref} type={true} />   </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </>
                            )}
                        </>
                    )}
                </div>
            </div>

            {!loading && (
                <> 
                    {data?.length < 1 && (
                        <div className=' w-full flex justify-center pt-6 font-semibold lg:text-xl ' >
                            <p>No Record Found</p>
                        </div>
                    )}
                </>
            )}
            {loading && (
                <div className=' w-full flex justify-center pt-6 font-semibold lg:text-xl ' >
                    <p>Loading...</p>
                </div>
            )}
            {showModal && (
                <>  
                    <div className=' w-full fixed z-20 h-full px-4 inset-0 flex justify-center items-center flex-col '  >  
                        <div style={{boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)"}} className=' mt-4 z-[200] lg:w-[500px] md:w-[500px] bg-white w-full rounded-lg px-5 py-4 ' > 
                            <div className=' w-full flex items-center justify-between ' > 
                                <p className='font-bold text-lg ' >Filter</p>
                                <button onClick={()=> setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <p className=' text-[#475467] font-semibold mt-5 mb-2 ' >Status</p> 
                            <Select value={payload?.trans_status} placeholder='All' onChange={(e)=> changeHandler(e, "Status")} fontSize="sm" backgroundColor="white" > 
                                <option>FAILED</option>
                                <option>PENDING</option>
                                <option>SUCCESS</option> 
                            </Select>
                            <p className=' text-[#475467] font-semibold mt-5 ' >Date</p>
                            <div className=' flex gap-3 mt-2 items-center ' >
                                <Input onChange={(e)=> changeHandler(e, "Date")} type='date' fontSize="sm" /> 
                            </div>
                            <p className=' text-[#475467] font-semibold mt-5 mb-2 ' >Assets</p> 
                            <Select placeholder='All' value={payload?.coin_name} onChange={(e)=> changeHandler(e, "Assets")} fontSize="sm" backgroundColor="white"  >
                                <option>BTC</option>
                                <option>USDT</option>
                                <option>USDT_BSC</option>
                                <option>USDT_TRON</option>
                            </Select>
                    {(payload?.coin_name || payload?.trans_status || payload?.date )&& (

                        <button onClick={()=> clearHandler()} className=' border bg-white border-[#303179] mt-5 text-[#303179] rounded-md w-full text-sm py-3 font-bold  ' >Clear All</button>
                        // <svg role='button' onClick={()=> clearHandler()} className=' absolute -right-12 top-12 ' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        //     <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        //     <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        // </svg>
                    )}
                            <button onClick={()=> setShowModal(false)} className=' bg-[#303179] mt-8 text-[#fff] rounded-md w-full text-sm py-3 font-bold  ' >Confirm</button>
                        </div>
                        <div className=' fixed z-10 inset-0 lg:bg-transparent lg:bg-opacity-0 bg-opacity-20 bg-black ' onClick={()=> setShowModal(false)} />
                    </div>
                </>
            )}
        </div>
    )
}
