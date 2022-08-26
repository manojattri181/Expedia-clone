import { Box, Button, Container, Flex, Heading, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react';
import logo from '../Assets/HomePage_Images/expedia_logo.svg';
import { FaHotel, FaTicketAlt, FaUserCircle } from 'react-icons/fa'
import { MdFlight } from 'react-icons/md'
import { IoMdCar } from 'react-icons/io'
import { BsHandbagFill, BsBellFill, BsGlobe } from 'react-icons/bs'
import { RiUserStarFill } from 'react-icons/ri'
import { GiHamburgerMenu } from 'react-icons/gi'
import { ChevronDownIcon } from '@chakra-ui/icons'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useRef } from 'react';
import { useState } from 'react';
import SigninMenuList from './SigninMenuList';
import UserDetail from './UserDetail';
import { useSelector } from 'react-redux';


const Navbar = () => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const hamburgerMenuRef = useRef();
    const isAuth = useSelector((store) => store.AuthReducer.isAuth)

    return (

      {/*  <div className="nav">
            <img id="nav-img" src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1" alt="www.expedia.com" />          
        </div> */}

        <Box w='100%'>
            <Flex align='center' p='1rem' fontSize='14px' bg='#343b53' h='50px' w='100%'>
                <Text color='white' >Welcome to Expedia.com. Continue to the India site at <Link textDecoration='underline' href='#'>Expedia.co.in</Link> </Text>
            </Flex>

            <Flex justify='space-around' align='center' p='1rem 0px' borderBottom='0.2px solid gray'>
                <Flex align='center' gap='1.5rem'>
                    <Image src={logo} />
                    <Menu>
                        <MenuButton _hover={{ color: 'blue' }} color='#343b53' >
                            More travel <ChevronDownIcon _hover={{ color: 'blue' }} />
                        </MenuButton>
                        <MenuList boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' minW='300px'>
                            <MenuItem display='flex' mt='0.8rem' gap='1rem'>
                                <FaHotel size='1.4rem' /> Stays
                            </MenuItem>
                            <MenuItem display='flex' mt='0.8rem' gap='1rem'>
                                <MdFlight size='1.4rem' /> Flights
                            </MenuItem>
                            <MenuItem display='flex' mt='0.8rem' gap='1rem'>
                                <IoMdCar size='1.4rem' /> Cars
                            </MenuItem>
                            <MenuItem display='flex' mt='0.8rem' gap='1rem'>
                                <BsHandbagFill size='1.4rem' /> Packages
                            </MenuItem>
                            <MenuItem display='flex' mt='0.8rem' gap='1rem'>
                                <FaTicketAlt size='1.4rem' /> Things to do
                            </MenuItem>
                            <MenuItem display='flex' mt='0.8rem' gap='1rem'>
                                <RiUserStarFill size='1.4rem' /> Cruises
                            </MenuItem>
                            <MenuItem mt='0.8rem'>
                                Deals
                            </MenuItem>
                            <MenuItem mt='0.8rem'>
                                Groups & meetings
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>

                <Flex display={['none', 'none', 'flex', 'flex']} justify='space-between' align='center' gap='1.5rem'>
                    <Flex align='center' gap='0.6rem'>
                        <BsGlobe className='hoverIcons' />
                        <Text _hover={{ color: 'blue', cursor: 'pointer' }}>English</Text>
                    </Flex>
                    <Box>
                        <Text _hover={{ color: 'blue', cursor: 'pointer' }} >List your property</Text>
                    </Box>
                    <Box>
                        <Text _hover={{ color: 'blue', cursor: 'pointer' }} >Support</Text>
                    </Box>
                    <Box>
                        <Text _hover={{ color: 'blue', cursor: 'pointer' }} >Trips</Text>
                    </Box>
                    <Box>
                        <BsBellFill className='hoverIcons' />
                    </Box>
                    <Box>
                        {isAuth ? (
                            <UserDetail />
                        ) : (
                            <SigninMenuList />
                        )}
                    </Box>
                </Flex>

                <Box display={['inline-block', 'inline-block', 'none', 'none']}>
                    <GiHamburgerMenu onClick={onOpen} ref={hamburgerMenuRef} size='1.5rem' />
                </Box>

                {/* Hamburger menu bar */}
                <Drawer isOpen={isOpen} onClose={onClose} placement='right' finalFocusRef={hamburgerMenuRef}>

                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Explore</DrawerHeader>
                        <DrawerBody>

                            <Flex m='25px auto' align='center' gap='0.6rem'>
                                <BsGlobe className='hoverIcons' />
                                <Text _hover={{ color: 'blue', cursor: 'pointer' }}>English</Text>
                            </Flex>

                            <Box m='25px auto'>
                                <Text _hover={{ color: 'blue', cursor: 'pointer' }} >List your property</Text>
                            </Box>

                            <Box m='25px auto'>
                                <Text _hover={{ color: 'blue', cursor: 'pointer' }} >Support</Text>
                            </Box>

                            <Box m='25px auto'>
                                <Text _hover={{ color: 'blue', cursor: 'pointer' }} >Trips</Text>
                            </Box>

                            <Box m='25px auto'>
                                <BsBellFill className='hoverIcons' />
                            </Box>

                            <Box m='25px auto'>
                                {isAuth ? (
                                    <UserDetail />
                                ) : (
                                    <SigninMenuList />
                                )}
                            </Box>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Flex >
        </Box >
    )
}

export default Navbar