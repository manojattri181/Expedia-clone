import Map from './Map'
import {AiOutlineSearch} from "react-icons/ai"
const Filter = () => {
  let divider = {
    width:"240px",
    padding:"0.2px",
    marginTop:"20px",
    marginBottom:"20px",
    backgroundColor:"black"
  }
  return (
   <div className='w-60 '>
    {/* Map section */}
    <Map />
     <div style={divider}></div>
    <h1 className='text-lg font-semibold mb-2'>Search by property name</h1>
    <div className='w-full flex justify-between items-center border border-solid border-black rounded-lg p-1 bg-white'>
      <AiOutlineSearch size="26px" color="black" />
      <input type="text" style={{padding:"4px"}} placeholder='e.g. Best Western' />
    </div>
    <div style={divider}></div>

  {/* Sorting Functionaity */}

  <div>
    <h3 className='text-lg font-semibold mb-6'>Filter by</h3>
    {/* Ratings */}
    <div className='flex flex-col justify-start gap-y-3'>
    <h3 className='text-md font-semibold mb-2'>Guest rating</h3>
          <div className='flex justify-start gap-4'>
            <input type="radio" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Any</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="radio" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Wonderful 4.5+</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="radio" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Very good 4+</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="radio" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Good 3.5+</label>
          </div>
    </div>
    {/* Prices per night */}
    <div className='flex flex-col justify-start gap-y-3 mt-6'>
    <h3 className='text-md font-semibold mb-2'>Price per night</h3>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Less than Rs2,000</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Rs2,000 to Rs4,000</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Rs4,000 to Rs8,000</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium text-graylight'>Rs8,000 to Rs11,000</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Greater than Rs11,000</label>
          </div>
    </div>
    {/* Amenitines */}
    <div className='flex flex-col justify-start gap-y-2 mt-6'>
    <h3 className='text-md font-semibold mb-2'>Amenities</h3>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Pool</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Air conditioning</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Spa</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Restaurant</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Free WiFi</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium text-graylight'>Free Parking included</label>
          </div>
    </div>



  </div>


   </div>
  )
}

export default Filter;