import React from "react";
import {Link} from "react-router-dom";

type categoryCardType = {
  categ: string,
  linkPath : string,
  imgPath : string,
  key: string
};

function CategoryCard(props : categoryCardType) : JSX.Element {
  return(
      <div className="card">
            <Link to={props.linkPath} className="card__link">
              <div className="card__img-wrap"><img src={props.imgPath} alt="" className="card__img"/></div>
              <div className="card__name">{props.categ}</div>
            </Link>
      </div>
  );
}

export {CategoryCard};