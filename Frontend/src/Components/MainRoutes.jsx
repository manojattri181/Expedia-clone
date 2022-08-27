import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import  Paymentpage  from '../Pages/Paymentpage'
import  Lastpage  from '../Pages/Lastpage'
import Product from '../Pages/Product'
import CreateAccount from '../Pages/S_CreateAccount'
import S_Hotel from '../Pages/S_Hotel'
import S_SignIn from '../Pages/S_SignIn'
import S_Flights from '../Pages/S_Flights'
import S_Car from '../Pages/S_Car'
import SingleStaysPage from '../Pages/SingleStaysPage'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' />
            <Route path='/payment' element={<Paymentpage />} />
            <Route path='/lastpage' element={<Lastpage/> } />
            <Route path='/signin' element={<S_SignIn />} />
            <Route path='/create_account' element={<CreateAccount/>} />
            <Route path='/nav_hotel' element={<S_Hotel/>} />
            <Route path='/nav_flights' element={<S_Flights/>} />
            <Route path='/nav_car' element={<S_Car/>} />
            <Route path="/product" element={ <Product/>} />
            <Route path='/stays' element={< SingleStaysPage/>} />
        </Routes>
    )
}

export default MainRoutes;