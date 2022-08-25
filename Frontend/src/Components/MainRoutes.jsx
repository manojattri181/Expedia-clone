import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import S_SignIn from '../Pages/S_SignIn'

const MainRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login'  />
            <Route path='/signin' element={<S_SignIn />} />
        </Routes>
    )
}

export default MainRoutes