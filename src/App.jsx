import  axios from 'axios';
import {Routes, Route} from 'react-router';
import { useState, useEffect } from "react";
import HomePage from './pages/home/HomePage';
import './App.css'
import { CheckoutPage } from './pages/checkouts/CheckoutPage'; 
import { OrdersPage } from './pages/orders/OrdersPage';
import { TrackingPage } from './pages/TrackingPage';
window.axios = axios;
function App() {
      const [cart, setCart] = useState([]);
      const loadCart = async () => {
          const response  = await axios.get("http://localhost:3000/api/cart-items?expand=product")
          setCart(response.data);
        }     
      useEffect(() => {      
        loadCart();
      }, [])
       
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart}/>} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart}/>} />
        <Route path="orders" element={<OrdersPage cart={cart} loadCart={loadCart}/>} />
        <Route path="tracking/:orderId/:productId" element={<TrackingPage cart={cart}/>} />      
      </Routes>
    </>
  )
}

export default App
