import React from 'react';
import { NavState } from './components/navState';
import {Routing} from "./components/routing";

function App() : JSX.Element{
  return (
      <NavState>
        <Routing />
      </NavState>
  );
}

export default App;
