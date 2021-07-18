import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelector } from '../../../redux/auth';

import './NavigationStyle.scss';
import src from '../../../img/logo.png';

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
                    <img
                        src={src}
                        alt="logo"

                    />
                </NavLink>
            )}
            {isAuthenticated && (<NavLink
                className='link logo'
                to="/"
                exact
            >
                <img
                    src={src}
                    alt="logo"

                />
            </NavLink>
            )}
            <nav>
                {isAuthenticated && (<NavLink
                    className='link'
                    activeClassName='activeLink'
                    to="/"
                    exact
                >
                    Главная
                </NavLink>
                )}
                {isAuthenticated && (<NavLink
                    className='link'
                    activeClassName='activeLink'
                    to="/UsefulResources"
                    exact
                >
                    Полезные ресурсы
                </NavLink>
                )}
                {isAuthenticated && (<NavLink
                    className='link'
                    activeClassName='activeLink'
                    to="/contacts"
                    exact
                >
                    Контакты
                </NavLink>
                )}
            </nav>
        </>
    )
}

export default Navigation;