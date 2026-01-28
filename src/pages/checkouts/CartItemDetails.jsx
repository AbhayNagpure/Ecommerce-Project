import { useState } from "react";
import axios from "axios";
import { formatMoney } from "../../utils/money.js"
export function CartItemDetails({cartItem, loadCart}) {

    const [updating, setUpdating] = useState(false);
    const [quantity, setQuantity] = useState(cartItem.quantity);
    const deleteCartItem = async () => {
        await axios.delete(`http://localhost:3000/api/cart-items/${cartItem.productId}`)
        await loadCart();                
    }
    const getQuantity = async (event) => {
        if(event.target.value >= 0){
            setQuantity(event.target.value);
        }        
    }
    const setQuantityInBackend = async() => {
        await axios.put(`http://localhost:3000/api/cart-items/${cartItem.productId}`, {
                quantity : Number(quantity)
            });
            loadCart();
            setUpdating(false);
    }
    const updateQuantity = async() => {
        if(updating){
            setQuantityInBackend();
        }
        else{
            setUpdating(true);
        }
    }
    const keyPressed = async(event) => {
        if(event.key === 'Enter'){
            setQuantityInBackend();
        }
        if(event.key === 'Escape'){
            setQuantity(cartItem.quantity);
            setUpdating(false);
        }
    }
    return (
        <>
        <img className="product-image"
            src={cartItem.product.image }/>
        <div className="cart-item-details">
            <div className="product-name">
            {cartItem.product.name}
            </div>
            <div className="product-price">
            {formatMoney(cartItem.product.priceCents)}
            </div>
            <div className="product-quantity">
            <span>
                
                Quantity: {updating ? 
                    <input type="text" className="quantity-input" value={quantity} style={{display: updating ? " ": "none"}}
                        onChange={getQuantity}
                        onKeyDown={keyPressed}
                    /> :
                    <span className="quantity-label">{quantity} </span>
                    } 
            </span>
            <span className="update-quantity-link link-primary"
               onClick={updateQuantity}
            >
                update
            </span>
            <span className="delete-quantity-link link-primary"
                onClick={deleteCartItem}>
                Delete
            </span>
            </div>
        </div>
        </>
    )
}