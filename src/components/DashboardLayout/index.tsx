import React from 'react'
import Navbar from '../Navbar' 
import Sidebar from './component/Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'

type props = {
    settings?: boolean,
    tab?: any
}

export default function DashboardLayout() { 

    const [setting, setSetting] = React.useState(false)

    const navigate = useNavigate()

    React.useEffect(()=> { 

        let pathName = window.location.pathname

        console.log(pathName);
        
        if(pathName.includes("setting")){
            setSetting(true)
        } else {
            setSetting(false)
        }
        
    }, [navigate])

    return (
        <div className=' w-full h-screen flex flex-col relative flex-1 bg-[#f8f8f8] ' >
            <Navbar dashboard={true} settings={setting} />
            <div className=' flex flex-1 overflow-hidden ' >

            <div className=' w-full h-full flex flex-1 ' >
                {setting && ( 
                    <div className=' w-fit bg-white pr-12 pl-5 h-full lg:block hidden ' >
                        <Sidebar />
                    </div>
                )}
                <div className=' w-full h-full flex flex-col overflow-y-auto flex-1 ' >
                    <Outlet />
                </div>
            </div>
            </div>
        </div>
    )
}
