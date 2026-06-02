import './Header.css'
import {NavLink} from 'react-router' 
import cartIcon from '../../assets/images/icons/cart-icon.png';
import searchIcon from '../../assets/images/icons/search-icon.png';
import { useNavigate, useSearchParams } from 'react-router';
import { useState } from 'react';

export function Header( {cart} ){

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const searchText = searchParams.get('search');
    const [search, setSearch] = useState(searchText || '');

    const updateSearchInput = (event) => {
      setSearch(event.target.value);
    }
    const searchProducts = () => {
      navigate(`/?search=${search}`)
    }
    
    let totalQuantity = 0;
    cart.forEach((cartItems) => {
      totalQuantity += cartItems.quantity;
    })

    return (
        <>
            <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'white', border: 'none', padding: '0 5px' }}>
          <img src="images/mobile-logo-white.svg" style={{ display: 'block', height: '26px', marginRight: '10px' }} alt="NM" />
          <span style={{ fontWeight: '900', fontSize: '24px', letterSpacing: '0.5px', fontFamily: 'Arial, sans-serif' }}>NexMart</span>
        </NavLink>
      </div>

      <div className="middle-section">
        <input className="search-bar" type="text" placeholder="Search" value={search} 
          onChange={updateSearchInput}
        />

        <button className="search-button"
          onClick={searchProducts}
        >
          <img className="search-icon" src={searchIcon} />  
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text  ">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
            </div>
        </>
    );
}