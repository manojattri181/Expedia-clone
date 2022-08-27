import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom';


const Map = ({city="delhi",width="240px",height="220px"}) => {
  console.log(width,height)
let [searchparam] =useSearchParams();
let _city = searchparam.get("_city");
  useEffect(()=>{
  },[searchparam,_city])
  return (
    <div className="w-fit pb-4 m-auto  text-center bg-white border-1 border-solid border-black  rounded-2xl" >
        <iframe title={city} width={width} height={height} src={`https://maps.google.com/maps?q=${city || "delhi"}&t=&z=11&ie=UTF8&iwloc=&output=embed`} scrolling="no"></iframe>
        <Link to="">
            <h3 className='text-sm font-semibold text-blue mt-4 hover:underline' >View in map</h3>
        </Link>
    </div>
  )
}

export default Map;
