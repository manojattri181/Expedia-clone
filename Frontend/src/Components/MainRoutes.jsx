import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Product from '../Pages/Product'
import  Totalpage  from './Totalpage'
import CreateAccount from '../Pages/S_CreateAccount'
import S_Hotel from '../Pages/S_Hotel'
import S_SignIn from '../Pages/S_SignIn'
import S_Flights from '../Pages/S_Flights'
import S_Car from '../Pages/S_Car'
import SingleStaysPage from '../Pages/SingleStaysPage'
import ProductSection from '../Pages/ProductSection'
import S_Packages from '../Pages/S_Packages'
import S_Holiday from '../Pages/S_Holiday'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/payment' element={<Totalpage />} />
            <Route path='/signin' element={<S_SignIn />} />
            <Route path='/create_account' element={<CreateAccount/>} />
            <Route path='/nav_hotel' element={<S_Hotel/>} />
            <Route path='/nav_flights' element={<S_Flights/>} />
            <Route path='/nav_car' element={<S_Car/>} />
            <Route path="/product" element={ <Product/>} />
            <Route path='/stays' element={< SingleStaysPage/>} />
            <Route path='/nav_packages' element={<S_Packages/>} />
            <Route path='/nav_holiday' element={<S_Holiday/>} />
        </Routes>
    )
}

export default MainRoutes;