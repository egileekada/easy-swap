import React from 'react'
import TransactionComponent from '../../components/TransactionComponent'

export default function TransactionPage() {
    return (
        <div className=' w-full px-14 ' > 
            <p className=' font-semibold text-2xl mb-8 mt-14 ' >Transaction History</p>
            <TransactionComponent />
        </div>
    )
}
