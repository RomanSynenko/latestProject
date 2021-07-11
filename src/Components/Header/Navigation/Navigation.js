import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../../redux/auth';
import './NavigationStyle.scss';
import src from '../../../img/logo.png'
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
                <img
                    src={src}
                    alt="logo"

                />
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