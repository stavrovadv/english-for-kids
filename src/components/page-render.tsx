import React, {useState} from 'react';

import {
  Route,
  Switch
} from "react-router-dom";

import MainPage from "./main-page";
import Header from "./header";
import NotFound from './notFound/notFound';
import categories from "../cards";
import Page from "./page";

function PageRender() : JSX.Element {
  const [isTrain, setMode] = useState(true);

  function changeMode() {
      setMode(!isTrain);
  }

  return (
      <div className="page-content">
          <Header changeMode={changeMode}/>
          <div className="container">
              <section className="section-content">
                  <Switch>
                      <Route exact path='/:category' 
                        render={({ match }) => {
                            if (categories.find((elem) => elem.category === match.params.category)) {
                                return <Page isTrain={isTrain} />
                            }
                            return <NotFound />
                        }}
                      />
                      <Route exact path="/">
                          <MainPage />
                      </Route>
                      <Route path="/*">
                          <NotFound />
                      </Route>
                  </Switch>
              </section>
          </div>
      </div>
  );
}

export default PageRender;