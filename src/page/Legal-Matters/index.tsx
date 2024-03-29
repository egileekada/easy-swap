// import React from 'react'
import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function LegalMatters() {

    const navigate = useNavigate()

    return (
        <div className=' w-full h-screen relative overflow-x-hidden' >
            <Helmet>
                <script type="text/javascript">{`
                    var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                    (function(){
                    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                    s1.async=true;
                    s1.src='https://embed.tawk.to/647b0a547957702c744b8a2e/1h20a0nu5';
                    s1.charset='UTF-8';
                    s1.setAttribute('crossorigin','*');
                    s0.parentNode.insertBefore(s1,s0);
                    })();`}
                </script>
            </Helmet>
            <Navbar />
            <div className=' w-full flex justify-center  px-6 ' > 
                <div className=' max-w-[1240px] flex-1 pt-9 ' > 
                    <p className=' text-[36px] font-bold text-black ' >Legal matters of Ezyswap</p>
                    <div role='button' onClick={()=> navigate("/termofservice")} className=' mt-9 flex items-center gap-4 ' >
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.8611 1.39057C10.8495 0.731631 12.1336 0.717971 13.1358 1.35573L17.291 3.99994H18.9998C19.5521 3.99994 19.9998 4.44766 19.9998 4.99994V13.9999C19.9998 14.5522 19.5521 14.9999 18.9998 14.9999H17.4801C17.5396 15.9472 17.0933 16.9102 16.1955 17.4489L11.1021 20.505C10.4591 20.8907 9.6609 20.8817 9.0314 20.4974C8.3311 21.1167 7.2531 21.1849 6.47104 20.5704L1.33028 16.5312C0.56387 15.9291 0.37006 14.9003 0.76579 14.0847C0.28248 13.7057 0 13.1254 0 12.5109V5C0 4.44772 0.44772 4 1 4H5.94693L9.8611 1.39057ZM2.17264 12.6452L2.86467 12.0397C4.09488 10.9632 5.96042 11.0698 7.06001 12.2794L9.7622 15.2518C10.6317 16.2083 10.7903 17.6135 10.1579 18.739L15.1665 15.7339C15.4479 15.5651 15.5497 15.2276 15.4448 14.9433L11.0177 8.74551C10.769 8.39736 10.3264 8.24598 9.9166 8.36892L7.43135 9.1145C6.37425 9.4316 5.22838 9.1427 4.44799 8.36235L4.15522 8.06958C3.58721 7.50157 3.44032 6.69318 3.67935 6H2V12.5109L2.17264 12.6452ZM12.0621 3.04306C11.728 2.83047 11.3 2.83502 10.9705 3.05467L5.56943 6.65537L5.8622 6.94814C6.12233 7.20827 6.50429 7.30456 6.85666 7.19885L9.3419 6.45327C10.5713 6.08445 11.8992 6.53859 12.6452 7.58303L16.5144 12.9999H17.9998V5.99994H17.291C16.9106 5.99994 16.5381 5.89148 16.2172 5.68727L12.0621 3.04306ZM4.18168 13.5448L2.56593 14.9586L7.70669 18.9978L8.4106 17.7659C8.6256 17.3897 8.5738 16.9178 8.2823 16.5971L5.58013 13.6247C5.2136 13.2215 4.59175 13.186 4.18168 13.5448Z" fill="black"/>
                        </svg>
                        <p className=' text-[24px] font-medium ' >Terms of service</p>
                    </div>
                    <div role='button' onClick={()=> navigate("/privacy-policy")} className=' mt-4 flex items-center gap-4 ' >
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 10C17.2091 10 19 11.7909 19 14C19 16.2091 17.2091 18 15 18C12.7909 18 11 16.2091 11 14H9C9 16.2091 7.20914 18 5 18C2.79086 18 1 16.2091 1 14C1 11.7909 2.79086 10 5 10C6.48052 10 7.77317 10.8043 8.4648 11.9999H11.5352C12.2268 10.8043 13.5195 10 15 10ZM5 12C3.89543 12 3 12.8954 3 14C3 15.1046 3.89543 16 5 16C6.10457 16 7 15.1046 7 14C7 12.8954 6.10457 12 5 12ZM15 12C13.8954 12 13 12.8954 13 14C13 15.1046 13.8954 16 15 16C16.1046 16 17 15.1046 17 14C17 12.8954 16.1046 12 15 12ZM14 0C16.2091 0 18 1.79086 18 4V7H20V9H0V7H2V4C2 1.79086 3.79086 0 6 0H14ZM14 2H6C4.94564 2 4 2.95 4 4V7H16V4C16 2.94564 15.05 2 14 2Z" fill="black"/>
                        </svg>
                        <p className=' text-[24px] font-medium ' >Privacy policy</p>
                    </div>
                    <div role='button' onClick={()=> navigate("/kyc-policy")} className=' mt-4 flex items-center gap-4 ' > 
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 14H20V2H2V14ZM0 1C0 0.44772 0.44772 0 1 0H21C21.5523 0 22 0.44772 22 1V15C22 15.5523 21.5523 16 21 16H1C0.44772 16 0 15.5523 0 15V1ZM8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.5523 6.44772 7 7 7C7.55228 7 8 6.5523 8 6ZM10 6C10 7.6569 8.65685 9 7 9C5.34315 9 4 7.6569 4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6ZM7.0018 12C6.03503 12 5.1614 12.3907 4.52693 13.0251L3.11272 11.6109C4.10693 10.6167 5.4833 10 7.0018 10C8.52031 10 9.8967 10.6167 10.8909 11.6109L9.4767 13.0251C8.84221 12.3907 7.96858 12 7.0018 12ZM15.2071 10.7071L19.2071 6.7071L17.7929 5.29289L14.5 8.5858L12.7071 6.7929L11.2929 8.2071L13.7929 10.7071L14.5 11.4142L15.2071 10.7071Z" fill="#344054"/>
                        </svg>
                        <p className=' text-[24px] font-medium ' >KYC policy</p>
                    </div> 
                </div>  
            </div> 
            <img src='/images/legal.png' alt='legal' className=' absolute right-0 bottom-0 z-10 ' />         
        </div>
    )
}