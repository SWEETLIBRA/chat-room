import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <Link to={'/'}>Главная</Link>
            <Link to={'/chatList'}>Чаты</Link>
            <Link to={'/profile'}>Профиль</Link>
        </div>
    );
};

export default NavBar;