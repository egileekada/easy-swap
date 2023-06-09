import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'

export default function KycPolicy() {

    const navigate = useNavigate()

    return (
        <div className=' w-full h-screen relative overflow-x-hidden' >
            <div className=' w-full top-0 sticky ' >
                <Navbar /> 
            </div>
            <div className=' w-full flex justify-center px-6 ' > 
                <div className=' max-w-[1240px] flex-1 py-9 ' > 
                    <div className=' flex items-center gap-5 ' >  
                        <svg role='button' onClick={()=> navigate(-1)} width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9301 8.66573H4.74465L9.69853 2.8524C9.93017 2.58011 10.0416 2.22907 10.0083 1.8765C9.97508 1.52393 9.79982 1.19872 9.52112 0.972399C9.24242 0.746081 8.88312 0.637198 8.52226 0.669705C8.16139 0.702211 7.82853 0.873443 7.59688 1.14573L0.773355 9.14573C0.727447 9.20936 0.686395 9.27621 0.650531 9.34573C0.650531 9.4124 0.650532 9.4524 0.555002 9.51907C0.493145 9.67194 0.460757 9.83468 0.459473 9.99907C0.460757 10.1635 0.493145 10.3262 0.555002 10.4791C0.555002 10.5457 0.555002 10.5857 0.650531 10.6524C0.686395 10.7219 0.727447 10.7888 0.773355 10.8524L7.59688 18.8524C7.7252 19.0029 7.88588 19.1239 8.0675 19.2069C8.24912 19.2899 8.44722 19.3327 8.64771 19.3324C8.96657 19.333 9.27559 19.2245 9.52112 19.0257C9.65931 18.9138 9.77354 18.7763 9.85726 18.6212C9.94099 18.4661 9.99257 18.2963 10.0091 18.1217C10.0255 17.9471 10.0066 17.771 9.9533 17.6035C9.90002 17.436 9.81344 17.2805 9.69853 17.1457L4.74465 11.3324H20.9301C21.292 11.3324 21.6391 11.1919 21.8951 10.9419C22.151 10.6918 22.2948 10.3527 22.2948 9.99907C22.2948 9.64544 22.151 9.3063 21.8951 9.05626C21.6391 8.80621 21.292 8.66573 20.9301 8.66573Z" fill="black"/>
                        </svg>
                        <p className=' text-[36px] font-bold text-black ' >Legal matters of Ezyswap</p>
                    </div>
                    <div className=' lg:pl-[40px] pt-9 ' >
                        <div role='button' onClick={()=> navigate("/termofservice")} className=' mt-9 flex items-center gap-4 ' >
                            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 14H20V2H2V14ZM0 1C0 0.44772 0.44772 0 1 0H21C21.5523 0 22 0.44772 22 1V15C22 15.5523 21.5523 16 21 16H1C0.44772 16 0 15.5523 0 15V1ZM8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.5523 6.44772 7 7 7C7.55228 7 8 6.5523 8 6ZM10 6C10 7.6569 8.65685 9 7 9C5.34315 9 4 7.6569 4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6ZM7.0018 12C6.03503 12 5.1614 12.3907 4.52693 13.0251L3.11272 11.6109C4.10693 10.6167 5.4833 10 7.0018 10C8.52031 10 9.8967 10.6167 10.8909 11.6109L9.4767 13.0251C8.84221 12.3907 7.96858 12 7.0018 12ZM15.2071 10.7071L19.2071 6.7071L17.7929 5.29289L14.5 8.5858L12.7071 6.7929L11.2929 8.2071L13.7929 10.7071L14.5 11.4142L15.2071 10.7071Z" fill="#344054"/>
                            </svg>
                            <p className=' text-[24px] font-medium ' >KYC policy</p>
                        </div>
                        <div className=' w-full mt-8 font-normal   ' >
                            Our platform is committed to ensuring a safe and secure environment for our users. To comply with legal and regulatory requirements and prevent fraudulent activities, we have implemented a KYC (Know Your Customer) policy. This policy outlines our procedures for verifying the identity of our users.
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >1. User Identification:</span><br/>
                            - When registering an account, you will be required to provide accurate and up-to-date personal information.<br/>
                            - We may request additional documentation or proof of identity to verify the information provided.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >2. Document Verification:</span><br/>
                            - We use a secure and reliable verification process to authenticate the documents you submit.<br/>
                            - Acceptable identification documents may include government-issued IDs, passports, or other valid identification forms.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >3. Data Protection:</span><br/>
                            - We handle your personal information with the utmost care and in accordance with applicable privacy laws.<br/>
                            - Your personal data will only be used for the purpose of verifying your identity and preventing fraudulent activities.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >4. Confidentiality:</span><br/>
                            - All information and documents provided during the KYC process will be treated as confidential and stored securely.<br/>
                            - Access to your personal information is limited to authorized personnel who are bound by strict confidentiality obligations.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >5. Compliance:</span><br/>
                            - Our KYC policy is designed to comply with relevant legal and regulatory obligations.<br/>
                            - We reserve the right to refuse or suspend services if the provided information or documentation is deemed suspicious or fails to meet our verification requirements.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >6. Updates:</span><br/>
                            - You are responsible for keeping your personal information up to date.<br/>
                            - In case of any changes to your personal details, you should promptly notify us to ensure the accuracy of your information.<br/>
                            <br/><br/>
                            It is important to adhere to our KYC policy to maintain the integrity of our platform and protect all users. By using our services, you acknowledge and agree to comply with our KYC procedures and provide accurate and authentic information when requested.<br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
