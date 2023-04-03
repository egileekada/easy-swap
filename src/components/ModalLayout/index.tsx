import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

type props = {
    open: any,
    close: any,
    size?: any,
    children: React.ReactNode, 
}

export default function ModalLayout({open, close, children, size}: props) { 
    
    // const [size, setSize] = React.useState("md") 

    return (
        <Modal onClose={close} scrollBehavior="inside" size={size ? size : "md"} isOpen={open} isCentered>
            <ModalOverlay />
            <ModalContent backgroundColor="#fff" rounded="6px" padding="0px" margin="16px" > 
                <ModalBody backgroundColor="#fff" borderRadius="8px" margin="0px"  padding="0px" >
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
