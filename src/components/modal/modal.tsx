import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';
import "./modal.css";

type FinalModal = {
  img: string;
  isWin: boolean;
  countMistakes: number
}

export default function Modal(prop : FinalModal) : JSX.Element {
  const [isRedirected, setRedirected] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => setRedirected(true), 3000);

    return function cleanup() {
        clearTimeout(timer);
    }
  }, [])

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__img">
          <img src={prop.img} alt="" />
        </div>
        {(prop.isWin) ? <p className="modal__text">Все верно. Молодец!</p> : <p className="modal__text">Нужно потренироваться. Ошибок: {prop.countMistakes}</p>}
        {(isRedirected) ? <Redirect to="/" /> : null}
      </div>
    </div>
  );
}