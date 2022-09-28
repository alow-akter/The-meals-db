import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <nav className='mealDb'>
            <h4 className='nav-text'>The Meal Db</h4>
            <a href="/home">Home</a>
            <a href="order">Order</a>
            <a href="other">Other</a>
            <a href="search">Search</a>
        </nav>

    );
};

export default Header;