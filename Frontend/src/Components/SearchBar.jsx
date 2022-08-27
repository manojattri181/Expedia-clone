
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
           city:city
        }
        setSearchparam(query);
    },[city,setSearchparam])
 return (
          <div className='w-full flex justify-start gap-4'>
           {/* Going to */}
           <div>
             <Menu>
            <MenuButton as={Button} w="300px" h="46px" bg="white"  border="1px solid black">
            <div className='flex justify-start  items-center gap-3' >
                    <div><FaMapMarkerAlt size="20px" /></div>
                    <div className='flex flex-col justify-start items-start '>
                       <h3 className='text-sm font-normal '>Going to</h3>
                       <h3  className='text-md font-medium'>{city}, India</h3>
                    </div>
              </div>
           </MenuButton>
           <MenuList mt="-60px" minW="300px">
           <Select className='rounded-xl' placeholder='Select City' border="none" onChange={(e)=>setCity(e.target.value)}>
               <option className='mt-1 hover:bg-blue.500'  value='Pune'>pune</option>
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
            <MenuButton as={Button} w="160px" h="46px" bg="white" border="1px solid black">
              <div className='flex justify-start  items-center gap-3' >
                    <div><BsCalendarEvent size="22px" /></div>
                    <div className='flex flex-col justify-start items-start'>
                       <h3 className='text-sm font-normal '>Check-in</h3>
                       <h3  className='text-md font-medium'>{checkInDate}</h3>
                    </div>
              </div>
           </MenuButton>
           <MenuList mt="-60px" w="160px">
              <Input type="date" value={checkInDate} border="none" onChange={(e)=>setCheckinDate(e.target.value)}/>
           </MenuList>
           </Menu>
           </div>
           {/* Check-out */}
           <div >
           <Menu>
            <MenuButton as={Button} w="160px" h="46px" bg="white" border="1px solid black">
              <div className='flex justify-start  items-center gap-3' >
                    <div><BsCalendarEvent size="22px" /></div>
                    <div className='flex flex-col justify-start items-start'>
                       <h3 className='text-sm font-normal '>Check-in</h3>
                       <h3  className='text-md font-medium'>{checkOutDate}</h3>
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
            <MenuButton as={Button} w="200px" h="46px" bg="white" border="1px solid black">
            <div className='flex justify-start  items-center gap-3 overflow-hidden' >
                    <div><BsFillPersonFill size="24px" /></div>
                    <div className='flex flex-col justify-start items-start'>
                       <h3 className='text-sm font-normal '>Travellers</h3>
                       <h3  className='text-md font-medium'>1 room, 3 travellers</h3>
                    </div>
              </div>
           </MenuButton>
           </Menu>
           </div>
           <div>
               <Button  colorScheme='blue' w="130px" h="46px" fontWeight="md" fontSize="lg">Search</Button>
           </div>
   </div>
 )
}

export default SearchBar;
