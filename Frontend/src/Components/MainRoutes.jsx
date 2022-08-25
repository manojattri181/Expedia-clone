import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import CreateAccount from '../Pages/S_CreateAccount'
import S_Hotel from '../Pages/S_Hotel'
import S_SignIn from '../Pages/S_SignIn'

const MainRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login'  />
            <Route path='/signin' element={<S_SignIn />} />
            <Route path='/create_account' element={<CreateAccount/>} />
            <Route path='/nav_hotel' element={<S_Hotel/>} />
        </Routes>
    )
}

export default MainRoutes