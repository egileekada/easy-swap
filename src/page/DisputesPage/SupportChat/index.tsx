import { Select, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDisputeCallback } from '../../../action/useAction'
import { useNavigate } from 'react-router-dom' 

export default function SupportChat() {


    const [subject, setSubject] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const navigate = useNavigate()
    const toast = useToast()

    const {handlDispute} = useDisputeCallback()

    const submit =async()=> {
        
        setLoading(true)
        
        const request: any = await handlDispute(JSON.stringify({
            subject: subject,
            message: message
        }))

        console.log(request);
        

        if (request.status === 200 || request.status === 201) {     
            navigate("/dashboard")
            toast({
                title: "Message Sent", 
                status: 'success',  
                duration: 3000, 
                position: "top"
            }) 
        }else { 
            toast({
                title: "Error Occurred", 
                status: 'error',  
                duration: 3000, 
                position: "top"
            }) 
        }
        setLoading(false);
    }

    return (
        <div className=' w-full flex flex-col items-center pb-6 pt-4 ' > 
            <div className=' w-full lg:px-0 px-6 lg:w-[600px] ' >
                <div className=' w-full mb-5 ' > 
                    <p className=' mb-2 text-[#475467] font-normal   ' >Ticket Type</p>
                    <Select onChange={(e)=> setSubject(e.target.value)} placeholder='Select Ticket Type' fontSize="sm" backgroundColor="white"  >
                        <option>Payment confirmation</option>
                        <option>Bank details</option>
                        <option>OTP Issues</option>
                        <option>Others</option>
                    </Select>
                </div>
                <textarea onChange={(e)=> setMessage(e.target.value)} className=' p-4 border w-full h-[200px] ' />
                <div className=' w-full flex pt-4 justify-end ' >
                    <button onClick={submit} disabled={((message && subject) || !loading) ? false:true} className={` h-[50px] text-sm font-semibold w-[220px] ${(message && subject) ? "bg-[#303179] text-white": "bg-[#F2F4F7] text-[#475467] "} rounded-lg `} >
                        {loading ? "Loading...": "Submit ticket"}
                    </button>
                </div>
            </div>
        </div>
    )
}
