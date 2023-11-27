import ButtonComponent from '../../components/ButtonComponent'
import { cashFormat } from '../../config/utils/cashFormat'
import { useNavigate } from 'react-router-dom'
import CopyButtton from '../../components/CopyButton'
import transactiondetail from '../../global-state/transactiondetail'
import { dateFormat } from '../../config/utils/dateFormat'
import React from 'react'

export default function TransactionStatus() {

    const tnxinfo: any = transactiondetail((state) => state.tnx)

    const navigate = useNavigate()

    const infoHandler = () => {
        // setTnxData(item)
        navigate("/tnxinfo")
    }

    React.useEffect(() => {
        if (!tnxinfo?.transaction_status) {
            navigate("/dashboard/transactionshistory")
        }
    }, [])

    return (
        <div className=' w-full h-screen flex flex-col bg-white' >
            {tnxinfo?.transaction_status && (
                <> 
                    <div className=' bg-[#303179] w-full pt-9 pb-6 px-6 ' >
                        <svg role='button' onClick={() => navigate("/dashboard/transactionshistory")} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.67578 13.6455C5.67578 13.9092 5.79004 14.1729 5.99219 14.3662L11.793 20.1582C12.0039 20.3604 12.2324 20.457 12.4873 20.457C13.041 20.457 13.4453 20.0615 13.4453 19.5254C13.4453 19.2441 13.3398 19.0068 13.1553 18.8311L11.1777 16.8271L8.62891 14.498L10.6768 14.6211H21.3291C21.9092 14.6211 22.3135 14.2168 22.3135 13.6455C22.3135 13.0654 21.9092 12.6611 21.3291 12.6611H10.6768L8.6377 12.7842L11.1777 10.4551L13.1553 8.45117C13.3398 8.27539 13.4453 8.03809 13.4453 7.75684C13.4453 7.2207 13.041 6.8252 12.4873 6.8252C12.2324 6.8252 11.9951 6.92188 11.7666 7.1416L5.99219 12.916C5.79004 13.1094 5.67578 13.373 5.67578 13.6455Z" fill="#F9FAFB" />
                        </svg>
                        <div className=' w-full flex items-center text-white justify-between mt-2 ' >
                            <div>
                                <p className=' font-semibold text-[26px] ' >Sell order {(tnxinfo?.transaction_status === "FAILED" || tnxinfo?.transaction_status === "CANCELLED") ? "Cancelled" : tnxinfo?.transaction_status === "PENDING" ? "pending" : "completed"}</p>
                                <p className=' font-normal text-base ' >{tnxinfo?.transaction_status === "FAILED" ? "Your order has been successfully canceled" : tnxinfo?.transaction_status === "PENDING" ? "Your order is pending" : "You successfully sold " + parseFloat(tnxinfo?.coin_amount_to_swap) + " " + tnxinfo?.coin_name}</p>
                            </div>
                            {(tnxinfo?.transaction_status === "FAILED" || tnxinfo?.transaction_status === "CANCELLED") ? (
                                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="31.25" cy="31.25" r="31.25" fill="#FECDCA" />
                                    <path d="M31.2469 17.0913L34.9658 19.8041L39.5691 19.7954L40.9832 24.176L44.7124 26.8747L43.2816 31.2499L44.7124 35.6251L40.9832 38.3237L39.5691 42.7044L34.9658 42.6957L31.2469 45.4085L27.5279 42.6957L22.9247 42.7044L21.5105 38.3237L17.7812 35.6251L19.2121 31.2499L17.7812 26.8747L21.5105 24.176L22.9247 19.7954L27.5279 19.8041L31.2469 17.0913Z" fill="#F04438" stroke="#F97066" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.293 31.2501L29.8326 34.7897L36.9119 27.7104" stroke="white" strokeWidth="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            ) : (tnxinfo?.transaction_status === "PENDING") ? (
                                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="31.25" cy="31.25" r="31.25" fill="#F7CB73" />
                                    <path d="M31.2469 17.0913L34.9658 19.8041L39.5691 19.7954L40.9832 24.176L44.7124 26.8747L43.2816 31.2499L44.7124 35.6251L40.9832 38.3237L39.5691 42.7044L34.9658 42.6957L31.2469 45.4085L27.5279 42.6957L22.9247 42.7044L21.5105 38.3237L17.7812 35.6251L19.2121 31.2499L17.7812 26.8747L21.5105 24.176L22.9247 19.7954L27.5279 19.8041L31.2469 17.0913Z" fill="#F29339" stroke="#F29339" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.293 31.2501L29.8326 34.7897L36.9119 27.7104" stroke="white" strokeWidth="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            ) : (
                                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="31.25" cy="31.25" r="31.25" fill="#BFE5D0" />
                                    <path d="M31.2469 17.0913L34.9658 19.8041L39.5691 19.7954L40.9832 24.176L44.7124 26.8747L43.2816 31.2499L44.7124 35.6251L40.9832 38.3237L39.5691 42.7044L34.9658 42.6957L31.2469 45.4085L27.5279 42.6957L22.9247 42.7044L21.5105 38.3237L17.7812 35.6251L19.2121 31.2499L17.7812 26.8747L21.5105 24.176L22.9247 19.7954L27.5279 19.8041L31.2469 17.0913Z" fill="#40B274" stroke="#009845" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M26.293 31.2501L29.8326 34.7897L36.9119 27.7104" stroke="white" strokeWidth="2.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            )}
                        </div>
                    </div>
                    <div className=' w-full p-6 ' >
                        <p className=' text-[#344054] text-lg font-semibold ' >Transaction Details</p>
                        <p className=' text-[#667085] text-sm mt-1 ' >These are the details of the trade you selected</p>
                        <div className=' w-full flex justify-between items-center mt-9 ' >
                            <p className=' text-[#252525] text-base font-medium ' >Date</p>
                            <p className=' text-[#344054] font-semibold ' >{dateFormat(tnxinfo?.updated_at)}</p>
                        </div>
                        <div className=' w-full flex justify-between items-center mt-6 ' >
                            <p className=' text-[#252525] text-base font-medium ' >Rate</p>
                            <p className=' text-[#344054] font-semibold ' >{cashFormat(tnxinfo?.current_usdt_ngn_rate)}</p>
                        </div>
                        <div className=' w-full flex justify-between items-center mt-6 ' >
                            <p className=' text-[#252525] text-base font-medium ' >Asset Amount</p>
                            <p className=' text-[#344054] font-semibold ' >{parseFloat(tnxinfo?.trans_amount ? tnxinfo?.trans_amount : tnxinfo?.coin_amount_to_swap)}</p>
                        </div>
                        <div className=' w-full flex justify-between items-center mt-6 ' >
                            <p className=' text-[#252525] text-base font-medium ' >Cash Value</p>
                            <p className=' text-[#344054] font-semibold ' >{cashFormat(tnxinfo?.trans_amount_ngn ? tnxinfo?.trans_amount_ngn : tnxinfo?.ngn_equivalent)}</p>
                        </div>
                        <div className=' w-full flex justify-between items-center mt-6 ' >
                            <p className=' text-[#252525] text-base font-medium ' >Transaction ID</p>
                            <p className=' text-[#344054] font-semibold ' ><CopyButtton text={tnxinfo?.transaction_ref} type={true} />   </p>
                        </div>
                        <div className=' w-full flex justify-between items-center mt-6 ' >
                            <p className=' text-[#252525] text-base font-medium ' >Deposit Wallet</p>
                            <p className=' text-[#344054] font-semibold ' ><CopyButtton text={tnxinfo?.coin_address} type={true} />   </p>
                        </div>
                        {tnxinfo?.trans_hash && (
                            <div className=' w-full flex justify-between items-center mt-6 ' >
                                <p className=' text-[#252525] text-base font-medium ' >Transaction Hash</p>
                                <p className=' text-[#344054] font-semibold ' ><CopyButtton text={tnxinfo?.trans_hash} type={true} />   </p>
                            </div>
                        )}
                    </div>
                    <div className=' w-full px-6 flex flex-col gap-4 mt-4  ' >


                        {tnxinfo?.transaction_status === "PENDING" && (
                            <ButtonComponent onClick={() => infoHandler()} name={"View Transaction"} bgcolor={' text-[#F1F1F1] bg-[#303179] '} />
                        )}
                        <ButtonComponent onClick={() => navigate("/dashboard/transactionshistory")} name={"Close"} bgcolor={'bg-[#F1F1F1] text-[#667085] '} />
                    </div>
                </>
            )}
            {!tnxinfo?.transaction_status && (
                <div className=' w-full flex justify-center py-4 ' >
                    Loading...
                </div>
            )}
        </div>
    )
}
