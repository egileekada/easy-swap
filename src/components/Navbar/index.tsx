import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerOverlay, useDisclosure } from '@chakra-ui/react'
import Sidebar from '../DashboardLayout/component/Sidebar'
import { useGetDataCallback } from '../../action/useAction'
import { IUser, UserContext } from '../../context/userContext'

type props = {
    hide?: boolean,
    dashboard?: boolean
}

export default function Navbar({ hide, dashboard }: props) {

    const navigate = useNavigate()
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { handleGetData } = useGetDataCallback()
    const userContext: IUser = React.useContext(UserContext); 
    const [show, setShow] = React.useState(false)
    const [pathName, setPathName] = React.useState(window.location.pathname)


    React.useEffect(()=> { 
        const fetchData = async () => {
            const request: any = await handleGetData("/users/profile")  
            userContext.setUserInformation(request?.data) 
        }
        setPathName(window.location.pathname)  
        
        // call the function
        fetchData()

        // make sure to catch any error
        .catch(console.error);;
    }, []) 
    
    const LogOut =()=> {
        localStorage.clear()
        navigate("/")
    }

    return (
        <div className=' relative w-full h-[62px] ' >  
            <div className=' w-full fixed z-40 top-0 h-[62px] py-2 flex items-center lg:pr-20 pr-3 px-2 lg:px-20 bg-white ' > 
                
                {dashboard && ( 
                    <div className=' lg:mr-4 lg:ml-0 ml-5 '>
                        <HamburgerIcon onClick={()=> onOpen()} role='button' boxSize="25px" />
                    </div>
                )}
                <svg role='button' onClick={()=> navigate("/")} className=' mr-auto lg:ml-0 ml-3 w-[130px] lg:w-[170px] ' viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.6464 24.8677C50.444 24.6847 50.1365 24.7314 49.9886 24.9572C48.1865 27.6934 44.3255 30.92 40.6046 32.002C37.0121 33.0451 34.9531 32.2978 34.3849 30.3401C33.7388 28.1176 36.2531 26.5374 39.6393 24.7742C44.7575 22.1548 51.3664 18.8153 49.1829 11.3034C47.6455 6.01395 41.6593 2.72117 33.3612 5.13432C32.1546 5.48461 31.0376 5.91276 29.9984 6.40317C24.0511 0.241854 15.8581 -1.04646 8.54469 3.47236C-0.372292 8.97979 -2.38455 19.695 2.85822 28.1877C8.49409 37.3149 18.497 39.3193 27.2349 34.3957C29.7298 38.6499 35.3307 40.4831 42.862 38.2918C48.35 36.696 53.1101 33.3293 55.5466 29.2892L50.6464 24.8677ZM8.2411 16.7797C8.18661 14.2459 9.21414 11.5253 12.3279 9.59865C15.5584 7.60196 18.4425 7.87831 20.6065 9.03039C22.3074 9.93727 22.4125 12.3348 20.77 13.3507L12.0243 18.753C10.4207 19.7417 8.28391 18.6596 8.2411 16.7797ZM14.6943 27.6739C13.4527 26.8916 13.4761 25.0623 14.7255 24.2916L26.0906 17.2701C30.5511 14.7519 30.734 14.5962 35.1399 11.4864C37.6971 9.68038 40.4255 11.1555 40.9588 12.981C41.527 14.9387 39.254 16.3788 35.9378 18.1264C32.2636 20.0102 27.7059 22.365 26.2697 26.4479C25.8843 26.7476 25.4912 27.0278 25.0942 27.273C21.2643 29.6395 17.4928 29.441 14.6943 27.6739Z" fill="#00BAF0"/>
                    <path d="M75.2624 16.9233H64.8859C64.9559 17.8535 65.2556 18.5619 65.785 19.0562C66.3104 19.5466 66.9604 19.7918 67.7311 19.7918C68.8754 19.7918 69.6694 19.3092 70.117 18.3439H74.9978C74.7487 19.3286 74.2972 20.2122 73.6433 20.9984C72.9894 21.7846 72.172 22.4035 71.1912 22.8472C70.2065 23.2948 69.1089 23.5166 67.8945 23.5166C66.4272 23.5166 65.1233 23.2053 63.979 22.5786C62.8347 21.952 61.9395 21.0607 61.2973 19.8969C60.6551 18.7331 60.332 17.3748 60.332 15.8218C60.332 14.2688 60.6512 12.9065 61.2856 11.7467C61.92 10.5868 62.8113 9.69161 63.9556 9.06497C65.0999 8.43833 66.4116 8.12695 67.8984 8.12695C69.3463 8.12695 70.6346 8.43054 71.7595 9.03772C72.8843 9.6449 73.7678 10.5129 74.4023 11.6377C75.0367 12.7625 75.3558 14.0781 75.3558 15.5805C75.3403 16.0086 75.313 16.4562 75.2624 16.9233ZM70.6463 14.3739C70.6463 13.5877 70.3777 12.961 69.8406 12.4979C69.3035 12.0347 68.634 11.8012 67.8284 11.8012C67.0577 11.8012 66.4116 12.0269 65.8823 12.4706C65.3529 12.9182 65.0299 13.5526 64.9014 14.3739H70.6463Z" fill="#2F327A"/>
                    <path d="M80.7041 19.5221H87.1924V23.3014H75.582V19.6544L81.8017 12.1192H75.6326V8.33984H87.0562V11.9868L80.7041 19.5221Z" fill="#2F327A"/>
                    <path d="M104.196 8.33982L94.8124 30.4085H89.8771L93.31 22.7915L87.2227 8.33594H92.3448L95.8049 17.6966L99.2378 8.33594H104.196V8.33982Z" fill="#2F327A"/>
                    <path d="M106.046 22.8472C105.027 22.3996 104.225 21.7885 103.633 21.01C103.042 20.2316 102.711 19.3598 102.641 18.3945H107.171C107.226 18.9122 107.467 19.3325 107.895 19.6556C108.323 19.9786 108.853 20.1382 109.479 20.1382C110.051 20.1382 110.495 20.0253 110.806 19.8035C111.118 19.5816 111.277 19.2897 111.277 18.9316C111.277 18.5035 111.052 18.1843 110.608 17.978C110.16 17.7717 109.436 17.546 108.436 17.293C107.362 17.0439 106.471 16.7792 105.754 16.5029C105.038 16.2266 104.423 15.7867 103.906 15.1873C103.388 14.5879 103.127 13.7784 103.127 12.7586C103.127 11.9023 103.365 11.12 103.839 10.4116C104.314 9.70716 105.011 9.14668 105.93 8.73411C106.852 8.32154 107.946 8.11914 109.215 8.11914C111.091 8.11914 112.57 8.58621 113.652 9.51255C114.734 10.4428 115.356 11.6766 115.516 13.214H111.277C111.207 12.6964 110.978 12.2838 110.592 11.9802C110.207 11.6766 109.701 11.5248 109.078 11.5248C108.541 11.5248 108.129 11.626 107.844 11.8323C107.556 12.0386 107.416 12.3188 107.416 12.6769C107.416 13.105 107.642 13.4281 108.101 13.6421C108.557 13.8562 109.269 14.0703 110.234 14.2844C111.344 14.5724 112.247 14.8526 112.943 15.129C113.64 15.4053 114.251 15.8529 114.78 16.4718C115.306 17.0867 115.578 17.9158 115.598 18.9511C115.598 19.8268 115.352 20.6091 114.862 21.2981C114.372 21.987 113.663 22.528 112.745 22.9211C111.822 23.3142 110.756 23.5127 109.541 23.5127C108.226 23.5166 107.066 23.2948 106.046 22.8472Z" fill="#2F327A"/>
                    <path d="M138.007 8.33984L133.959 23.3053H128.891L126.532 13.5982L124.092 23.3053H119.052L114.977 8.33984H119.562L121.679 19.0394L124.201 8.33984H129.055L131.6 18.985L133.69 8.33984H138.007Z" fill="#2F327A"/>
                    <path d="M138.372 11.7467C138.952 10.5868 139.742 9.69161 140.746 9.06497C141.746 8.43833 142.863 8.12695 144.097 8.12695C145.152 8.12695 146.078 8.34102 146.872 8.76916C147.666 9.1973 148.281 9.76166 148.709 10.4584V8.34102H153.294V23.3064H148.709V21.1891C148.262 21.8858 147.639 22.4502 146.845 22.8783C146.051 23.3064 145.125 23.5205 144.07 23.5205C142.856 23.5205 141.746 23.2053 140.746 22.5669C139.746 21.9325 138.952 21.0295 138.372 19.858C137.792 18.6864 137.5 17.3319 137.5 15.7945C137.5 14.2571 137.792 12.9065 138.372 11.7467ZM147.76 13.1128C147.125 12.4512 146.351 12.1203 145.44 12.1203C144.529 12.1203 143.755 12.4473 143.12 13.0973C142.486 13.7511 142.167 14.6502 142.167 15.7907C142.167 16.9311 142.482 17.8418 143.12 18.5113C143.755 19.1807 144.529 19.5155 145.44 19.5155C146.351 19.5155 147.125 19.1846 147.76 18.523C148.394 17.8613 148.713 16.9583 148.713 15.814C148.709 14.6775 148.394 13.7745 147.76 13.1128Z" fill="#2F327A"/>
                    <path d="M160.641 8.76916C161.427 8.34102 162.349 8.12695 163.404 8.12695C164.638 8.12695 165.755 8.43833 166.755 9.06497C167.756 9.69161 168.546 10.5868 169.13 11.7467C169.71 12.9104 170.001 14.2571 170.001 15.7945C170.001 17.3319 169.71 18.6864 169.13 19.858C168.55 21.0295 167.756 21.9325 166.755 22.5669C165.755 23.2014 164.638 23.5205 163.404 23.5205C162.369 23.5205 161.45 23.3064 160.656 22.8783C159.862 22.4502 159.24 21.8936 158.792 21.2164V30.4408H154.207V8.34491H158.792V10.4623C159.24 9.76167 159.855 9.1973 160.641 8.76916ZM164.381 13.1012C163.747 12.4473 162.964 12.1242 162.034 12.1242C161.123 12.1242 160.349 12.4551 159.714 13.1167C159.08 13.7784 158.761 14.6814 158.761 15.8257C158.761 16.97 159.076 17.873 159.714 18.5346C160.349 19.1963 161.123 19.5271 162.034 19.5271C162.945 19.5271 163.723 19.1924 164.366 18.523C165.008 17.8535 165.331 16.9466 165.331 15.8023C165.331 14.658 165.016 13.7512 164.381 13.1012Z" fill="#2F327A"/>
                </svg>
                {!hide && (
                    <>
                        {!dashboard && ( 
                            <>
                                {!userContext.userInfo?.email && ( 
                                    <div className=' flex items-center h-full ml-auto text-sm gap-4 ' >
                                        <button onClick={()=> navigate("/signin")} className=' text-[#303179] lg:block hidden font-bold px-5 h-full ' >Log In</button>
                                        <button onClick={()=> navigate("/signup")} className=' bg-[#303179] lg:block hidden text-white h-full font-bold px-5 rounded-lg ' >Sign Up</button>
                                    </div>
                                )}
                            </>
                        )}
                    </>
                )}
                {userContext.userInfo?.email && ( 
                    <div className=' hidden relative lg:flex items-center h-full ml-auto text-sm gap-2 ' >
                        <div className=' w-[40px] h-[40px] rounded-full bg-black ' >

                        </div>
                        <div role='button' onClick={()=> setShow(true)} className=' flex items-center ' > 
                            <div> 
                                <p className=' font-medium text-base ' >{userContext.userInfo?.fullname}</p>
                                <p className=' font-normal -mt-1 text-sm ' >{userContext.userInfo?.email.length < 12 ? userContext.userInfo?.email :userContext.userInfo?.email?.slice(0,12)+"..."}</p>
                            </div>
                            <svg role='button' onClick={()=> setShow(true)} width="14" height="7" className=' ml-2' viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.98902 6.99763C6.75578 6.99809 6.52974 6.91676 6.35014 6.76775L0.360621 1.77034C0.156761 1.60069 0.0285612 1.3569 0.00422411 1.09261C-0.020113 0.828322 0.0614062 0.565176 0.230848 0.361065C0.40029 0.156954 0.643776 0.0285965 0.90774 0.00422933C1.1717 -0.0201378 1.43452 0.0614814 1.63838 0.231132L6.98902 4.70882L12.3397 0.39105C12.4418 0.308027 12.5593 0.246028 12.6854 0.208615C12.8115 0.171203 12.9438 0.159115 13.0746 0.173047C13.2054 0.186979 13.3321 0.226656 13.4475 0.289797C13.563 0.352938 13.6648 0.438299 13.7472 0.540973C13.8386 0.643741 13.9079 0.764305 13.9506 0.895111C13.9933 1.02592 14.0086 1.16415 13.9954 1.30114C13.9823 1.43813 13.9411 1.57093 13.8743 1.69123C13.8076 1.81152 13.7167 1.91672 13.6074 2.00022L7.61792 6.82772C7.43316 6.95317 7.21173 7.013 6.98902 6.99763V6.99763Z" fill="#101828"/>
                            </svg>
                        </div>
                        {show && 
                            <div className=' absolute flex flex-col font-semibold right-0 top-12 bg-white z-50 p-2 rounded-lg text-[#202223]  ' style={{boxShadow: "0px 3px 6px -3px rgba(23, 24, 24, 0.08), 0px 8px 20px -4px rgba(23, 24, 24, 0.12)"}} >
                                <button onClick={()=> navigate("/dashboard")} disabled={pathName.includes("dashboard")} className={pathName.includes("dashboard") ? ' p-2 rounded-[4px] bg-[#3031791A] ':' p-2 rounded-[4px] hover:bg-[#3031791A] '} >Profile</button>
                                <button onClick={LogOut} className=' p-2 mt-2 rounded-[4px] hover:bg-[#3031791A] ' >Log Out</button>
                            </div>
                        }
                        {show && ( 
                            <div className=' fixed inset-0 z-20 ' onClick={()=> setShow(false)} />
                        )}
                    </div>
                )}

                {!userContext.userInfo?.email && ( 
                    <button onClick={()=> navigate("/signin")} className=' px-3 bg-[#303179] text-xs font-semibold text-white rounded-lg lg:hidden h-[35px] ' >
                        Get Started
                    </button>
                )}

                {userContext.userInfo?.email && ( 
                    <>
                        {!pathName.includes("dashboard") && (
                            <button onClick={()=> navigate("/dashboard")} className=' px-3 bg-[#303179] text-xs font-semibold text-white rounded-lg lg:hidden h-[35px] ' >
                                Dashboard
                            </button>
                        )}
                    </>
                )}
            </div>
                <div> 
                    <Drawer  
                        isOpen={isOpen}
                        placement='left'
                        onClose={onClose}
                    >
                        <DrawerOverlay />
                        
                        <DrawerContent>
                        <DrawerCloseButton />
                        {/* <DrawerHeader>Create your account</DrawerHeader> */}

                        <DrawerBody> 
                            <Sidebar close={onClose} type={true} />
                        </DrawerBody>

                        <DrawerFooter> 
                        </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
        </div>
    )
}
