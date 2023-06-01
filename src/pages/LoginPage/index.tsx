import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../../components/ButtonComponent'
import InputComponent from '../../components/InputComponent'
import Navbar from '../../components/Navbar'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useLoginCallback } from '../../action/useAuth'
import { useToast } from '@chakra-ui/react'
import GoogleButton from '../../components/GoogleButton'

export default function LoginPage() {

    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false)

    const { handleLogin } = useLoginCallback()
    const toast = useToast()
     
    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required'),
        password: yup.string().required('Your password is required').min(4, 'A minimium of 4 characters')
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
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
                position: "top"
            }) 
            setLoading(false);
            return;
        }else if (!formik.isValid) {
            toast({
                title: 'You have to fill in the form to continue', 
                status: 'error',  
                duration: 3000, 
                position: "top"
            }) 
            setLoading(false);
            return;
        }else { 

            const request: any = await handleLogin(JSON.stringify(formik.values))            

            if (request?.status === 200 || request?.status === 201) {    
                localStorage.setItem('token', request?.data?.access_token);   
                // localStorage.setItem('id', request?.data?.data?.user?.id); 
                navigate("/")
                toast({
                    title: "Login Successful", 
                    status: 'success',  
                    duration: 3000, 
                    position: "top"
                }) 
            }else { 
                toast({
                    title: request?.data?.error?.details[0], 
                    status: 'error',  
                    duration: 3000, 
                    position: "top"
                }) 
            }
            setLoading(false);
        }
    } 

    return (
        <form onSubmit={(e)=> submit(e)} className=' w-full lg:h-auto h-screen overflow-auto lg:justify-center pb-20 flex flex-col  lg:items-center ' >
            <Navbar hide={true} />
            <div className=' w-full lg:px-0 px-6 lg:w-[500px] mt-20 lg:mt-12 flex flex-col lg:items-center lg:text-center ' > 
                <p className=' text-2xl lg:text-3xl font-bold lg:font-semibold text-[#1E293B] ' >Login to your account</p>
                <p className=' text-[#475569] mt-2 lg:max-w-md lg:text-center ' >Hello again! Please enter your login details.</p>
                <div className=' mt-6 lg:mt-10 text-left w-full ' > 
                    <InputComponent 
                        name="email"
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("email", true, true)
                        }  
                        email={true}
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
                </div>
                <div className=' w-full mt-3 flex gap-2 mb-6 text-[#475569] text-sm font-medium justify-end items-center ' >
                     
                    <a href='/resetpwd' className=' font-semibold ' >Forgot password</a>
                </div>
                <ButtonComponent type="submit" disabled={!formik.isValid} bgcolor={formik.isValid ? " bg-[#303179] text-white ": ""} name={loading ? "Loading...": "Log in"} /> 
                <GoogleButton name={"Log in with Google"} />
                <div className=' w-full mt-10 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' >
                    <p className=' ' >Don’t have an account? </p>
                    <a href='/signup' className=' font-semibold underline ' >Sign up</a> 
                </div>
            </div>
        </form>
    )
}
