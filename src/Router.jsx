import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Auth from './Pages/Auth/Auth';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'


function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Orders />} />      
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routering