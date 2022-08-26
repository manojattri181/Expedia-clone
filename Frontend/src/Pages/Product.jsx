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

const Product = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();
  
   useEffect(()=>{
     const sortBy = searchParams.get("SortBy")
     const city = searchParams.get("_city")
     const  queryParams ={ 
       params:{
        city:city,
         _sort : sortBy && "price",
         _order : sortBy
       }
     }
     dispatch(GetData(queryParams))
   },[location.search])

  return (
    <div className='bg-background min-h-screen'>
    <div className='w-10/12 flex m-auto pt-4 justify-evenly' >
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
