import React from 'react';
import { NavLink } from 'react-router-dom';

import './AuthNavStyle.scss'

const AuthNav = () => {
    return (
        <nav className='contacts-public'>
            <NavLink
                className="link"
                activeClassName="activeLink"
                to="/contacts"
                exact
            >
                Контакт
            </NavLink>
        </nav>
    );
};

export default AuthNav;