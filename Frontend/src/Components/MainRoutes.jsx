import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import  Paymentpage  from '../Pages/Paymentpage'
import  Lastpage  from '../Pages/Lastpage'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' />
            <Route path='/payment' element={<Paymentpage />} />
            <Route path='/lastpage' element={<Lastpage/> } />
        </Routes>
    )
}

export default MainRoutes;