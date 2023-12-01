import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'

type props = {
    open: any,
    close: any,
    size?: any,
    bg?: any,
    rounded?: boolean,
    title?: string,
    children: React.ReactNode,
}

export default function ModalLayout({ title, open, close, children, size, bg, rounded }: props) {

    return (
        <Modal onClose={close} scrollBehavior="inside" size={size ? size : "md"} isOpen={open} isCentered>
            <ModalOverlay />
            <ModalContent backgroundColor={bg ? bg : "#fff"} rounded={rounded ? "0px" : "6px"} padding="0px" margin={["0px", "0px" ,"16px" ]}w="full" >
                {title && (
                    <> 
                        <ModalHeader>{title}</ModalHeader>
                        <ModalCloseButton />
                    </>
                )}
                <ModalBody backgroundColor={bg ? bg : "#fff"} borderRadius={rounded ? "0px" : "8px"} margin="0px" padding="0px" w="full" >
                    {children}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}
