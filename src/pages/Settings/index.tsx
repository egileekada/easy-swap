import React from 'react'
import MyProfile from '../../components/SettingsComponent/MyProfile'
import PasswordTab from '../../components/SettingsComponent/Password'
import { useNavigate } from 'react-router-dom'

export default function Settings() {

    const [tab, setTab] = React.useState(0)

    const navigate = useNavigate()

    return (
        <div className=' w-full p-6 lg:p-14 ' >
            {tab === 0 && ( 
                <div className=' w-full grid lg:grid-cols-2 grid-cols-1 gap-6 ' >
                    <div role="button" onClick={()=> setTab(2)} className=' lg:w-[423px] flex lg:flex-row flex-col  gap-4 px-6 rounded-xl bg-[#F6F7FF] border border-[#D0D5DD] h-[247px] justify-center items-center ' >
                        <div className=' w-fit ' >
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="60" height="60" rx="30" fill="#303179"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9999 30.2324C34.9705 30.2324 38.9999 26.203 38.9999 21.2324C38.9999 16.2619 34.9705 12.2324 29.9999 12.2324C25.0293 12.2324 20.9999 16.2619 20.9999 21.2324C20.9999 26.203 25.0293 30.2324 29.9999 30.2324ZM29.9999 54.2324C37.5623 54.2324 44.3192 50.7161 48.7216 45.2326C44.3192 39.749 37.5621 36.2324 29.9995 36.2324C22.4372 36.2324 15.6802 39.7488 11.2778 45.2322C15.6802 50.7159 22.4373 54.2324 29.9999 54.2324Z" fill="#F8F8F8"/>
                            </svg>
                        </div>
                        <div >
                            <p className=' text-2xl font-semibold lg:text-left text-center text-[#303179] ' >My Profile</p>
                            <p className=' mt-1 font-normal lg:text-left text-center ' >Manage your profile details here</p>
                        </div>
                    </div>
                    <div role="button" onClick={()=> setTab(1)} className=' lg:w-[423px] flex lg:flex-row flex-col  gap-4 px-6 rounded-xl bg-[#F6F7FF] border border-[#D0D5DD] h-[247px] justify-center items-center ' >
                        <div className=' w-fit ' >
                            <svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40.5 20H43C43.663 20 44.2989 20.2634 44.7678 20.7322C45.2366 21.2011 45.5 21.837 45.5 22.5V47.5C45.5 48.163 45.2366 48.7989 44.7678 49.2678C44.2989 49.7366 43.663 50 43 50H3C2.33696 50 1.70107 49.7366 1.23223 49.2678C0.763392 48.7989 0.5 48.163 0.5 47.5V22.5C0.5 21.837 0.763392 21.2011 1.23223 20.7322C1.70107 20.2634 2.33696 20 3 20H5.5V17.5C5.5 15.2019 5.95265 12.9262 6.83211 10.803C7.71157 8.67984 9.00061 6.75066 10.6256 5.12563C12.2507 3.50061 14.1798 2.21157 16.303 1.33211C18.4262 0.452651 20.7019 0 23 0C25.2981 0 27.5738 0.452651 29.697 1.33211C31.8202 2.21157 33.7493 3.50061 35.3744 5.12563C36.9994 6.75066 38.2884 8.67984 39.1679 10.803C40.0474 12.9262 40.5 15.2019 40.5 17.5V20ZM35.5 20V17.5C35.5 14.1848 34.183 11.0054 31.8388 8.66117C29.4946 6.31696 26.3152 5 23 5C19.6848 5 16.5054 6.31696 14.1612 8.66117C11.817 11.0054 10.5 14.1848 10.5 17.5V20H35.5ZM20.5 30V40H25.5V30H20.5Z" fill="#303179"/>
                            </svg>
                        </div>
                        <div >
                            <p className=' text-2xl font-semibold lg:text-left text-center text-[#303179] ' >Password</p>
                            <p className=' mt-1 font-normal lg:text-left text-center ' >Periodically change you password for security  </p>
                        </div>
                    </div>
                    <div role="button" onClick={()=> navigate("/dashboard/verfication")} className=' lg:w-[423px] flex lg:flex-row flex-col  gap-4 px-6 rounded-xl bg-[#F6F7FF] border border-[#D0D5DD] h-[247px] justify-center items-center ' >
                        <div className=' w-fit ' >
                            <div className=' w-[60px] bg-[#303179] h-[60px] rounded-full flex justify-center items-center ' >
                                <svg width="30" height="21" viewBox="0 0 30 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 9.76087L11.1549 19L28 2" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <div >
                            <p className=' text-2xl font-semibold lg:text-left text-center text-[#303179] ' >Verification</p>
                            <p className=' mt-1 font-normal lg:text-left text-center ' >Verify your identity with a simple click</p>
                        </div>
                    </div>
                </div>
            )}
            {tab === 2 && (
                <> 
                    <div role="button" onClick={()=> setTab(0)} className=' flex items-center gap-3 ' >
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9305 8.66671H4.74514L9.69902 2.85338C9.93066 2.58109 10.0421 2.23005 10.0088 1.87748C9.97556 1.52491 9.8003 1.19969 9.52161 0.973375C9.24291 0.747057 8.88361 0.638175 8.52275 0.670681C8.16188 0.703187 7.82901 0.87442 7.59737 1.14671L0.773843 9.14671C0.727936 9.21034 0.686883 9.27719 0.65102 9.34671C0.65102 9.41338 0.65102 9.45338 0.555491 9.52004C0.493633 9.67292 0.461245 9.83566 0.459961 10C0.461245 10.1644 0.493633 10.3272 0.555491 10.48C0.555491 10.5467 0.55549 10.5867 0.65102 10.6534C0.686883 10.7229 0.727936 10.7897 0.773843 10.8534L7.59737 18.8534C7.72569 19.0039 7.88637 19.1249 8.06799 19.2079C8.24961 19.2908 8.44771 19.3337 8.6482 19.3334C8.96706 19.334 9.27608 19.2255 9.52161 19.0267C9.6598 18.9148 9.77402 18.7773 9.85775 18.6222C9.94148 18.467 9.99306 18.2973 10.0095 18.1227C10.026 17.948 10.0071 17.7719 9.95379 17.6045C9.90051 17.437 9.81393 17.2814 9.69902 17.1467L4.74514 11.3334H20.9305C21.2925 11.3334 21.6396 11.1929 21.8955 10.9429C22.1515 10.6928 22.2953 10.3537 22.2953 10C22.2953 9.64642 22.1515 9.30728 21.8955 9.05723C21.6396 8.80718 21.2925 8.66671 20.9305 8.66671Z" fill="black"/>
                        </svg>
                        <p className=' text-2xl font-semibold ' >Settings</p>
                    </div>
                    <MyProfile />
                </>
            )}
            {tab === 1 && (
                <> 
                    <div role="button" onClick={()=> setTab(0)} className=' flex items-center gap-3 ' >
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.9305 8.66671H4.74514L9.69902 2.85338C9.93066 2.58109 10.0421 2.23005 10.0088 1.87748C9.97556 1.52491 9.8003 1.19969 9.52161 0.973375C9.24291 0.747057 8.88361 0.638175 8.52275 0.670681C8.16188 0.703187 7.82901 0.87442 7.59737 1.14671L0.773843 9.14671C0.727936 9.21034 0.686883 9.27719 0.65102 9.34671C0.65102 9.41338 0.65102 9.45338 0.555491 9.52004C0.493633 9.67292 0.461245 9.83566 0.459961 10C0.461245 10.1644 0.493633 10.3272 0.555491 10.48C0.555491 10.5467 0.55549 10.5867 0.65102 10.6534C0.686883 10.7229 0.727936 10.7897 0.773843 10.8534L7.59737 18.8534C7.72569 19.0039 7.88637 19.1249 8.06799 19.2079C8.24961 19.2908 8.44771 19.3337 8.6482 19.3334C8.96706 19.334 9.27608 19.2255 9.52161 19.0267C9.6598 18.9148 9.77402 18.7773 9.85775 18.6222C9.94148 18.467 9.99306 18.2973 10.0095 18.1227C10.026 17.948 10.0071 17.7719 9.95379 17.6045C9.90051 17.437 9.81393 17.2814 9.69902 17.1467L4.74514 11.3334H20.9305C21.2925 11.3334 21.6396 11.1929 21.8955 10.9429C22.1515 10.6928 22.2953 10.3537 22.2953 10C22.2953 9.64642 22.1515 9.30728 21.8955 9.05723C21.6396 8.80718 21.2925 8.66671 20.9305 8.66671Z" fill="black"/>
                        </svg>
                        <p className=' text-2xl font-semibold ' >Settings</p>
                    </div>
                    <PasswordTab />
                </>
            )}
        </div>
    )
}
