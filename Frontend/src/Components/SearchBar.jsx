
import {
    Flex,
    Menu,
    MenuButton,
    MenuList,
    Button,
    Input,
    Box,
    Text,
    Select,
  } from '@chakra-ui/react';
import { useState } from 'react';
  import {FaMapMarkerAlt} from 'react-icons/fa';
  import {BsCalendarEvent,BsFillPersonFill} from 'react-icons/bs';

const SearchBar = () => {
    const [city,setCity] = useState("New Delhi");
    const [checkInDate,setCheckinDate] = useState(new Date().toJSON().slice(0, 10));
    const [checkOutDate,setCheckoutDate] = useState(new Date().toJSON().slice(0, 10));
   

  return (
           <Flex w="80%" m="auto" mb="10">
            {/* Going to */}
            <Box px="1">
              <Menu>
             <MenuButton as={Button} minW="300px" maxH="54px" bg="white"  border="1px solid black">
               <Flex align="center" justify="start" >
                     <Box><FaMapMarkerAlt size="22px" /></Box>
                     <Flex direction="column" align="start" justify="start" pl="12px" rowGap="3px">
                        <Text fontSize="sm" fontWeight="400"> Going To</Text>
                        <Text fontSize="md" fontWeight="500"> {city}, India</Text>
                     </Flex>
               </Flex>
            </MenuButton>
            <MenuList mt="-60px" minW="300px">
            <Select placeholder='Select City' border="none" onChange={(e)=>setCity(e.target.value)}>
                <option value='New Delhi'>New Delhi</option>
                <option value='Mumbai'>Mumbai</option>
                <option value='Bengaluru'>Bengaluru</option>
                <option value='Kolkata'>Kolkata</option>
                </Select>
            </MenuList>
            </Menu>
            </Box>
             {/* Check- in */}
            <Box px="1">
              <Menu>
             <MenuButton as={Button} maxW="fit-content" maxH="48px" bg="white" border="1px solid black">
               <Flex align="center" justify="start" >
                     <Box><BsCalendarEvent size="20px" /></Box>
                     <Flex direction="column" align="start" justify="start" pl="12px" rowGap="2px">
                        <Text fontSize="sm" fontWeight="400">Check-in</Text>
                        <Text fontSize="sm" fontWeight="500">{checkInDate}</Text>
                     </Flex>
               </Flex>
            </MenuButton>
            <MenuList mt="-60px" minW="180px">
               <Input type="date" value={checkInDate} border="none" onChange={(e)=>setCheckinDate(e.target.value)}/>
            </MenuList>
            </Menu>
            </Box>
            {/* Check-out */}
            <Box px="1">
              <Menu>
             <MenuButton as={Button} maxW="fit-content" maxH="48px" bg="white" border="1px solid black">
               <Flex align="center" justify="start" >
                     <Box><BsCalendarEvent size="22px" /></Box>
                     <Flex direction="column" align="start" justify="start" pl="12px" rowGap="2px">
                        <Text fontSize="sm" fontWeight="400">Check-out</Text>
                        <Text fontSize="sm" fontWeight="500">{checkOutDate}</Text>
                     </Flex>
               </Flex>
            </MenuButton>
            <MenuList mt="-60px" minW="180px">
               <Input type="date" value={checkOutDate} border="none" onChange={(e)=>setCheckoutDate(e.target.value)}/>
            </MenuList>
            </Menu>
            </Box>
            {/* Travellers */}
            <Box px="2">
              <Menu>
             <MenuButton as={Button} maxW="180px" maxH="48px" bg="white" border="1px solid black">
               <Flex align="center" justify="start" rowGap="5px">
                     <Box><BsFillPersonFill size="20px" /></Box>
                     <Flex direction="column" align="start" justify="start" pl="12px" rowGap="2px" overflow="hidden" >
                        <Text fontSize="sm" fontWeight="400">Travellers</Text>
                        <Text fontSize="md" fontWeight="500">1 room, 2 travellers</Text>
                     </Flex>
               </Flex>
            </MenuButton>
            </Menu>
            </Box>
            <Box px="1">
                <Button colorScheme='blue' size='lg' w="120px" h="40px" >Search</Button>
            </Box>
    </Flex>
  )
}

export default SearchBar;
