// import React from 'react'
import Navbar from '../../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import OtherFooter from '../../../components/OtherFooter'

export default function Policy() {

    const navigate = useNavigate()
    
    return (
        <div className=' w-full h-screen relative overflow-x-hidden   ' >
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
                            <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15 10C17.2091 10 19 11.7909 19 14C19 16.2091 17.2091 18 15 18C12.7909 18 11 16.2091 11 14H9C9 16.2091 7.20914 18 5 18C2.79086 18 1 16.2091 1 14C1 11.7909 2.79086 10 5 10C6.48052 10 7.77317 10.8043 8.4648 11.9999H11.5352C12.2268 10.8043 13.5195 10 15 10ZM5 12C3.89543 12 3 12.8954 3 14C3 15.1046 3.89543 16 5 16C6.10457 16 7 15.1046 7 14C7 12.8954 6.10457 12 5 12ZM15 12C13.8954 12 13 12.8954 13 14C13 15.1046 13.8954 16 15 16C16.1046 16 17 15.1046 17 14C17 12.8954 16.1046 12 15 12ZM14 0C16.2091 0 18 1.79086 18 4V7H20V9H0V7H2V4C2 1.79086 3.79086 0 6 0H14ZM14 2H6C4.94564 2 4 2.95 4 4V7H16V4C16 2.94564 15.05 2 14 2Z" fill="black"/>
                            </svg>
                            <p className=' text-[24px] font-medium ' >Privacy policy</p>
                        </div>
                        {/* <div className=' w-full mt-8 font-normal   ' >
                            At our platform, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide to us.
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >1. Information Collection:</span><br/>
                            - We may collect personal information such as your name, email address, and contact details when you register an account or use our services.<br/>
                            - We may also collect non-personal information such as your IP address, browser type, and device information for analytics purposes.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >2. Information Use:</span><br/>
                            - We use the information collected to provide and improve our services, customize your experience, and communicate with you.<br/>
                            - We may use your email address to send important updates, newsletters, or promotional materials related to our platform. You can opt out of receiving such communications at any time.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >3. Information Sharing:</span><br/>
                            - We do not sell, trade, or rent your personal information to third parties without your consent, except as required by law or in connection with legal proceedings.<br/>
                            - We may share your information with trusted third-party service providers who assist us in operating our platform and delivering services to you.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >4. Data Security:</span><br/>
                            - We implement industry-standard security measures to protect your personal information from unauthorized access, loss, or misuse.<br/>
                            - However, please note that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >5. Cookies and Tracking Technologies:</span><br/>
                            - We may use cookies and similar tracking technologies to enhance your experience and gather information about how you interact with our platform.<br/>
                            - You can modify your browser settings to decline cookies, but this may affect certain functionalities of our platform.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >6. Children's Privacy:</span><br/>
                            - Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have unintentionally collected such information, please contact us immediately.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >7. Changes to the Privacy Policy:</span><br/>
                            - We reserve the right to update or modify this Privacy Policy at any time. Any changes will be effective upon posting the revised policy on our platform.<br/>
                            <br/><br/>
                            It is important that you read and understand our full Privacy Policy. By using our services, you consent to the collection, use, and disclosure of your information as described in this policy. If you have any questions or concerns regarding our privacy practices, please contact us.<br/>
                            <br/><br/>
                            Please read our full Terms of Service for more detailed information. By using our platform, you acknowledge that you have read, understood, and agreed to these terms. If you do not agree to these terms, please refrain from using our services.<br/>
                        </div> */} 
                        <div className=' w-full mt-8 font-normal   ' >
                            Effective Date: @May 27, 2023
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Introduction</span><br/><br/>
                            Ezyswap Solutions Limited (herein referred to as “Ezyswap”, “us”, “we” or “our”) operates this website (“the Service”).<br/><br/>
                            We strive to maintain the highest standards of integrity in all our operations and are dedicated to protecting our customers’ and online visitors’ privacy on our service. This page informs you of our policies regarding collecting, using, and disclosing personal data when you use our Service and the choices you have associated with that data.<br/><br/>
                            We use your data to provide and improve the Service. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as our Terms of service. We are committed to protecting your Personal Data while You use this Application.<br/><br/>
                            We recognize that your privacy is important. This document outlines the types of personal information we receive and collect when you use the service and some of the steps we take to safeguard information. We hope this will help you make an informed decision about sharing personal information with us.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Types of Data Collection</span><br/><br/>
                            We collect different types of information from the visitors to our website voluntarily. The collection of the information is to provide and improve our service to you, and such information includes but is not limited to:<br/><br/>
                            - Personal identification information such as your full name, date of birth, nationality, cellphone or mobile number, email address, place of residence (and/or proof of residence), employment status, the industry of employment and/or national identification number;<br/>
                            - Information for purposes of biometric identification, such as the selfie you provide to us when creating your Ezyswap account.<br/>
                            - National identity documentation such as a copy of your national identity card, drivers’ license or passport and/or any other information deemed necessary to comply with our legal obligations under financial or anti-money laundering laws;<br/>
                            - Transaction information such as your transaction data on your Ezyswap account and information on the recipient of any transaction(s);<br/>
                            - Correspondence such as information provided to us when engaging with our customer support and/or responses to surveys;<br/>
                            - Usage, device and location information such as cookies, geolocation information, browser name and version information, IP address information, device fingerprint data, authentication data and/or clickstream data.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >This information is collected as follows;</span><br/><br/>
                            When you provide it to us, such as when you sign up for a Ezyswap account, use our products and services, or take part in customer surveys, competitions and promotions;<br/>
                            When you communicate with us by email, chat, telephone or any other means, we collect the communication and any personal data provided in it;<br/>
                            When you use the Ezyswap platform, we collect information on your transactions and usage of your Ezyswap account;<br/>
                            when we obtain information from third parties such as identity verification services, credit reference agencies, regulatory and enforcement agencies and public sources.<br/><br/>
                            The information collected is internally reviewed, used to improve the content of our website, notify our visitors of updates, and respond to visitor inquiries. Once information is reviewed, it is discarded or stored in our files. If we make material changes in collecting personally identifiable information, we will inform you by placing a notice on our site. Personal information received from any visitor will be used only for internal purposes and will not be sold or provided to third parties.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Use/Processing of Personal Data</span><br/><br/>
                            We will only process your personal data to carry out our lawful business activities. In doing so, we rely on one or more of the following lawful grounds for processing your personal data:<br/><br/>
                            Contractual necessity: We may process your personal data where it is necessary for us to provide our products and services to you or to otherwise comply with our obligations under Ezyswap’s Terms of use.<br/><br/>
                            Consent: In some cases, we will only process your personal data where you provide us with your express consent for such processing.‍<br/><br/>
                            Legal obligation: In some cases, we may need to process your personal data to comply with an obligation imposed by law.<br/><br/>
                            Legitimate interest: In some cases, we may need to process your personal data where it is in our legitimate legal interests to do so.<br/><br/>
                            More specifically, we may process your personal data for one or more of the following purposes.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Transfer of Data</span><br/><br/>
                            Your information, including Personal Data, may be transferred to and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.<br/><br/>
                            Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. Ezyswap will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy. Any personal information you provide to us, including and similar to your name, address, telephone number and e-mail address, will not be released, sold, or rented to any entities or individuals except as noted below.<br/><br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' ></span>Storage of Personal Data<br/><br/>
                            We take the security of the Personal Data we collect very seriously. We take reasonable measures to reduce the risk of accidental destruction, loss or unauthorised access to such information. However, please note that no system involving the transmission of information via electronic storage systems or the internet is entirely secure.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Disclosure of Personal Data</span><br/><br/>
                            We may share your personal data with:<br/><br/>
                            - Any person that works for Ezyswap;<br/>
                            - Financial and other institutions we partner with to provide our products and services;<br/>
                            - Companies and organizations that provide third-party services to us, including technical infrastructure, marketing and analytics, and web and app development;<br/>
                            - Companies and organisations that assist us with identity verification, background screening and due diligence.<br/>
                            - Our professional advisers, consultants and other similar services.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >We will otherwise treat your personal data as private and confidential and will not share it with other parties except:</span><br/><br/>
                            - Where you have permitted us to do so;<br/>
                            - Where we believe it is reasonably necessary to comply with any law, regulation, legal process or governmental request, to enforce our Terms of use or other agreements, or to protect the rights, property, or safety of us, our customers or others;<br/>
                            - Where we may transfer rights and obligations according to our agreement with you.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Service providers</span><br/><br/>
                            We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), provide service on our behalf, perform Service-related services, or assist us in analysing how our Service is used.‍<br/><br/>
                            These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >External sites</span><br/><br/>
                            Our Service may contain links to other sites not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.‍<br/><br/>
                            We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Children's policy</span><br/><br/>
                            Our Service does not address anyone under 18 ("Children"). We do not knowingly collect personally identifiable information from anyone under 18. If you are a parent or guardian and know that your child has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we remove that information from our servers.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' ></span>Changes to policy<br/><br/>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. We will notify you via email and/or by a notice on our Service before the change becomes effective and update the "effective date" at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when posted on this page.
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Client's liability</span><br/><br/>
                            The security of your data is important to us. But remember that no method of transmission over the internet or method of electronic storage is 100% secure.<br/><br/>
                            While we do our best to protect your personal information, we cannot guarantee the security of any information that you transmit to us. You are solely responsible for maintaining the secrecy of any passwords or other account information. By using the Service, you agree to the collection and use of information in accordance with this policy.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Contact us</span><br/><br/>
                            If you have any questions about this Privacy Policy, please contact us via ezyswapsolutionsltd@gmail.com<br/>
                        </div>
                    </div>
                </div>
            </div>
                <OtherFooter />
        </div>
    )
}
