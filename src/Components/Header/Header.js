import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className='nav-bar'>
                <NavLink className='nav' to='/home'>Home</NavLink>
                <NavLink className='nav' to='/courses'>Courses</NavLink>
                <NavLink className='nav' to='/about'>About</NavLink>
                <NavLink className='nav' to='/user'>User</NavLink>
            </div>

        </div>
    );
};

export default Header;