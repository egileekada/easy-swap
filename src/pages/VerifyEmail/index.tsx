import React from 'react'
import Navbar from '../../components/Navbar'
import ButtonComponent from '../../components/ButtonComponent'
import { HStack, PinInput, PinInputField, Stack } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export default function VerifyEmail() {

    const [tab, setTab] = React.useState(false) 
    const navigate = useNavigate()

    return (
        <div className=' w-full h-screen flex-1 pb-20 flex flex-col items-center lg:px-0 px-6 justify-center ' >
            <Navbar hide={true} />
            {!tab && ( 
                <div className=' w-full lg:w-[560px] lg:text-center ' > 
                    <p className=' text-2xl lg:text-4xl font-bold lg:font-semibold text-[#1E293B]' >Verify your email address</p>
                    <p className=' text-[#475569] mt-2 lg:text-base text-sm ' >We emailed you a six-digit code to jayboss@gmail.com. Enter the code below to confirm your email address</p>
                    <div className=' mt-8 w-full hidden lg:flex justify-center ' > 
                        <Stack>
                            <HStack gap="16px">
                                <PinInput  >
                                    <PinInputField width="60px" height="60px" />
                                    <PinInputField  width="60px" height="60px" />
                                    <PinInputField  width="60px" height="60px" />
                                    <PinInputField width="60px" height="60px" />
                                    <PinInputField  width="60px" height="60px" />
                                    <PinInputField  width="60px" height="60px" />
                                </PinInput>
                            </HStack>
                        </Stack>
                    </div>
                    <div className=' mt-8 w-full lg:hidden flex justify-center ' > 
                        <Stack>
                            <HStack >
                                <PinInput  >
                                    <PinInputField/>
                                    <PinInputField />
                                    <PinInputField />
                                    <PinInputField/>
                                    <PinInputField />
                                    <PinInputField />
                                </PinInput>
                            </HStack>
                        </Stack>
                    </div>
                    <div className=' w-full mt-6 flex gap-2 mb-7 text-[#475569] text-sm font-medium justify-center items-center ' >
                        <p className=' ' >Didn’t receive the code?</p>
                        <a href='#' className=' font-semibold ' >Resend code</a> 
                    </div>
                    <ButtonComponent onClick={()=> setTab(true)} name="Continue" />
                </div> 
            )}
            {tab && ( 
                <div className=' w-full lg:w-[560px] text-center ' > 
                    <p className='  text-2xl lg:text-4xl font-bold lg:font-semibold text-[#1E293B] ' >Welcome to Easyswap</p>
                    <p className=' text-[#475569] mt-2 ' >Account created successfully 🎉 </p>  
                    <ButtonComponent onClick={()=> navigate("/dashboard")} bgcolor=' mt-10 bg-[#303179] text-[#fff]' name="Get Started" />
                </div> 
            )}
        </div>
    )
}
