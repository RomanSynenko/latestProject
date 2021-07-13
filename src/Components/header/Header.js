import React from 'react';
import { useSelector } from 'react-redux';

import Navigation from './Navigation';
import './Header.scss';
import { authSelector } from '../../redux/auth';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';

const Header = () => {
    const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
    return (
        <header className="header-container">
            <Navigation />
            <div className='registerContainer'>
                {isAuthenticated ? <UserMenu /> : <AuthNav />}
            </div>
        </header>
    );
};

export default Header;