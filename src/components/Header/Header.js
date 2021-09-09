import React from 'react';
import { Link } from 'react-router-dom';
import SpacexLogo from '../../images/spacex-logo.svg';
import './Header.css';
import Menu from '../Menu/Menu'

function Header({ onMenu, tabletSize }) {

  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo-container">
          <div className="header__logo-corner"></div>
          <div className="header__logo-corner"></div>
          <div className="header__logo-corner"></div>
          <div className="header__logo-corner"></div>
          <img alt="логотип spacex" className="header__logo" src={SpacexLogo} />
        </div>
      </Link>
      {tabletSize && (<Menu />) }
      
      
      {/* <ul className="header__menu-list">
        <li className="header__menu-item">Главная</li>
        <li className="header__menu-item">Технология</li>
        <li className="header__menu-item">График полетов</li>
        <li className="header__menu-item">Гарантии</li>
        <li className="header__menu-item">О компании</li>
        <li className="header__menu-item">Контакты</li>
      </ul> */}
      <button className="header__menu-btn" type="button" onClick={onMenu}></button>
    </header>
  )
}

export default Header;
