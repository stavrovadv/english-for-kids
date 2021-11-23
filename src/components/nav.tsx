import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import categories from "../cards";
import {MenuContext} from "./navState";

function Nav() : JSX.Element {
    const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenu();
  };

    return(
        <div className={(isMenuOpen) ? "sidebar" : "sidebar hidden"}>
            <nav className="nav">
                <ul className="nav__list" onClick={clickHandler}>
                    <li className="nav__item">
                        <NavLink to="/" activeClassName="nav__item--active" exact={true}>Main page</NavLink>
                    </li>

                    {
                        categories.map((category, key) => 
                            <li className="nav__item" key={key}>
                                <NavLink to={category.category} activeClassName="nav__item--active">{category.displayName}</NavLink>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    );
}

export {Nav};
