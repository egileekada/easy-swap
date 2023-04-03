import React from 'react'


type props = {
    name: string, 
    bgcolor?: string,
    [x: string]: any;
}

export default function ButtonComponent({name, bgcolor, ...rest}: props) {
    return ( 
        <button {...rest} className={` w-full font-semibold text-sm rounded-md h-[45px]  ${bgcolor ? bgcolor: " bg-[#F1F1F1] text-[#667085]"}`} >{name}</button>
    )
}
