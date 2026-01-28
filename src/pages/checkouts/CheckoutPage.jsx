
import axios from 'axios';
import { OrderSummary } from './OrderSummary.jsx';
import './checkout.css'
import { useState, useEffect } from 'react';
import './CheckoutHeader.css'
import { CheckoutHeader } from './CheckoutHeader'
import CartFavicon from '../../assets/images/cart-favicon.png'
import { PaymentSummary } from './PaymentSummary.jsx';

export function CheckoutPage({cart, loadCart}){

    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentSummary, setPaymentSummary] = useState(null);
    useEffect(() => {
        const paymentSummaryData = async() => {
            const response = await axios.get("http://localhost:3000/api/payment-summary");
            setPaymentSummary(response.data);
        }
        paymentSummaryData();
    }, [cart])

    useEffect(() => {
        const fetchCheckoutData = async () => {
            let response = await axios.get("http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime")
            setDeliveryOptions(response.data);
        }
        fetchCheckoutData(); 
    }, [])

    return (
        <>
        <title>Checkout</title>
        <link rel="icon" type="image/svg+xml" href={CartFavicon} />
            <CheckoutHeader cart={cart} />
            <div className="checkout-page">
            <div className="page-title">Review your order</div>

            <div className="checkout-grid">
                <OrderSummary 
                    deliveryOptions={deliveryOptions}
                    cart={cart}
                    loadCart={loadCart}
                />
                <PaymentSummary
                    paymentSummary={paymentSummary}
                    loadCart={loadCart}
                />
            </div>
            </div>
        </>
    )
}