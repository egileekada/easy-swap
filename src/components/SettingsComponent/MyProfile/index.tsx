import React from 'react'
import InputComponent from '../../InputComponent'
import ButtonComponent from '../../ButtonComponent'
import { useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useEditUserCallback } from '../../../action/useAction'
import { IUser, UserContext } from '../../../context/userContext'
import { BASEURL } from '../../../config/BasicUrl/Url'

export default function MyProfile() {
    
    const toast = useToast()
    const [loading, setLoading] = React.useState(false)
    const [image, SetImage] = React.useState(''); 
    const userContext: IUser = React.useContext(UserContext); 
    const [imageFile, SetImageFile] = React.useState(''); 
    const loginSchema = yup.object({ 
        email: yup.string().email('This email is not valid').required('Your email is required')
    })      

    const handleImageChange = (e: any ) => {

        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg",, "image/webp" ];        
        if (selected && TYPES.includes(selected.type)) { 
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                SetImage(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            console.log('Error')
        }  

        SetImageFile(selected)
    } 

    // formik
    const formik = useFormik({
        initialValues: {fullname: '', email: '', phone: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    const { handleEditUser } = useEditUserCallback()

    React.useEffect(()=> {
       formik.setFieldValue("fullname", userContext.userInfo.fullname) 
       formik.setFieldValue("email", userContext.userInfo.email) 
       SetImage(BASEURL.URL+""+userContext.userInfo.photo)
       formik.setFieldValue("phone", userContext.userInfo.phone) 
    }, [])

    console.log(userContext.userInfo);
    
    
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
        }else { 

            const request: any = await handleEditUser(formik.values, imageFile)     

            if (request.status === 200 || request.status === 201) {    
                userContext.setUserInformation({...userContext.userInfo, fullname: request?.data?.fullname, phone: request?.data?.phone, photo: request?.data?.photo})
                toast({
                    title: "Update Successful", 
                    status: 'success',  
                    duration: 3000, 
                }) 
            }else { 
                toast({
                    title: "Error Occured", 
                    status: 'error',  
                    duration: 3000, 
                }) 
            }
            setLoading(false);
        }
    } 
// "photo": "http://example.com",
// "fullname": "string",
// "email": "user@example.com",
// "password": "string",
// "phone": "string",

    return (
        <div className=' w-full flex flex-col items-center lg:p-10 ' >
            <form onSubmit={(e)=> submit(e)} className=' lg:w-[560px] w-full flex flex-col items-center py-14 ' >
                <label className=' w-[130px] relative h-[130px] rounded-full ' >
                    <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                    <img className=' w-full h-full rounded-full ' alt='profile' src={image? image : "/images/person.webp"} />
                    <div className=' absolute top-2 right-0 rounded-full bg-white p-2 ' >
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1101_18597)">
                                <path d="M13.1067 8.07174L11.9283 6.8934L4.16667 14.6551V15.8334H5.345L13.1067 8.07174ZM14.285 6.8934L15.4633 5.71507L14.285 4.53674L13.1067 5.71507L14.285 6.8934ZM6.035 17.5001H2.5V13.9642L13.6958 2.7684C13.8521 2.61218 14.064 2.52441 14.285 2.52441C14.506 2.52441 14.7179 2.61218 14.8742 2.7684L17.2317 5.1259C17.3879 5.28218 17.4757 5.4941 17.4757 5.71507C17.4757 5.93604 17.3879 6.14796 17.2317 6.30424L6.035 17.5001Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_1101_18597">
                                    <rect width="20" height="20" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </label>
                <p className=' text-2xl font-semibold text-[#1D2939] mt-2 ' >{userContext.userInfo.fullname}</p>
                <div className=' mt-10 text-left w-full lg:w-[560px] mb-8 ' >
                    <InputComponent
                        name="fullname"
                        value={formik.values.fullname}
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
                    <InputComponent value={formik.values.email} disabled={true} title='Email Address' placeholder='Enter Email Address' /> 
                    {/* <InputComponent disabled={true} title='Address' placeholder='Enter Address' />  */}
                    <InputComponent 
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onFocus={() =>
                            formik.setFieldTouched("phone", true, true)
                        } 
                        title='Contact Number' placeholder='Enter Contact Number' />
                    <div className="w-full h-auto pt-2">
                        {formik.touched.phone && formik.errors.phone && (
                            <motion.p
                                style={{fontFamily:"Inter", fontWeight:"700" }}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-xs text-[#ff0000]">
                                {formik.errors.phone}
                            </motion.p>
                        )}
                    </div>
                </div>
                <ButtonComponent bgcolor=' bg-[#303179] text-white '  name={loading? "Loading...": "Save Changes"} />
            </form>
        </div>
    )
}
