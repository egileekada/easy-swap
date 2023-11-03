import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../DashboardLayout/component/Sidebar'
import userdata from '../../global-state/userdata'
import axios from '../../config/utils/axios'
import { useQuery } from 'react-query'
import { AxiosError } from 'axios'
import transactiondetail from '../../global-state/transactiondetail'
// import { IUser, UserContext } from '../../context/userContext'

type props = {
    hide?: boolean,
    dashboard?: boolean,
    settings?: boolean
}

export default function Navbar({ hide, dashboard, settings }: props) {

    const navigate = useNavigate()

    // Global State
    const userinfo: any = userdata((state) => state.user)
    const setUserData: any = userdata((state) => state.setUserData) 
    const setTnxData = transactiondetail((state) => state.setTnxData)

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const [pathName, setPathName] = React.useState(window.location.pathname) 

    
    const { } = useQuery(["userInfo"], () => axios.get(`/users/profile`,
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        }), {
        onError: (error: AxiosError<any, any>) => {
            console.log(error.response?.data);
        },
        onSuccess: (data: any) => {
            setUserData(data?.data) 
            setPathName(window.location.pathname)
        }
    })


    // React.useEffect(()=> { 
    //     const fetchData = async () => {
    //         const request: any = await handleGetData("/users/profile")  

    //         setUserData(request?.data) 
    //         console.log(request?.data); 
    //     } 
    //     setPathName(window.location.pathname)  

    //     // call the function
    //     fetchData()

    //     // make sure to catch any error
    //     .catch(console.error);;
    // }, [])  

    const LogOut = () => {
        localStorage.clear()
        navigate("/") 
    }

    const clickHandler = (item: any) => {
        navigate(item) 
        setTnxData({})
    }

    return (
        <div className=' relative w-full h-[62px] ' >
            <div className=' w-full sticky z-40 top-0 h-[62px] py-2 flex items-center lg:pr-20 pr-3 px-2 lg:px-20 bg-white ' >

                <svg role='button' onClick={() => navigate("/")} className=' mr-auto lg:ml-0 ml-3 w-[130px] lg:w-[170px] ' viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.6464 24.8677C50.444 24.6847 50.1365 24.7314 49.9886 24.9572C48.1865 27.6934 44.3255 30.92 40.6046 32.002C37.0121 33.0451 34.9531 32.2978 34.3849 30.3401C33.7388 28.1176 36.2531 26.5374 39.6393 24.7742C44.7575 22.1548 51.3664 18.8153 49.1829 11.3034C47.6455 6.01395 41.6593 2.72117 33.3612 5.13432C32.1546 5.48461 31.0376 5.91276 29.9984 6.40317C24.0511 0.241854 15.8581 -1.04646 8.54469 3.47236C-0.372292 8.97979 -2.38455 19.695 2.85822 28.1877C8.49409 37.3149 18.497 39.3193 27.2349 34.3957C29.7298 38.6499 35.3307 40.4831 42.862 38.2918C48.35 36.696 53.1101 33.3293 55.5466 29.2892L50.6464 24.8677ZM8.2411 16.7797C8.18661 14.2459 9.21414 11.5253 12.3279 9.59865C15.5584 7.60196 18.4425 7.87831 20.6065 9.03039C22.3074 9.93727 22.4125 12.3348 20.77 13.3507L12.0243 18.753C10.4207 19.7417 8.28391 18.6596 8.2411 16.7797ZM14.6943 27.6739C13.4527 26.8916 13.4761 25.0623 14.7255 24.2916L26.0906 17.2701C30.5511 14.7519 30.734 14.5962 35.1399 11.4864C37.6971 9.68038 40.4255 11.1555 40.9588 12.981C41.527 14.9387 39.254 16.3788 35.9378 18.1264C32.2636 20.0102 27.7059 22.365 26.2697 26.4479C25.8843 26.7476 25.4912 27.0278 25.0942 27.273C21.2643 29.6395 17.4928 29.441 14.6943 27.6739Z" fill="#00BAF0" />
                    <path d="M75.2605 16.9252H64.8839C64.954 17.8555 65.2537 18.5638 65.783 19.0581C66.3085 19.5486 66.9585 19.7938 67.7291 19.7938C68.8734 19.7938 69.6674 19.3111 70.115 18.3459H74.9958C74.7467 19.3306 74.2952 20.2141 73.6413 21.0003C72.9874 21.7866 72.1701 22.4054 71.1893 22.8491C70.2045 23.2967 69.1069 23.5186 67.8926 23.5186C66.4252 23.5186 65.1213 23.2072 63.977 22.5806C62.8327 21.9539 61.9375 21.0626 61.2953 19.8988C60.6531 18.7351 60.3301 17.3767 60.3301 15.8237C60.3301 14.2708 60.6492 12.9085 61.2837 11.7486C61.9181 10.5888 62.8094 9.69356 63.9537 9.06692C65.098 8.44028 66.4097 8.12891 67.8965 8.12891C69.3444 8.12891 70.6327 8.43249 71.7575 9.03967C72.8824 9.64685 73.7659 10.5148 74.4003 11.6396C75.0347 12.7645 75.3539 14.08 75.3539 15.5824C75.3383 16.0106 75.3111 16.4582 75.2605 16.9252ZM70.6444 14.3758C70.6444 13.5896 70.3758 12.963 69.8387 12.4998C69.3015 12.0366 68.6321 11.8031 67.8264 11.8031C67.0558 11.8031 66.4097 12.0289 65.8803 12.4726C65.351 12.9202 65.0279 13.5546 64.8995 14.3758H70.6444Z" fill="#2F327A" />
                    <path d="M80.7017 19.524H87.19V23.3033H75.5796V19.6564L81.7993 12.1211H75.6302V8.3418H87.0537V11.9888L80.7017 19.524Z" fill="#2F327A" />
                    <path d="M104.195 8.34177L94.8109 30.4104H89.8757L93.3086 22.7934L87.2212 8.33789H92.3433L95.8035 17.6986L99.2364 8.33789H104.195V8.34177Z" fill="#2F327A" />
                    <path d="M106.044 22.8481C105.024 22.4005 104.222 21.7895 103.631 21.011C103.039 20.2326 102.708 19.3607 102.638 18.3955H107.169C107.223 18.9131 107.464 19.3335 107.893 19.6565C108.321 19.9796 108.85 20.1392 109.477 20.1392C110.049 20.1392 110.493 20.0263 110.804 19.8044C111.115 19.5826 111.275 19.2907 111.275 18.9326C111.275 18.5045 111.049 18.1853 110.605 17.979C110.158 17.7727 109.434 17.547 108.434 17.294C107.359 17.0449 106.468 16.7802 105.752 16.5039C105.036 16.2275 104.421 15.7877 103.903 15.1883C103.385 14.5889 103.125 13.7793 103.125 12.7596C103.125 11.9033 103.362 11.121 103.837 10.4126C104.312 9.70813 105.009 9.14766 105.927 8.73509C106.85 8.32252 107.943 8.12012 109.212 8.12012C111.088 8.12012 112.567 8.58719 113.649 9.51352C114.731 10.4438 115.354 11.6776 115.514 13.215H111.275C111.205 12.6973 110.975 12.2848 110.59 11.9812C110.205 11.6776 109.699 11.5258 109.076 11.5258C108.539 11.5258 108.126 11.627 107.842 11.8333C107.554 12.0395 107.414 12.3198 107.414 12.6779C107.414 13.106 107.64 13.429 108.099 13.6431C108.554 13.8572 109.267 14.0713 110.232 14.2853C111.341 14.5734 112.244 14.8536 112.941 15.1299C113.637 15.4063 114.249 15.8539 114.778 16.4727C115.303 17.0877 115.576 17.9167 115.595 18.9521C115.595 19.8278 115.35 20.6101 114.86 21.299C114.369 21.988 113.661 22.529 112.742 22.9221C111.82 23.3152 110.753 23.5137 109.539 23.5137C108.223 23.5176 107.064 23.2957 106.044 22.8481Z" fill="#2F327A" />
                    <path d="M138.006 8.3418L133.958 23.3072H128.891L126.532 13.6001L124.092 23.3072H119.051L114.976 8.3418H119.561L121.678 19.0414L124.201 8.3418H129.054L131.6 18.9869L133.69 8.3418H138.006Z" fill="#2F327A" />
                    <path d="M138.368 11.7486C138.948 10.5888 139.738 9.69356 140.742 9.06692C141.742 8.44028 142.86 8.12891 144.093 8.12891C145.148 8.12891 146.074 8.34297 146.868 8.77111C147.662 9.19925 148.277 9.76362 148.706 10.4603V8.34297H153.291V23.3084H148.706V21.1911C148.258 21.8878 147.635 22.4521 146.841 22.8803C146.047 23.3084 145.121 23.5225 144.066 23.5225C142.852 23.5225 141.742 23.2072 140.742 22.5689C139.742 21.9345 138.948 21.0315 138.368 19.8599C137.788 18.6884 137.496 17.3339 137.496 15.7965C137.496 14.2591 137.788 12.9085 138.368 11.7486ZM147.756 13.1148C147.121 12.4531 146.347 12.1223 145.436 12.1223C144.525 12.1223 143.751 12.4492 143.116 13.0992C142.482 13.7531 142.163 14.6522 142.163 15.7926C142.163 16.933 142.478 17.8438 143.116 18.5132C143.751 19.1827 144.525 19.5174 145.436 19.5174C146.347 19.5174 147.121 19.1866 147.756 18.5249C148.39 17.8632 148.709 16.9603 148.709 15.816C148.706 14.6794 148.39 13.7765 147.756 13.1148Z" fill="#2F327A" />
                    <path d="M160.639 8.77111C161.426 8.34297 162.348 8.12891 163.403 8.12891C164.637 8.12891 165.754 8.44028 166.754 9.06692C167.754 9.69356 168.544 10.5888 169.128 11.7486C169.708 12.9124 170 14.2591 170 15.7965C170 17.3339 169.708 18.6884 169.128 19.8599C168.548 21.0315 167.754 21.9345 166.754 22.5689C165.754 23.2033 164.637 23.5225 163.403 23.5225C162.367 23.5225 161.449 23.3084 160.655 22.8803C159.861 22.4521 159.238 21.8955 158.791 21.2183V30.4428H154.206V8.34687H158.791V10.4642C159.238 9.76362 159.853 9.19925 160.639 8.77111ZM164.38 13.1031C163.745 12.4492 162.963 12.1262 162.033 12.1262C161.122 12.1262 160.347 12.457 159.713 13.1187C159.079 13.7804 158.759 14.6833 158.759 15.8276C158.759 16.9719 159.075 17.8749 159.713 18.5366C160.347 19.1983 161.122 19.5291 162.033 19.5291C162.944 19.5291 163.722 19.1944 164.364 18.5249C165.006 17.8555 165.329 16.9486 165.329 15.8043C165.329 14.66 165.014 13.7531 164.38 13.1031Z" fill="#2F327A" />
                </svg>
                {!hide && (
                    <>
                        {!dashboard && (
                            <>
                                {!userinfo?.email && (
                                    <div className=' flex items-center h-full ml-auto text-sm gap-4 ' >
                                        <button onClick={() => clickHandler("/signin")} className=' text-[#303179] lg:block hidden font-bold px-5 h-full ' >Log In</button>
                                        <button onClick={() => clickHandler("/signup")} className=' bg-[#303179] lg:block hidden text-white h-full font-bold px-5 rounded-lg ' >Sign Up</button>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
                {userinfo?.email && (
                    <div className=' hidden relative lg:flex items-center h-full ml-auto text-sm gap-2 ' >
                        <div role='button' onClick={() => navigate("/dashboard/settings")} className=' w-[40px] h-[40px] rounded-full  ' >
                            <img className=' w-full h-full rounded-full ' src={userinfo.photo ? userinfo.photo : "/images/person.webp"} alt='image' />
                        </div>
                        {!dashboard && (
                            <div className=' flex items-center ' >
                                <div>
                                    <p className=' font-medium text-base ' >{userinfo?.fullname}</p>
                                    <p className=' font-normal -mt-1 text-sm ' >{userinfo?.email.length < 12 ? userinfo?.email : userinfo?.email?.slice(0, 12) + "..."}</p>
                                </div>
                                <div className=' ml-5 '>
                                    <HamburgerIcon onClick={() => onOpen()} role='button' boxSize="25px" />
                                </div>
                            </div>
                        )}
                        {dashboard && (
                            <div role='button' className=' flex items-center ' >
                                <div>
                                    <p className=' font-medium text-base ' >{userinfo?.fullname}</p>
                                    <p className=' font-normal -mt-1 text-sm ' >{userinfo?.email.length < 12 ? userinfo?.email : userinfo?.email?.slice(0, 12) + "..."}</p>
                                </div>
                                {!settings && (
                                    <div className=' ml-5 '>
                                        <HamburgerIcon onClick={() => onOpen()} role='button' boxSize="25px" />
                                    </div>
                                )}
                            </div>
                        )}
                        {show &&
                            <div className=' absolute flex flex-col font-semibold right-0 top-12 bg-white z-50 p-2 rounded-lg text-[#202223]  ' style={{ boxShadow: "0px 3px 6px -3px rgba(23, 24, 24, 0.08), 0px 8px 20px -4px rgba(23, 24, 24, 0.12)" }} >
                                <button onClick={() => clickHandler("/dashboard/sellcrypto")} disabled={pathName.includes("dashboard")} className={pathName.includes("dashboard") ? ' p-2 rounded-[4px] bg-[#3031791A] ' : ' p-2 rounded-[4px] hover:bg-[#3031791A] '} >Dashboard</button>
                                <button onClick={LogOut} className=' p-2 mt-2 rounded-[4px] hover:bg-[#3031791A] ' >Log Out</button>
                            </div>
                        }
                        {show && (
                            <div className=' fixed inset-0 z-20 ' onClick={() => setShow(false)} />
                        )}
                    </div>
                )}

                {!userinfo?.email && (
                    <button onClick={() => clickHandler("/signin")} className=' px-3 bg-[#303179] text-xs font-semibold text-white rounded-lg lg:hidden h-[35px] ' >
                        Get Started
                    </button>
                )}

                {userinfo?.email && (
                    <div className=' ml-auto lg:hidden '>
                        <HamburgerIcon onClick={() => onOpen()} role='button' boxSize="25px" />
                    </div>
                )}
            </div>
            <div>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose} >
                    <DrawerOverlay />

                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Sidebar close={onClose} type={true} />
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </div>
        </div>
    )
}
