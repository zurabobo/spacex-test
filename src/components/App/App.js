import React, { useState, useEffect } from 'react';
//import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import './App.css';


// import { CurrentUserContext } from '../../contexts/CurrentUserContext';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Header from '../Header/Header'
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Main from '../Main/Main';
import useMediaScreenSize from '../../hooks/useMediaScreenSize';


function App() {

  const [burgerMenuIsOpen, setBurgerMenuIsOpen] = useState(false);
  const [tabletSize, setTabletSize] = useState(false);

  const screenSize = useMediaScreenSize();

  const showHideMenu = () => {
    if (screenSize.width >= 319 && screenSize.width <= 1023) {
      setTabletSize(false);
    } else {
      setTabletSize(true);
    }
  }

    useEffect(() => {
      showHideMenu();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [screenSize.width])

  const handleOpenMenu = () => {
    setBurgerMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setBurgerMenuIsOpen(false);
  };

  return (
    <div className="page">
      <Header
        onMenu={handleOpenMenu}
        tabletSize={tabletSize}
      />
      <Main />
      {burgerMenuIsOpen && (<BurgerMenu isOpen={burgerMenuIsOpen} onClose={handleCloseMenu} />)}
    </div>
  );
}

export default App;
