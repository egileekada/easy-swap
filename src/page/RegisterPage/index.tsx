import React from 'react'
import Navbar from '../../components/Navbar'
import InputComponent from '../../components/InputComponent'
import ButtonComponent from '../../components/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useRegisterCallback } from '../../action/useAuth'
import { useToast } from '@chakra-ui/react'
// import { IUser, UserContext } from '../../context/userContext'
import GoogleButton from '../../components/GoogleButton'
import userdata from '../../global-state/userdata'

export default function RegisterPage() {


    // global State  
    const setUserData: any = userdata((state) => state.setUserData)


    const navigate = useNavigate()
    const [loading, setLoading] = React.useState(false)
    const [confirmPassword, setConfirmPassword] = React.useState("")

    // const userContext: IUser = React.useContext(UserContext); 


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
        } else { 

            const request: any = await handleRegister(JSON.stringify(
                {email: formik.values.email.toLocaleLowerCase(), fullname: formik.values.fullname, password: formik.values.password }
            )) 

            if (request.status === 200 || request.status === 201) {    
                localStorage.setItem('token', request?.data?.data?.token);   
                localStorage.setItem('id', request?.data?.data?.user?.id); 
                setUserData({userEmail: formik.values.email})
                navigate("/verifyemail")
                toast({
                    title: "Registration Successful", 
                    status: 'success',  
                    duration: 3000, 
                    position: "top"
                }) 
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
                <p className=' w-full lg:mt-10 mb-6 text-[#475569] text-sm font-medium ' >
                    <p className=' text-center ' >By clicking on Create Account, I agree to Easyswap’s <a href='/privacy-policy' className=' font-semibold underline ' >Privacy Policy</a> to <a href='/termofservice' className=' font-semibold underline' >Terms of Use</a></p>
                     
                </p>
                <ButtonComponent  type="submit" disabled={!formik.isValid && formik.values.password === confirmPassword} bgcolor={(formik.isValid && formik.values.password === confirmPassword) ? " bg-[#303179] text-white ": ""} name={loading ? "Loading...": "Create Account"} /> 
                <GoogleButton name={"Sign up with Google"} />
                <div className=' w-full mt-8 flex gap-2 text-[#475569] text-sm font-medium justify-center items-center ' >
                    <p className=' ' >Already have an account? </p>
                    <a href='/signin' className=' font-semibold underline ' >Log in</a> 
                </div>
            </div>
        </form>
    )
}
