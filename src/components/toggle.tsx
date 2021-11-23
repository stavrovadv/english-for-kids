import React from 'react';

function Toggle(props : {changeMode: Function}) : JSX.Element {
  return(
      <label className="toggle">
        <input type="checkbox" className="toggle__input" onChange={() => props.changeMode()}/>
        <div className="toggle__content"></div>
      </label>
  );
}

export default Toggle;
