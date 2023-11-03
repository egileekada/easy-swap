import { Input, Select, Table, TableContainer, Tbody, Td, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { useGetDataCallback, useSortTnxCallback } from '../../action/useAction'
import { cashFormat } from '../../config/utils/cashFormat'
import { dateFormat } from '../../config/utils/dateFormat'
import CopyButtton from '../CopyButton'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../ButtonComponent'
import userdata from '../../global-state/userdata'
import transactiondetail from '../../global-state/transactiondetail'

export default function TransactionComponent() {

    // global state
    const userinfo: any = userdata((state) => state.user)
    const setTnxData = transactiondetail((state) => state.setTnxData)

    const [show, setshow] = React.useState(-1)
    const [showModal, setShowModal] = React.useState(false)
    const [showModalTnx, setShowModalTnx] = React.useState(false)
    const [loading, setLoading] = React.useState(false)


    const { handleGetData } = useGetDataCallback()
    const { handlSortTnx } = useSortTnxCallback()

    const navigate = useNavigate()

    const [data, setData] = React.useState([] as any)

    const [payload, setPayload] = React.useState({} as any)
    const [startendDate, setstartendDate] = React.useState(["YYYY-MM-DD"] as any)
    const nav = useNavigate()

    React.useEffect(() => {

        const fetchData = async () => {
            setLoading(true);
            const request: any = await handleGetData("/swap/transactions")
            setData(request?.data)

            const t1 = setTimeout(() => {
                setLoading(false);
                clearTimeout(t1);
            }, 1000);
        }

        const clickHandler = async () => {
            const request: any = await handlSortTnx(payload) 
            setData(request?.data)
        }

        const clickHandlerDate = async () => {
            const request: any = await handlSortTnx(payload)

            setData(request?.data)
        }

        if (payload?.coin_name || payload?.trans_status || payload?.date) {
            clickHandler()
                .catch(console.error);
        } else if (payload?.coin_name || payload?.trans_status || payload?.date) {
            clickHandlerDate()
                .catch(console.error);
        } else {

            // call the function
            fetchData()

                // make sure to catch any error
                .catch(console.error);
        }
    }, [userinfo?.id, payload?.coin_name, payload?.trans_status, payload?.date])



    const clickHandlerDate = async () => {
        setShowModalTnx(false)
        setShowModal(false)
        const request: any = await handlSortTnx(
            { start_date_end_date: startendDate }
        )

        if (request?.status === 200 || request?.status === 201) {
            setData(request?.data)
        } else {
            setData([])
        }

    }

    const clearHandler = () => {
        setPayload({} as any)
        nav(0)
    }

    const changeHandler = (item: any, name: any, index?: any) => {

        let newArr = [...startendDate]
        if (name === "Date") {
            setPayload({ ...payload, date: item.target.value })
        } else if (name === "Range") {

            newArr[index] = item
            setstartendDate(newArr)
        } else if (name === "Assets") {
            setPayload({ ...payload, coin_name: item.target.value })
        } else if (name === "Status") {
            setPayload({ ...payload, trans_status: item.target.value })
        }
    }

    const infoHandler = (item: any) => {
        setTnxData(item)
        navigate("/dashboard/tnxinfo")
    } 

    return (
        <div className=' w-full  ' >
            <div className=' lg:grid grid-cols-auto hidden lg:grid-cols-5 gap-5 font-medium  ' >
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Type</p>
                    <Input placeholder='Sell' disabled={true} fontSize="sm" backgroundColor="white" />
                </div>
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >{startendDate[0] !== "YYYY-MM-DD" ? "Start Date" : "Date"}</p>
                    <div className=' w-full flex items-center ' >
                        <div role='button' onClick={() => setShowModalTnx(true)} className=' w-full h-[40px] rounded-md border bg-white flex items-center px-4 text-sm ' >
                            {startendDate[0] !== "YYYY-MM-DD" ? startendDate[0] : "YYYY-MM-DD"}
                        </div>
                    </div>
                </div>
                {startendDate[1] && (
                    <div className=' w-full ' >
                        <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >End Date</p>
                        <div className=' w-full flex items-center ' >
                            <div role='button' onClick={() => setShowModalTnx(true)} className=' w-full h-[40px] rounded-md border bg-white flex items-center px-4 text-sm ' >
                                {startendDate[1] ? startendDate[1] : "YYYY-MM-DD"}
                            </div>
                            {startendDate[0] !== "YYYY-MM-DD" && (
                                <svg role='button' className=' ml-2  ' onClick={() => setstartendDate(["YYYY-MM-DD"])} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            )}
                        </div>
                    </div>
                )}
                <div className=' w-full ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Assets</p>
                    <Select placeholder='All' value={payload?.coin_name} onChange={(e) => changeHandler(e, "Assets")} fontSize="sm" backgroundColor="white" >
                        <option>BTC</option>
                        <option value={"USDT"} >USDT(ERC-20)</option>
                        <option value={"USDT_BSC"} >USDT(BEP- 20)</option>
                        <option value={"USDT_TRON"}>USDT(TRC- 20)</option>
                    </Select>
                </div>
                <div className=' w-full flex flex-col justify-center relative ' >
                    <p className=' text-[#647488] lg:text-base text-sm font-normal mb-2 ' >Status</p>
                    <Select placeholder='All' value={payload?.trans_status} onChange={(e) => changeHandler(e, "Status")} fontSize="sm" backgroundColor="white" >
                        <option value={"FAILED"} >CANCELLED</option>
                        <option>PENDING</option>
                        <option>SUCCESS</option>
                    </Select>
                    {(payload?.coin_name || payload?.trans_status || payload?.date) && (
                        <svg role='button' onClick={() => clearHandler()} className=' absolute -right-12 top-12 ' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    )}
                </div>
            </div>

            <div className=' w-full mt-6 lg:block hidden ' >
                <TableContainer>
                    <Table variant='unstyled'>
                        <Thead style={{ boxShadow: "inset 0px -1px 0px #E1E3E5" }} className=' text-[14px] font-bold bg-[#F9FAFB] text-[#000] ' >
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
                                            {data.map((item: any, index: number) => {
                                                return (
                                                    <Tr key={index} style={{ boxShadow: "inset 0px -1px 0px #E1E3E5" }} className=' text-[14px] bg-white text-[#202223] font-Inter-Regular border-t  ' >
                                                        <Td className=' cursor-pointer ' onClick={() => infoHandler(item)}  >{dateFormat(item?.updated_at)}</Td>
                                                        <Td className=' cursor-pointer ' onClick={() => infoHandler(item)} >{userinfo?.fullname}</Td>
                                                        <Td className=' cursor-pointer ' onClick={() => infoHandler(item)} >Deposit</Td>
                                                        <Td className=' cursor-pointer ' onClick={() => infoHandler(item)} >{parseFloat(item?.trans_amount ? item.trans_amount : item?.coin_amount_to_swap)} {item?.coin_name?.includes("USDT") ? "USDT" : "BTC"}</Td>
                                                        <Td className=' cursor-pointer ' onClick={() => infoHandler(item)} >{cashFormat(item?.trans_amount_ngn ? item?.trans_amount_ngn : item?.ngn_equivalent)}</Td>
                                                        <Td>
                                                            <CopyButtton text={item?.coin_address} type={true} />
                                                        </Td>
                                                        <Td>
                                                            {item?.trans_hash && ( 
                                                                <CopyButtton text={item?.trans_hash} type={true} />
                                                            )}
                                                        </Td>
                                                        <Td className=' cursor-pointer ' onClick={() => infoHandler(item)}  >
                                                            {item?.payout_status === "SUCCESS" ? (
                                                                <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#AEE9D1] rounded-[10px] ' >
                                                                    PayOut Successful
                                                                </div>
                                                            ) : item?.transaction_status === "FAILED" ? (
                                                                <div className=' font-semibold text-sm py-2 px-4 w-fit bg-[#FED3D1] rounded-[10px] ' >
                                                                    Cancelled
                                                                </div>
                                                            ) : item?.transaction_status === "PENDING" ? (
                                                                <div role='button' className=' font-semibold text-sm py-2 px-4 w-fit bg-[#F7CB73] rounded-[10px] ' >
                                                                    Pending
                                                                </div>
                                                            ) : (
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
                    <svg role='buttton' onClick={() => setShowModal(true)} width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11V17L6 19V11L0 2V0H16V2L10 11ZM2.4037 2L8 10.3944L13.5963 2H2.4037Z" fill="black" />
                    </svg>
                </div>
                <div className=' w-full mt-12 flex flex-col gap-4 '  >
                    {!loading && (
                        <>
                            {data?.length > 0 && (
                                <>
                                    {data?.map((item: any, index: number) => {
                                        return (
                                            <div key={index} className=' w-full flex justify-between ' >
                                                <div role='button' onClick={() => setshow(index)} className=' flex gap-2 ' >
                                                    <div className=' w-[30px] h-[30px] flex justify-center items-center rounded-full ' >
                                                        <img src={item?.coin_name?.includes("USDT") ? "/images/tether.webp" : "/images/Bitcoin.png"} alt="coin" className=' w-full h-full  rounded-full ' />
                                                    </div>
                                                    <div>
                                                        <p className=' font-semibold text-[#344054] ' ><span className=' text-[#F04438] ' >Sell</span> {item?.coin_name}</p>
                                                        <p className=' mt-2 text-[#98A2B3] text-xs ' >Amount: {cashFormat(item?.coin_amount_to_swap, 5)} {item?.coin_name}</p>
                                                    </div>
                                                </div>
                                                <div role='button' onClick={() => setshow(index)} className=' flex flex-col ' >
                                                    <div className=' flex items-center justify-end gap-2 ' >
                                                        <p className={item?.transaction_status === "FAILED" ? " text-xs text-[#F04438] font-semibold" : item?.transaction_status === "PENDING" ? " text-xs text-[#F29339] font-semibold" : ' text-xs text-[#12B76A] font-semibold '}>{item?.transaction_status === "FAILED" ? "Cancelled" : item?.transaction_status === "PENDING" ? "Pending" : "Success"}</p>
                                                        <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.88379 6.00007C5.87814 5.80232 5.80469 5.62151 5.64648 5.47461L1.2507 1.18052C1.1264 1.05622 0.968192 0.98842 0.781738 0.98842C0.408831 0.98842 0.109375 1.28223 0.109375 1.65513C0.109375 1.83594 0.182826 2.01109 0.312779 2.14104L4.27351 5.99442L0.312779 9.8591C0.188477 9.98905 0.109375 10.1586 0.109375 10.345C0.109375 10.7179 0.408831 11.0117 0.781738 11.0117C0.968192 11.0117 1.1264 10.9439 1.2507 10.8196L5.64648 6.51988C5.80469 6.36733 5.88379 6.19782 5.88379 6.00007Z" fill="#1C1C1E" />
                                                        </svg>
                                                    </div>
                                                    <p className=' text-sm text-[#333333] mt-2 font-medium ' >NGN {cashFormat(item?.trans_amount_ngn ? item?.trans_amount_ngn : item?.ngn_equivalent)}</p>
                                                </div>
                                                {show === index && (
                                                    <div className=' w-full  fixed bg-white overflow-y-auto inset-0 z-[100]  ' >
                                                        <div className=' bg-[#303179] w-full pt-9 pb-6 px-6 ' >
                                                            <svg role='button' onClick={() => setshow(-1)} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M5.67578 13.6455C5.67578 13.9092 5.79004 14.1729 5.99219 14.3662L11.793 20.1582C12.0039 20.3604 12.2324 20.457 12.4873 20.457C13.041 20.457 13.4453 20.0615 13.4453 19.5254C13.4453 19.2441 13.3398 19.0068 13.1553 18.8311L11.1777 16.8271L8.62891 14.498L10.6768 14.6211H21.3291C21.9092 14.6211 22.3135 14.2168 22.3135 13.6455C22.3135 13.0654 21.9092 12.6611 21.3291 12.6611H10.6768L8.6377 12.7842L11.1777 10.4551L13.1553 8.45117C13.3398 8.27539 13.4453 8.03809 13.4453 7.75684C13.4453 7.2207 13.041 6.8252 12.4873 6.8252C12.2324 6.8252 11.9951 6.92188 11.7666 7.1416L5.99219 12.916C5.79004 13.1094 5.67578 13.373 5.67578 13.6455Z" fill="#F9FAFB" />
                                                            </svg>
                                                            <div className=' w-full flex items-center text-white justify-between mt-2 ' >
                                                                <div>
                                                                    <p className=' font-semibold text-[26px] ' >Sell order {item?.transaction_status === "FAILED" ? "Cancelled" : item?.transaction_status === "PENDING" ? "pending" : "completed"}</p>
                                                                    <p className=' font-normal text-base ' >{item?.transaction_status === "FAILED" ? "Your order has been successfully canceled" : item?.transaction_status === "PENDING" ? "Your order is pending" : "You successfully sold " + parseFloat(item?.coin_amount_to_swap) + " " + item?.coin_name}</p>
                                                                </div>
                                                                {(item?.transaction_status === "FAILED") ? (
                                                                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="31.25" cy="31.25" r="31.25" fill="#FECDCA" />
                                                                        <path d="M31.2469 17.0913L34.9658 19.8041L39.5691 19.7954L40.9832 24.176L44.7124 26.8747L43.2816 31.2499L44.7124 35.6251L40.9832 38.3237L39.5691 42.7044L34.9658 42.6957L31.2469 45.4085L27.5279 42.6957L22.9247 42.7044L21.5105 38.3237L17.7812 35.6251L19.2121 31.2499L17.7812 26.8747L21.5105 24.176L22.9247 19.7954L27.5279 19.8041L31.2469 17.0913Z" fill="#F04438" stroke="#F97066" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M26.293 31.2501L29.8326 34.7897L36.9119 27.7104" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg> 
                                                                ):( item?.transaction_status === "PENDING") ? (
                                                                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="31.25" cy="31.25" r="31.25" fill="#F7CB73" />
                                                                        <path d="M31.2469 17.0913L34.9658 19.8041L39.5691 19.7954L40.9832 24.176L44.7124 26.8747L43.2816 31.2499L44.7124 35.6251L40.9832 38.3237L39.5691 42.7044L34.9658 42.6957L31.2469 45.4085L27.5279 42.6957L22.9247 42.7044L21.5105 38.3237L17.7812 35.6251L19.2121 31.2499L17.7812 26.8747L21.5105 24.176L22.9247 19.7954L27.5279 19.8041L31.2469 17.0913Z" fill="#F29339" stroke="#F29339" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M26.293 31.2501L29.8326 34.7897L36.9119 27.7104" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg> 
                                                                )  : (
                                                                    <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <circle cx="31.25" cy="31.25" r="31.25" fill="#BFE5D0" />
                                                                        <path d="M31.2469 17.0913L34.9658 19.8041L39.5691 19.7954L40.9832 24.176L44.7124 26.8747L43.2816 31.2499L44.7124 35.6251L40.9832 38.3237L39.5691 42.7044L34.9658 42.6957L31.2469 45.4085L27.5279 42.6957L22.9247 42.7044L21.5105 38.3237L17.7812 35.6251L19.2121 31.2499L17.7812 26.8747L21.5105 24.176L22.9247 19.7954L27.5279 19.8041L31.2469 17.0913Z" fill="#40B274" stroke="#009845" stroke-linecap="round" stroke-linejoin="round" />
                                                                        <path d="M26.293 31.2501L29.8326 34.7897L36.9119 27.7104" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                                                    </svg>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className=' w-full p-6 ' >
                                                            <p className=' text-[#344054] text-lg font-semibold ' >Transaction Details</p>
                                                            <p className=' text-[#667085] text-sm mt-1 ' >These are the details of the trade you selected</p>
                                                            <div className=' w-full flex justify-between items-center mt-9 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Date</p>
                                                                <p className=' text-[#344054] font-semibold ' >{dateFormat(item?.updated_at)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Rate</p>
                                                                <p className=' text-[#344054] font-semibold ' >{cashFormat(item?.current_usdt_ngn_rate)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Asset Amount</p>
                                                                <p className=' text-[#344054] font-semibold ' >{parseFloat(item?.trans_amount ? item.trans_amount : item?.coin_amount_to_swap)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Cash Value</p>
                                                                <p className=' text-[#344054] font-semibold ' >{cashFormat(item?.trans_amount_ngn ? item?.trans_amount_ngn : item?.ngn_equivalent)}</p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Transaction ID</p>
                                                                <p className=' text-[#344054] font-semibold ' ><CopyButtton text={item?.transaction_ref} type={true} />   </p>
                                                            </div>
                                                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                <p className=' text-[#252525] text-base font-medium ' >Deposit Wallet</p>
                                                                <p className=' text-[#344054] font-semibold ' ><CopyButtton text={item?.coin_address} type={true} />   </p>
                                                            </div>
                                                            {item?.trans_hash && (
                                                                <div className=' w-full flex justify-between items-center mt-6 ' >
                                                                    <p className=' text-[#252525] text-base font-medium ' >Transaction Hash</p>
                                                                    <p className=' text-[#344054] font-semibold ' ><CopyButtton text={item?.trans_hash} type={true} />   </p>
                                                                </div>
                                                            )}
                                                            {item?.transaction_status === "PENDING" && (
                                                                <ButtonComponent onClick={() => infoHandler(item)} name={"View Transaction"} bgcolor={' text-[#F1F1F1] bg-[#303179] mt-8  '} />
                                                            )}
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

            {showModalTnx && (
                <>
                    <div className=' w-full fixed z-20 h-full px-4 inset-0 flex justify-center items-center flex-col '  >
                        <div style={{ boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)" }} className=' mt-4 z-[200] lg:w-[591px] md:w-[591px] bg-white w-full rounded-lg px-5 py-6 '>
                            <div className=' w-full flex items-center justify-between ' >
                                <p className='font-bold text-2xl ' >Customize time range</p>
                                <button onClick={() => setShowModalTnx(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className=' text-sm font-normal ' >Select your time range within 3 months.</p>
                            <div className=' w-full pt-7 flex items-center ' >
                                <div className=' w-full ' >
                                    <p className=' text-[#334155] text-sm font-semibold ' >Start time</p>
                                    <div className=' flex gap-3 mt-2 items-center ' >
                                        <Input onChange={(e) => changeHandler(e.target.value, "Range", 0)} type='date' fontSize="sm" />
                                    </div>
                                </div>
                                <p className=' mx-4 font-semibold text-sm ' >to</p>
                                <div className=' w-full ' >
                                    <p className=' text-[#334155] text-sm font-semibold ' >End time</p>
                                    <div className=' flex gap-3 mt-2 items-center ' >
                                        <Input onChange={(e) => changeHandler(e.target.value, "Range", 1)} type='date' fontSize="sm" />
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => clickHandlerDate()} className=' bg-[#303179] mt-8 text-[#fff] rounded-md w-full text-sm py-4 font-bold  ' >Confirm</button>
                        </div>
                        <div className=' fixed z-10 inset-0 lg:bg-black lg:bg-opacity-20 bg-opacity-40 bg-black ' onClick={() => setShowModalTnx(false)} />
                    </div>
                </>
            )}
            {showModal && (
                <>
                    <div className=' w-full fixed z-20 h-full px-4 inset-0 flex justify-center items-center flex-col '  >
                        <div style={{ boxShadow: "0px 6px 56px rgba(0, 0, 0, 0.09)" }} className=' mt-4 z-[200] lg:w-[500px] md:w-[500px] bg-white w-full rounded-lg px-5 py-4 ' >
                            <div className=' w-full flex items-center justify-between ' >
                                <p className='font-bold text-lg ' >Filter</p>
                                <button onClick={() => setShowModal(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <p className=' text-[#475467] font-semibold mt-5 mb-2 ' >Status</p>
                            <Select value={payload?.trans_status} placeholder='All' onChange={(e) => changeHandler(e, "Status")} fontSize="sm" backgroundColor="white" >
                                <option value={"FAILED"} >CANCELLED</option>
                                <option>PENDING</option>
                                <option>SUCCESS</option>
                            </Select>
                            <div className=' w-full flex gap-4 items-center ' >
                                <div className=' w-full ' >
                                    <p className=' text-[#475467] font-semibold mt-5 ' >Start Date</p>
                                    <div className=' flex gap-3 mt-2 items-center ' >
                                        <Input onChange={(e) => changeHandler(e, "Date")} type='date' fontSize="sm" />
                                    </div>
                                </div>
                                <div className='  w-full '>
                                    <p className=' text-[#475467] font-semibold mt-5 ' >End Date</p>
                                    <div className=' flex gap-3 mt-2 items-center ' >
                                        <Input onChange={(e) => changeHandler(e, "Date")} type='date' fontSize="sm" />
                                    </div>
                                </div>
                            </div>
                            <p className=' text-[#475467] font-semibold mt-5 mb-2 ' >Assets</p>
                            <Select placeholder='All' value={payload?.coin_name} onChange={(e) => changeHandler(e, "Assets")} fontSize="sm" backgroundColor="white"  >
                                <option>BTC</option>
                                <option value={"USDT"} >USDT(ERC-20)</option>
                                <option value={"USDT_BSC"} >USDT(BEP- 20)</option>
                                <option value={"USDT_TRON"}>USDT(TRC- 20)</option>
                            </Select>
                            {(payload?.coin_name || payload?.trans_status || payload?.date) && (

                                <button onClick={() => clearHandler()} className=' border bg-white border-[#303179] mt-5 text-[#303179] rounded-md w-full text-sm py-3 font-bold  ' >Clear All</button>
                                // <svg role='button' onClick={()=> clearHandler()} className=' absolute -right-12 top-12 ' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                //     <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                //     <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                // </svg>
                            )}
                            <button onClick={() => clickHandlerDate()} className=' bg-[#303179] mt-8 text-[#fff] rounded-md w-full text-sm py-3 font-bold  ' >Confirm</button>
                        </div>
                        <div className=' fixed z-10 inset-0 lg:bg-transparent lg:bg-opacity-0 bg-opacity-20 bg-black ' onClick={() => setShowModal(false)} />
                    </div>
                </>
            )}
        </div>
    )
}
