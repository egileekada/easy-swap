import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import ButtonComponent from '../../components/ButtonComponent'
import TransactionComponent from '../../components/TransactionComponent'

export default function Dashboard() {
    return (
        <div className=' px-8 py-14 w-full ' >
            <div className=' w-full flex justify-between ' >
                <div> 
                    <p className=' text-5xl text-[#303179] font-bold ' >Welcome Back,</p>
                    <p className=' font-normal text-xl mt-1 ' >Rashford Martinez</p>
                </div>
                <div className=' w-[430px] bg-white rounded-xl border border-[#98A2B3] p-6 ' >
                    <div className=' w-full grid grid-cols-2 gap-4 ' >
                        <div className='' >
                            <p className=' text-[#344054] font-normal text-sm ' >Account Number</p>
                            <p className=' text-xl font-bold text-[#303179] ' >0044385009</p>
                        </div>
                        <div className='' >
                            <p className=' text-[#344054] font-normal text-sm ' >Bank</p>
                            <p className=' text-xl font-bold text-[#303179] ' >Access Bank</p>
                        </div>
                        <div className='' >
                            <p className=' text-[#344054] font-normal text-sm ' >Account Number</p>
                            <p className=' text-xl font-bold text-[#303179] ' >Rashford Martinez</p>
                        </div>
                    </div>
                    <div className=' w-full flex justify-end ' >
                        <button  className=" bg-[#303179] text-white w-fit px-5 py-3 text-sm font-bold rounded-md" >Edit Bank</button>
                        {/* <ButtonComponent name='Edit Bank' bgcolor=' bg-[#303179] text-white ' className=" bg-[#303179] text-white w-fit px-5 rounded-md" /> */}
                    </div>
                </div>
            </div> 
            <p className=' font-medium text-xl mb-8 mt-14 ' >Transaction History</p>
            <TransactionComponent />
        </div>
    )
}
