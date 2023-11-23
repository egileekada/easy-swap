// import React from 'react'


type props = {
    name: string, 
    bgcolor?: string,
    [x: string]: any;
    disable?: boolean
}

export default function ButtonComponent({name, bgcolor, disable, ...rest}: props) {
    return ( 
        <button disabled={disable} {...rest} className={` w-full font-semibold text-sm rounded-md h-[50px]  ${disable ? " bg-[#F1F1F1] text-[#667085]" :bgcolor ? bgcolor: " bg-[#F1F1F1] text-[#667085]"}`} >{name}</button>
    )
}
