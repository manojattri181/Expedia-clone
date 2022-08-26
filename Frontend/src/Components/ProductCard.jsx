import ImageSlider from './ImageSlider';
import {MdPool} from "react-icons/md";

// hardcoded data 
let data =[ 
  {
    src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/9b582675.jpg?impolicy=resizecrop&rw=1200&ra=fit"
  },
  {
    src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/bada04cf.jpg?impolicy=resizecrop&rw=455&ra=fit"
  },
  {
    src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/9b582675.jpg?impolicy=resizecrop&rw=297&ra=fit"
  },
  {
    src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/5cc49445.jpg?impolicy=resizecrop&rw=297&ra=fit"
  },
  {
    src:"https://images.trvl-media.com/hotels/4000000/3860000/3851700/3851663/958ad657.jpg?impolicy=resizecrop&rw=598&ra=fit"
  }
  ];
  
const ProductCard = (item) => {
  return (
     <div className='w-full h-fit container-md flex justify-start gap-x-3 bg-white  rounded-lg shadow-md'>
        <div >
          <ImageSlider data={data} w="320px" h="180px" borderRadius="lg" />
        </div>
        <div className='w-full flex justify-start  py-2'>
        <div>
        <h3 className='w-72 text-2xl font-bold'>The St. Regis Mumbai</h3>
        <h1 className='text-sm mb-1'>Mumbai</h1>
        <div className='flex gap-x-1'>
         <MdPool  />
        <h1 className='text-sm text-graylight'>Pool</h1>
        </div>
        <div className='mt-3 '>
       <h3 className='text-md text-green font-light'>Fully refundable</h3>
       <h3 className='text-md text-green font-light'>Reserve now,pay later</h3>
        </div>
        <div className='flex gap-1 mt-1'>
       <h1 className='text-md font-bold'>4.6/5</h1>
       <h1 className='text-md'>Wonderful (310 reviews)</h1>
        </div>
        </div>
        {/* Price */}
        <div className='w-full relative text-right '>
          <div className='w-fit  absolute bottom-0 right-3'>
            <p className='text-white bg-darkgreen rounded-2xl text-xs px-2 py-1 font-semibold'>We have 5 left at</p>
          <p className='text-2xl font-bold'>Rs11,000</p>
          <p className='text-sm'>Rs12,980 total</p>
            </div> 
        </div>
        </div>
     </div>
  )
}

export default ProductCard;
