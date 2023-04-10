import React from 'react'
import InputComponent from '../../InputComponent'
import ButtonComponent from '../../ButtonComponent'

export default function PasswordTab() {
    return (
        <div className=' w-full flex flex-col items-center lg:p-10 ' >
            <div className=' lg:w-[560px] w-full flex flex-col items-center py-14 ' > 
                <p className=' text-2xl font-semibold text-[#1D2939] ' >Password Change</p>
                <p className=' text-base mt-2 font-normal text-center text-[#475467] ' >Enter a new password below to change your password</p>
                <div className=' mt-10 w-full text-left lg:w-[560px] mb-8 ' >
                    <InputComponent pwd={true} title='Current Password' placeholder='Enter Current Password' />
                    <InputComponent pwd={true} title='Password' placeholder='Enter Password' />
                    <InputComponent pwd={true} title='Password' placeholder='Enter Password' /> 
                </div>
                <ButtonComponent bgcolor=' bg-[#303179] text-white '  name="Save Changes" />
            </div>
        </div>
    )
}
