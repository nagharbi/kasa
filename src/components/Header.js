import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/header-logo.svg';

function Header() {
    return (
        <div className='navbar'>

            <NavLink className='logo' to="/" exact="true">
                <img alt= "logo-kasa" src={logo}/>
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