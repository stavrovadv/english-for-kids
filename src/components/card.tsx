import React, {SyntheticEvent, useState} from "react";

type cardType = {
    word: string,
    translation: string,
    image: string,
    audioSrc: string,
    isTrain: boolean,
    onClick: (word: string) => void,
    key: string,
    isGuessed: boolean
};

function WordsCard(props : cardType) : JSX.Element {
    const [rotated, setRotated] = useState(false);

    function handleClick() : void {
        if(props.isGuessed) return;

        if(!rotated && props.isTrain) {
            const audio = new Audio(props.audioSrc)
            audio.play()
        }
        
        if(!props.isTrain) {
            props.onClick(props.word);
        }
    }

    function rotate(e : SyntheticEvent<HTMLElement>) : void {
        e.stopPropagation();
        setRotated(true);
    }

    function unrotate() : void {
        setRotated(false);
    }

    function changeCardClassName(){
        const cardClass = ["card"];

        if(rotated) cardClass.push("rotated");
        if(props.isGuessed) cardClass.push("guessed");

        return cardClass.join(" ");
    }

    return(
        <div className={changeCardClassName()} onClick={handleClick} onMouseLeave={unrotate}>
            <div className="card__img-wrap"><img src={props.image} alt="" className="card__img"/></div>
            {
                props.isTrain ? (
                    <div className="card__desc">
                        <div className="card__name">{rotated ? props.translation : props.word}</div>
                        <img className="card__rotate-img" src="/stavrovadv-JSFE2021Q1/english-for-kids/img/rotate.svg#svgg" alt="" onClick={rotate}/>
                    </div>
                ) : null
            }
        </div>
    );
}

export {WordsCard};
