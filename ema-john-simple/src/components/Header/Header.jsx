import React from 'react';
import logo from '../../images/Logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="this is amazon logo" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
            
        </div>
    );
};

export default Header;