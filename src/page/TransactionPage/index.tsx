// import React from 'react'
import TransactionComponent from '../../components/TransactionComponent'

export default function TransactionPage() {
    return (
        <div className=' w-full px-4 lg:px-14 ' > 
            <p className=' font-semibold text-lg lg:text-2xl lg:mb-8 mt-14 ' >Transaction History</p>
            <p className=' text-[#667085] text-sm mb-8 lg:hidden' >A summary of your transactions.</p>
            <TransactionComponent />
        </div>
    )
}
