import React from 'react'
import SearchBar from './SearchBar'
import {Routes ,Route, Router} from "react-router-dom"
import Product from '../Pages/Product'
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/product" element={ <Product/>} />
    </Routes>
  )
}

export default AllRoutes
