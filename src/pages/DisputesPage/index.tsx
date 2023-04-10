import React from 'react' 
import DisputeTable from '../../components/DisputeTable'

export default function DisputePage() {
    return (
        <div className=' w-full px-6 lg:px-14 ' > 
            <p className=' font-semibold text-2xl mb-8 mt-14 ' >Disputes Overview</p>
            <DisputeTable />
        </div>
    )
}
