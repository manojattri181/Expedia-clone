import {Image } from '@chakra-ui/react';
import React, { useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

const ImageSlider = ({w,h,borderRadius,data}) => {
  const [image,setImage] = useState(0);
  const [count,setCount] = useState(1);

  const handleFunc =(value)=>{
    setCount(prev=>prev+value);
    let temp = count%data.length;
    setImage(temp);
  }
  return (
    <div className='max-w-md flex justify-center relative'>
        <div className='flex items-center rounded-full hover:opacity-60 justify-center w-8 h-8 z-10 bg-black opacity-40 absolute top-1/2 hover:cursor-pointer left-1 ' >
        <button onClick={()=>handleFunc(-1)}>
        <BiChevronLeft size="36px" color="white"/>
        </button>
        </div>

       <Image w={w} h={h} src={data[image].src} objectFit="cover"  borderRadius={borderRadius}/>

       <div className='flex items-center rounded-full hover:opacity-60 justify-center w-8 h-8 z-10 bg-black cursor-pointer opacity-40 absolute top-1/2 right-1'>
       <button  onClick={()=>handleFunc(1)}>
        <BiChevronRight size="36px" color="white"/>
        </button>
       </div>
    </div>
  )
}

export default ImageSlider;
