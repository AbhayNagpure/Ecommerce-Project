import axios from 'axios';
import { useEffect, useState } from 'react';


import './orders.css'
import { OrdersGrid } from './OrdersGrid';
import { Header } from '../components/Header';
import OrdersFavicon from '../../assets/images/orders-favicon.png'

export function OrdersPage({cart, loadCart}){
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrdersData = async () => {
            const response = await axios.get("http://localhost:3000/api/orders?expand=products")
            setOrders(response.data);           
        }
        fetchOrdersData();
        
    }, [])

    return (
        <>
            <title>Orders</title>
            <link rel="icon" type="image/svg+xml" href={OrdersFavicon} />
            <Header cart={cart}/>

            <div className="orders-page">
            <div className="page-title">Your Orders</div>

            <OrdersGrid orders={orders} loadCart={loadCart}/>
            </div>
        </>
    )
}