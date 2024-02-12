import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Landing from './Pages/Landing/Landing'
import Payment from './Pages/Payment/Payment';
import Cart from './Pages/Cart/Cart';
import Auth from './Pages/Auth/Auth';
import Orders from './Pages/Orders/Orders';
import Results from './Pages/Results/Results'
import ProductDetail from './Pages/ProductDetail/ProductDetail'
import { Elements  } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OiUQhJDBDJhIFOxOAhj9egWUZlDymzNmVR5lsyMFTGDwNhpeOCIWJfgBmoeCGxbUTNA7dNRm241Fa0omfGudqqE008xUi4z2u"
);


function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <Elements stripe={stripePromise}>
              <Payment />
            </Elements>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Orders />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
}

export default Routering