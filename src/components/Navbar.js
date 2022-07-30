import './Navbar.css'
import React from 'react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
    VisuallyHidden,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'


export default function Navbar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <div className='Navbar fixed border-none' id={props.id}>
            <VisuallyHidden>
                Open navbar
            </VisuallyHidden>
            <ChevronLeftIcon w={20} h={20} color="green.500" ref={btnRef} onClick={onOpen} className="opacity-70 cursor-pointer"/>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size='xs'
            >
                <DrawerOverlay />
                <DrawerContent>
                    <VisuallyHidden>
                        Close navbar
                    </VisuallyHidden>
                    <DrawerCloseButton color="green.500" />

                    <DrawerBody className='Drawer-body grid place-items-center'>
                        <div className='flex flex-col space-y-20 text-center'>
                            <a href="#Welcome" className='nav-link hover:bg-emerald-500 hover:text-white'>
                                <VisuallyHidden>
                                    Welcome section
                                </VisuallyHidden>
                                Welcome
                            </a>
                            <a href="#About" className='nav-link hover:bg-emerald-500 hover:text-white'>
                                <VisuallyHidden>
                                    Get To Know Me section
                                </VisuallyHidden>
                                Get To Know Me!
                            </a>
                            <a href="#" className='nav-link hover:bg-emerald-500 hover:text-white'>
                                <VisuallyHidden>
                                    Projects section
                                </VisuallyHidden>
                                Projects
                            </a>
                            <a href="#" className='nav-link hover:bg-emerald-500 hover:text-white'>
                                <VisuallyHidden>
                                    Contact section
                                </VisuallyHidden>
                                Contact
                            </a>
                        </div>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
}