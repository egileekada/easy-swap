import { Input, Select, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useGetDataCallback } from '../../action/useAction'
import { IUser, UserContext } from '../../context/userContext'
import { cashFormat } from '../../config/utils/cashFormat'
import { dateFormat } from '../../config/utils/dateFormat'

export default function TransactionComponent() {

    const [tab, setTab] = React.useState(false)
    const [show, setshow] = React.useState(0)
    const [showModal, setShowModal] = React.useState(false)
    const [loading, setLoading] = React.useState(false)


    const { handleGetData } = useGetDataCallback()
    const userContext: IUser = React.useContext(UserContext); 
    const [data, setData] = React.useState([] as any)

    React.useEffect(()=> { 
        const fetchData = async () => {
            setLoading(true);  
            const request: any = await handleGetData("/swap/transactions/"+userContext.userInfo?.id)  
            // userContext.setUserInformation(request?.data)
            console.log(request?.data); 
            if(userContext.userInfo?.id){
                setData(request?.data) 
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
    }, [userContext.userInfo?.id]) 

    return (
        <div className=' w-full  ' >
            <div className=' lg:grid grid-cols-auto hidden lg:grid-cols-5 gap-5 font-medium  ' >
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Type</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>Deposit</option>
                    </Select>
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Date</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>This month</option>
                    </Select>
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Assets</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>All</option>
                    </Select>
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Status</p>
                    <Select fontSize="sm" backgroundColor="white" >
                        <option>All</option>
                    </Select>
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
                        </Tr>
                    </Thead>
                    <Tbody>
                        {!loading && (
                            <> 
                                {data?.length > 0 && (
                                    <> 
                                        {data?.map((item: any, index: number)=> {
                                            return( 
                                                <Tr key={index} style={{boxShadow: "inset 0px -1px 0px #E1E3E5"}} className=' text-[14px] bg-white text-[#202223] font-Inter-Regular border-t  ' >
                                                    <Td>{dateFormat(item?.created_at)}</Td>  
                                                    <Td>{userContext?.userInfo?.fullname}</Td>   
                                                    <Td>Deposit</Td>  
                                                    <Td>{item?.coin_name}</Td> 
                                                    <Td>{cashFormat(item?.ngn_equivalent)}</Td>  
                                                    <Td>{item?.coin_address?.slice(0,17)+"..."}</Td> 
                                                    <Td>
                                                        {item?.trans_hash && (
                                                            <div className=' gap-2 flex items-center ' > 
                                                                {item?.trans_hash?.slice(0,17)+"..."}
                                                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M2.71304 2.75V0.875C2.71304 0.70924 2.77601 0.550269 2.8881 0.433058C3.00019 0.315848 3.15222 0.25 3.31074 0.25H10.4831C10.6416 0.25 10.7936 0.315848 10.9057 0.433058C11.0178 0.550269 11.0808 0.70924 11.0808 0.875V9.625C11.0808 9.79076 11.0178 9.94973 10.9057 10.0669C10.7936 10.1842 10.6416 10.25 10.4831 10.25H8.68998V12.125C8.68998 12.47 8.42102 12.75 8.08811 12.75H0.924144C0.845324 12.7505 0.767188 12.7347 0.694224 12.7035C0.621261 12.6723 0.554908 12.6264 0.498979 12.5683C0.44305 12.5102 0.398647 12.4412 0.368321 12.3651C0.337994 12.289 0.322343 12.2074 0.322266 12.125L0.324059 3.375C0.324059 3.03 0.593021 2.75 0.925937 2.75H2.71304ZM1.51945 4L1.51765 11.5H7.4946V4H1.51945ZM3.90843 2.75H8.68998V9H9.88537V1.5H3.90843V2.75Z" fill="#5C5F62"/>
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </Td> 
                                                    <Td>
                                                        {item?.transaction_status === "FAILED" ? (
                                                            <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#FED3D1] rounded-[10px] ' >
                                                                Failed    
                                                            </div> 
                                                        ): item?.transaction_status === "PENDING" ? (
                                                            <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#FFFF00] rounded-[10px] ' >
                                                                Pending    
                                                            </div> 
                                                        ):( 
                                                            <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#AEE9D1] rounded-[10px] ' >
                                                                Success    
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
            <div className=' w-full lg:hidden ' >
                <div className=' w-full flex justify-between items-center  ' >
                    <div className=' flex text-sm items-center gap-3 ' >
                        <p role='button' onClick={()=> setTab(false)} className={`  ${tab ? "text-[#667085] font-normal pb-4 border-b-2 border-transparent ": " pb-4 border-b-2 border-[#303179] font-semibold text-[#344054]"} `} >Pending</p>
                        <p role='button' onClick={()=> setTab(true)} className={`  ${!tab ? "text-[#667085] font-normal pb-4 border-b-2 border-transparent ": " pb-4 border-b-2 border-[#303179] font-semibold text-[#344054]"} `} >Completed</p>  
                    </div>
                    <svg role='buttton' onClick={()=> setShowModal(true)} width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11V17L6 19V11L0 2V0H16V2L10 11ZM2.4037 2L8 10.3944L13.5963 2H2.4037Z" fill="black"/>
                    </svg>
                </div> 
                <div className=' w-full mt-12 flex flex-col gap-4 '  >
                    {!loading && (
                        <> 
                            {data?.length > 0 && (
                                <> 
                                    {data.map((item: any, index: number)=> {
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
                                                    <div className=' flex items-center gap-2 ' >
                                                        <p className={ item?.transaction_status === "FAILED" ? " text-xs text-[#F04438] font-semibold":item?.transaction_status === "PENDING" ? " text-xs text-[#FFFF00] font-semibold":' text-xs text-[#12B76A] font-semibold ' }>{ item?.transaction_status === "FAILED" ? "Failed":item?.transaction_status === "PENDING" ? "Pending": "Success"}</p>
                                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.88379 6.00007C5.87814 5.80232 5.80469 5.62151 5.64648 5.47461L1.2507 1.18052C1.1264 1.05622 0.968192 0.98842 0.781738 0.98842C0.408831 0.98842 0.109375 1.28223 0.109375 1.65513C0.109375 1.83594 0.182826 2.01109 0.312779 2.14104L4.27351 5.99442L0.312779 9.8591C0.188477 9.98905 0.109375 10.1586 0.109375 10.345C0.109375 10.7179 0.408831 11.0117 0.781738 11.0117C0.968192 11.0117 1.1264 10.9439 1.2507 10.8196L5.64648 6.51988C5.80469 6.36733 5.88379 6.19782 5.88379 6.00007Z" fill="#1C1C1E"/>
                                                        </svg>
                                                    </div>
                                                    <p className=' text-sm text-[#333333] mt-2 font-medium ' >NGN {cashFormat(item?.ngn_equivalent)}</p>
                                                </div>
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
                            <p className=' text-[#475467] font-semibold mt-5 ' >Status</p>
                            <div className=' mt-2 flex gap-4 ' >
                                <p role='button' onClick={()=> setshow(0)} className={`  ${show === 0 ?  " pb-1 border-b-2 border-[#303179] font-semibold text-[#344054]":"text-[#667085] font-normal pb-1 border-b-2 border-transparent "} `} >All</p>
                                <p role='button' onClick={()=> setshow(1)} className={`  ${show === 1 ?  " pb-1 border-b-2 border-[#303179] font-semibold text-[#344054]":"text-[#667085] font-normal pb-1 border-b-2 border-transparent "} `} >Completed</p>  
                                <p role='button' onClick={()=> setshow(2)} className={`  ${show === 2 ?  " pb-1 border-b-2 border-[#303179] font-semibold text-[#344054]":"text-[#667085] font-normal pb-1 border-b-2 border-transparent "} `} >Canceled</p>  
                            </div>
                            <p className=' text-[#475467] font-semibold mt-5 ' >Date</p>
                            <div className=' flex gap-3 mt-2 items-center ' >
                                <Input type='date' fontSize="sm" />
                                <p className=' text-[#667085] text-sm font-medium ' >to</p>
                                <Input type='date' fontSize="sm" />
                            </div>
                            <p className=' text-[#475467] font-semibold mt-5 mb-2 ' >Assets</p> 
                            <Select fontSize="sm" backgroundColor="white" >
                                <option>All</option>
                            </Select>
                            <button onClick={()=> setShowModal(false)} className=' bg-[#303179] mt-8 text-[#fff] rounded-md w-full text-sm py-3 font-bold  ' >Confirm</button>
                        </div>
                        <div className=' fixed z-10 inset-0 lg:bg-transparent lg:bg-opacity-0 bg-opacity-20 bg-black ' onClick={()=> setShowModal(false)} />
                    </div>
                </>
            )}
        </div>
    )
}
