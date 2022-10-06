import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineWifi } from 'react-icons/ai'
import { BsSnow } from 'react-icons/bs'
import { FaBed } from 'react-icons/fa'
import { MdLocalParking, MdOutlineBedroomChild, MdPeople, MdPool } from 'react-icons/md'
import { RiInformationLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import ImageSlider from '../ImageSlider'

const RoomsCard = ({images,roomes,singleProduct}) => {
  const toast  =useToast();
    const navigate = useNavigate()
   const handleClick=()=>{
    localStorage.setItem('roomes', JSON.stringify(singleProduct));
    toast({
      title: `Going to Payment Page!`,
      status: 'success',
      duration: 700,
      position: 'top',
      isClosable: true,
    })
    // alert("Going to Payment Page!");
    setTimeout(()=>{
      navigate("/payment");
    },2000)
    // alert("Going to Payment Page!")
    // navigate("/payment")
   }
    
  return (
    
    <Box
    width={"32%"}
    height="40rem"
    border="1px solid rgba(0, 0, 0, 0.35)"
    borderRadius={"10px"}
    margin="auto"
    boxShadow="rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
  >
    <ImageSlider
      data={images}
      w="320px"
      h="180px"
      borderRadius="10px"
    />
    <Box margin={"1rem"}>
      <Text fontWeight={"500"} fontSize={"16px"}>
       {roomes.name||" Room, 1 King Bed, Non Smoking, City View"}
      </Text>
      <Box fontSize="small" width="50%" color="#141d38">
        <Text
          padding={"0.5rem 0"}
          fontWeight={"500"}
          display={"flex"}
          alignItems="center"
          color="#141d38"
        >
          <FaBed color="#141d38" />
          <Text marginLeft={"1rem"} color="#141d38">
            {roomes.bedSize||"2 Twin Beds"}
          </Text>
        </Text>
        <Text
          padding={"0.5rem 0"}
          fontWeight={"500"}
          display={"flex"}
          alignItems="center"
        >
          <AiOutlineWifi />
          <Text marginLeft={"1rem"} color="#141d38">
            Free Wifi
          </Text>
        </Text>
        <Text
          padding={"0.5rem 0"}
          fontWeight={"500"}
          display={"flex"}
          alignItems="center"
        >
          <MdLocalParking />
          <Text marginLeft={"1rem"}></Text>
          Parking Included
        </Text>
        <Text
          padding={"0.5rem 0"}
          fontWeight={"500"}
          display={"flex"}
          alignItems="center"
          color="#141d38"
        >
          <MdOutlineBedroomChild color="#141d38" />
          <Text marginLeft={"1rem"} color="#141d38">
            {roomes.size || "484 sq ft"}
          </Text>
        </Text>
        <Text
          padding={"0.5rem 0"}
          fontWeight={"500"}
          display={"flex"}
          alignItems="center"
        >
          <MdPeople />
          <Text marginLeft={"1rem"} color="#141d38">
            {roomes.poepleSleeps || "Sleeps 3"}
          </Text>
        </Text>
        <Text
          padding={"0.5rem 0"}
          fontWeight={"500"}
          display={"flex"}
          alignItems="center"
        >
          <BsSnow />
          <Text marginLeft={"1rem"}></Text>
          Air conditioning
        </Text>
      </Box>
      <Text
        display={"flex"}
        width={"140px"}
        alignItems={"center"}
        justifyContent="space-between"
        color="green"
        marginTop={"1rem"}
      >
        <Link to="">
          <h3 className="text-sm text-green mt-0 hover:underline">
            Fully Refundable
          </h3>
        </Link>
        {<RiInformationLine />}
      </Text>
      <Box marginTop={"1rem"}>
        <Box>
          <Text
            fontWeight={"bold"}
            fontSize="22px"
            margin={"0"}
            padding="0"
          >
            {`${roomes.price} $`||"130 $"}
          </Text>
          <Text as="small">{Math.floor(+(roomes.price)+(+(roomes.price)*0.28)) || 155} $ total</Text>
        </Box>
        <Box
          display={"flex"}
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Box>
            <Link to="">
              <h3 className="text-sm font-semibold text-blue mt-4 hover:underline">
                Price Details {">"}
              </h3>
            </Link>
          </Box>
          <Box>
            
            <Button onClick={()=> handleClick()} colorScheme="blue">Reserve</Button>
            
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>







  )
}

export default RoomsCard