import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='navbar'>

            <NavLink className='logo' to="/" exact="true">
                <img alt= "logo-kasa" src= "../LOGO.svg"/>
            </NavLink>

            <ul className='menu'>
                <li className='menu-link'>
                   <NavLink to="/" exact="true">Acceuil</NavLink>
                </li>
                <li className='menu-link'>
                <NavLink to="/apropos">A propos</NavLink>
                </li>
            </ul>
        </div>
    )

}

export default Header;