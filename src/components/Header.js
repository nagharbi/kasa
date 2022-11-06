import React from 'react';

function Header() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img alt= "logo-kasa" src= "../LOGO.svg"/>
            </div>
            <ul className='menu'>
                <li className='menu-link'>
                    Acceuil
                </li>
                <li className='menu-link'>
                    A propos
                </li>
            </ul>
        </div>
    )

}

export default Header;