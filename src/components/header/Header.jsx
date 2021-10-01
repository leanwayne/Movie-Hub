import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div>
            <spam onClick={()=> window.scroll(0, 0)} className='header'>Movies App</spam>
        </div>
    )
}
export default Header