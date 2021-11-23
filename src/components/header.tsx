import React from 'react';
import {BurgerMenu} from './burger-menu';
import Toggle from './toggle';

function Header(props: {changeMode: Function}) : JSX.Element{
  return(
    <header className="header">
      <div className="container header__container">
        <BurgerMenu />
        <Toggle changeMode={props.changeMode}/>
      </div>
    </header>
  );
}

export default Header;
