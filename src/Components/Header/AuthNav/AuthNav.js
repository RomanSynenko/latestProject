import React from 'react';
import { NavLink } from 'react-router-dom';

import './AuthNavStyle.scss'

const AuthNav = () => {
    return (
        <nav>
            <NavLink
                className="link"
                activeClassName="activeLink"
                to="/contacts"
                exact
            >
                Contacts
            </NavLink>
        </nav>
    );
};

export default AuthNav;