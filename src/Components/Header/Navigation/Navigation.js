import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../../redux/auth';
import './NavigationStyle.scss';

const Navigation = () => {
    const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
    return (
        <nav>
            <NavLink
                className="link"
                activeClassName="activeLink"
                to="/"
                exact
            >
                Home
            </NavLink>
            {isAuthenticated && (<NavLink
                className='link'
                activeClassName='activeLink'
                to="/contacts"
                exact
            >
                Contacts
            </NavLink>
            )}
        </nav>
    )
}

export default Navigation;