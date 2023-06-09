import React from 'react'
import Navbar from '../../../components/Navbar'
import { useNavigate } from 'react-router-dom'

export default function TermOfService() {

    const navigate = useNavigate()

    return (
        <div className=' w-full h-screen relative overflow-x-hidden   ' >
            <div className=' w-full top-0 sticky ' >
                <Navbar /> 
            </div>
            <div className=' w-full flex justify-center px-6  ' > 
                <div className=' max-w-[1240px] flex-1 py-9 ' > 
                    <div className=' flex items-center gap-5 ' >  
                        <svg role='button' onClick={()=> navigate(-1)} width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9301 8.66573H4.74465L9.69853 2.8524C9.93017 2.58011 10.0416 2.22907 10.0083 1.8765C9.97508 1.52393 9.79982 1.19872 9.52112 0.972399C9.24242 0.746081 8.88312 0.637198 8.52226 0.669705C8.16139 0.702211 7.82853 0.873443 7.59688 1.14573L0.773355 9.14573C0.727447 9.20936 0.686395 9.27621 0.650531 9.34573C0.650531 9.4124 0.650532 9.4524 0.555002 9.51907C0.493145 9.67194 0.460757 9.83468 0.459473 9.99907C0.460757 10.1635 0.493145 10.3262 0.555002 10.4791C0.555002 10.5457 0.555002 10.5857 0.650531 10.6524C0.686395 10.7219 0.727447 10.7888 0.773355 10.8524L7.59688 18.8524C7.7252 19.0029 7.88588 19.1239 8.0675 19.2069C8.24912 19.2899 8.44722 19.3327 8.64771 19.3324C8.96657 19.333 9.27559 19.2245 9.52112 19.0257C9.65931 18.9138 9.77354 18.7763 9.85726 18.6212C9.94099 18.4661 9.99257 18.2963 10.0091 18.1217C10.0255 17.9471 10.0066 17.771 9.9533 17.6035C9.90002 17.436 9.81344 17.2805 9.69853 17.1457L4.74465 11.3324H20.9301C21.292 11.3324 21.6391 11.1919 21.8951 10.9419C22.151 10.6918 22.2948 10.3527 22.2948 9.99907C22.2948 9.64544 22.151 9.3063 21.8951 9.05626C21.6391 8.80621 21.292 8.66573 20.9301 8.66573Z" fill="black"/>
                        </svg>
                        <p className=' text-[36px] font-bold text-black ' >Legal matters of Ezyswap</p>
                    </div>
                    <div className=' lg:pl-[40px] pt-9 ' >
                        <div role='button' onClick={()=> navigate("/termofservice")} className=' mt-9 flex items-center gap-4 ' >
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.8611 1.39057C10.8495 0.731631 12.1336 0.717971 13.1358 1.35573L17.291 3.99994H18.9998C19.5521 3.99994 19.9998 4.44766 19.9998 4.99994V13.9999C19.9998 14.5522 19.5521 14.9999 18.9998 14.9999H17.4801C17.5396 15.9472 17.0933 16.9102 16.1955 17.4489L11.1021 20.505C10.4591 20.8907 9.6609 20.8817 9.0314 20.4974C8.3311 21.1167 7.2531 21.1849 6.47104 20.5704L1.33028 16.5312C0.56387 15.9291 0.37006 14.9003 0.76579 14.0847C0.28248 13.7057 0 13.1254 0 12.5109V5C0 4.44772 0.44772 4 1 4H5.94693L9.8611 1.39057ZM2.17264 12.6452L2.86467 12.0397C4.09488 10.9632 5.96042 11.0698 7.06001 12.2794L9.7622 15.2518C10.6317 16.2083 10.7903 17.6135 10.1579 18.739L15.1665 15.7339C15.4479 15.5651 15.5497 15.2276 15.4448 14.9433L11.0177 8.74551C10.769 8.39736 10.3264 8.24598 9.9166 8.36892L7.43135 9.1145C6.37425 9.4316 5.22838 9.1427 4.44799 8.36235L4.15522 8.06958C3.58721 7.50157 3.44032 6.69318 3.67935 6H2V12.5109L2.17264 12.6452ZM12.0621 3.04306C11.728 2.83047 11.3 2.83502 10.9705 3.05467L5.56943 6.65537L5.8622 6.94814C6.12233 7.20827 6.50429 7.30456 6.85666 7.19885L9.3419 6.45327C10.5713 6.08445 11.8992 6.53859 12.6452 7.58303L16.5144 12.9999H17.9998V5.99994H17.291C16.9106 5.99994 16.5381 5.89148 16.2172 5.68727L12.0621 3.04306ZM4.18168 13.5448L2.56593 14.9586L7.70669 18.9978L8.4106 17.7659C8.6256 17.3897 8.5738 16.9178 8.2823 16.5971L5.58013 13.6247C5.2136 13.2215 4.59175 13.186 4.18168 13.5448Z" fill="black"/>
                            </svg>
                            <p className=' text-[24px] font-medium ' >Terms of service</p>
                        </div>
                        <div className=' w-full mt-8 font-normal   ' >
                            Welcome to our platform! By accessing or using our services, you agree to comply with the following terms and conditions:
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >1. User Responsibilities:</span><br/>
                            - You must be at least 18 years old to use our services.<br/>
                            - You are responsible for maintaining the confidentiality of your account information.<br/>
                            - You agree not to use our platform for any illegal or unauthorized activities.<br/>
                            - You are solely responsible for any content you upload or share on our platform.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >2. Platform Usage:</span><br/>
                            - Our services are provided on an "as is" and "as available" basis. We do not guarantee uninterrupted access to our platform.<br/>
                            - We reserve the right to modify or discontinue our services at any time without prior notice.<br/>
                            - We may collect and use your personal information in accordance with our Privacy Policy.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >3. Intellectual Property:</span><br/>
                            - All content on our platform, including logos, text, graphics, and images, is protected by copyright and other intellectual property laws.<br/>
                            - You may not reproduce, distribute, modify, or create derivative works of our content without our prior written consent.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >4. Limitation of Liability:</span><br/>
                            - We are not liable for any direct, indirect, incidental, or consequential damages arising from your use of our platform.<br/>
                            - We do not guarantee the accuracy, completeness, or reliability of any information on our platform.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >5. Termination:</span><br/>
                            - We reserve the right to terminate or suspend your access to our services at any time without prior notice.<br/>
                            - You may terminate your account by contacting our support team.<br/>
                            <br/><br/>
                            Please read our full Terms of Service for more detailed information. By using our platform, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree to these terms, please refrain from using our services.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}