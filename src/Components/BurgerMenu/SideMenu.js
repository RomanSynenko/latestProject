import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { MenuContext } from './context/navState';
import { authSelector } from '../../redux/auth';
import { useSelector } from 'react-redux';
import LogOut from './LogOut';

const Menu = styled.nav`
@media screen and (min-width: 768px) {
  display: none;
}

  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 700px;
  max-width: 100%;
  margin: 0px auto;
  padding-top: 100px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #F5F6FB;
  transform: translateY(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
text-align: center;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 16px;
  position: relative;
  display: block;
  max-width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  :hover {
    color:#ff6b09;
    background-position: 90% 50%;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const SideMenu = ({ children, childrens }) => {
  const { isMenuOpen } = useContext(MenuContext);
  const isAuthenticated = useSelector(authSelector.getIsAuthenticated);
  return <Menu open={isMenuOpen}>{isAuthenticated ? childrens : children}</Menu>;
};

SideMenu.defaultProps = {
  children: (
    <>
      <MenuLink href="/contacts">Contacts</MenuLink>
      {/* {isAuthenticated &&
        (<MenuLink href="/">Home</MenuLink>
        <MenuLink href="/UsefulResources">Materials</MenuLink>
        <MenuLink href="/contact">Contacts</MenuLink>)
      } */}
    </>
  ),
  childrens: (
    <>
      <MenuLink href="/">Home</MenuLink>
      <MenuLink href="/UsefulResources">Materials</MenuLink>
      <MenuLink href="/contacts">Contacts</MenuLink>
      <MenuLink>
        <LogOut />
      </MenuLink>
    </>
  ),
};
