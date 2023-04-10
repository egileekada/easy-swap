import React from 'react'
import Navbar from '../Navbar' 
import Sidebar from './component/Sidebar'
import { Outlet } from 'react-router-dom'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from '@chakra-ui/react'

type props = {
    settings?: boolean,
    tab?: any
}

export default function DashboardLayout() { 

    return (
        <div className=' w-full h-screen flex flex-col relative flex-1 bg-[#f8f8f8] ' >
            <Navbar/>
            <div className=' flex flex-1 overflow-hidden ' >

            <div className=' w-full h-full flex flex-1 ' >
                <div className=' w-fit h-full lg:block hidden ' >
                    <Sidebar />
                </div>
                <div className=' w-full h-full flex flex-col overflow-y-auto flex-1 ' >
                    <Outlet />
                </div>
            </div>
            </div>
        </div>
    )
}
