import React from 'react'
import { useNavigate } from 'react-router-dom'
import userdata from '../../../global-state/userdata';
// import { UserContext, IUser } from '../../../context/userContext';

type props = {
    close?: any;
    type?: boolean
}

export default function Sidebar({close, type}: props) {

    const userinfo: any = userdata((state) => state.user)

    const navigate = useNavigate()
    const menu =["Home", "Sell Crypto", "Transactions History", "Banks", "Support", "Verification", "Settings", "Log out"]

    const [active, setActive] = React.useState("")

    const clickHandler =(item: any)=>{
        let route = item.replace(/\s/g,'').toLowerCase()
        if(item === "Home"){
            navigate("/")
        } else if(item === "Log out"){
            localStorage.clear()
            navigate("/")
            navigate(0)
        } else if(item === "Sell Crypto"){
            navigate("/dashboard/"+route)
            navigate(0)
        }  else{ 
            navigate("/dashboard/"+route)
            navigate(0)
        }
        if(type){
            close()
        }
        // userContext.setSellCrypto({})
    }

    React.useEffect(()=> {
        let pathname = window.location.pathname
        if(pathname === "/dashboard"){ 
            setActive(pathname+"/home")
        } else {  
            setActive(pathname)
        }
    }, [navigate])

    return (
        <div className=' w-full h-full overflow-y-auto bg-white pl-5 py-9 ' >
            <p className=' text-[#303179] text-xl font-bold ' >{userinfo?.fullname}</p>
            <div className=' w-full mt-10   ' >
                {menu.filter((item)=> item !== "Settings" && item !== "Log out"  && item !== "Verification").map((item: any)=> {
                    return(
                        <button onClick={()=>  clickHandler(item)} key={item} className={` ${active === "/dashboard/"+item.replace(/\s/g,'').toLowerCase() ? "  ": ""} flex text-[#344054] my-4 py-2 gap-3 font-medium w-full items-center `} >
                            {item === "Home" && (
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5 15.6659C15.5 15.8869 15.4122 16.0989 15.2559 16.2552C15.0996 16.4115 14.8877 16.4993 14.6667 16.4993H1.33333C1.11232 16.4993 0.900358 16.4115 0.744078 16.2552C0.587798 16.0989 0.5 15.8869 0.5 15.6659V6.90758C0.499912 6.78059 0.528848 6.65526 0.584597 6.54117C0.640346 6.42707 0.721433 6.32722 0.821667 6.24925L7.48833 1.06425C7.63462 0.950455 7.81467 0.888672 8 0.888672C8.18533 0.888672 8.36538 0.950455 8.51167 1.06425L15.1783 6.24925C15.2786 6.32722 15.3597 6.42707 15.4154 6.54117C15.4712 6.65526 15.5001 6.78059 15.5 6.90758V15.6659ZM13.8333 14.8326V7.31425L8 2.77758L2.16667 7.31425V14.8326H13.8333Z" fill="#344054"/>
                                </svg>
                            )}
                            {item === "Sell Crypto" && (
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.9993 3.83333H16.4993C16.7204 3.83333 16.9323 3.92113 17.0886 4.07741C17.2449 4.23369 17.3327 4.44565 17.3327 4.66667V14.6667C17.3327 14.8877 17.2449 15.0996 17.0886 15.2559C16.9323 15.4122 16.7204 15.5 16.4993 15.5H1.49935C1.27834 15.5 1.06637 15.4122 0.910093 15.2559C0.753813 15.0996 0.666016 14.8877 0.666016 14.6667V1.33333C0.666016 1.11232 0.753813 0.900358 0.910093 0.744078C1.06637 0.587797 1.27834 0.5 1.49935 0.5H13.9993V3.83333ZM2.33268 5.5V13.8333H15.666V5.5H2.33268ZM2.33268 2.16667V3.83333H12.3327V2.16667H2.33268ZM11.4993 8.83333H13.9993V10.5H11.4993V8.83333Z" fill="#344054"/>
                                </svg>
                            )}
                            {item === "Transactions History" && (
                                <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.49935 0.5H16.4993C16.7204 0.5 16.9323 0.587797 17.0886 0.744078C17.2449 0.900358 17.3327 1.11232 17.3327 1.33333V14.6667C17.3327 14.8877 17.2449 15.0996 17.0886 15.2559C16.9323 15.4122 16.7204 15.5 16.4993 15.5H1.49935C1.27834 15.5 1.06637 15.4122 0.910093 15.2559C0.753813 15.0996 0.666016 14.8877 0.666016 14.6667V1.33333C0.666016 1.11232 0.753813 0.900358 0.910093 0.744078C1.06637 0.587797 1.27834 0.5 1.49935 0.5ZM15.666 7.16667H2.33268V13.8333H15.666V7.16667ZM15.666 5.5V2.16667H2.33268V5.5H15.666ZM10.666 10.5H13.9993V12.1667H10.666V10.5Z" fill="#344054"/>
                                </svg>
                            )}
                            {item === "Banks" && (
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.666016 15.666H17.3327V17.3327H0.666016V15.666ZM2.33268 8.99935H3.99935V14.8327H2.33268V8.99935ZM6.49935 8.99935H8.16602V14.8327H6.49935V8.99935ZM9.83268 8.99935H11.4993V14.8327H9.83268V8.99935ZM13.9993 8.99935H15.666V14.8327H13.9993V8.99935ZM0.666016 4.83268L8.99935 0.666016L17.3327 4.83268V8.16602H0.666016V4.83268ZM2.33268 5.86268V6.49935H15.666V5.86268L8.99935 2.52935L2.33268 5.86268ZM8.99935 5.66602C8.77833 5.66602 8.56637 5.57822 8.41009 5.42194C8.25381 5.26566 8.16602 5.0537 8.16602 4.83268C8.16602 4.61167 8.25381 4.39971 8.41009 4.24343C8.56637 4.08715 8.77833 3.99935 8.99935 3.99935C9.22036 3.99935 9.43232 4.08715 9.5886 4.24343C9.74488 4.39971 9.83268 4.61167 9.83268 4.83268C9.83268 5.0537 9.74488 5.26566 9.5886 5.42194C9.43232 5.57822 9.22036 5.66602 8.99935 5.66602Z" fill="#344054"/>
                                </svg>
                            )}
                            {item === "Support" && (
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.07519 16.3527L0.666025 17.3327L1.64603 12.9235C1.00063 11.7163 0.663964 10.3682 0.666025 8.99935C0.666025 4.39685 4.39686 0.666016 8.99936 0.666016C13.6019 0.666016 17.3327 4.39685 17.3327 8.99935C17.3327 13.6018 13.6019 17.3327 8.99936 17.3327C7.63049 17.3347 6.28237 16.9981 5.07519 16.3527ZM5.31686 14.5918L5.86103 14.8835C6.82648 15.3995 7.90469 15.6683 8.99936 15.666C10.3179 15.666 11.6068 15.275 12.7032 14.5425C13.7995 13.8099 14.654 12.7687 15.1586 11.5506C15.6631 10.3324 15.7952 8.99195 15.5379 7.69875C15.2807 6.40554 14.6458 5.21765 13.7134 4.2853C12.7811 3.35295 11.5932 2.71802 10.3 2.46078C9.00675 2.20355 7.66631 2.33557 6.44814 2.84015C5.22996 3.34474 4.18877 4.19922 3.45623 5.29555C2.72368 6.39187 2.33269 7.68081 2.33269 8.99935C2.33269 10.111 2.60352 11.181 3.11602 12.1377L3.40686 12.6818L2.86102 15.1377L5.31686 14.5918Z" fill="#344054"/>
                                </svg>
                            )}
                            {item}
                        </button>
                    )
                })}
            </div>
            <div className=' w-full lg:pt-10   ' >
                {menu.filter((item)=> item === "Settings" || item === "Log out" || item === "Verification").map((item: any)=> {
                    return(
                        <button onClick={()=>  clickHandler(item)} key={item} className=' flex text-[#344054] my-4 py-2 gap-3 font-medium w-full items-center ' >
                            {item === "Verification" && (
                                <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 14H20V2H2V14ZM0 1C0 0.44772 0.44772 0 1 0H21C21.5523 0 22 0.44772 22 1V15C22 15.5523 21.5523 16 21 16H1C0.44772 16 0 15.5523 0 15V1ZM8 6C8 5.44772 7.55228 5 7 5C6.44772 5 6 5.44772 6 6C6 6.5523 6.44772 7 7 7C7.55228 7 8 6.5523 8 6ZM10 6C10 7.6569 8.65685 9 7 9C5.34315 9 4 7.6569 4 6C4 4.34315 5.34315 3 7 3C8.65685 3 10 4.34315 10 6ZM7.0018 12C6.03503 12 5.1614 12.3907 4.52693 13.0251L3.11272 11.6109C4.10693 10.6167 5.4833 10 7.0018 10C8.52031 10 9.8967 10.6167 10.8909 11.6109L9.4767 13.0251C8.84221 12.3907 7.96858 12 7.0018 12ZM15.2071 10.7071L19.2071 6.7071L17.7929 5.29289L14.5 8.5858L12.7071 6.7929L11.2929 8.2071L13.7929 10.7071L14.5 11.4142L15.2071 10.7071Z" fill="#344054"/>
                                </svg>
                            )}
                            {item === "Settings" && (
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.666016 9.00042C0.666016 8.27958 0.757682 7.58125 0.929349 6.91375C1.38974 6.93795 1.84785 6.83438 2.25305 6.61447C2.65825 6.39457 2.99475 6.06691 3.22535 5.6677C3.45596 5.2685 3.57169 4.8133 3.55974 4.35243C3.5478 3.89157 3.40865 3.44297 3.15768 3.05625C4.16513 2.06506 5.40834 1.34666 6.77018 0.96875C6.97934 1.37998 7.29821 1.72531 7.6915 1.96651C8.08479 2.20771 8.53715 2.33538 8.99852 2.33538C9.45988 2.33538 9.91224 2.20771 10.3055 1.96651C10.6988 1.72531 11.0177 1.37998 11.2268 0.96875C12.5887 1.34666 13.8319 2.06506 14.8393 3.05625C14.5881 3.44304 14.4487 3.89181 14.4367 4.35289C14.4247 4.81397 14.5404 5.26939 14.7712 5.66876C15.0019 6.06813 15.3386 6.39589 15.7441 6.61576C16.1495 6.83564 16.6079 6.93906 17.0685 6.91458C17.2402 7.58125 17.3319 8.27958 17.3319 9.00042C17.3319 9.72125 17.2402 10.4196 17.0685 11.0871C16.6081 11.0627 16.1498 11.1662 15.7445 11.386C15.3392 11.6058 15.0026 11.9335 14.7719 12.3327C14.5411 12.732 14.4253 13.1872 14.4373 13.6482C14.4492 14.1091 14.5883 14.5578 14.8393 14.9446C13.8319 15.9358 12.5887 16.6542 11.2268 17.0321C11.0177 16.6209 10.6988 16.2755 10.3055 16.0343C9.91224 15.7931 9.45988 15.6655 8.99852 15.6655C8.53715 15.6655 8.08479 15.7931 7.6915 16.0343C7.29821 16.2755 6.97934 16.6209 6.77018 17.0321C5.40834 16.6542 4.16513 15.9358 3.15768 14.9446C3.40894 14.5578 3.54829 14.109 3.56032 13.6479C3.57236 13.1869 3.4566 12.7314 3.22586 12.3321C2.99512 11.9327 2.65839 11.6049 2.25294 11.3851C1.84748 11.1652 1.3891 11.0618 0.928516 11.0863C0.757682 10.4204 0.666016 9.72208 0.666016 9.00042ZM4.66935 11.5004C5.19435 12.4096 5.34435 13.4554 5.13935 14.4371C5.47935 14.6788 5.84102 14.8879 6.22018 15.0621C6.98407 14.3778 7.97378 13.9997 8.99935 14.0004C10.0493 14.0004 11.031 14.3929 11.7785 15.0621C12.1577 14.8879 12.5193 14.6788 12.8593 14.4371C12.6489 13.4337 12.8162 12.388 13.3293 11.5004C13.8415 10.6124 14.6635 9.94471 15.6377 9.62542C15.6762 9.20964 15.6762 8.79119 15.6377 8.37542C14.6632 8.0563 13.8409 7.3886 13.3285 6.50042C12.8154 5.61286 12.648 4.56711 12.8585 3.56375C12.5186 3.32202 12.1567 3.11277 11.7777 2.93875C11.014 3.62286 10.0246 4.00092 8.99935 4.00042C7.97378 4.00113 6.98407 3.62305 6.22018 2.93875C5.84112 3.11277 5.47926 3.32202 5.13935 3.56375C5.34982 4.56711 5.18245 5.61286 4.66935 6.50042C4.15716 7.38844 3.33517 8.05612 2.36102 8.37542C2.32248 8.79119 2.32248 9.20964 2.36102 9.62542C3.33548 9.94453 4.15696 10.6122 4.66935 11.5004ZM8.99935 11.5004C8.33631 11.5004 7.70042 11.237 7.23158 10.7682C6.76274 10.2993 6.49935 9.66346 6.49935 9.00042C6.49935 8.33738 6.76274 7.70149 7.23158 7.23265C7.70042 6.76381 8.33631 6.50042 8.99935 6.50042C9.66239 6.50042 10.2983 6.76381 10.7671 7.23265C11.236 7.70149 11.4993 8.33738 11.4993 9.00042C11.4993 9.66346 11.236 10.2993 10.7671 10.7682C10.2983 11.237 9.66239 11.5004 8.99935 11.5004ZM8.99935 9.83375C9.22036 9.83375 9.43232 9.74595 9.5886 9.58967C9.74489 9.43339 9.83268 9.22143 9.83268 9.00042C9.83268 8.7794 9.74489 8.56744 9.5886 8.41116C9.43232 8.25488 9.22036 8.16708 8.99935 8.16708C8.77834 8.16708 8.56637 8.25488 8.41009 8.41116C8.25381 8.56744 8.16602 8.7794 8.16602 9.00042C8.16602 9.22143 8.25381 9.43339 8.41009 9.58967C8.56637 9.74595 8.77834 9.83375 8.99935 9.83375Z" fill="#344054"/>
                                </svg>
                            )}
                            {item === "Log out" && (
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16667 8.16602H10.8333V9.83269H4.16667V12.3327L0 8.99935L4.16667 5.66602V8.16602ZM3.33333 13.9994H5.59C6.55224 14.848 7.73891 15.4009 9.00761 15.5918C10.2763 15.7827 11.5731 15.6035 12.7425 15.0756C13.9119 14.5477 14.9041 13.6937 15.6001 12.6159C16.296 11.5381 16.6663 10.2823 16.6663 8.99935C16.6663 7.71637 16.296 6.46064 15.6001 5.38284C14.9041 4.30504 13.9119 3.45097 12.7425 2.9231C11.5731 2.39523 10.2763 2.216 9.00761 2.4069C7.73891 2.5978 6.55224 3.15074 5.59 3.99935H3.33333C4.10888 2.96366 5.11528 2.12311 6.27256 1.54447C7.42984 0.965828 8.70612 0.665046 10 0.666018C14.6025 0.666018 18.3333 4.39685 18.3333 8.99935C18.3333 13.6019 14.6025 17.3327 10 17.3327C8.70612 17.3337 7.42984 17.0329 6.27256 16.4542C5.11528 15.8756 4.10888 15.035 3.33333 13.9994Z" fill="#344054"/>
                                </svg>
                            )}
                            {item}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
