import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../../components/Navbar'
import OtherFooter from '../../components/OtherFooter'

export default function About() {
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
                <div className=' max-w-[1240px] flex-col flex flex-1 pt-14 ' >
                    <p className=" text-[36px] font-bold text-center " >Our Story</p>
                    <p className=' w-full break-all text-base font-normal mt-6  ' >
                        At Ezyswap, We believe that utilizing cryptocurrencies for your everyday needs should be a breeze. Our mission is to simplify the process of sending, spending, and earning with crypto, making it accessible and enjoyable for all individuals.<br/><br/>
                        Whether you’re a crypto enthusiast, a freelancer, or an agency, our platform provides an easy way to send, spend, and earn crypto without worrying about transaction fees eating into your hand-earned funds.<br/><br/>
                        We are committed to delivering a fast straightforward, and enjoyable experience for every user. Whether you’re making online purchases or simply exploring the vast possibilities of cryptocurrency, Ezyswap ensures that your journey is as smooth as possible. Our intuitive interface and user-friendly features make it a breeze to navigate the crypto landscape, empowering you to make the most of your digital assets.
                        {/* At Ezyswap, our goal is to simplify the process of sending, spending, and earning with crypto. We're dedicated to creating the easiest way to utilize cryptocurrency for everyday requirements, ensuring that everyone can enjoy the advantages of web3.
                        <br/><br/>
                        Our mission is to make crypto accessible and enjoyable for all individuals. We are committed to delivering a fast, straightforward, and enjoyable experience, whether you're making online purchases or simply exploring the world of cryptocurrency. */}
                    </p>
                    <p className=' text-[36px] font-bold text-center mt-16 ' >Meet the team</p>
                    <div className=' w-full lg:w-fit flex flex-col items-center lg:grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto mt-10 ' >
                        <div className=' w-full lg:w-[300px] md:w-[50%] bg-[#3031791A] px-6 rounded-[24px] py-10 flex flex-col items-center  ' >
                            <div className=' w-[158px] h-[158px] rounded-full bg-[#2F327A]' >
                                <img alt='img1' src='images/Adeniyi.png' className=' w-full h-full rounded-full ' />
                            </div>
                            <div className=' w-full flex items-center mt-6 ' >
                                <div className=' w-full block ' >
                                    <p className=' text-[18px] font-bold  ' >Adeniyi Olowoporoku</p>
                                    <p className=' text-[16px] font-semibold  ' >Chief Operational Officer</p>
                                </div>
                                <div className=' w-fit ml-4 ' >
                                    <a target="_blank" href="#" >
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z" fill="white"/>
                                            <path d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z" fill="#303179"/>
                                            <path d="M27.4186 32.3126H31.7634C31.9208 32.3126 32.0718 32.2501 32.1832 32.1388C32.2945 32.0274 32.3571 31.8765 32.3571 31.719L32.3594 22.5393C32.3594 17.7414 31.3255 14.0535 25.7186 14.0535C23.5872 13.9742 21.5772 15.0729 20.4925 16.9076C20.4872 16.9165 20.4792 16.9235 20.4696 16.9274C20.4599 16.9313 20.4493 16.9319 20.4393 16.9292C20.4293 16.9265 20.4205 16.9206 20.4141 16.9124C20.4078 16.9042 20.4043 16.8941 20.4042 16.8837V15.0902C20.4042 14.9327 20.3417 14.7817 20.2303 14.6703C20.119 14.559 19.9679 14.4964 19.8105 14.4964H15.6873C15.5298 14.4964 15.3788 14.559 15.2675 14.6703C15.1561 14.7817 15.0936 14.9327 15.0936 15.0902V31.7181C15.0936 31.8756 15.1561 32.0266 15.2675 32.138C15.3788 32.2493 15.5298 32.3119 15.6873 32.3119H20.0318C20.1893 32.3119 20.3403 32.2493 20.4516 32.138C20.563 32.0266 20.6255 31.8756 20.6255 31.7181V23.4987C20.6255 21.1746 21.0664 18.9239 23.9477 18.9239C26.7881 18.9239 26.8249 21.5833 26.8249 23.6492V31.7189C26.8249 31.8763 26.8874 32.0274 26.9988 32.1387C27.1101 32.2501 27.2612 32.3126 27.4186 32.3126ZM5.64062 8.85088C5.64062 10.6121 7.09041 12.0611 8.85162 12.0611C10.6124 12.061 12.0613 10.6111 12.0613 8.85029C12.061 7.08952 10.6119 5.64062 8.85103 5.64062C7.08967 5.64062 5.64062 7.08982 5.64062 8.85088ZM6.6736 32.3126H11.0239C11.1813 32.3126 11.3324 32.2501 11.4437 32.1387C11.5551 32.0274 11.6176 31.8763 11.6176 31.7189V15.0902C11.6176 14.9327 11.5551 14.7817 11.4437 14.6703C11.3324 14.559 11.1813 14.4964 11.0239 14.4964H6.6736C6.51613 14.4964 6.36511 14.559 6.25376 14.6703C6.14241 14.7817 6.07985 14.9327 6.07985 15.0902V31.7189C6.07985 31.8763 6.14241 32.0274 6.25376 32.1387C6.36511 32.2501 6.51613 32.3126 6.6736 32.3126Z" fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=' w-full lg:w-[300px] md:w-[50%] bg-[#3031791A] px-6 rounded-[24px] py-10 flex flex-col items-center  ' >
                            <div className=' w-[158px] h-[158px] rounded-full bg-[#2F327A]' >
                                <img alt='img1' src='images/Chinedu.png' className=' w-full h-full rounded-full ' />
                            </div>
                            <div className=' w-full flex items-center mt-6 ' >
                                <div className=' w-full block ' >
                                    <p className=' text-[18px] font-bold  ' >Chinedu Nwakwo</p>
                                    <p className=' text-[16px] font-semibold  ' >Business Manager</p>
                                </div>
                                <div className=' w-fit ml-4 ' >
                                    <a target="_blank" href="https://www.linkedin.com/in/nwankwo-chinedu-anthony-892755164" >
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z" fill="white"/>
                                            <path d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z" fill="#303179"/>
                                            <path d="M27.4186 32.3126H31.7634C31.9208 32.3126 32.0718 32.2501 32.1832 32.1388C32.2945 32.0274 32.3571 31.8765 32.3571 31.719L32.3594 22.5393C32.3594 17.7414 31.3255 14.0535 25.7186 14.0535C23.5872 13.9742 21.5772 15.0729 20.4925 16.9076C20.4872 16.9165 20.4792 16.9235 20.4696 16.9274C20.4599 16.9313 20.4493 16.9319 20.4393 16.9292C20.4293 16.9265 20.4205 16.9206 20.4141 16.9124C20.4078 16.9042 20.4043 16.8941 20.4042 16.8837V15.0902C20.4042 14.9327 20.3417 14.7817 20.2303 14.6703C20.119 14.559 19.9679 14.4964 19.8105 14.4964H15.6873C15.5298 14.4964 15.3788 14.559 15.2675 14.6703C15.1561 14.7817 15.0936 14.9327 15.0936 15.0902V31.7181C15.0936 31.8756 15.1561 32.0266 15.2675 32.138C15.3788 32.2493 15.5298 32.3119 15.6873 32.3119H20.0318C20.1893 32.3119 20.3403 32.2493 20.4516 32.138C20.563 32.0266 20.6255 31.8756 20.6255 31.7181V23.4987C20.6255 21.1746 21.0664 18.9239 23.9477 18.9239C26.7881 18.9239 26.8249 21.5833 26.8249 23.6492V31.7189C26.8249 31.8763 26.8874 32.0274 26.9988 32.1387C27.1101 32.2501 27.2612 32.3126 27.4186 32.3126ZM5.64062 8.85088C5.64062 10.6121 7.09041 12.0611 8.85162 12.0611C10.6124 12.061 12.0613 10.6111 12.0613 8.85029C12.061 7.08952 10.6119 5.64062 8.85103 5.64062C7.08967 5.64062 5.64062 7.08982 5.64062 8.85088ZM6.6736 32.3126H11.0239C11.1813 32.3126 11.3324 32.2501 11.4437 32.1387C11.5551 32.0274 11.6176 31.8763 11.6176 31.7189V15.0902C11.6176 14.9327 11.5551 14.7817 11.4437 14.6703C11.3324 14.559 11.1813 14.4964 11.0239 14.4964H6.6736C6.51613 14.4964 6.36511 14.559 6.25376 14.6703C6.14241 14.7817 6.07985 14.9327 6.07985 15.0902V31.7189C6.07985 31.8763 6.14241 32.0274 6.25376 32.1387C6.36511 32.2501 6.51613 32.3126 6.6736 32.3126Z" fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className=' w-full lg:w-[300px] md:w-[50%] bg-[#3031791A] px-6 rounded-[24px] py-10 flex flex-col items-center  ' >
                            <div className=' w-[158px] h-[158px] rounded-full bg-[#2F327A]' >
                                <img alt='img1' src='images/Kelz.png' className=' w-full h-full rounded-full ' />
                            </div>
                            <div className=' w-full flex items-center mt-6 ' >
                                <div className=' w-full block ' >
                                    <p className=' text-[18px] font-bold  ' >Kelechukwu Nwokoro</p>
                                    <p className=' text-[16px] font-semibold  '>Compliance Officer</p>
                                </div>
                                <div className=' w-fit ml-4 ' >
                                    <a target="_blank" href="https://www.linkedin.com/in/kelechi-cletus-79287916a" >
                                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z" fill="white"/>
                                            <path d="M29.0938 0H8.90625C3.98746 0 0 3.98746 0 8.90625V29.0938C0 34.0125 3.98746 38 8.90625 38H29.0938C34.0125 38 38 34.0125 38 29.0938V8.90625C38 3.98746 34.0125 0 29.0938 0Z" fill="#303179"/>
                                            <path d="M27.4186 32.3126H31.7634C31.9208 32.3126 32.0718 32.2501 32.1832 32.1388C32.2945 32.0274 32.3571 31.8765 32.3571 31.719L32.3594 22.5393C32.3594 17.7414 31.3255 14.0535 25.7186 14.0535C23.5872 13.9742 21.5772 15.0729 20.4925 16.9076C20.4872 16.9165 20.4792 16.9235 20.4696 16.9274C20.4599 16.9313 20.4493 16.9319 20.4393 16.9292C20.4293 16.9265 20.4205 16.9206 20.4141 16.9124C20.4078 16.9042 20.4043 16.8941 20.4042 16.8837V15.0902C20.4042 14.9327 20.3417 14.7817 20.2303 14.6703C20.119 14.559 19.9679 14.4964 19.8105 14.4964H15.6873C15.5298 14.4964 15.3788 14.559 15.2675 14.6703C15.1561 14.7817 15.0936 14.9327 15.0936 15.0902V31.7181C15.0936 31.8756 15.1561 32.0266 15.2675 32.138C15.3788 32.2493 15.5298 32.3119 15.6873 32.3119H20.0318C20.1893 32.3119 20.3403 32.2493 20.4516 32.138C20.563 32.0266 20.6255 31.8756 20.6255 31.7181V23.4987C20.6255 21.1746 21.0664 18.9239 23.9477 18.9239C26.7881 18.9239 26.8249 21.5833 26.8249 23.6492V31.7189C26.8249 31.8763 26.8874 32.0274 26.9988 32.1387C27.1101 32.2501 27.2612 32.3126 27.4186 32.3126ZM5.64062 8.85088C5.64062 10.6121 7.09041 12.0611 8.85162 12.0611C10.6124 12.061 12.0613 10.6111 12.0613 8.85029C12.061 7.08952 10.6119 5.64062 8.85103 5.64062C7.08967 5.64062 5.64062 7.08982 5.64062 8.85088ZM6.6736 32.3126H11.0239C11.1813 32.3126 11.3324 32.2501 11.4437 32.1387C11.5551 32.0274 11.6176 31.8763 11.6176 31.7189V15.0902C11.6176 14.9327 11.5551 14.7817 11.4437 14.6703C11.3324 14.559 11.1813 14.4964 11.0239 14.4964H6.6736C6.51613 14.4964 6.36511 14.559 6.25376 14.6703C6.14241 14.7817 6.07985 14.9327 6.07985 15.0902V31.7189C6.07985 31.8763 6.14241 32.0274 6.25376 32.1387C6.36511 32.2501 6.51613 32.3126 6.6736 32.3126Z" fill="white"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OtherFooter />
        </div>
    )
}
