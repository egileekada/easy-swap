import React from 'react'
import ModalLayout from '../../components/ModalLayout'
import VerificationModal from './modalcomponent'
import { IUser, UserContext } from '../../context/userContext'
import { useGetDataCallback } from '../../action/useAction'
import { dateFormat } from '../../config/utils/dateFormat'

export default function Verification() {

    const [isShow, setIsShow] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [data, setData] = React.useState({}as any) 
    const [size, setSize] = React.useState("xl")
    const userContext: IUser = React.useContext(UserContext);  

    const [tab, setTab] = React.useState(0)



    const { handleGetData } = useGetDataCallback()
    
    React.useEffect(()=> { 
        setLoading(true)
        const fetchData = async () => {
            const request: any = await handleGetData("/users/retrieve-user-kyc")  
            setData(request?.data) 
            setLoading(false)
        }  
        
        // call the function
        fetchData()

        // make sure to catch any error
        .catch(console.error);;
    }, [])  

    return (
        <div className=' w-full py-12  ' >
            <p className=' font-bold text-center text-[30px] ' >Verification Status</p>
            <div className=' w-full lg:hidden justify-center lg:mt-0 mt-8 flex gap-3 font-medium text-sm items-center ' >
                <div role='button' onClick={() => setTab(0)} className={tab === 0 ? ' px-3 h-[30px] flex justify-center items-center bg-[#303179] text-white rounded-2xl ' : ' px-3 h-[30px] flex justify-center items-center text-[#303179] border border-[#303179] rounded-2xl bg-white '} >
                    Level 1
                </div>
                <div role='button' onClick={() => setTab(1)} className={tab === 1 ? ' px-3 h-[30px] flex justify-center items-center bg-[#303179] text-white rounded-2xl ' : ' px-3 h-[30px] flex justify-center items-center text-[#303179] border border-[#303179] rounded-2xl bg-white '} >
                    VIP
                </div>
                <div role='button' onClick={() => setTab(2)} className={tab === 2 ? ' px-3 h-[30px] flex justify-center items-center bg-[#303179] text-white rounded-2xl ' : ' px-3 h-[30px] flex justify-center items-center text-[#303179] border border-[#303179] rounded-2xl bg-white '} >
                    V-VIP
                </div>
            </div>
            <div className=' w-full lg:px-0 px-6 flex justify-center gap-12 mt-10 ' >
                <div className={tab === 0 ? ' w-full lg:w-[318px] lg:block ' : ' w-full lg:w-[318px] hidden lg:block '}>
                    <p className=' font-bold text-[24px] lg:block hidden  ' >Level 1</p>
                    <p className=' font-bold text-[#344054] lg:hidden ' >Account Limits</p>
                    <p className=' font-normal mt-4 text-base ' >Complete verification to access $1k transaction limit. Upgrade to VIP for exclusive benefits and $50k daily limit.</p>

                    <p className=' font-bold text-[#344054] lg:hidden mt-6 ' >Personal Information</p>
                    <div className=' w-full grid grid-cols-2 gap-2 mt-4 ' >
                        <p className=' font-normal text-[#344054] text-sm ' >Legal Name</p>
                        <p className=' font-semibold text-[#344054] text-sm ' >{userContext.userInfo?.fullname}</p>
                        <p className=' font-normal text-[#344054] text-sm ' >Legal Email</p>
                        <p className=' font-semibold text-[#344054] text-sm ' >{userContext.userInfo?.email}</p>
                    </div>
                    <button disabled={true} className=' bg-[#00BAF0] text-white  w-full h-[56px] mt-10 ' >Verified</button>
                </div>
                <div className={tab === 1 ? ' w-full lg:w-[318px] lg:block ' : ' w-full lg:w-[318px] hidden lg:block '}>
                    <p className=' font-bold text-[24px]  ' >VIP</p>
                    <p className=' font-normal mt-4 text-base ' >Complete the verification process seamlessly and unlock exclusive benefits, with a daily limit of up to $50k for added convenience.</p>
                    <div className=' mt-10 flex flex-col gap-4' >
                        <div className=' flex items-center gap-3 ' >
                            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 16.5C0 13.1863 2.68629 10.5 6 10.5C9.31373 10.5 12 13.1863 12 16.5H10.5C10.5 14.0147 8.48528 12 6 12C3.51472 12 1.5 14.0147 1.5 16.5H0ZM6 9.75C3.51375 9.75 1.5 7.73625 1.5 5.25C1.5 2.76375 3.51375 0.75 6 0.75C8.48625 0.75 10.5 2.76375 10.5 5.25C10.5 7.73625 8.48625 9.75 6 9.75ZM6 8.25C7.6575 8.25 9 6.9075 9 5.25C9 3.5925 7.6575 2.25 6 2.25C4.3425 2.25 3 3.5925 3 5.25C3 6.9075 4.3425 8.25 6 8.25Z" fill="black" />
                            </svg>
                            <p className=' font-normal ' >Personal Information</p>
                        </div>
                        <div className=' flex items-center gap-3 ' >
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.25 10.5H15.75V1.5H2.25V10.5ZM0.75 0.75C0.75 0.33579 1.08579 0 1.5 0H16.5C16.9142 0 17.25 0.33579 17.25 0.75V11.25C17.25 11.6642 16.9142 12 16.5 12H1.5C1.08579 12 0.75 11.6642 0.75 11.25V0.75ZM6.75 4.5C6.75 4.08579 6.41421 3.75 6 3.75C5.58579 3.75 5.25 4.08579 5.25 4.5C5.25 4.91423 5.58579 5.25 6 5.25C6.41421 5.25 6.75 4.91423 6.75 4.5ZM8.25 4.5C8.25 5.74267 7.24264 6.75 6 6.75C4.75736 6.75 3.75 5.74267 3.75 4.5C3.75 3.25736 4.75736 2.25 6 2.25C7.24264 2.25 8.25 3.25736 8.25 4.5ZM6.00135 9C5.27627 9 4.62105 9.29303 4.1452 9.76883L3.08454 8.70817C3.8302 7.96252 4.86247 7.5 6.00135 7.5C7.14023 7.5 8.17252 7.96252 8.91817 8.70817L7.85752 9.76883C7.38166 9.29303 6.72643 9 6.00135 9ZM12.1553 8.03032L15.1553 5.03032L14.0947 3.96967L11.625 6.43935L10.2803 5.09468L9.21968 6.15532L11.0947 8.03032L11.625 8.56065L12.1553 8.03032Z" fill="black" />
                            </svg>
                            <p className=' font-normal ' >Government-issued ID</p>
                        </div>
                        <div className=' flex items-center gap-3 ' >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.25 0.25H13.75V4H12.25V1.75H9.25V0.25ZM4.75 0.25V1.75H1.75V4H0.25V0.25H4.75ZM9.25 13.75V12.25H12.25V10H13.75V13.75H9.25ZM4.75 13.75H0.25V10H1.75V12.25H4.75V13.75ZM0.25 6.25H13.75V7.75H0.25V6.25Z" fill="black" />
                            </svg>
                            <p className=' font-normal ' >Facial recognition</p>
                        </div>
                        <div className=' flex items-center gap-3 ' >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="black" />
                            </svg>
                            <p className=' font-normal ' >Review time: 72 hours</p>
                        </div>
                    </div>
                    {!loading && (
                        <> 
                            {!data?.kyc_verified && (
                                <> 
                                    {!data.first_name && (
                                        <> 
                                            <button  onClick={() => setOpen(true)} className=' bg-[#303179] hidden lg:block text-white  w-full h-[56px] mt-10 ' >{data?.kyc_verified ? "Verified": data?.first_name ? "Pending":"Verify Now"}</button>
                                            <button onClick={() => setIsShow(true)} className=' bg-[#303179] lg:hidden text-white  w-full h-[56px] mt-10 ' >Verify Now</button>
                                        </>
                                    )}
                                    {data.country_of_residence === "Nigeria" && (
                                        <> 
                                            <div className=' flex items-center gap-3 mt-10 mb-4 ' >
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="#FEC84B"/>
                                                </svg>
                                                {dateFormat(data?.updated_at)}
                                            </div>
                                            <button disabled={true} className=' bg-[#FEC84B] rounded-[24px] font-semibold text-sm w-[150px] h-[47px] text-[#202223] ' >Under review</button>
                                            {/* <button onClick={() => setIsShow(true)} className=' bg-[#303179] lg:hidden text-white  w-full h-[56px] mt-10 ' >Verify Now</button> */}
                                        </>
                                    )} 
                                </>
                            )}
                            {data?.kyc_verified && (
                                <> 
                                    <button disabled={true} className=' bg-[#00BAF0] text-white  w-full h-[56px] mt-10 ' >Verified</button> 
                                </>
                            )}
                        </>
                    )}
                </div>
                <div className={tab === 2 ? ' w-full lg:w-[318px] lg:block ' : ' w-full lg:w-[318px] hidden lg:block '}>
                    <p className=' font-bold text-[24px]  ' >V-VIP</p>
                    <p className=' font-normal mt-4 text-base ' >Validate your company's identity effortlessly and enhance credibility in the digital landscape, with a generous daily limit of up to $200k for added flexibility.</p>
                    <div className=' mt-10 flex flex-col gap-4' >
                        <div className=' flex items-center gap-3 ' >
                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 14.6746L10.7123 10.9623C12.7625 8.91208 12.7625 5.58794 10.7123 3.53769C8.66208 1.48744 5.33794 1.48744 3.28769 3.53769C1.23744 5.58794 1.23744 8.91208 3.28769 10.9623L7 14.6746ZM7 16.7959L2.22703 12.023C-0.40901 9.3869 -0.40901 5.11307 2.22703 2.47703C4.86307 -0.15901 9.1369 -0.15901 11.773 2.47703C14.409 5.11307 14.409 9.3869 11.773 12.023L7 16.7959ZM7 8.75C7.82845 8.75 8.5 8.07845 8.5 7.25C8.5 6.42157 7.82845 5.75 7 5.75C6.17155 5.75 5.5 6.42157 5.5 7.25C5.5 8.07845 6.17155 8.75 7 8.75ZM7 10.25C5.34314 10.25 4 8.90683 4 7.25C4 5.59314 5.34314 4.25 7 4.25C8.65683 4.25 10 5.59314 10 7.25C10 8.90683 8.65683 10.25 7 10.25Z" fill="black" />
                            </svg>
                            <p className=' font-normal ' >Proof of address</p>
                        </div>
                        <div className=' flex items-center gap-3 ' >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 15.5C3.85786 15.5 0.5 12.1421 0.5 8C0.5 3.85786 3.85786 0.5 8 0.5C12.1421 0.5 15.5 3.85786 15.5 8C15.5 12.1421 12.1421 15.5 8 15.5ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8.75 8H11.75V9.5H7.25V4.25H8.75V8Z" fill="black" />
                            </svg>
                            <p className=' font-normal ' >Review time: 72 hours</p>
                        </div>
                    </div>
                    <button disabled={true} className=' bg-[#98A2B3] text-white  w-full h-[56px] mt-10 ' >Coming Soon</button>
                </div>
            </div>
            <ModalLayout open={open} size={size} close={setOpen}>
                <VerificationModal close={setOpen} />
            </ModalLayout>
            {isShow && (
                <div className=' fixed lg:hidden inset-0 z-[300] overflow-y-auto ' > 
                    <VerificationModal close={setIsShow}/>
                </div>
            )}
        </div>
    )
}
