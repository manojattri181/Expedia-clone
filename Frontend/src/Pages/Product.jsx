import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import Advt from '../Components/Advt'
import Filter from '../Components/Filter'
import SearchBar from '../Components/SearchBar'
import { GetData } from '../Redux/App-reducer/action'
import ProductSection from './ProductSection'
import advt from "../Assets/Advt/advt.jpg"
import advt1 from "../Assets/Advt/advt1.jpg"
import Advt1 from '../Components/Advt1'
import Navbar from '../Components/Navbar'
const city = JSON.parse(localStorage.getItem("city"));
console.log(city);
const Product = () => {
  const dispatch = useDispatch();
  const [searchParams,setSearchparam] = useSearchParams();
  const location = useLocation();
 
   useEffect(()=>{
     const sortBy = searchParams.get("SortBy")
     const amenities = searchParams.getAll("amenities");
     let dinner = amenities.includes("Dinner")?"true":""
     let Lunch = amenities.includes("Lunch")?"true":"";
     let all = (amenities.includes("All"))?{
      dinner:"false", Lunch:"false",all:"true"
     }:"";
     const  queryParams ={ 
       params:{
         city:city,
         dinner:dinner,
         lunch:Lunch,
         all:all,
         sortBy : sortBy && "price",
         sortOrder : sortBy 
       }
     }
     dispatch(GetData(queryParams))
   },[location.search,city])

  return (
    <div className='bg-background min-h-screen'>
      <Navbar />
    <div className='w-10/12 flex m-auto pt-4 justify-evenly pb-20' >
      <div>
      <SearchBar />
      <div className='flex  m-auto mt-6 gap-x-6 '>
        <div className='hidden filter:block'>
        <Filter />
        </div>
        <div>
        <ProductSection />
        </div>
         </div>
      </div>
        <div className='gap-y-10 hidden filter:block'>
        <Advt src={advt} />
        <Advt1 src={advt1}  />
        </div>
    </div>
  </div>
  )
}

export default Product;
