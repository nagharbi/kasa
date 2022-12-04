import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/header-logo.svg';

function Header() {
    return (
        <div className='navbar'>

            <NavLink className='logo' to="/">
                <img alt= "logo-kasa" src={logo}/>
            </NavLink>

            <ul className='menu'>
                <li className='menu-link'>
                   <NavLink className={({ isActive }) => isActive ? 'menu-active' : undefined } to="/">Acceuil</NavLink>
                </li>
                <li className='menu-link'>
                    <NavLink className={({ isActive }) => isActive ? 'menu-active' : undefined } to="/apropos">A propos</NavLink>
                </li>
            </ul>
        </div>
    )

}

export default Header;