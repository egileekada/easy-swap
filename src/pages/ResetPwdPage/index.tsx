import React from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import Navbar from '../../components/Navbar'
import { useGetOTPCallback, useResetPasswordCallback } from '../../action/useAction'
import { useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function ResetPwdPage() {

    const [tab, setTab] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const [email, setEmail] = React.useState("")
    const [pwd, setPwd] = React.useState("")
    const [otp, setOtp] = React.useState("")
    const navigate = useNavigate()
    const toast = useToast()

    const {handleGetOTP} = useGetOTPCallback()
    const {handleResetPassword} = useResetPasswordCallback()

    const SubmitEmail =async()=> {
        setLoading(true)
        const request = await handleGetOTP(JSON.stringify({
            "email": email
        }))           

        if (request.status === 200 || request.status === 201) {     
            setTab(1)
            toast({
                title: "Otp Sent", 
                status: 'success',  
                duration: 3000, 
                position: "top"
            }) 
        }else { 
            toast({
                title: request.data.error.message, 
                status: 'error',  
                duration: 3000, 
                position: "top"
            }) 
        }
        setLoading(false);
    }

    const SubmitPassWOrd =async()=> {
        setLoading(true)
        const request = await handleResetPassword(JSON.stringify({
            "email": email,
            "reset_code": otp,
            "password": pwd
        }))   

        if (request?.status === 200 || request?.status === 201) {     
            navigate("/signin")
            toast({
                title: "Update Successful", 
                status: 'success',  
                duration: 3000, 
                position: "top"
            }) 
        }else { 
            toast({
                title: request.data.error.message, 
                status: 'error',  
                duration: 3000, 
                position: "top"
            }) 
        }
        setLoading(false);
    }

    return (
        <div className='w-full h-screen flex-1 pb-20 flex flex-col items-center ' >
             {tab === 0 && (
                <> 
                    <Navbar hide={true} />
                    <div className='  w-full px-6 lg:w-[560px] flex flex-col lg:items-center text-center mt-8 ' > 
                        <p className=' text-4xl font-semibold text-[#1E293B] ' >Reset password</p>
                        <p className=' text-[#475569] mt-2 max-w-md text-center ' >Please enter your email address below, and we’ll send you a password reset link</p>
                        <div className=' mt-8 text-left mb-7 w-full ' > 
                            <InputComponent email={true} onChange={(e: any)=> setEmail(e.target.value)} title='Email Address' placeholder='Enter Email Address' /> 
                        </div> 
                        <ButtonComponent disabled={email ? false: true} bgcolor={!email? "" :' bg-[#303179] text-[#fff]'} onClick={SubmitEmail} name={loading ? "Loading..." : "Continue"} /> 
                        <div className=' w-full mt-8 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' >
                            <p className=' ' >Remember password?</p>
                            <a href='/signin' className=' font-semibold underline ' >Sign in</a> 
                        </div>
                    </div> 
                </>
             )} 
            {tab === 1 && (
                <> 
                    <Navbar hide={true} />
                    <div className=' w-full px-6 lg:w-[560px] flex flex-col lg:items-center text-center mt-20 ' > 
                        <p className=' text-4xl font-semibold text-[#1E293B] ' >Change Password</p>
                        <p className=' text-[#475569] mt-2 max-w-md text-center ' >We have sent an otp to {email}</p>
                        <div className=' mt-8 text-left mb-7 w-full flex flex-col gap-2 ' > 
                            <InputComponent number={true} onChange={(e: any)=> setOtp(e.target.value)} title='Enter OTP' placeholder='Enter OTP' /> 
                            <InputComponent autoComplete="off" onChange={(e: any)=> setPwd(e.target.value)} title='Enter Password' placeholder='Enter Password' pwd={true} /> 
                        </div> 
                        <ButtonComponent disabled={(otp && pwd) ? false: true} bgcolor={(!otp && !pwd) ? "":' bg-[#303179] text-[#fff]'} onClick={SubmitPassWOrd} name={loading ? "Loading..." : "Continue"} /> 
                        <div className=' w-full mt-8 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' >
                            <p className=' ' >Remember password?</p>
                            <a href='/signin' className=' font-semibold underline ' >Sign in</a> 
                        </div>
                    </div> 
                </>
             )}
             {/* {tab === 2 && (
                <> 
                    <Navbar hide={true} />
                    <div className=' w-[560px] flex flex-col text-center mt-8 ' > 
                        <p className=' text-4xl font-semibold text-[#1E293B] ' >Reset password</p>
                        <p className=' text-[#475569] mt-2 mb-7 ' >We just sent you a password recovery link to jayboss@gmail.com</p> 
                        <ButtonComponent  bgcolor=' bg-[#303179] text-[#fff]' onClick={()=> navigate("/signin")} name="Back to sign in" /> 
                        <div className=' w-full mt-8 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' > 
                            <a href='/signin' className=' font-semibold underline ' >Back to sign in</a> 
                        </div>
                    </div> 
                </>
             )} */}
        </div>
    )
}
