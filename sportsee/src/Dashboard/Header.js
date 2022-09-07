import React from 'react';
import logo from '../styles/img/logo.png'

const Header = () => {
    return (
        <div className='navbar'>
        <img src={logo} className="logo" />
        <ul> 
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>

        </ul>
        </div>
    );
};

export default Header;