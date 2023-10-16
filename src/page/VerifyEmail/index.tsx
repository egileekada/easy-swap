import React from 'react'
import Navbar from '../../components/Navbar'
import ButtonComponent from '../../components/ButtonComponent'
import { HStack, PinInput, PinInputField, Stack, useToast } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { useEmailVerificationCallback, useSendOtpCallback } from '../../action/useAction'
import userdata from '../../global-state/userdata'
// import { IUser, UserContext } from '../../context/userContext'

export default function VerifyEmail() {


    // global State  
    const userinfo: any = userdata((state) => state.user)

    const [tab, setTab] = React.useState(false) 
    const [pin, setPin] = React.useState("") 
    const navigate = useNavigate()
    const toast = useToast()
    const [loading, setLoading] = React.useState(false)

    // const userContext: IUser = React.useContext(UserContext);  
    const { handleEmailVerification } = useEmailVerificationCallback()
    const { handleSendOtp } = useSendOtpCallback() 

    const handleComplete = (value: string) => { 
        setPin(value)
    }

    const submit = async (e: any) => { 
        e.preventDefault(true)
        setLoading(true); 
        const request: any = await handleEmailVerification(JSON.stringify({ 
            "otp": pin+"",
            "email": userinfo?.userEmail
        })) 

        if (request.status === 200 || request.status === 201) {  
            setTab(true)
            // toast({
            //     title: "Registration Successful", 
            //     status: 'success',  
            //     duration: 3000, 
            // }) 
        }else {  
            toast({
                title: request?.data?.error?.details?.detail, 
                status: 'error',  
                duration: 3000,  
                position: "top"
            }) 
        }
        setLoading(false); 
    } 

    const sendOtp =async()=> {
        setResending(true)

        const request: any = await handleSendOtp(JSON.stringify({ 
            "user_email": userinfo.userEmail
        })) 

        if (request.status === 200 || request.status === 201) {  
            // setTab(true)
            setResending(true);
            setInitialTime(59);
            toast({
                title: "OTP Sent", 
                status: 'success',  
                duration: 3000, 
            }) 
        }else {  
            toast({
                title: request?.data?.error?.details?.message, 
                status: 'error',  
                duration: 3000,  
                position: "top"
            }) 
        }

        setResending(false)
    }

    // const [submitting, setSubmitting] = React.useState(false);
    const [resending, setResending] = React.useState(false);
  
    const [initialTime, setInitialTime] = React.useState(0);
    const [startTimer, setStartTimer] = React.useState(false);  

    React.useEffect(() => {
        if (initialTime > 0) {
        setTimeout(() => { 
            setInitialTime(initialTime - 1);
        }, 1000);
        }

        if (initialTime === 0 && startTimer) {
        console.log("done");
        setStartTimer(false); 
        setResending(false);
        }
    }, [initialTime, startTimer]);

    return (
        <div className=' w-full h-screen flex-1 pb-20 flex flex-col items-center lg:px-0 px-6 ' >
            <Navbar hide={true} />
            {!tab && ( 
                <div className=' w-full lg:w-[560px] my-auto lg:text-center ' > 
                    <p className=' text-2xl lg:text-4xl font-bold lg:font-semibold text-[#1E293B]' >Verify your email address</p>
                    <p className=' text-[#475569] mt-2 lg:text-base text-sm ' >We emailed you a five-digit code to {userinfo.userEmail} Enter the code below to confirm your email address</p>
                    <div className=' mt-8 w-full hidden lg:flex justify-center ' > 
                        <Stack>
                            <HStack gap="16px">
                                <PinInput autoFocus={true} onComplete={handleComplete}  >
                                    <PinInputField width="60px" height="60px" />
                                    <PinInputField  width="60px" height="60px" />
                                    <PinInputField  width="60px" height="60px" />
                                    <PinInputField width="60px" height="60px" />
                                    <PinInputField  width="60px" height="60px" /> 
                                </PinInput>
                            </HStack>
                        </Stack>
                    </div>
                    <div className=' mt-8 w-full lg:hidden flex justify-center ' > 
                        <Stack>
                            <HStack >
                                <PinInput autoFocus={true} onComplete={handleComplete}   >
                                    <PinInputField/>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField/>
                                    <PinInputField /> 
                                </PinInput>
                            </HStack>
                        </Stack>
                    </div>
                    <div className=' w-full mt-6 flex gap-2 mb-7 text-[#475569] text-sm font-medium justify-center items-center ' >
                        <p className=' ' >Didn’t receive the code?</p>
                        <button disabled={initialTime === 0 ? false : !resending} onClick={sendOtp} role='button' className=' font-semibold ' >{
                                initialTime !== 0 ? 
                                <span>{0} : {initialTime}</span> :
                                'Resend code'
                            }</button> 
                    </div>
                    <ButtonComponent onClick={submit} bgcolor={pin ? ' bg-[#303179] text-[#fff]': ''} type="submit" name={loading ? "Loading...": "Continue"} />
                </div> 
            )}
            {tab && ( 
                <div className=' w-full lg:w-[560px] text-center my-auto ' > 
                    <p className='  text-2xl lg:text-4xl font-bold lg:font-semibold text-[#1E293B] ' >Welcome to Easyswap</p>
                    <p className=' text-[#475569] mt-2 ' >Account created successfully 🎉 </p>  
                    <ButtonComponent onClick={()=> navigate("/signin")} bgcolor={' mt-10 bg-[#303179] text-[#fff]'} name="Get Started" />
                </div> 
            )}
        </div>
    )
}
