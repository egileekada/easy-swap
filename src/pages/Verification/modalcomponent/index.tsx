import { Input, Select } from '@chakra-ui/react'
import React from 'react'
import { useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as yup from 'yup'
import { useFormik } from 'formik'; 
import { useVerifyUserCallback } from '../../../action/useAction'
import { useNavigate } from 'react-router-dom'
import Webcam from 'react-webcam'
import { IUser, UserContext } from '../../../context/userContext'

interface Props {
    close?: any
}

export default function VerificationModal({close}: Props) {

    const [isShown, setIsShown] = React.useState(0)

    const [image, SetImage] = React.useState('');  
    const [imageFile, SetImageFile] = React.useState('');

    const [imageFace, SetImageFace] = React.useState('');     
    const [loading, setLoading] = React.useState(false);   
    const [imageFileFace, SetImageFileFace] = React.useState('');
    
    const {handleVerifyUser} = useVerifyUserCallback()
    const toast = useToast() 

    const navigate = useNavigate()

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

    const handleImageChangeface = (e: any ) => { 
        const selected = e.target.files[0]; 
        const TYPES = ["image/png", "image/jpg", "image/jpeg",, "image/webp" ];        
        if (selected && TYPES.includes(selected.type)) { 
            const reader: any = new FileReader();
            reader.onloadend= () => {  
                SetImageFace(reader.result)
            }
            reader.readAsDataURL(selected)
        } else {
            console.log('Error')
        }   
        SetImageFileFace(selected)
    }  

    const loginSchema = yup.object({ 
        first_name: yup.string().required('Required'),
        last_name: yup.string().required('Required'),
        residential_address: yup.string().required('Required'),
        govt_id_number: yup.string().required('Required'),
        govt_id_type: yup.string().required('Required'),
        expiry_date: yup.string().required('Required'), 
    })      

    const formik = useFormik({
        initialValues: { first_name: '', last_name: '', residential_address: '', govt_id_number: '', govt_id_type: '', expiry_date: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  

    const submit =async()=> {

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
        }else if (!image || !imageFace) {
            toast({
                title: 'upload an image to continue', 
                status: 'error',  
                duration: 3000, 
                position: "top"
            }) 
            setLoading(false);
            return;
        }else { 
            let formdata = new FormData()

            formdata.append("country_of_residence", "Nigeria")
            formdata.append("first_name", formik.values.first_name)
            formdata.append("last_name", formik.values.last_name)
            formdata.append("residential_address", formik.values.residential_address)
            formdata.append("govt_id_number", formik.values.govt_id_number)
            formdata.append("govt_id_type", formik.values.govt_id_type)
            formdata.append("expiry_date", formik.values.expiry_date) 
            formdata.append("expiry_date", formik.values.expiry_date) 
            formdata.append("selfie_photo", imageFileFace)  
            formdata.append("govt_id_photo", imageFile) 

            const responses = await handleVerifyUser(formdata, imageFile) 

            if (responses?.status === 200 || responses?.status === 201) {  
                setIsShown(2)
                toast({
                    title: "submitted Successfully", 
                    status: 'success',  
                    duration:  3000, 
                    position: "top"
                }) 
            }else { 
                toast({
                    title: responses?.data?.error?.details[0], 
                    status: 'error',  
                    duration: 3000, 
                    position: "top"
                }) 
            }
        }        
    }
    
    const closeHandler =()=> {
        setIsShown(0)
        navigate("/dashboard/settings")
        close()
    }

    return (
        <>
            {isShown !== 2 && ( 
                <div className='  w-full lg:h-auto h-screen bg-white text-[#475467] pt-12 pb-6 px-6 overflow-y-auto  ' >
                    <div className=' w-full flex items-center justify-between ' >
                        {isShown === 1 && 
                            <svg onClick={()=> setIsShown(isShown - 1)} role='button'  width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.9301 8.66573H4.74465L9.69853 2.8524C9.93017 2.58011 10.0416 2.22907 10.0083 1.8765C9.97508 1.52393 9.79982 1.19872 9.52112 0.972399C9.24242 0.746081 8.88312 0.637198 8.52226 0.669705C8.16139 0.702211 7.82853 0.873443 7.59688 1.14573L0.773355 9.14573C0.727447 9.20936 0.686395 9.27621 0.650531 9.34573C0.650531 9.4124 0.650532 9.4524 0.555002 9.51907C0.493145 9.67194 0.460757 9.83468 0.459473 9.99907C0.460757 10.1635 0.493145 10.3262 0.555002 10.4791C0.555002 10.5457 0.555002 10.5857 0.650531 10.6524C0.686395 10.7219 0.727447 10.7888 0.773355 10.8524L7.59688 18.8524C7.7252 19.0029 7.88588 19.1239 8.0675 19.2069C8.24912 19.2899 8.44722 19.3327 8.64771 19.3324C8.96657 19.333 9.27559 19.2245 9.52112 19.0257C9.65931 18.9138 9.77354 18.7763 9.85726 18.6212C9.94099 18.4661 9.99257 18.2963 10.0091 18.1217C10.0255 17.9471 10.0066 17.771 9.9533 17.6035C9.90002 17.436 9.81344 17.2805 9.69853 17.1457L4.74465 11.3324H20.9301C21.292 11.3324 21.6391 11.1919 21.8951 10.9419C22.151 10.6918 22.2948 10.3527 22.2948 9.99907C22.2948 9.64544 22.151 9.3063 21.8951 9.05626C21.6391 8.80621 21.292 8.66573 20.9301 8.66573Z" fill="black"/>
                            </svg>
                        }
                        <p className=' font-bold text-lg text-black ' >Identity Verification Process</p>
                        <svg role='button' className=' lg:block hidden ' onClick={()=> close()} width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="20.6422" cy="20" rx="20.4" ry="20" fill="#EFEFFE"/>
                            <path d="M26.0821 14.666L15.2021 25.3327" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.2021 14.666L26.0821 25.3327" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <svg role='button' className=' lg:hidden ' onClick={()=> close(false)} width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <ellipse cx="20.6422" cy="20" rx="20.4" ry="20" fill="#EFEFFE"/>
                            <path d="M26.0821 14.666L15.2021 25.3327" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.2021 14.666L26.0821 25.3327" stroke="#303179" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    {isShown === 0 && (
                        <> 
                            <p className=' font-normal mt-4 ' >Kindly verify that your country of residence matches the information on your valid ID, as your privileges and access may vary depending on your selection.</p>
                            <p className=' mt-8 ' >Select country of residence</p>
                            <div className=' w-full border border-[#D0D5DD] gap-3 h-[50px] rounded-lg px-6 flex items-center bg-[#F9FAFB] ' >
                                <img src='/images/Nigeria.png' className=' w-[24px] h-[24px] rounded-full ' />
                                <p className=' font-semibold text-[#101828] ' >Nigeria</p>
                            </div>
                            <div className=' mt-4 w-full flex lg:flex-row flex-col gap-4 lg:gap-6 ' >
                                <div className=' w-full ' >
                                    <p className=' mb-2 ' >First Name</p>
                                    <Input 
                                        name="first_name"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("first_name", true, true)
                                        }  
                                        placeholder='Enter First Name' border="1px solid #D0D5DD" height="50px" fontSize="14px" color="#101828" />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.first_name && formik.errors.first_name && (
                                            <motion.p
                                                style={{fontFamily:"Inter", fontWeight:"700" }}
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs text-[#ff0000]">
                                                {formik.errors.first_name}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                                <div className=' w-full ' >
                                    <p className=' mb-2 ' >Last Name</p>
                                    <Input 
                                        name="last_name"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("last_name", true, true)
                                        }  
                                        placeholder='Enter Last Name' border="1px solid #D0D5DD" height="50px" fontSize="14px" color="#101828" />
                                    <div className="w-full h-auto pt-2">
                                        {formik.touched.last_name && formik.errors.last_name && (
                                            <motion.p
                                                style={{fontFamily:"Inter", fontWeight:"700" }}
                                                initial={{ y: -100, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                className="text-xs text-[#ff0000]">
                                                {formik.errors.last_name}
                                            </motion.p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className=' w-full mt-4 ' >
                                <p className=' mb-2 ' >Residential Address</p>
                                <Input 
                                    name="residential_address"
                                    onChange={formik.handleChange}
                                    onFocus={() =>
                                        formik.setFieldTouched("residential_address", true, true)
                                    }  
                                    placeholder='Enter Residential Address' border="1px solid #D0D5DD" height="50px" fontSize="14px" color="#101828" />
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.residential_address && formik.errors.residential_address && (
                                        <motion.p
                                            style={{fontFamily:"Inter", fontWeight:"700" }}
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs text-[#ff0000]">
                                            {formik.errors.residential_address}
                                        </motion.p>
                                    )}
                                </div>
                            </div>
                            <p className=' font-semibold mt-6 ' >Use an authentic government-issued document only</p>
                            <p className=' font-normal mt-4 '>Only the specified document listed below will be considered valid for verification, while any other documents will not be accepted.</p>
                            <div className=' w-full mt-4 ' >
                                <p className=' mb-2 ' >What document do you have?</p>
                                <Select 
                                        name="govt_id_type"
                                        onChange={formik.handleChange}
                                        onFocus={() =>
                                            formik.setFieldTouched("govt_id_type", true, true)
                                        }  
                                        placeholder='Choose document type' border="1px solid #D0D5DD" height="50px" fontSize="14px" color="#101828" >
                                    <option>National Identity Number</option>
                                    <option>International Passport</option>
                                    <option>Driver’s License</option>
                                </Select>
                                <div className="w-full h-auto pt-2">
                                    {formik.touched.govt_id_type && formik.errors.govt_id_type && (
                                        <motion.p
                                            style={{fontFamily:"Inter", fontWeight:"700" }}
                                            initial={{ y: -100, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            className="text-xs text-[#ff0000]">
                                            {formik.errors.govt_id_type}
                                        </motion.p>
                                    )}
                                </div>
                            </div>
                            {formik.values.govt_id_type && (
                                <> 
                                    <div className=' mt-4 w-full flex lg:flex-row flex-col  gap-6 ' >
                                        <div className=' w-full ' >
                                            <p className=' mb-2 ' >What is your card number?</p>
                                            <Input 
                                                name="govt_id_number"
                                                onChange={formik.handleChange}
                                                onFocus={() =>
                                                    formik.setFieldTouched("govt_id_number", true, true)
                                                }  
                                                placeholder='Enter Card Number' border="1px solid #D0D5DD" height="50px" fontSize="14px" color="#101828" />
                                            <div className="w-full h-auto pt-2">
                                                {formik.touched.govt_id_number && formik.errors.govt_id_number && (
                                                    <motion.p
                                                        style={{fontFamily:"Inter", fontWeight:"700" }}
                                                        initial={{ y: -100, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        className="text-xs text-[#ff0000]">
                                                        {formik.errors.govt_id_number}
                                                    </motion.p>
                                                )}
                                            </div>
                                        </div>
                                        <div className=' w-full ' >
                                            <p className=' mb-2 ' >Expiry date</p>
                                            <Input 
                                                name="expiry_date"
                                                onChange={formik.handleChange}
                                                onFocus={() =>
                                                    formik.setFieldTouched("expiry_date", true, true)
                                                }  
                                                type='date' border="1px solid #D0D5DD" height="50px" fontSize="14px" color="#101828" />
                                            <div className="w-full h-auto pt-2">
                                                {formik.touched.expiry_date && formik.errors.expiry_date && (
                                                    <motion.p
                                                        style={{fontFamily:"Inter", fontWeight:"700" }}
                                                        initial={{ y: -100, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        className="text-xs text-[#ff0000]">
                                                        {formik.errors.expiry_date}
                                                    </motion.p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <p className=' font-semibold mt-6 ' >File size must be between 10kb and 512kb in jpg/jpeg/png format.</p>
                                    <label className=' w-full mt-4 border border-[#F2F4F7] h-[200px] rounded-lg flex flex-col justify-center items-center  ' >
                                        <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChange} />
                                        {image? <img src={image} alt='image' className=' w-full h-full object-cover rounded-lg  ' /> :
                                            <> 
                                                <p className=' text-[#8C9196] text-xs font-semibold  ' >Add files</p>
                                                <p className=' text-[#8C9196] text-xs font-normal mt-2  ' >Upload selfie here</p>
                                            </>
                                        }
                                    </label> 
                                </>
                            )}
                            <button disabled={!formik.isValid || !image || !formik.dirty} onClick={()=> setIsShown(1)} className={(!formik.isValid || !image || !formik.dirty) ? ' h-[50px] w-full rounded-md bg-[#667085] mt-5 text-white ' : ' h-[50px] w-full rounded-md bg-[#303179] mt-5 text-white ' } >Continue</button>
                            <p className=' text-sm font-normal text-center mt-4 ' >Your personal verification information is used solely for the purpose of verification and is securely held in strict confidentiality by Ezyswap.</p>
                        </>
                    )}
                    {isShown === 1 && (
                        <>
                            <p className=' font-bold text-lg mt-8 ' >Take Selfie Photo</p>
                            <p className=' mt-2 font-normal  ' >Capture a selfie while holding your government-issued ID for verification purposes</p>

                            <div className=' w-full flex gap-4 mt-6 ' >
                                <div className=' w-fit ' > 
                                    <img src='/images/selfie.png' alt='image' className=' w-[250px] object-cover ' />
                                </div>
                                <div className=' w-full flex gap-4 flex-col ' >
                                    <div className=' flex gap-2 ' >
                                        <div className=' w-fit ' > 
                                            <svg className=' mt-2 '  width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.7985 5.4867L9.28521 0L10.1293 0.844107L3.7985 7.1749L0 3.37645L0.844107 2.53235L3.7985 5.4867Z" fill="#12B76A"/>
                                            </svg>
                                        </div>
                                        <p className=' text-[13px] font-normal ' >Capture a natural expression selfie while securely holding your government-issued ID.</p>
                                    </div>
                                    <div className=' flex gap-2 ' >
                                        <div className=' w-fit ' > 
                                            <svg className=' mt-2 ' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.00047 4.05767L8.30027 0.757812L9.24306 1.70062L5.94327 5.00047L9.24306 8.30027L8.30027 9.24306L5.00047 5.94327L1.70062 9.24306L0.757812 8.30027L4.05767 5.00047L0.757812 1.70062L1.70062 0.757812L5.00047 4.05767Z" fill="#D92D20"/>
                                            </svg>
                                        </div>
                                        <p className=' text-[13px] font-normal ' >Capture a clear, centred image of your full face with open eyes.</p>
                                    </div>
                                    <div className=' flex gap-2 ' >
                                        <div className=' w-fit ' > 
                                            <svg className=' mt-2 ' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.00047 4.05767L8.30027 0.757812L9.24306 1.70062L5.94327 5.00047L9.24306 8.30027L8.30027 9.24306L5.00047 5.94327L1.70062 9.24306L0.757812 8.30027L4.05767 5.00047L0.757812 1.70062L1.70062 0.757812L5.00047 4.05767Z" fill="#D92D20"/>
                                            </svg>
                                        </div>
                                        <p className=' text-[13px] font-normal ' >Do not crop your ID or use screenshots of you ID</p>
                                    </div>
                                    <div className=' flex gap-2 ' >
                                        <div className=' w-fit ' > 
                                            <svg className=' mt-2 ' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.00047 4.05767L8.30027 0.757812L9.24306 1.70062L5.94327 5.00047L9.24306 8.30027L8.30027 9.24306L5.00047 5.94327L1.70062 9.24306L0.757812 8.30027L4.05767 5.00047L0.757812 1.70062L1.70062 0.757812L5.00047 4.05767Z" fill="#D92D20"/>
                                            </svg>
                                        </div>
                                        <p className=' text-[13px] font-normal ' >Capture your unobstructed face, without hats, beauty filters, or headgear, in the image provided.</p>
                                    </div>
                                </div> 
                            </div>
                            <p className=' font-semibold mt-6 ' >File size must be between 10kb and 512kb in jpg/jpeg/png format.</p>
                            <label className=' w-full mt-4 border border-[#F2F4F7] h-[200px] rounded-lg flex flex-col justify-center items-center  ' >
                                <input style={{display:'none'}} type="file" accept="image/*" id="input" onChange={handleImageChangeface} />
                                {imageFace? <img src={imageFace} alt='image' className=' w-full h-full object-cover rounded-lg  ' /> :
                                    <> 
                                        <p className=' text-[#8C9196] text-xs font-semibold  ' >Add files</p>
                                        <p className=' text-[#8C9196] text-xs font-normal mt-2  ' >Upload selfie here</p>
                                    </>
                                }
                            </label> 
                            <button onClick={()=> submit()} className=' h-[50px] w-full rounded-md bg-[#303179] mt-5 text-white ' >
                                {loading ? "Loading..." : "Continue"}
                            </button>
                            <p className=' text-sm font-normal text-center mt-4 ' >Your personal verification information is used solely for the purpose of verification and is securely held in strict confidentiality by Ezyswap.</p>
                        </>
                    )} 
                </div>
            )}
            {isShown === 2 && ( 
                <div className=' w-full lg:h-auto h-screen bg-white px-6 pt-8 flex flex-col lg:justify-start justify-center items-center ' >
                    <svg width="207" height="206" viewBox="0 0 207 206" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="103.5" cy="103" r="103" fill="#BFE5D0"/>
                        <path d="M103.5 56.333L115.758 65.2744L130.93 65.2455L135.591 79.6843L147.882 88.579L143.166 103L147.882 117.42L135.591 126.315L130.93 140.754L115.758 140.725L103.5 149.666L91.2421 140.725L76.0699 140.754L71.4088 126.315L59.1172 117.42L63.8332 103L59.1172 88.579L71.4088 79.6843L76.0699 65.2455L91.2421 65.2744L103.5 56.333Z" fill="#40B274" stroke="#009845" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M87.168 103L98.8346 114.666L122.168 91.333" stroke="white" stroke-width="2.33333" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p className=' text-[24px] font-semibold ' >Verification Complete</p>
                    <p className=' text-sm font-normal text-[#475467] ' >Explore, enjoy worry-free.</p>
                    <button onClick={()=> closeHandler()} className={ ' h-[50px] w-full rounded-md bg-[#303179] mt-12 text-white ' } >Done</button>
                    <p className=' text-sm font-normal text-center mt-4 ' >Your personal verification information is used solely for the purpose of verification and is securely held in strict confidentiality by Ezyswap.</p>
                </div>
            )}
        </>
    )
}
