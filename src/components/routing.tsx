import React, {useContext} from "react";

import {
  HashRouter as Router
} from "react-router-dom";

import {MenuContext} from "./navState";
import {Nav} from "./nav";
import Footer from "./footer";
import PageRender from './page-render';

function Routing() : JSX.Element {
  const { isMenuOpen, toggleMenu } = useContext(MenuContext);

  const clickHandler = () => {
    if(isMenuOpen) toggleMenu();
  };

  return (
    <div className={(isMenuOpen) ? "wrapper wrapper-fixed" : "wrapper"}>
      <div className="content">
        <Router>
            <Nav />
            <div className="section" onClick={clickHandler}>
              <PageRender />
            </div>
        </Router>
      </div>
      <Footer/>
    </div>
  );
}



export {Routing};
