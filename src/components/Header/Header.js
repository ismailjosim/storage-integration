import React from 'react';
import Foods from './Foods/Foods';
import './Header.css'
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Foods></Foods>
        </div>
    );
};

export default Header;
