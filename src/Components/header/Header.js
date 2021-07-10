import React from 'react';
import { mainRoutes } from '../../routes/mainRoutes';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {mainRoutes.map(({ name, exact, path }) => (
            <li key={path}>
              <NavLink to={path} exact={exact}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
