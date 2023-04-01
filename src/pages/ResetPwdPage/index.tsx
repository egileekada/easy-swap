import React from 'react'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import Navbar from '../../components/Navbar'

export default function ResetPwdPage() {

    const [tab, setTab] = React.useState(false)

    return (
        <div className='w-full h-screen flex-1 pb-20 flex flex-col items-center justify-center ' >
             {!tab && (
                <> 
                    <Navbar hide={true} />
                    <div className=' w-[560px] flex flex-col items-center text-center mt-8 ' > 
                        <p className=' text-4xl font-semibold text-[#1E293B] ' >Reset password</p>
                        <p className=' text-[#475569] mt-2 max-w-md text-center ' >Please enter your email address below, and we’ll send you a password reset link</p>
                        <div className=' mt-8 text-left mb-7 w-full ' > 
                            <InputComponent title='Email Address' placeholder='Enter Email Address' /> 
                        </div> 
                        <ButtonComponent bgcolor=' bg-[#303179] text-[#fff]' onClick={()=> setTab(true)} name="Continue" /> 
                        <div className=' w-full mt-8 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' >
                            <p className=' ' >Remember password?</p>
                            <a href='/signin' className=' font-semibold underline ' >Sign in</a> 
                        </div>
                    </div> 
                </>
             )}
             {tab && (
                <> 
                    <Navbar hide={true} />
                    <div className=' w-[560px] flex flex-col text-center mt-8 ' > 
                        <p className=' text-4xl font-semibold text-[#1E293B] ' >Reset password</p>
                        <p className=' text-[#475569] mt-2 mb-7 ' >We just sent you a password recovery link to jayboss@gmail.com</p> 
                        <ButtonComponent  bgcolor=' bg-[#303179] text-[#fff]' onClick={()=> setTab(true)} name="Back to sign in" /> 
                        <div className=' w-full mt-8 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' > 
                            <a href='/signin' className=' font-semibold underline ' >Back to sign in</a> 
                        </div>
                    </div> 
                </>
             )}
        </div>
    )
}
