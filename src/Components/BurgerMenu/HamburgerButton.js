import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from './context/navState';
import imgOpen from '../../img/VectorOpen.png'
import imgClose from '../../img/Vector.png';

const MenuButton = styled.button`
@media screen and (min-width: 768px) {
  display: none;
}
width:56px;
  height: 70px;
  display: block;
  transform-origin: 16px 11px;
  float: right;
  margin-right: 0px;
  outline: 0;
  border-left: 1px solid #e2e3e5;
  border-right: 0;
  border-top:0;
  border-bottom:0;
  padding: 12px;
  background: transparent;
`;

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <MenuButton
      aria-label="Открыть главное меню"
      onClick={clickHandler}
    >
      <img src={isMenuOpen ? imgClose : imgOpen}></img>
    </MenuButton >
  );
};

export default HamburgerButton;
