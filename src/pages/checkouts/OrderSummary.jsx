
import { CartItemDetails } from "./CartItemDetails.jsx";
import { DeliveryOptions } from "./DeliveryOptions.jsx";
import { DeliveryDate } from './DeliveryDate.jsx';
export function OrderSummary({deliveryOptions, cart, loadCart}){
    return(
        <div className="order-summary">               
            {deliveryOptions.length>0 && cart.map((cartItem) => {
                const selectDeliveryOption = deliveryOptions
                    .find((deliveryOption) => {
                        return deliveryOption.id === cartItem.deliveryOptionId;
                })
                return (
                    <div key={cartItem.productId} className="cart-item-container">
                        <DeliveryDate selectDeliveryOption={selectDeliveryOption} />
                        <div className="cart-item-details-grid">                            
                            <CartItemDetails cartItem={cartItem} loadCart={loadCart}/>
                            <DeliveryOptions cartItem={cartItem} deliveryOptions={deliveryOptions} loadCart={loadCart}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}