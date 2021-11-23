import React, {useContext} from "react";
import {MenuContext} from "./navState";


function BurgerMenu() : JSX.Element {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenu();
  };

    return(
    <div className={(isMenuOpen) ? "burger-menu opened" : "burger-menu"} onClick={clickHandler}>
      <div className="burger-menu__content"/>
    </div>
    );
}

export {BurgerMenu};
