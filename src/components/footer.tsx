import React, {useContext} from "react";
import {MenuContext} from "./navState";

function Footer() : JSX.Element {
    const { isMenuOpen, toggleMenu } = useContext(MenuContext);

    const clickHandler = () => {
      if(isMenuOpen) toggleMenu();
    };
  
    return(
        <footer className="footer" onClick={clickHandler}>
            <div className="footer__container">
                <span className="footer__year">2021</span>
                <a href="https://github.com/stavrovadv"><img src="/stavrovadv-JSFE2021Q1/english-for-kids/img/gh.svg" alt="gh"/></a>
                <a href="https://rs.school/js/"><img src="/stavrovadv-JSFE2021Q1/english-for-kids/img/rs_school_js.svg" alt="rs school"/></a>
            </div>
        </footer>
    )
}

export default Footer;
