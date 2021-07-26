import React, { useContext } from 'react';
import styled from 'styled-components';
import { MenuContext } from './context/navState';
import { ReactComponent as ImgOpen } from '../../img/Vector-2.svg'
import { ReactComponent as ImgClose } from '../../img/Vector-3.svg'

const MenuButton = styled.button`
@media screen and (min-width: 768px) {
  display: none;
}

width:56px;
  height: 70px;
  display: block;
  float: right;
  margin-right: 0px;
  outline: 0;
  border-left: 1px solid #e2e3e5;
  border-right: 0;
  border-top:0;
  border-bottom:1px solid #e2e3e5;
  padding: 12px;
  background: transparent;
  background: #f5f6fb;
  box-sizing: border-box;
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
      {isMenuOpen ? <ImgClose /> : <ImgOpen />}
    </MenuButton >
  );
};

export default HamburgerButton;
