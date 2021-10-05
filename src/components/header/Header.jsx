import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <spam onClick={()=> window.scroll(0, 0)} className='header'>Movie Hub</spam>
    )
};
export default Header;