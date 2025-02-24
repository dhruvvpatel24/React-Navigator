import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './Pages/Api/Home'
import CreateApi from './Pages/Api/CreateApi'
import ViewApi from './Pages/Api/ViewApi'
import SingleProduct from './Pages/Api/SingleProduct'
import UpdateProduct from './Pages/Api/UpdateProduct'
import About from './Pages/Api/About'
import Contact from './Pages/Api/Contact'



const App = () => {
  return (
    <>
        <Routers>
          <Header/>

            <Routes>
                <Route path='/' element={<Home/>} ></Route>
                <Route path='/about' element={<About/>} ></Route>
                <Route path='/contact' element={<Contact/>} ></Route>
                <Route path='/CreateApi' element={<CreateApi/>} ></Route>
                <Route path='/viewApi' element={<ViewApi/>} ></Route>
                <Route path='/singleProduct/:id' element={<SingleProduct/>} ></Route>
                <Route path='/update/:id' element={<UpdateProduct/>} ></Route>
            </Routes>
            
          <Footer/>  
        </Routers>
    </>
  )
}

export default App