import React from "react";
import { NavLink } from "react-router-dom";
import "../BurgerMenu/BurgerMenu.css";
import "../Menu/Menu.css";



function BurgerMenu() {

    return (
        <ul className="menu-list" >
            <li className="menu-item">
                <NavLink exact to="/" className="menu-item__link" >Главная</NavLink>
            </li>
            <li className="menu-item">
                <NavLink exact to="/technology" className="menu-item__link" activeClassName="menu-item__link_active">Технология</NavLink>
            </li>
            <li className="menu-item">
                <NavLink exact to="/flight-schedule" className="menu-item__link" activeClassName="menu-item__link_active">График полетов</NavLink>
            </li>
            <li className="menu-item">
                <NavLink exact to="/guarantees" className="menu-item__link" activeClassName="menu-item__link_active">Гарантии</NavLink>
            </li>
            <li className="menu-item">
                <NavLink exact to="/about" className="menu-item__link" activeClassName="menu-item__link_active">О компании</NavLink>
            </li>
            <li className="menu-item">
                <NavLink exact to="/contacts" className="menu-item__link" activeClassName="menu-item__link_active">Контакты</NavLink>
            </li>
        </ul>
    );
}

export default BurgerMenu;
