import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import { Totalpage } from './Totalpage'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login'  />
            <Route path='/payment' element={<Totalpage />}/>
        </Routes>
    )
}

export default MainRoutes