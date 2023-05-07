import React from 'react'
import Navbar from '../../components/Navbar'
import InputComponent from '../../components/InputComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useLoginCallback, useRegisterCallback } from '../../action/useAuth'
import { useToast } from '@chakra-ui/react'
import { IUser, UserContext } from '../../context/userContext'

export default function RegisterPage() {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false)
    const [confirmPassword, setConfirmPassword] = React.useState("")

    const userContext: IUser = React.useContext(UserContext); 


    const { handleRegister } = useRegisterCallback()
    const toast = useToast()
     
    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        fullname: yup.string().required('Required'),
        password: yup.string().required('Your password is required').min(4, 'A minimium of 4 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', fullname: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  
    
    const submit = async (e: any) => { 
        e.preventDefault(true)
        setLoading(true);
        if (!formik.dirty) { 
            toast({
                title: 'You have to fill in the form to continue', 
                status: 'error',  
                duration: 3000, 
            }) 
            setLoading(false);
            return;
        }else if (!formik.isValid) {
            toast({
                title: 'You have to fill in the form to continue', 
                status: 'error',  
                duration: 3000, 
            }) 
            setLoading(false);
            return;
        } else { 

            const request: any = await handleRegister(JSON.stringify(formik.values)) 

            if (request.status === 200 || request.status === 201) {    
                localStorage.setItem('token', request?.data?.data?.token);   
                localStorage.setItem('id', request?.data?.data?.user?.id); 
                userContext.setUserEmail(formik.values.email)
                navigate("/verifyemail")
                toast({
                    title: "Registration Successful", 
                    status: 'success',  
                    duration: 3000, 
                }) 
            }else {  
                toast({
                    title: request?.data?.error?.details?.detail, 
                    status: 'error',  
                    duration: 3000, 
                }) 
            }
            setLoading(false);
        }
    } 

    return (
        <form onSubmit={(e)=> submit(e)} className=' w-full pb-20 flex flex-col items-center ' >
            <Navbar hide={true} />
            <div className=' w-full lg:px-0 px-6 lg:w-[560px] flex flex-col lg:items-center lg:text-center mt-8 ' > 
                <p className='text-3xl lg:text-4xl font-bold lg:font-semibold text-[#1E293B] ' >Create Account</p>
                <p className=' text-[#475569] mt-2 max-w-md' >Get started! It takes less than a minutes.</p>
                <div className=' mt-6 lg:mt-10 text-left w-full lg:mb-0 mb-8 ' >
                    <InputComponent 
                        name="fullname"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("fullname", true, true)
                        }  
                        title='Full Name' placeholder='Enter Full Name' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.fullname && formik.errors.fullname && (
                            <motion.p
                                style={{fontFamily:"Inter", fontWeight:"700" }}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs text-[#ff0000]">
                                {formik.errors.fullname}
                            </motion.p>
                        )}
                    </div>
                    <InputComponent 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        }  
                        title='Email Address' placeholder='Enter Email Address' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.email && formik.errors.email && (
                            <motion.p
                                style={{fontFamily:"Inter", fontWeight:"700" }}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs text-[#ff0000]">
                                {formik.errors.email}
                            </motion.p>
                        )}
                    </div>
                    <InputComponent 
                        name="password"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("password", true, true)
                        }  
                        pwd={true} title='Password' placeholder='Enter Password' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.password && formik.errors.password && (
                            <motion.p
                                style={{fontFamily:"Inter", fontWeight:"700" }}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs text-[#ff0000]">
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                    <InputComponent onChange={(e: any)=> setConfirmPassword(e.target.value)} pwd={true} title='Confirm Password' placeholder='Enter Confirm Password' />
                    <div className="w-full h-auto pt-2">
                        {formik.values.password !== confirmPassword && (
                            <motion.p
                                style={{fontFamily:"Inter", fontWeight:"700" }}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs text-[#ff0000]">
                                {formik.errors.password}
                            </motion.p>
                        )}
                    </div>
                </div>
                <div className=' w-full mt-10 hidden lg:flex lg:flex-row flex-col gap-2 mb-6 text-[#475569] text-sm font-medium justify-center items-center ' >
                    <p className=' ' >By clicking on continue, I agree to Easyswap’s</p>
                    <a href='#' className=' font-semibold ' >Privacy Policy</a>
                    <p>and</p>
                    <a href='#' className=' font-semibold ' >Terms of Use</a>
                </div>
                <ButtonComponent  type="submit" disabled={!formik.isValid && formik.values.password === confirmPassword} bgcolor={(formik.isValid && formik.values.password === confirmPassword) ? " bg-[#303179] text-white ": ""} name={loading ? "Loading...": "Create Account"} />
                <div className=' flex items-center justify-center font-medium text-[#344054] bg-[#F2F4F7] rounded h-[45px] mt-4 lg:mt-8 gap-2 ' >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.5005 12.2336C22.5005 11.3702 22.4291 10.7402 22.2744 10.0869H12.2148V13.9835H18.1196C18.0006 14.9519 17.3577 16.4102 15.9291 17.3902L15.9091 17.5206L19.0897 19.9354L19.3101 19.9569C21.3338 18.1252 22.5005 15.4302 22.5005 12.2336Z" fill="#4285F4"/>
                        <path d="M12.212 22.4996C15.1048 22.4996 17.5334 21.5662 19.3072 19.9562L15.9263 17.3895C15.0215 18.0078 13.8072 18.4395 12.212 18.4395C9.37874 18.4395 6.974 16.6079 6.11678 14.0762L5.99113 14.0866L2.68388 16.595L2.64062 16.7128C4.4025 20.1428 8.02155 22.4996 12.212 22.4996Z" fill="#34A853"/>
                        <path d="M6.119 14.0765C5.89281 13.4232 5.76191 12.7231 5.76191 11.9998C5.76191 11.2764 5.89281 10.5765 6.1071 9.92313L6.10111 9.78398L2.75239 7.23535L2.64283 7.28642C1.91667 8.70977 1.5 10.3081 1.5 11.9998C1.5 13.6915 1.91667 15.2897 2.64283 16.7131L6.119 14.0765Z" fill="#FBBC05"/>
                        <path d="M12.2121 5.55997C14.224 5.55997 15.5811 6.41163 16.3549 7.12335L19.3787 4.23C17.5216 2.53834 15.1049 1.5 12.2121 1.5C8.02158 1.5 4.40251 3.85665 2.64062 7.28662L6.1049 9.92332C6.97403 7.39166 9.37878 5.55997 12.2121 5.55997Z" fill="#EB4335"/>
                    </svg>
                    <p>Sign up with Google</p>
                </div>
                <div className=' w-full mt-8 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' >
                    <p className=' ' >Already have an account? </p>
                    <a href='/signin' className=' font-semibold underline ' >Log in</a> 
                </div>
            </div>
        </form>
    )
}
