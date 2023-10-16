import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import OtherFooter from '../../../components/OtherFooter'

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
                        {/* <div className=' w-full mt-8 font-normal   ' >
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
                        </div> */}
                        <div className=' w-full mt-8 font-normal' >
                            Effective Date: @May  27, 2023
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Definitions</span><br/><br/>
                            - Money Laundering (ML): means the process by which criminals attempt to conceal the origin and/or illegitimate ownership of property and assets that are the proceeds of criminal activities.<br/>
                            - Terrorism Financing: includes both legitimate and illegitimate money characterised by concealment of the origin or intended criminal use of the funds.<br/>
                            - Know Your Customer (KYC): This entails obtaining and verifying customer identity, preservation of records of customers, mandatory disclosure of transactions to authorised statutory bodies.<br/>
                            - Nigeria Financial Intelligence Unit (NFIU): The Nigerian arm of the global Financial Intelligence Unit (FIU).<br/>
                            - Politically Exposed Persons (PEPs): Individuals who have been entrusted with prominent public functions in any country. Generally presenting a higher risk for potential involvement in bribery and corruption by virtue of their position and the influence that they may hold.<br/>
                            - Enterprise Risk management (ERM): includes the methods and processes used by organisations to manage risks and seize opportunities related to achieving their objectives.<br/>
                            - Client: includes any entity with a business relationship with the Company or any entity connected with a financial transaction that can pose significant reputational or other risks to the Company<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Policy mandate</span><br/><br/>
                            This policy is connected to a more comprehensive in-house Anti-Money Laundering (AML), Know Your Customer (KYC) and the combating the Financing of Terrorism Policy (CFT). It sets out an abbreviated version of the guidelines for Ezyswap Solutions Limited (herein referred to as ‘the Company’) compliance with AML/CFT obligations under the law, as well as regulatory directives. It prevents any transaction that facilitates criminal activities.<br/><br/>
                            Ezyswap Solutions Limited (Dba Ezyswap) understands that it has a vital role in preventing criminals from using our services to facilitate money laundering and terrorist financing. We are committed to detecting and avoiding money laundering and will cooperate fully with the Regulators and Law Enforcement Agencies where necessary.
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Policy description</span><br/><br/>
                            Money Laundering and financing terrorism are financial crimes with economic effects. This policy is to eradicate the adverse effects of criminal economic activity and promotes integrity and stability in financial markets. Compliance with this policy is also critical to preserving the Company’s corporate integrity, reputation and operational efficiency.<br/><br/>
                            <span className=' text-[#303179] font-bold ' >The purpose of this Policy is:</span><br/><br/>
                            - To guide the standard of conduct and practice that Ezyswap (Dba Ezyswap) must follow in implementing the AML, KYC, and CFT regulations.<br/>
                            - To protect the Company against fraud, reputation and other financial market risks.<br/>
                            - To minimise the risks faced by the Company from proceeds of crime<br/>
                            - To prevent money laundering and establish ERM systems to monitor the Company’s exposure to financial crime.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Compliance with policy</span><br/><br/>
                            The Company shall comply with the following:<br/><br/>
                            - Formulate and implement internal controls and other procedures that will deter criminals from using its facilities for money laundering and terrorist financing and ensure that its obligations under Nigerian and subsisting laws and Regulations are met.<br/>
                            - Embark on Enterprise Risk Management (ERM) and maintain an ERM register<br/>
                            - Designate a Money Laundering Reporting Officer (MLRO) with the relevant competence and independence to implement the Company’s AML/KYC compliance policy.<br/>
                            - Comply with the Money Laundering (Prohibition) Act, the Money Laundering (Prohibition) (Amendment) Act (together, the Money Laundering Act) and the Economic and Financial Crimes Commission Act.<br/>
                            - Identify and report any suspicious transactions from the criminal activities defined in AML/KYC Regulations.<br/>
                            - Ensure the implementation of the AML/KYC Act requirements is not inhibited through the Company’s Confidentiality Agreement or Policy.<br/>
                            - Effectively communicate and raise staff awareness on AML/KYC issues<br/>
                            - Establishing and maintaining a risk-based approach to assessing and managing money laundering and terrorist financing risks.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Know your client</span><br/><br/>
                            KYC is the due diligence that the Company must perform to identify their clients and ascertain relevant information before carrying out any financial businesses with them. The Company, in upholding its KYC policies, shall undertake the following:
                            <br/><br/>
                            - Establishing and maintaining a risk-based approach to Customer Due Diligence (CDD), Enhanced Due Diligence (EDD), including customer identification, verification and KYC procedures.<br/>
                            - Issue a KYC compliance form to clients.<br/>
                            - Obtain the necessary documents and information from every client<br/>
                            - Report suspicious activities and transactions to the regulatory authorities<br/>
                            - Update client information as and when available<br/>
                            - Identify the client and verify the client’s identity using reliable, independent source documents (e.g. passport data page, national ID card, voters card, utility bills stating their current postal address. e.t.c), data or information.<br/>
                            - Verify the legal status of business names, incorporated trustees and companies with the Corporate Affairs Commission.<br/>
                            - Refuse to transact business with “shell companies” as described under the International Conventions.<br/>
                            - Conduct due diligence for higher-risk clients, business relationships or transactions including PEP, cross border transactions and business relationships.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Record keeping and reporting</span><br/><br/>
                            The Company shall keep the record of a customer’s identification for at least six years after the closure of the account or the severance of relations with the customer.<br/><br/>
                            Upon request by a regulatory or law enforcement agency, the Company shall make available records related to AML/CFT compliance or its clients as soon as possible from the date of the request.<br/><br/>
                            If the company notices any illegal transaction, it shall:
                            <br/><br/>
                            - Draw up a report on the identity of the principal and the beneficiary or beneficiaries; <br/>
                            - Take appropriate action to prevent the laundering of the proceeds of criminal conduct;<br/>
                            - Send a copy of the report and action taken to the Nigerian Financial Intelligence Unit (NFIU);<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Politically Exposed Persons (PEPs)</span><br/><br/>
                            Business relationships with family members or close associates of PEPs involve reputation risks similar to those PEPs themselves. The Company shall evaluate the risks to its business operations when dealing with PEPs.<br/>
                            <br/><br/>
                            <span className=' text-[#303179] font-bold ' >Sanctions</span><br/><br/>
                            A breach of the AML/CFT is a severe offence and could lead to investigations, imposition of fines and criminal sanctions (including imprisonment) <br/>
                        </div>
                    </div>
                </div>
            </div>
            <OtherFooter />
        </div>
    )
}
