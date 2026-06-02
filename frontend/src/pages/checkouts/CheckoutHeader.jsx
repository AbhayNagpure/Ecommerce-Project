import './CheckoutHeader.css';
import {Link} from 'react-router';
import checkoutLock  from '../../assets/images/icons/checkout-lock-icon.png';

export function CheckoutHeader({cart}){
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity
  })
    return (
        <>
            <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#131921' }}>
            <img src="images/mobile-logo.svg" style={{ display: 'block', height: '26px', marginRight: '10px' }} alt="NM" />
            <span style={{ fontWeight: '900', fontSize: '24px', letterSpacing: '0.5px', fontFamily: 'Arial, sans-serif' }}>NexMart</span>
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link"
            to="/">{totalQuantity} items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src={checkoutLock} />
        </div>
      </div>
            </div>
        </>
    )
}