import React from 'react'
import GoogleOneTapLogin, { useGoogleOneTapLogin } from 'react-google-one-tap-login';

export default function GoogleButton() {

    const ClickHandler =()=> {
        useGoogleOneTapLogin({
            onError: error => console.log(error),
            onSuccess: response => console.log(response),
            googleAccountConfigs: {
              client_id: "802643163548-8um3vi6jea67go2j5kib1bt7l5ji0mv4.apps.googleusercontent.com"
            },
        });
    }

    return (
        // <div onClick={ClickHandler} role='button' className=' lg:w-full flex items-center lg:bg-transparent bg-[#F2F4F7] rounded h-[45px]  justify-center font-medium text-[#344054] mt-4 lg:mt-8 gap-2 ' >
        //     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //         <path d="M22.5005 12.2336C22.5005 11.3702 22.4291 10.7402 22.2744 10.0869H12.2148V13.9835H18.1196C18.0006 14.9519 17.3577 16.4102 15.9291 17.3902L15.9091 17.5206L19.0897 19.9354L19.3101 19.9569C21.3338 18.1252 22.5005 15.4302 22.5005 12.2336Z" fill="#4285F4"/>
        //         <path d="M12.212 22.4996C15.1048 22.4996 17.5334 21.5662 19.3072 19.9562L15.9263 17.3895C15.0215 18.0078 13.8072 18.4395 12.212 18.4395C9.37874 18.4395 6.974 16.6079 6.11678 14.0762L5.99113 14.0866L2.68388 16.595L2.64062 16.7128C4.4025 20.1428 8.02155 22.4996 12.212 22.4996Z" fill="#34A853"/>
        //         <path d="M6.119 14.0765C5.89281 13.4232 5.76191 12.7231 5.76191 11.9998C5.76191 11.2764 5.89281 10.5765 6.1071 9.92313L6.10111 9.78398L2.75239 7.23535L2.64283 7.28642C1.91667 8.70977 1.5 10.3081 1.5 11.9998C1.5 13.6915 1.91667 15.2897 2.64283 16.7131L6.119 14.0765Z" fill="#FBBC05"/>
        //         <path d="M12.2121 5.55997C14.224 5.55997 15.5811 6.41163 16.3549 7.12335L19.3787 4.23C17.5216 2.53834 15.1049 1.5 12.2121 1.5C8.02158 1.5 4.40251 3.85665 2.64062 7.28662L6.1049 9.92332C6.97403 7.39166 9.37878 5.55997 12.2121 5.55997Z" fill="#EB4335"/>
        //     </svg>
        //     <p>Log in with Google</p>
        // </div>
        <GoogleOneTapLogin onError={(error) => console.log(error)} onSuccess={(response) => console.log(response)} googleAccountConfigs={{ 
            client_id: "802643163548-8um3vi6jea67go2j5kib1bt7l5ji0mv4.apps.googleusercontent.com" }} 
        />
    )
}
