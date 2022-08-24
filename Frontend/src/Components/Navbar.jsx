import { Box, Container, Flex, Image, Link, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react';
import logo from '../Assets/HomePage_Images/expedia_logo.svg';
import { FaHotel, FaTicketAlt } from 'react-icons/fa'
import { MdFlight } from 'react-icons/md'
import { IoMdCar } from 'react-icons/io'
import { BsHandbagFill, BsBellFill, BsGlobe } from 'react-icons/bs'
import { RiUserStarFill } from 'react-icons/ri'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = () => {

    return (
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
                        <MenuList minW='300px'>
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

                <Flex justify='space-between' align='center' gap='1.5rem'>
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
                        <Text _hover={{ color: 'blue', cursor: 'pointer' }} >Sign in</Text>
                    </Box>
                </Flex>
            </Flex >
        </Box >
    )
}

export default Navbar