import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'

const MainRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login'  />
        </Routes>
    )
}

export default MainRoutes