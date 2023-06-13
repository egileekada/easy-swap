import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {

    const navigate = useNavigate()
    
    const controls = useAnimation(); 
    const controls2 = useAnimation(); 
    const controls3 = useAnimation(); 
    const controls4 = useAnimation(); 
    const [ ref, inView ]  = useInView();  
    const [ ref2, inView2 ] = useInView();     

    React.useEffect(() => { 
        if (inView) {
            controls.start({ x: 0});
        } 
        if (inView2) {
            controls2.start({ x: 0});
        }  
    }, [controls, controls2, controls3, controls4, inView, inView2]) 

    return (
        <>  
            <div className=' w-full bg-[#303179] flex flex-col items-center ' > 
                <div className='w-[1366px] max-[1366px]:w-full px-6 lg:px-20' > 
                    <div className=' w-full pt-8 lg:pt-20 gap-6 flex lg:flex-row flex-col bg-[#303179]  ' >
                        <motion.div ref={ref} initial={{x: -200}} animate={controls}  
                            transition={{ ease: "easeOut", duration: 1 }} className=' w-full ' >
                            <p className=' text-2xl lg:text-4xl font-semibold lg:leading-[50px] text-[#F8FAFC] lg:max-w-[430px] ' >Your easiest way to send, spend, and earn with crypto</p>
                            <div className=' flex items-center mt-8 gap-2 ' >
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5614 9.66624L9.40936 2.51424L11.2947 0.628906L21.6654 10.9996L11.2947 21.3702L9.40936 19.4849L16.5614 12.3329H0.332031V9.66624H16.5614Z" fill="#00BAF0"/>
                                </svg>
                                <p className=' text-lg text-[#00BAF0] ' >Got a question? Talk to us</p>
                            </div>
                            <div className=' flex items-center mt-6 gap-2 ' >
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.5614 9.66624L9.40936 2.51424L11.2947 0.628906L21.6654 10.9996L11.2947 21.3702L9.40936 19.4849L16.5614 12.3329H0.332031V9.66624H16.5614Z" fill="#00BAF0"/>
                                </svg>
                                <p className=' text-lg text-[#00BAF0] ' >Join our community</p>
                            </div>
                        </motion.div>
                        <motion.div ref={ref} initial={{x: +200}} animate={controls}  
                            transition={{ ease: "easeOut", duration: 1 }} className=' w-full flex flex-row lg:flex-col lg:gap-0 gap-6 lg:mt-0 mt-10  ' >
                            <div className=' w-full flex flex-col ' >
                                <p className=' text-[#F8FAFC] font-normal ' >Learn more about Easyswap</p>
                                <a href='#' className=' text-[#F8FAFC] !mt-6 ' >About Us</a>
                                <a href='/legal-matters' className=' text-[#F8FAFC] mt-4 ' >Policy & Terms</a>
                                <a href='#faq' className=' text-[#F8FAFC] mt-4 ' >FAQs</a>
                                <a href='#' className=' text-[#F8FAFC] mt-4 ' >Support</a>
                            </div>
                            <div className=' w-full lg:mt-[64px]  ' >
                                <a href='#' className=' text-[#F8FAFC] ' >Stay in touch</a>
                                <div className=' mt-4 grid lg:grid-cols-4 grid-cols-2 w-fit items-center gap-4 ' >
                                    <svg className=' lg:w-[41px] w-[30px] ' viewBox="0 0 41 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M28.5991 4.10023C27.079 4.09998 25.6196 4.69647 24.5349 5.76136C23.4502 6.82625 22.8268 8.27442 22.7991 9.79423L22.7431 12.9442C22.7398 13.1134 22.7008 13.2799 22.6286 13.4329C22.5565 13.5859 22.4528 13.7219 22.3243 13.832C22.1959 13.9421 22.0457 14.0238 21.8835 14.0718C21.7212 14.1197 21.5507 14.1328 21.3831 14.1102L18.2611 13.6862C14.1531 13.1262 10.2171 11.2342 6.44106 8.08823C5.24506 14.7082 7.58106 19.2942 13.2071 22.8322L16.7011 25.0282C16.8671 25.1326 17.005 25.276 17.1028 25.4459C17.2005 25.6159 17.2551 25.8072 17.2619 26.0032C17.2686 26.1992 17.2272 26.3938 17.1412 26.57C17.0553 26.7463 16.9276 26.8988 16.7691 27.0142L13.5851 29.3402C15.4791 29.4582 17.2771 29.3742 18.7691 29.0782C28.2051 27.1942 34.4791 20.0942 34.4791 8.38223C34.4791 7.42623 32.4551 4.10023 28.5991 4.10023ZM18.7991 9.72023C18.834 7.79233 19.4368 5.91757 20.5322 4.33067C21.6275 2.74378 23.1667 1.51527 24.9569 0.798963C26.7471 0.0826575 28.7089 -0.089612 30.5965 0.303723C32.4842 0.697059 34.2139 1.63852 35.5691 3.01023C36.9911 3.00023 38.2011 3.36023 40.9071 1.72023C40.2371 5.00023 39.9071 6.42423 38.4791 8.38223C38.4791 23.6662 29.0851 31.0982 19.5531 33.0002C13.0171 34.3042 3.51306 32.1622 0.789062 29.3182C2.17706 29.2102 7.81706 28.6042 11.0771 26.2182C8.31906 24.4002 -2.65894 17.9402 4.55506 0.572229C7.94106 4.52623 11.3751 7.21823 14.8551 8.64623C17.1711 9.59623 17.7391 9.57623 18.8011 9.72223L18.7991 9.72023Z" fill="#00BAF0"/>
                                    </svg>
                                    <svg className=' lg:w-[40px] w-[30px] ' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 14C18.4087 14 16.8826 14.6321 15.7574 15.7574C14.6321 16.8826 14 18.4087 14 20C14 21.5913 14.6321 23.1174 15.7574 24.2426C16.8826 25.3679 18.4087 26 20 26C21.5913 26 23.1174 25.3679 24.2426 24.2426C25.3679 23.1174 26 21.5913 26 20C26 18.4087 25.3679 16.8826 24.2426 15.7574C23.1174 14.6321 21.5913 14 20 14ZM20 10C22.6522 10 25.1957 11.0536 27.0711 12.9289C28.9464 14.8043 30 17.3478 30 20C30 22.6522 28.9464 25.1957 27.0711 27.0711C25.1957 28.9464 22.6522 30 20 30C17.3478 30 14.8043 28.9464 12.9289 27.0711C11.0536 25.1957 10 22.6522 10 20C10 17.3478 11.0536 14.8043 12.9289 12.9289C14.8043 11.0536 17.3478 10 20 10ZM33 9.5C33 10.163 32.7366 10.7989 32.2678 11.2678C31.7989 11.7366 31.163 12 30.5 12C29.837 12 29.2011 11.7366 28.7322 11.2678C28.2634 10.7989 28 10.163 28 9.5C28 8.83696 28.2634 8.20107 28.7322 7.73223C29.2011 7.26339 29.837 7 30.5 7C31.163 7 31.7989 7.26339 32.2678 7.73223C32.7366 8.20107 33 8.83696 33 9.5ZM20 4C15.052 4 14.244 4.014 11.942 4.116C10.374 4.19 9.322 4.4 8.346 4.78C7.478 5.116 6.852 5.518 6.186 6.186C5.56001 6.7908 5.07871 7.52917 4.778 8.346C4.398 9.326 4.188 10.376 4.116 11.942C4.012 14.15 4 14.922 4 20C4 24.948 4.014 25.756 4.116 28.058C4.19 29.624 4.4 30.678 4.778 31.652C5.118 32.522 5.518 33.148 6.182 33.812C6.856 34.484 7.482 34.886 8.342 35.218C9.33 35.6 10.382 35.812 11.942 35.884C14.15 35.988 14.922 36 20 36C24.948 36 25.756 35.986 28.058 35.884C29.622 35.81 30.676 35.6 31.652 35.222C32.518 34.884 33.148 34.482 33.812 33.818C34.486 33.144 34.888 32.518 35.22 31.658C35.6 30.672 35.812 29.618 35.884 28.058C35.988 25.85 36 25.078 36 20C36 15.052 35.986 14.244 35.884 11.942C35.81 10.378 35.6 9.322 35.22 8.346C34.9186 7.53 34.4381 6.79192 33.814 6.186C33.2095 5.55969 32.471 5.07833 31.654 4.778C30.674 4.398 29.622 4.188 28.058 4.116C25.85 4.012 25.078 4 20 4ZM20 0C25.434 0 26.112 0.0199999 28.244 0.12C30.374 0.22 31.824 0.554 33.1 1.05C34.42 1.558 35.532 2.246 36.644 3.356C37.661 4.35579 38.4479 5.56518 38.95 6.9C39.444 8.174 39.78 9.626 39.88 11.756C39.974 13.888 40 14.566 40 20C40 25.434 39.98 26.112 39.88 28.244C39.78 30.374 39.444 31.824 38.95 33.1C38.4494 34.4356 37.6622 35.6452 36.644 36.644C35.6439 37.6606 34.4346 38.4475 33.1 38.95C31.826 39.444 30.374 39.78 28.244 39.88C26.112 39.974 25.434 40 20 40C14.566 40 13.888 39.98 11.756 39.88C9.626 39.78 8.176 39.444 6.9 38.95C5.56465 38.4489 4.35505 37.6619 3.356 36.644C2.33881 35.6444 1.55186 34.4349 1.05 33.1C0.554 31.826 0.22 30.374 0.12 28.244C0.0259999 26.112 0 25.434 0 20C0 14.566 0.0199999 13.888 0.12 11.756C0.22 9.624 0.554 8.176 1.05 6.9C1.55047 5.56436 2.33761 4.35464 3.356 3.356C4.35534 2.33846 5.56486 1.55146 6.9 1.05C8.176 0.554 9.624 0.22 11.756 0.12C13.888 0.0259999 14.566 0 20 0Z" fill="#00BAF0"/>
                                    </svg>
                                    <svg className=' lg:w-[36px] w-[30px] ' width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 0H34C34.5304 0 35.0391 0.210714 35.4142 0.585786C35.7893 0.960859 36 1.46957 36 2V34C36 34.5304 35.7893 35.0391 35.4142 35.4142C35.0391 35.7893 34.5304 36 34 36H2C1.46957 36 0.960859 35.7893 0.585786 35.4142C0.210714 35.0391 0 34.5304 0 34V2C0 1.46957 0.210714 0.960859 0.585786 0.585786C0.960859 0.210714 1.46957 0 2 0ZM4 4V32H32V4H4ZM9 12C8.20435 12 7.44129 11.6839 6.87868 11.1213C6.31607 10.5587 6 9.79565 6 9C6 8.20435 6.31607 7.44129 6.87868 6.87868C7.44129 6.31607 8.20435 6 9 6C9.79565 6 10.5587 6.31607 11.1213 6.87868C11.6839 7.44129 12 8.20435 12 9C12 9.79565 11.6839 10.5587 11.1213 11.1213C10.5587 11.6839 9.79565 12 9 12ZM7 14H11V29H7V14ZM18 14.86C19.168 13.73 20.532 13 22 13C26.142 13 29 16.358 29 20.5V29H25V20.5C25 19.5717 24.6313 18.6815 23.9749 18.0251C23.3185 17.3687 22.4283 17 21.5 17C20.5717 17 19.6815 17.3687 19.0251 18.0251C18.3687 18.6815 18 19.5717 18 20.5V29H14V14H18V14.86Z" fill="#00BAF0"/>
                                    </svg>
                                    <svg className=' lg:w-[40px] w-[30px] ' viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.506 32.988L11.954 33.834C14.3959 35.2581 17.1732 36.0058 20 36C23.1645 36 26.258 35.0616 28.8891 33.3035C31.5203 31.5454 33.5711 29.0466 34.7821 26.1229C35.9931 23.1993 36.31 19.9823 35.6926 16.8786C35.0752 13.7749 33.5514 10.9239 31.3137 8.68629C29.0761 6.44865 26.2252 4.9248 23.1215 4.30744C20.0178 3.69007 16.8007 4.00693 13.8771 5.21793C10.9535 6.42893 8.45462 8.47969 6.69651 11.1109C4.93841 13.7421 4.00003 16.8355 4.00003 20C4.00003 22.872 4.75403 25.626 6.16803 28.048L7.01203 29.496L5.70603 34.298L10.506 32.988ZM0.00802676 40L2.71203 30.064C0.930303 27.0097 -0.00578127 23.536 2.68645e-05 20C2.68645e-05 8.954 8.95403 0 20 0C31.046 0 40 8.954 40 20C40 31.046 31.046 40 20 40C16.4656 40.0057 12.9933 39.0703 9.94003 37.29L0.00802676 40ZM12.782 10.616C13.05 10.596 13.32 10.596 13.588 10.608C13.696 10.616 13.804 10.628 13.912 10.64C14.23 10.676 14.58 10.87 14.698 11.138C15.294 12.49 15.874 13.852 16.434 15.218C16.558 15.522 16.484 15.912 16.248 16.292C16.0857 16.549 15.9101 16.7973 15.722 17.036C15.496 17.326 15.01 17.858 15.01 17.858C15.01 17.858 14.812 18.094 14.888 18.388C14.916 18.5 15.008 18.662 15.092 18.798L15.21 18.988C15.722 19.842 16.41 20.708 17.25 21.524C17.49 21.756 17.724 21.994 17.976 22.216C18.912 23.042 19.972 23.716 21.116 24.216L21.126 24.22C21.296 24.294 21.382 24.334 21.63 24.44C21.754 24.492 21.882 24.538 22.012 24.572C22.1464 24.6062 22.2878 24.5998 22.4185 24.5535C22.5492 24.5072 22.6632 24.4231 22.746 24.312C24.194 22.558 24.326 22.444 24.338 22.444V22.448C24.4386 22.3542 24.5581 22.283 24.6885 22.2392C24.8189 22.1953 24.9572 22.1799 25.094 22.194C25.214 22.202 25.336 22.224 25.448 22.274C26.51 22.76 28.248 23.518 28.248 23.518L29.412 24.04C29.608 24.134 29.786 24.356 29.792 24.57C29.8 24.704 29.812 24.92 29.766 25.316C29.702 25.834 29.546 26.456 29.39 26.782C29.2832 27.0045 29.1414 27.2084 28.97 27.386C28.7682 27.5979 28.5473 27.7907 28.31 27.962C28.2279 28.0237 28.1446 28.0837 28.06 28.142C27.8113 28.2998 27.5557 28.4466 27.294 28.582C26.7791 28.8555 26.2104 29.0126 25.628 29.042C25.258 29.062 24.888 29.09 24.516 29.07C24.5 29.07 23.38 28.896 23.38 28.896C20.5365 28.1481 17.9068 26.7469 15.7 24.804C15.248 24.406 14.83 23.978 14.402 23.552C12.622 21.782 11.278 19.872 10.462 18.068C10.0444 17.1826 9.81876 16.2188 9.80003 15.24C9.79178 14.0257 10.1887 12.8433 10.928 11.88C11.074 11.692 11.212 11.496 11.45 11.27C11.704 11.03 11.864 10.902 12.038 10.814C12.2694 10.6981 12.5218 10.63 12.78 10.614L12.782 10.616Z" fill="#00BAF0"/>
                                    </svg>
                                </div> 
                            </div>
                        </motion.div>
                    </div>
                    <div className=' w-full flex lg:items-center pb-8 pt-14 lg:pt-6 bg-[#303179] flex-col lg:flex-row lg:justify-between ' >
                        <svg width="172" height="39" viewBox="0 0 172 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.2422 24.3737C51.0374 24.1886 50.7263 24.2359 50.5767 24.4643C48.7534 27.2327 44.8469 30.4973 41.0822 31.592C37.4475 32.6474 35.3643 31.8913 34.7894 29.9105C34.1357 27.6619 36.6796 26.0631 40.1056 24.2792C45.2841 21.629 51.9707 18.2502 49.7615 10.6499C48.206 5.29821 42.1494 1.96669 33.7537 4.40823C32.5329 4.76265 31.4027 5.19583 30.3513 5.69201C24.3341 -0.54179 16.0447 -1.84526 8.64521 2.72672C-0.376672 8.29894 -2.4126 19.1402 2.89184 27.7328C8.59402 36.9673 18.7146 38.9954 27.5553 34.0139C30.0796 38.3181 35.7463 40.1728 43.3663 37.9558C48.9188 36.3412 53.7349 32.9349 56.2001 28.8473L51.2422 24.3737ZM8.33805 16.1906C8.28292 13.627 9.32254 10.8744 12.4729 8.92508C15.7414 6.9049 18.6595 7.1845 20.849 8.35014C22.5699 9.26769 22.6762 11.6935 21.0144 12.7213L12.1658 18.1872C10.5433 19.1874 8.38137 18.0927 8.33805 16.1906ZM14.8672 27.213C13.611 26.4215 13.6346 24.5706 14.8987 23.7909L26.3976 16.6868C30.9105 14.1389 31.0956 13.9814 35.5533 10.835C38.1406 9.00778 40.9011 10.5003 41.4406 12.3472C42.0155 14.328 39.7158 15.785 36.3606 17.5532C32.6432 19.4591 28.0318 21.8416 26.5787 25.9725C26.1889 26.2758 25.7911 26.5593 25.3895 26.8074C21.5145 29.2017 17.6986 29.0008 14.8672 27.213Z" fill="#00BAF0"/>
                            <path d="M76.1466 16.3368H65.6479C65.7188 17.278 66.0221 17.9947 66.5576 18.4948C67.0892 18.991 67.7469 19.2391 68.5266 19.2391C69.6844 19.2391 70.4877 18.7508 70.9406 17.7742H75.8788C75.6268 18.7705 75.17 19.6644 74.5084 20.4599C73.8468 21.2553 73.0198 21.8815 72.0275 22.3304C71.0311 22.7833 69.9206 23.0077 68.692 23.0077C67.2074 23.0077 65.8882 22.6927 64.7304 22.0587C63.5726 21.4247 62.6669 20.5229 62.0171 19.3454C61.3674 18.168 61.0405 16.7936 61.0405 15.2224C61.0405 13.6511 61.3634 12.2728 62.0053 11.0993C62.6472 9.9258 63.549 9.02008 64.7068 8.38606C65.8645 7.75205 67.1916 7.43701 68.6959 7.43701C70.1609 7.43701 71.4643 7.74417 72.6024 8.35849C73.7405 8.97282 74.6344 9.85098 75.2763 10.9891C75.9182 12.1271 76.2411 13.4582 76.2411 14.9782C76.2253 15.4114 76.1978 15.8643 76.1466 16.3368ZM71.4761 13.7574C71.4761 12.962 71.2044 12.328 70.661 11.8593C70.1175 11.3907 69.4402 11.1545 68.6251 11.1545C67.8453 11.1545 67.1916 11.3829 66.6561 11.8318C66.1205 12.2847 65.7937 12.9265 65.6637 13.7574H71.4761Z" fill="white"/>
                            <path d="M81.6521 18.9666H88.2167V22.7904H76.4697V19.1005L82.7626 11.4766H76.5209V7.65283H88.0788V11.3427L81.6521 18.9666Z" fill="white"/>
                            <path d="M105.421 7.65237L95.9266 29.9806H90.9333L94.4065 22.274L88.2476 7.64844H93.4299L96.9308 17.1192L100.404 7.64844H105.421V7.65237Z" fill="white"/>
                            <path d="M107.292 22.33C106.261 21.8771 105.449 21.2589 104.851 20.4713C104.252 19.6837 103.918 18.8016 103.847 17.825H108.43C108.486 18.3487 108.73 18.774 109.163 19.1009C109.596 19.4277 110.132 19.5892 110.766 19.5892C111.345 19.5892 111.794 19.475 112.109 19.2505C112.424 19.026 112.585 18.7307 112.585 18.3684C112.585 17.9352 112.357 17.6123 111.908 17.4036C111.455 17.1949 110.722 16.9665 109.71 16.7105C108.623 16.4585 107.722 16.1907 106.997 15.9111C106.272 15.6315 105.65 15.1865 105.127 14.5801C104.603 13.9736 104.339 13.1545 104.339 12.1228C104.339 11.2564 104.579 10.4649 105.06 9.74818C105.54 9.03541 106.245 8.46834 107.174 8.05092C108.108 7.63349 109.214 7.42871 110.498 7.42871C112.396 7.42871 113.892 7.90127 114.987 8.83851C116.082 9.77968 116.712 11.028 116.873 12.5835H112.585C112.514 12.0598 112.282 11.6423 111.892 11.3352C111.502 11.028 110.99 10.8744 110.36 10.8744C109.817 10.8744 109.399 10.9768 109.112 11.1855C108.82 11.3942 108.679 11.6778 108.679 12.0401C108.679 12.4733 108.907 12.8001 109.372 13.0167C109.832 13.2333 110.553 13.4499 111.53 13.6665C112.652 13.9579 113.566 14.2414 114.27 14.521C114.975 14.8006 115.594 15.2535 116.129 15.8796C116.661 16.5018 116.936 17.3406 116.956 18.3881C116.956 19.2741 116.708 20.0657 116.212 20.7627C115.716 21.4597 114.999 22.0071 114.07 22.4048C113.136 22.8025 112.057 23.0034 110.829 23.0034C109.498 23.0073 108.324 22.7829 107.292 22.33Z" fill="white"/>
                            <path d="M139.629 7.65283L135.534 22.7943H130.406L128.02 12.973L125.551 22.7943H120.451L116.328 7.65283H120.967L123.109 18.4783L125.661 7.65283H130.572L133.147 18.4232L135.262 7.65283H139.629Z" fill="white"/>
                            <path d="M139.998 11.0993C140.585 9.9258 141.384 9.02008 142.4 8.38606C143.413 7.75205 144.543 7.43701 145.791 7.43701C146.858 7.43701 147.795 7.6536 148.599 8.08677C149.402 8.51995 150.024 9.09095 150.458 9.79585V7.6536H155.096V22.7951H150.458V20.6528C150.005 21.3577 149.375 21.9287 148.571 22.3619C147.768 22.7951 146.831 23.0117 145.764 23.0117C144.535 23.0117 143.413 22.6927 142.4 22.0469C141.388 21.405 140.585 20.4914 139.998 19.306C139.412 18.1207 139.116 16.7503 139.116 15.1948C139.116 13.6393 139.412 12.2728 139.998 11.0993ZM149.497 12.4815C148.855 11.8121 148.071 11.4774 147.15 11.4774C146.228 11.4774 145.445 11.8082 144.803 12.4658C144.161 13.1274 143.838 14.037 143.838 15.1909C143.838 16.3447 144.157 17.2662 144.803 17.9435C145.445 18.6208 146.228 18.9595 147.15 18.9595C148.071 18.9595 148.855 18.6248 149.497 17.9553C150.139 17.2859 150.461 16.3723 150.461 15.2145C150.458 14.0646 150.139 13.151 149.497 12.4815Z" fill="white"/>
                            <path d="M162.529 8.08677C163.325 7.6536 164.258 7.43701 165.325 7.43701C166.574 7.43701 167.704 7.75205 168.716 8.38606C169.728 9.02008 170.527 9.9258 171.118 11.0993C171.705 12.2768 172 13.6393 172 15.1948C172 16.7503 171.705 18.1207 171.118 19.306C170.531 20.4914 169.728 21.405 168.716 22.0469C167.704 22.6888 166.574 23.0117 165.325 23.0117C164.278 23.0117 163.349 22.7951 162.545 22.3619C161.742 21.9287 161.112 21.3656 160.659 20.6804V30.0134H156.02V7.65754H160.659V9.79979C161.112 9.09096 161.734 8.51995 162.529 8.08677ZM166.314 12.4697C165.672 11.8082 164.88 11.4813 163.939 11.4813C163.018 11.4813 162.234 11.816 161.592 12.4855C160.95 13.1549 160.627 14.0685 160.627 15.2263C160.627 16.3841 160.946 17.2977 161.592 17.9671C162.234 18.6366 163.018 18.9713 163.939 18.9713C164.861 18.9713 165.648 18.6326 166.298 17.9553C166.948 17.278 167.275 16.3604 167.275 15.2027C167.275 14.0449 166.956 13.1274 166.314 12.4697Z" fill="white"/>
                        </svg>
                        <div className=' flex flex-col mt-6 lg:mt-32 ' >
                            {/* <div className=' fixed bottom-20 z-[400] right-4 w-[80px] h-[80px] rounded-full bg-white flex justify-center items-center ' >
                                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.164079 20.9994C0.164079 9.4931 9.49116 0.166016 20.9974 0.166016C32.5037 0.166016 41.8307 9.4931 41.8307 20.9994C41.8307 32.5056 32.5037 41.8327 20.9974 41.8327H0.164079L6.26616 35.7306C4.32874 33.7982 2.79228 31.502 1.74508 28.9739C0.697884 26.4458 0.160591 23.7357 0.164079 20.9994ZM10.2224 37.666H20.9974C24.2938 37.666 27.5161 36.6885 30.2569 34.8572C32.9977 33.0258 35.1339 30.4228 36.3954 27.3774C37.6569 24.332 37.9869 20.9809 37.3438 17.7478C36.7007 14.5148 35.1134 11.5451 32.7825 9.21424C30.4516 6.88336 27.4819 5.29602 24.2489 4.65293C21.0159 4.00984 17.6648 4.3399 14.6194 5.60136C11.5739 6.86282 8.97094 8.99903 7.13959 11.7398C5.30823 14.4807 4.33075 17.703 4.33075 20.9994C4.33075 25.4827 6.10366 29.6764 9.212 32.7848L12.1578 35.7306L10.2224 37.666ZM12.6641 23.0827H29.3307C29.3307 25.2928 28.4528 27.4124 26.89 28.9752C25.3272 30.538 23.2075 31.416 20.9974 31.416C18.7873 31.416 16.6677 30.538 15.1049 28.9752C13.5421 27.4124 12.6641 25.2928 12.6641 23.0827Z" fill="#303179"/>
                                </svg>
                            </div> */}
                            <p className=' text-sm lg:mr-[100px] lg:text-right text-center mt-3 lg:mt-1 text-[#F8FAFC] ' >© 2023 Ezyswap. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
