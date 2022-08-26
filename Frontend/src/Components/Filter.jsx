import Map from './Map'
import {AiOutlineSearch} from "react-icons/ai"
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
let divider = {
  width:"240px",
  padding:"0.2px",
  marginTop:"20px",
  marginBottom:"20px",
  backgroundColor:"black"
}

const Filter = () => {
  const [searchParams,setSearchParams] = useSearchParams();
  // getting category params from params
  const initial = searchParams.getAll("amenities");
  const [category,setCategory] = useState(initial || []);
  const initialSort = searchParams.get("SortBy");
  const  [SortBy ,SetSortBy]   = useState(initialSort || "");
  
     const handleCategoryChange=(e)=>{
      const option =(e.target.value);
      let newCategory  = [...category] ;
  
      if(category.includes(option)){
        newCategory.splice(newCategory.indexOf(option),1);
      }else{
        newCategory.push(option);
      }
      setCategory(newCategory);
     }
  
     const handleSort = (e)=>{  
         SetSortBy(e.target.value)
     }
  console.log(SortBy)
  useEffect(() => {
    if(category){
      if(SortBy){
        setSearchParams({amenities:category , SortBy : SortBy});
        return;
      }
      setSearchParams({amenities:category });
    }
    if(SortBy){
      if(category){
        setSearchParams({amenities:category,SortBy:SortBy})
        return;
      }
      setSearchParams({SortBy : SortBy});
    }
  
  }, [category,setSearchParams,SortBy])
  

  return (
   <div className='w-64 hidden tablet:block '>
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
    {/* sort by price ascending and descending */}
    <div className='flex flex-col justify-start gap-y-3 mt-6' onChange={handleSort}>
    <h3 className='text-md font-semibold mb-2' >Price</h3>
          <div className='flex justify-start gap-4' >
            <input type="radio" style={{padding:"3px"}} name="sortBy" value="asc" defaultChecked={SortBy==="asc"} />
            <label className='text-md font-medium'>Ascending</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="radio" style={{padding:"3px"}}  name="sortBy" value="desc" defaultChecked={SortBy==="desc"}/>
            <label className='text-md font-medium'>Descending</label>
          </div>
    </div>
    {/* Prices per night */}
    <div className='flex flex-col justify-start gap-y-3 mt-6'>
    <h3 className='text-md font-semibold mb-2'>Price per night</h3>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>Less than $200</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>$200 to $4,000</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium'>$400 to $800</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} />
            <label className='text-md font-medium text-graylight'>$800 to $11$00</label>
          </div>
    </div>
    {/* Amenitines */}
    <div className='flex flex-col justify-start gap-y-2 mt-6'>
    <h3 className='text-md font-semibold mb-2'>Amenities</h3>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} value="Pool" defaultChecked={category.includes("Pool")}  onChange={handleCategoryChange} />
            <label className='text-md font-medium'>Pool</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} value="Air conditioning" defaultChecked={category.includes("Air conditioning")}  onChange={handleCategoryChange} />
            <label className='text-md font-medium'>Air conditioning</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} value="Spa" defaultChecked={category.includes("Spa")}  onChange={handleCategoryChange} />
            <label className='text-md font-medium'>Spa</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} value="Restaurant" defaultChecked={category.includes("Restaurant")}  onChange={handleCategoryChange} />
            <label className='text-md font-medium'>Restaurant</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} value="Free WiFi" defaultChecked={category.includes("Free WiFi")}  onChange={handleCategoryChange}  />
            <label className='text-md font-medium'>Free WiFi</label>
          </div>
          <div className='flex justify-start gap-4'>
            <input type="checkbox" style={{padding:"3px"}} value="Free Parking" defaultChecked={category.includes("Free Parking")}  onChange={handleCategoryChange}  />
            <label className='text-md font-medium text-graylight'>Free Parking included</label>
          </div>
    </div>



  </div>


   </div>
  )
}

export default Filter;