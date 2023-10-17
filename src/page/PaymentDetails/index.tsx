import { Checkbox, useToast } from '@chakra-ui/react'
import React from 'react'
import ModalLayout from '../../components/ModalLayout'
import ButtonComponent from '../../components/ButtonComponent'
// import { IUser, UserContext } from '../../../context/userContext'
import { cashFormat } from '../../config/utils/cashFormat'
import { useNavigate } from 'react-router-dom'
import { uesTnxStatusCallback, useBankDetailCallback } from '../../action/useAction'
import CopyButtton from '../../components/CopyButton'
import transactiondetail from '../../global-state/transactiondetail'
import userdata from '../../global-state/userdata'

type IProps = {
    close?: any
}

export default function PaymentDetails(props: IProps) {
 
    const  {

    } = props

    // Global State
    const userinfo: any = userdata((state) => state.user)
    const tnxinfo: any = transactiondetail((state) => state.tnx)
    

    const [open, setOpen] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [Checked, setChecked] = React.useState(false)
    const [accountname, setAccountName] = React.useState("")
    const [tab, setTab] = React.useState(0)
    const [size, setSize] = React.useState("md")
    const [loadingBank, setLoadingBank] = React.useState(false)
    const toast = useToast()
    // const userContext: IUser = React.useContext(UserContext); 

    const {handlTnxStatus} = uesTnxStatusCallback()
    const { handleBankDetail } = useBankDetailCallback();

    const navigate = useNavigate()

    const clickHandler =()=> {
        setOpen(false)
        navigate("/dashboard/transactionshistory")
    } 

    React.useEffect(() => {
        const fetchData = async () => {
            setLoadingBank(true)
            const request = await handleBankDetail(JSON.stringify({
                "account_number": tnxinfo?.bank_acc_number,
                "bank_code": tnxinfo?.bank_code
            }))

            if (request?.data?.status === 500 || !request?.data?.account_name) {
                toast({
                    title: ("Incorrect Acount Details"),
                    position: "top",
                    status: "error",
                    isClosable: true,
                })
            }
            setAccountName(request?.data?.account_name)
            setLoadingBank(false)
        } 
            fetchData() 
            
    }, [tnxinfo?.bank_acc_number, tnxinfo?.bank_code]) 

    const CancelTnxHandler =async()=> {
        setLoading(true)
        const request = await handlTnxStatus(JSON.stringify({
            "transaction_status": "FAILED"
        }), tnxinfo?.id ) 
        
        console.log(request);
        

        toast({
            title: 'Your Transaction Has Been Cancelled Successfully  ', 
            status: 'success',  
            duration: 3000, 
            position:"top"
        }) 
        setLoading(false)
        setOpen(false)
        navigate("/dashboard/transactionshistory")
        
    }  

    console.log(tnxinfo);
    

    return (
        <div className=' w-full flex justify-center' >  
            <div className=' max-[1036px]:w-full mt-4 lg:mt-12 gap-2 lg:bg-transparent bg-white flex lg:flex-row flex-col px-4 lg:px-10 ' >
                <div className=' w-full bg-white p-0 pb-4 lg:p-9 lg:pb-12 rounded-lg ' >
                    <div className=' flex items-center gap-3 ' >
                        <svg role="button" onClick={()=> navigate(-1)} width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.675781 7.64551C0.675781 7.90918 0.790039 8.17285 0.992188 8.36621L6.79297 14.1582C7.00391 14.3604 7.23242 14.457 7.4873 14.457C8.04102 14.457 8.44531 14.0615 8.44531 13.5254C8.44531 13.2441 8.33984 13.0068 8.15527 12.8311L6.17773 10.8271L3.62891 8.49805L5.67676 8.62109H16.3291C16.9092 8.62109 17.3135 8.2168 17.3135 7.64551C17.3135 7.06543 16.9092 6.66113 16.3291 6.66113H5.67676L3.6377 6.78418L6.17773 4.45508L8.15527 2.45117C8.33984 2.27539 8.44531 2.03809 8.44531 1.75684C8.44531 1.2207 8.04102 0.825195 7.4873 0.825195C7.23242 0.825195 6.99512 0.921875 6.7666 1.1416L0.992188 6.91602C0.790039 7.10938 0.675781 7.37305 0.675781 7.64551Z" fill="#080707"/>
                        </svg>
                        <p className=' font-bold text-xl  ' >Transaction Details</p>
                    </div>
                    <p className=' mt-6 font-medium text-sm  ' >Please make sure that the network you copied on our platform matches the network you are transferring to.</p>  
                    <div className=' w-full mt-8 ' > 
                        <p className=' font-bold ' >Order info</p>
                        <div className=' w-full grid grid-cols-2 text-sm gap-3 pt-5 ' > 
                            <p className=' font-medium text-[#475569]  ' >Amount</p>
                            <p className=' font-bold text-[#475569] text-right  ' >{parseFloat(tnxinfo?.coin_amount_to_swap)} {tnxinfo?.coin_name?.includes("USDT") ? "USDT": "BTC"}</p>
                            <p className=' font-medium text-[#475569]  ' >Amount in Naira</p>
                            <p className=' font-medium text-[#475569] text-right ' >NGN {cashFormat(tnxinfo?.ngn_equivalent)}</p>
                            <p className=' font-medium text-[#475569] ' >Asset sold</p>
                            <p className=' font-medium text-[#475569] text-right  ' >{tnxinfo?.coin_name}</p> 
                        </div>
                    </div>
                    <div className=' w-full mt-6 ' > 
                        <p className=' font-bold text-[15px] text-[#334155] mb-2 ' >Smart Chain Address</p>

                        <CopyButtton text={tnxinfo?.coin_address} hide={true} />
                        {/* <div className=' w-full flex items-center lg:gap-4 ' >
                            <div className=' w-full py-3 lg:gap-0 gap-2 px-4 bg-[#F9FAFB] border flex text-sm font-bold items-center  border-[#D0D5DD] rounded-lg ' >
                                <p className=' break-all' >{tnxinfo?.coin_address}</p>
                                <div className='  w-fit lg:hidden ml-auto  ' >
                                    <svg className=' lg:hidden ' width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 3.1275V12.75C1.99985 13.7021 2.36185 14.6186 3.01256 15.3136C3.66327 16.0086 4.55397 16.43 5.504 16.4925L5.75 16.5H12.371C12.2159 16.9386 11.9287 17.3184 11.5488 17.587C11.169 17.8557 10.7152 17.9999 10.25 18H5C3.80653 18 2.66193 17.5259 1.81802 16.682C0.974106 15.8381 0.5 14.6935 0.5 13.5V5.25C0.499756 4.78451 0.643892 4.3304 0.912542 3.95026C1.18119 3.57012 1.56113 3.28266 2 3.1275ZM13.25 0C13.8467 0 14.419 0.237053 14.841 0.65901C15.2629 1.08097 15.5 1.65326 15.5 2.25V12.75C15.5 13.3467 15.2629 13.919 14.841 14.341C14.419 14.7629 13.8467 15 13.25 15H5.75C5.15326 15 4.58097 14.7629 4.15901 14.341C3.73705 13.919 3.5 13.3467 3.5 12.75V2.25C3.5 1.65326 3.73705 1.08097 4.15901 0.65901C4.58097 0.237053 5.15326 0 5.75 0H13.25Z" fill="#667085"/>
                                    </svg>
                                </div>
                            </div>
                            <div className=' lg:block hidden w-fit ' >
                                <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.34045 4V1C4.34045 0.734784 4.44741 0.48043 4.63779 0.292893C4.82817 0.105357 5.08638 0 5.35562 0H17.5376C17.8069 0 18.0651 0.105357 18.2555 0.292893C18.4458 0.48043 18.5528 0.734784 18.5528 1V15C18.5528 15.2652 18.4458 15.5196 18.2555 15.7071C18.0651 15.8946 17.8069 16 17.5376 16H14.4921V19C14.4921 19.552 14.0353 20 13.4698 20H1.30206C1.16818 20.0008 1.03547 19.9755 0.911546 19.9256C0.78762 19.8757 0.674922 19.8022 0.579928 19.7093C0.484934 19.6164 0.409516 19.5059 0.358008 19.3841C0.3065 19.2624 0.279916 19.1319 0.279785 19L0.282831 5C0.282831 4.448 0.739656 4 1.3051 4H4.34045ZM2.31316 6L2.31012 18H12.4618V6H2.31316ZM6.37079 4H14.4921V14H16.5225V2H6.37079V4Z" fill="#5C5F62"/>
                                </svg>
                            </div>
                        </div> */}
                    </div>
                    <div className=' w-full mt-4 ' > 
                        <p className=' font-bold text-[15px] text-[#334155] mb-2 ' >Transaction Reference</p>
                        <CopyButtton text={tnxinfo?.transaction_ref} hide={true} /> 
                    </div> 
                    <p className=' mt-6 font-medium text-sm  ' >We would credit the bank account provided below once the transaction is confirmed as Successful on the crypto network.</p>
                </div>
                <div className=' w-full flex flex-col items-center p-0 py-9 lg:p-9 ' >
                    <div className=' w-full lg:w-[420px] ' > 
                        <p className=' font-bold ' >Customer Details</p>
                        <div className=' w-full grid grid-cols-2 text-sm gap-3 pt-5 ' > 
                            <p className=' font-medium text-[#475569]  ' >Role</p>
                            <p className=' font-medium text-[#475569] text-right  ' >Sender</p>
                            <p className=' font-medium text-[#475569]  ' >Name</p>
                            <p className=' font-medium text-[#475569] text-right ' >{userinfo?.fullname}</p>
                            <p className=' font-medium text-[#475569] ' >email</p>
                            <p className=' font-medium text-[#475569] text-right  ' >{userinfo?.email}</p>
                            <p className=' font-medium text-[#475569]  ' >Phone Number</p>
                            <p className=' font-medium text-[#475569] text-right ' >{userinfo?.phone}</p>
                        </div>
                    </div>
                    <div className=' w-full lg:w-[420px] pt-9 ' > 
                        <p className=' font-bold ' >Account Details</p>
                        <div className=' w-full grid grid-cols-2 text-sm gap-3 pt-5 ' > 
                            <p className=' font-medium text-[#475569]  ' >Bank</p>
                            <p className=' font-medium text-[#475569] text-right  ' >{tnxinfo?.bank_acc_name}</p>
                            <p className=' font-medium text-[#475569]  ' >Name</p>
                            <p className=' font-medium text-[#475569] text-right ' >

                                {loadingBank ? <p className=' mt-2 font-bold  ' >Loading</p> :
                                    <>
                                        {accountname &&
                                            <p className=' mt-2 font-bold  ' >{accountname}</p>
                                        }
                                    </>
                                }
                            </p>
                            <p className=' font-medium text-[#475569] ' >Account Number</p>
                            <p className=' font-medium text-[#475569] text-right  ' >{tnxinfo?.bank_acc_number}</p> 
                        </div>
                    </div>
                    <div className=' mt-9 w-full lg:w-[420px] flex justify-end gap-7 text-sm ' >
                        <button onClick={()=> {setSize("xl"); setTab(3);setOpen(true)}} className=' font-semibold text-[#344054] ' >Cancel Order</button>
                        <button onClick={()=> {setSize("xl");setTab(0);setOpen(true)}} className=' bg-[#303179] text-[#fff] rounded-md px-6 lg:px-6 py-2 font-semibold  ' >I’ve Made Payment</button>
                    </div>
                </div>
                
                <ModalLayout open={open} size={size} close={setOpen} >
                    {tab === 0 && ( 
                        <div className=' rounded-lg px-4 lg:px-8 py-9 ' >
                            <div className=' w-full flex items-center justify-between ' >
                                <p className=' text-2xl font-bold' >Initiate a Deposit </p>
                                <button onClick={()=> setOpen(false)} className=' bg-[#EFEFFE] w-[32px] h-[32px] rounded-full flex justify-center items-center ' >
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.2677 1.7334L1.73438 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M1.73438 1.7334L10.2677 10.2667" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                            <p className=' text-[#667085] mt-3 lg:mt-1  ' >Please make sure that the network you copied on our platform matches the network you are transferring to.</p>
                            <div className=' text-[#080707] w-full flex flex-col items-center ' >
                                <div className=' flex items-center gap-2 mt-4 lg:mt-6 ' >
                                    <div className=' w-[24px] h-[24px] rounded-full flex justify-center items-center ' >
                                        <img src={tnxinfo?.coin_name?.includes("USDT") ? "/images/tether.webp": "/images/Bitcoin.png"} alt="coin" className=' w-full h-full  rounded-full ' /> 
                                    </div>
                                    {tnxinfo?.coin_name}
                                </div>
                                <div className=' flex gap-2 items-center ' > 
                                    <p className=' text-4xl font-bold mt-1 ' >{parseFloat(tnxinfo?.coin_amount_to_swap)}</p>
                                    {/* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.46257 2.43262C5.21556 0.91688 7.5007 0 10 0C15.5228 0 20 4.47715 20 10C20 12.1361 19.3302 14.1158 18.1892 15.7406L15 10H18C18 5.58172 14.4183 2 10 2C7.84982 2 5.89777 2.84827 4.46023 4.22842L3.46257 2.43262ZM16.5374 17.5674C14.7844 19.0831 12.4993 20 10 20C4.47715 20 0 15.5228 0 10C0 7.86386 0.66979 5.88416 1.8108 4.25944L5 10H2C2 14.4183 5.58172 18 10 18C12.1502 18 14.1022 17.1517 15.5398 15.7716L16.5374 17.5674Z" fill="black"/>
                                    </svg> */}
                                </div>
                                <p className=' text-[#647488] text-sm mt-1 font-normal mb-6 ' >I will receive- NGN {cashFormat(tnxinfo?.ngn_equivalent)}</p>
                                <div className=' px-[26px] py-[30px] w-full bg-[#F7F8FF] rounded-lg ' >
                                    <p className=' text-sm font-medium ' ><span className=' font-bold ' >Disclaimer:</span> Before any payments can be received, please ensure that you have submitted a deposit request. Failure to initiate a deposit request will result in our inability to process payments to your bank account.</p>
                                    <div className=' flex items-center mt-4 gap-3 ' >
                                        <Checkbox onChange={(e)=> setChecked(e.target.checked)}  />
                                        <p className=' text-sm font-medium '>I agree and accepts EzySwap Sell Disclaimer</p>
                                    </div>
                                </div>
                                <ButtonComponent onClick={()=> setTab(1)} name='Confirm Sell' bgcolor={Checked ? ' bg-[#303179] text-white mt-4 lg:mt-6 ': ' bg-[#E4E7EC] text-[#475467] mt-4 lg:mt-6 '} />
                            </div>
                        </div>
                    )}
                    {tab === 1 && ( 
                        <div className=' rounded-lg px-4 lg:px-9 py-9 ' > 
                            <div className=' text-[#262626] w-full flex flex-col items-center ' > 
                                <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="warning">
                                    <circle id="Oval" cx="56.0068" cy="56.0068" r="55.9932" fill="#303179"/>
                                    <g id="Group 12">
                                    <g id="Path">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.7656 29.8733V61.5716V29.8733Z" fill="#98A2B3"/>
                                    <path d="M55.7656 29.8733V61.5716" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    <g id="Path_2">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.9301 79.4068V80.9493V79.4068Z" fill="#98A2B3"/>
                                    <path d="M55.9301 79.4068V80.9493" stroke="white" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
                                    </g>
                                    </g>
                                    </g>
                                </svg>
                                <p className=' mt-4 font-bold text-2xl text-center lg:text-3xl ' >Awaiting Approval </p>
                                <p className=' text-center font-normal my-4 ' >Your order was submitted successfully. We'll send you a notification via email when your order status updates</p> 
                                <ButtonComponent onClick={()=> setTab(2)} name='Okay, Great 🎉' bgcolor=' bg-[#303179] text-white mt-3 ' />
                            </div>
                        </div>
                    )}
                    {tab === 2 && ( 
                        <div className=' rounded-lg px-6 py-9 ' > 
                            <div className=' text-[#080707] w-full flex flex-col items-center ' > 
                                <svg width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="73" cy="73" r="73" fill="#BFE5D0"/>
                                    <path d="M73 32.167L83.7255 39.9907L97.0012 39.9655L101.08 52.5994L111.835 60.3822L107.708 73.0003L111.835 85.6184L101.08 93.4013L97.0012 106.035L83.7255 106.01L73 113.834L62.2745 106.01L48.9988 106.035L44.9203 93.4013L34.1652 85.6184L38.2917 73.0003L34.1652 60.3822L44.9203 52.5994L48.9988 39.9655L62.2745 39.9907L73 32.167Z" fill="#40B274" stroke="#009845" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M58.7083 73.0003L68.9167 83.2087L89.3333 62.792" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p className=' mt-4 font-bold text-2xl text-[#334155] ' >Order successful</p>
                                <p className=' text-center font-normal text-[#647488] mt-1 mb-5 ' >Successfully sold {parseFloat(tnxinfo?.coin_amount_to_swap)+" "+tnxinfo?.coin_name}</p> 
                                <ButtonComponent onClick={()=> clickHandler()} name='Back to Transactions' bgcolor=' bg-[#303179] text-white ' />
                            </div>
                        </div>
                    )}
                    {tab === 3 && ( 
                        <div className=' rounded-lg p-5' > 
                            <div className=' text-[#080707] w-full flex flex-col items-start ' >  
                                <p className='  font-semibold text-lg text-[#334155] ' >Cancel Transaction </p>
                                <p className=' lg:text-center font-normal text-[#647488] mt-1 mb-5 ' >Are you sure you want to cancel the transaction?</p> 
                                
                                <div className='w-full flex justify-end gap-3 text-sm ' >
                                    <button onClick={()=> CancelTnxHandler()} className=' font-semibold text-[#202223] rounded-md border border-[#BABFC3] px-4 py-2 ' >
                                        {loading? "Loading..." : "Yes"}
                                    </button>
                                    <button onClick={()=> setOpen(false)} className=' bg-[#D82C0D] text-[#fff] rounded-md px-4 py-2 font-semibold  ' >No</button>
                                </div>
                            </div>
                        </div>
                    )}
                </ModalLayout>
            </div>
        </div>
    )
}
