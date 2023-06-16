import React from 'react'

type Props = {
    click: any, 
    total: any,
    start: number,
    end: number,
    range: number,
    current: number
}

export default function Pagination({click, total, start, end, range, current}: Props) {

    const [newTotal, setNewTotal] = React.useState(0)
    const [indicator, setIndicator] = React.useState(1) 

    React.useEffect(()=>{
        let dataLength : any

        dataLength = total/range 

        if(dataLength % 1 > 0){
            setNewTotal(Number(dataLength.toFixed(0))+1) 
        } else {
            setNewTotal(dataLength) 
        }  

    }, [total])   

    const ClickHandler =(item: any)=> {
        if(item === "reduce"){ 
            click(start-range, end-range, "reduce")
            setIndicator(indicator-1)
        } else {
            click(start+range, end+range, "increase")
            setIndicator(indicator+1)
        }
    }
    

    return (
        <div className=' w-full flex justify-between items-center py-9 font-medium text-[#667085] ' > 
            <button disabled={start === 0 ? true: false} onClick={()=> ClickHandler("reduce")} className=' flex gap-3 items-center ' >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8334 7.00033H1.16675M1.16675 7.00033L7.00008 12.8337M1.16675 7.00033L7.00008 1.16699" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <p>Previous</p>
            </button> 
            <div className=' flex items-center font-semibold gap-1 text-sm ' >
                {/* {[...Array(newTotal)]?.slice(0, 3).map((item: any, index: number)=> { 
                    return( 
                        <div className={index === current ? ' bg-[#F9F5FF] text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] ':' hover:bg-[#F9F5FF] hover:text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] '} >
                            {index+current}
                        </div>
                    )
                })}   */}
                {current-1 > 0 && ( 
                    <div className={current-1 === indicator ? ' bg-[#F9F5FF] text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] ':' hover:bg-[#F9F5FF] hover:text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] '} >
                        {current-1}
                    </div>
                )} 
                {current > 0 && ( 
                    <div className={current === indicator ? ' bg-[#F9F5FF] text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] ':' hover:bg-[#F9F5FF] hover:text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] '} >
                        {current}
                    </div>
                )} 
                <div className={current+1 === indicator ? ' bg-[#F9F5FF] text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] ':' hover:bg-[#F9F5FF] hover:text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] '} >
                    {current+1}
                </div> 
                {current+2 <= newTotal && ( 
                    <div className={current+2 === indicator ? ' bg-[#F9F5FF] text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] ':' hover:bg-[#F9F5FF] hover:text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] '} >
                        {current+2}
                    </div>
                )} 
                {current+3 <= newTotal && ( 
                    <div className={current+3 === indicator ? ' bg-[#F9F5FF] text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] ':' hover:bg-[#F9F5FF] hover:text-[#7F56D9] w-[40px] flex justify-center items-center h-[40px] rounded-[8px] '} >
                        {current+3}
                    </div>
                )} 
            </div>
            <button disabled={end > total ? true: false}  onClick={()=> ClickHandler("increase")} className=' flex gap-3 items-center ' >
                <p>Next</p>
                <svg className=' rotate-180 ' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.8334 7.00033H1.16675M1.16675 7.00033L7.00008 12.8337M1.16675 7.00033L7.00008 1.16699" stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    )
}
