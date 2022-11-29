import React from 'react';
import logo from '../images/footer-logo.svg';

function Footer() {
    return (
        <div className="footer">
            <img className="logo-footer" alt="Logo Kasa" src={logo} />
            <span className="textefooter">© 2020 Kasa. All rights reserved</span>
        </div>
    );
}

export default Footer;