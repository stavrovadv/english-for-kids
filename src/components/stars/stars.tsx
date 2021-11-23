import "./stars.css";

function Stars(prop: {answers: boolean[]}) : JSX.Element{
  function showStars() : JSX.Element[] {
    let answersArr = prop.answers;
    if(prop.answers.length > 15) answersArr = answersArr.slice(-15);

    return answersArr.map((answer, ind) => {
      if(answer) {
        return (<li className="stars__item" key={String(answer) + ind}>
            <img className="stars__img" src="/stavrovadv-JSFE2021Q1/english-for-kids/img/star-win.svg" alt="true answer" />
          </li>)
      }
      else {
        return (<li className="stars__item" key={String(answer) + ind}>
            <img className="stars__img" src="/stavrovadv-JSFE2021Q1/english-for-kids/img/star.svg" alt="false answer" />
          </li>)
      }
    })
  }

  return(
    <ul className="stars__list">
      {showStars()}
    </ul>
  )
}

export default Stars;