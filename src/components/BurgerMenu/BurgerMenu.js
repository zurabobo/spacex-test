import React from "react";
import { NavLink } from "react-router-dom";
import "../BurgerMenu/BurgerMenu.css";
import "../Header/Header.css";
import Menu from '../Menu/Menu';

import Modal from 'react-modal';
Modal.setAppElement('#root');


function BurgerMenu({ isOpen, onClose }) {

    return (
        <Modal
            isOpen={isOpen}
            className='popup__container'
            overlayClassName={`popup ${(isOpen) ? 'popup_opened' : ''}`}
            closeTimeoutMS={250}
            onRequestClose={onClose}
            shouldCloseOnOverlayClick={true}
        >
            <button className="popup__close-btn" type="button" onClick={onClose} />
            <nav className="popup-navigation__container">
                <Menu />
                {/* <NavLink exact activeClassName="popup-navigation__link_active" to="/" className="popup-navigation__link" onClick={onClose}>Главная</NavLink>
                <NavLink activeClassName="popup-navigation__link_active" to="/movies" className="popup-navigation__link" onClick={onClose}>Фильмы</NavLink>
                <NavLink activeClassName="popup-navigation__link_active" to="/saved-movies" className="popup-navigation__link" onClick={onClose}>Сохраненные фильмы</NavLink> */}
            </nav>
        </Modal>
    );
}

export default BurgerMenu;
