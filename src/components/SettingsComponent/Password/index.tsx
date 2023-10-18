import React from 'react'
import InputComponent from '../../InputComponent'
import ButtonComponent from '../../ButtonComponent'
import { useChangePasswordCallback } from '../../../action/useAction'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function PasswordTab() {

    const {handleChangePassword} = useChangePasswordCallback()

    const navigate = useNavigate()

    // const [tab, setTab] = React.useState(0)
    const [loading, setLoading] = React.useState(false) 
    const [pwd, setPwd] = React.useState("")  
    const [newPwd, setNewPwd] = React.useState("")  
    const toast = useToast()

    const SubmitPassWOrd =async()=> {
        setLoading(true)
        const request = await handleChangePassword(JSON.stringify({
            "old_password": pwd,
            "new_password": newPwd
        }))    

        if (request.status === 200 || request.status === 201 || request.status === 202) {   
            navigate(0)   
            toast({
                title: "Update Successful", 
                status: 'success',  
                duration: 3000, 
            }) 
        }else { 
            toast({
                title: request.data.error.message, 
                status: 'error',  
                duration: 3000, 
            }) 
        }
        setLoading(false);
    }


    return (
        <div className=' w-full flex flex-col items-center lg:p-10 ' >
            <div className=' lg:w-[560px] w-full flex flex-col items-center py-14 ' > 
                <p className=' text-2xl font-semibold text-[#1D2939] ' >Password Change</p>
                <p className=' text-base mt-2 font-normal text-center text-[#475467] ' >Enter a new password below to change your password</p>
                <div className=' mt-10 w-full text-left lg:w-[560px] mb-8 ' >
                    <InputComponent onChange={(e: any)=> setPwd(e.target.value)} pwd={true} title='Current Password' placeholder='Enter Current Password' />
                    <InputComponent onChange={(e: any)=> setNewPwd(e.target.value)} pwd={true} title='New Password' placeholder='Enter New Password' /> 
                </div>
                <ButtonComponent onClick={SubmitPassWOrd} disabled={(!pwd && !newPwd)} bgcolor={(!pwd && !newPwd) ? "": ' bg-[#303179] text-white ' } name={loading? "Loading...":"Save Changes"} />
            </div>
        </div>
    )
}
