import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../../redux/auth';

import './NavigationStyle.scss';
import { ReactComponent as Logo } from '../../../img/logo.svg';

const Navigation = () => {
    const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
    return (
        <>
            {!isAuthenticated && (
                <NavLink
                    className="link logo"
                    to="/login"
                    exact
                >
                    <Logo />
                </NavLink>
            )}
            {isAuthenticated && (<NavLink
                className='link logo'
                to="/"
                exact
            >
                <Logo />
            </NavLink>
            )}
            <nav className="navigation-menu">
                {isAuthenticated && (<NavLink
                    className='link'
                    activeClassName='activeLink'
                    to="/"
                    exact
                >
                    Home
                </NavLink>
                )}
                {isAuthenticated && (<NavLink
                    className='link'
                    activeClassName='activeLink'
                    to="/UsefulResources"
                    exact
                >
                    Materials
                </NavLink>
                )}
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
        </>
    )
}

export default Navigation;