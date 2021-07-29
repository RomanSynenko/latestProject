import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './hooks/onClickOutside';
import { MenuContext } from './context/navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';
import { useSelector } from 'react-redux';
import { authSelector } from '../../redux/auth';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../img/logo.svg';



const Navbar = styled.div`

  display: flex;
  position: fixed;
  border: 1px solid #e2e3e5;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  width: 100%;
  margin: 0px;
  align-items: center;
  color: rgb(248, 248, 248);
  min-width: 0px;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
  z-index: 500;
  background: #f5f6fb;
  box-sizing: border-box;
  border-right: 0;
  border-top:0;
  border-left: 0;
  @media screen and (min-width: 767px) {
    display: none;
  }
`;

const MainMenu = () => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    // Only if menu is open
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });
  const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
  return (
    <header ref={node}>
      <Navbar>
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
        <HamburgerButton />
      </Navbar>
      <SideMenu />
    </header>
  );
};

export default MainMenu;
