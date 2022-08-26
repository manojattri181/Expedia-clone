
import {
   Menu,
   MenuButton,
   MenuList,
   Button,
   Input,
   Select,
 } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
 import {FaMapMarkerAlt} from 'react-icons/fa';
 import {BsCalendarEvent,BsFillPersonFill} from 'react-icons/bs';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
   const [searchparam,setSearchparam] = useSearchParams();
   const [city,setCity] = useState(searchparam.get("_city")|| "delhi");
   const [checkInDate,setCheckinDate] = useState(new Date().toJSON().slice(0, 10));
   const [checkOutDate,setCheckoutDate] = useState(new Date().toJSON().slice(0, 10));
   
    useEffect(()=>{
        let query= {
           _city:city
        }
        setSearchparam(query);
    },[city,setSearchparam])
 return (
          <div className='w-11/12 flex justify-start gap-4'>
           {/* Going to */}
           <div>
             <Menu>
            <MenuButton as={Button} w="300px" bg="white"  border="1px solid black">
            <div className='flex justify-start  items-center gap-3' >
                    <div><FaMapMarkerAlt size="20px" /></div>
                    <div className='flex flex-col justify-start items-start '>
                       <h3 className='text-xs font-light '>Going to</h3>
                       <h3  className='text-sm font-light'>{city}, India</h3>
                    </div>
              </div>
           </MenuButton>
           <MenuList mt="-60px" minW="300px">
           <Select className='rounded-xl' placeholder='Select City' border="none" onChange={(e)=>setCity(e.target.value)}>
               <option className='mt-1 hover:bg-blue.500'  value='New Delhi'>New Delhi</option>
               <option className='mt-1 hover:bg-blue.500'  value='Mumbai'>Mumbai</option>
               <option  className='mt-1 hover:bg-blue.500' value='Bengaluru'>Bengaluru</option>
               <option  className='mt-1 hover:bg-blue.500' value='Kolkata'>Kolkata</option>
               </Select>
           </MenuList>
           </Menu>
           </div>
            {/* Check- in */}
           <div>
             <Menu>
            <MenuButton as={Button} w="160px" bg="white" border="1px solid black">
              <div className='flex justify-start  items-center gap-3' >
                    <div><BsCalendarEvent size="18px" /></div>
                    <div className='flex flex-col justify-start items-start'>
                       <h3 className='text-xs font-light '>Check-in</h3>
                       <h3  className='text-sm font-light'>{checkInDate}</h3>
                    </div>
              </div>
           </MenuButton>
           <MenuList mt="-60px" w="160px">
              <Input type="date" value={checkInDate} border="none" onChange={(e)=>setCheckinDate(e.target.value)}/>
           </MenuList>
           </Menu>
           </div>
           {/* Check-out */}
           <div>
           <Menu>
            <MenuButton as={Button} w="160px" bg="white" border="1px solid black">
              <div className='flex justify-start  items-center gap-3' >
                    <div><BsCalendarEvent size="18px" /></div>
                    <div className='flex flex-col justify-start items-start'>
                       <h3 className='text-xs font-light '>Check-in</h3>
                       <h3  className='text-sm font-light'>{checkOutDate}</h3>
                    </div>
              </div>
           </MenuButton>
           <MenuList mt="-60px" w="160px">
              <Input type="date" value={checkOutDate} border="none" onChange={(e)=>setCheckoutDate(e.target.value)}/>
           </MenuList>
           </Menu>
           </div>
           {/* Travellers */}
           <div>
             <Menu>
            <MenuButton as={Button} w="200px" maxH="48px" bg="white" border="1px solid black">
            <div className='flex justify-start  items-center gap-3' >
                    <div><BsFillPersonFill size="20px" /></div>
                    <div className='flex flex-col justify-start items-start'>
                       <h3 className='text-xs font-light '>Travellers</h3>
                       <h3  className='text-sm font-light'>1 room, 3 travellers</h3>
                    </div>
              </div>
           </MenuButton>
           </Menu>
           </div>
           <div>
               <Button  colorScheme='blue' size='md' fontWeight="md">Search</Button>
           </div>
   </div>
 )
}

export default SearchBar;
