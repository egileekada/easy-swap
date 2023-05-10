import React from 'react' 

type props = {
    title: string,
    placeholder?: string, 
    pwd?: boolean, 
    email?: boolean,
    phone?: boolean,
    number?: boolean,
    [x: string]: any;
}

export default function InputComponent({pwd, title, email, phone, number, ...rest}: props) {

    const [showPassword, setShowPassword] = React.useState(true)

    return (
        <>
            <p className=' text-sm font-medium mt-4 text-[#334155] mb-2 ' >{title}</p>
            <div className=' relative w-full ' > 
                <input {...rest} type={pwd ? !showPassword ? "text":"password" : email ? "email": number ? "number": phone ? "tel": " text " } className=' text-sm px-3 outline-none font-medium border border-[#C9CCCF] rounded-lg flex items-center h-[50px] bg-white w-full '  /> 
                {pwd && (
                    <div className=' absolute top-0 right-0 px-4 h-full flex justify-center items-center w-fit z-20 ' > 
                        <svg role='button' onClick={()=> setShowPassword((prev)=> !prev)} className='  ' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_746_21908)">
                                <path d="M13.4125 14.4729C12.0934 15.3096 10.563 15.7527 9.00097 15.7502C4.95697 15.7502 1.59247 12.8402 0.886719 9.00017C1.20924 7.25321 2.08794 5.65734 3.39172 4.45067L1.04497 2.10617L2.10622 1.04492L16.9555 15.8949L15.8942 16.9554L13.4125 14.4729ZM4.45222 5.51267C3.43297 6.43936 2.72296 7.65676 2.41822 9.00017C2.65244 10.025 3.12267 10.981 3.79147 11.7921C4.46028 12.6032 5.30919 13.247 6.27063 13.6722C7.23208 14.0973 8.2795 14.2922 9.32954 14.2413C10.3796 14.1903 11.4032 13.8949 12.319 13.3787L10.798 11.8577C10.1505 12.2655 9.38362 12.4413 8.62315 12.356C7.86268 12.2708 7.15375 11.9296 6.61265 11.3885C6.07154 10.8474 5.73039 10.1385 5.64514 9.37799C5.55989 8.61752 5.73561 7.85065 6.14347 7.20317L4.45222 5.51267ZM9.68647 10.7462L7.25497 8.31467C7.12152 8.65437 7.09011 9.02564 7.1646 9.38293C7.23909 9.74022 7.41623 10.068 7.67431 10.3261C7.93238 10.5842 8.26017 10.7613 8.61746 10.8358C8.97475 10.9103 9.34602 10.8789 9.68572 10.7454L9.68647 10.7462ZM15.6062 12.4442L14.533 11.3717C15.0343 10.6571 15.3913 9.85156 15.5837 9.00017C15.3799 8.10747 14.9967 7.26553 14.4573 6.52554C13.918 5.78555 13.2338 5.16297 12.4464 4.69563C11.6589 4.22828 10.7847 3.92595 9.87677 3.80699C8.96885 3.68804 8.04622 3.75496 7.16497 4.00367L5.98147 2.82017C6.91672 2.45267 7.93597 2.25017 9.00097 2.25017C13.045 2.25017 16.4095 5.16017 17.1152 9.00017C16.8854 10.2494 16.3689 11.4284 15.6062 12.4442ZM8.79322 5.63117C9.2706 5.60167 9.7488 5.67397 10.1961 5.84328C10.6434 6.0126 11.0497 6.27506 11.3879 6.61326C11.7261 6.95146 11.9885 7.35769 12.1579 7.80501C12.3272 8.25234 12.3995 8.73054 12.37 9.20792L8.79322 5.63117Z" fill="#334155"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_746_21908">
                                    <rect width="18" height="18" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                )}
            </div>
        </>
    )
} 