import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import cards from "../cards";
import {WordsCard} from "./card";
import Stars from "./stars/stars";
import Modal from "./modal/modal";

type Round = {
    sound: string,
    word: string
}

type CardsStatus = [string, boolean]

function Page(prop: {isTrain: boolean}) : JSX.Element {
    const {category} = useParams<{category: string}>();
    const currentCards = cards.find((card) => card.category === category)?.items || [];

    const [cardsStatus, setCardsStatus] = useState<CardsStatus[]>([]);
    const [rounds, setRounds] = useState<Round[]>([]);
    const [repeatStatus, setRepeatStatus] = useState(false);
    const [answers, setAnswers] = useState<boolean[]>([]);

    const [isEndGame, setGameEnd] = useState(false);
    const [isModal, setModal] = useState(false);

    let modalOutput : JSX.Element;
    let finishedAudio : HTMLAudioElement;

    useEffect(() => {
        setCardsStatus(currentCards.map(card => [card.word, false]));
    }, [repeatStatus])

    useEffect(() => {
        let timer = setTimeout(playSound, 500);

        return function cleanup() {
            clearTimeout(timer);
        }
    }, [rounds])

    useEffect(() => {
        setRepeatStatus(false);
    }, [category])

    function handleClick(word: string) {
        if(rounds.length === 0) return;

        const isAnswerCorrect = rounds[0].word === word;
        new Audio(isAnswerCorrect ? "/stavrovadv-JSFE2021Q1/english-for-kids/audio/correct.mp3" : "/stavrovadv-JSFE2021Q1/english-for-kids/audio/error.mp3").play();

        if(isAnswerCorrect) {
            setRounds(rounds.slice(1));
            if(rounds.length === 1) {
                setModal(true);
            }
            setCardsStatus([...cardsStatus, [word, true]]);
            setAnswers([...answers, true]);
        }
        else {
            setAnswers([...answers, false]);
        }
    }

    function gameEnd(){
        if(answers.length > 0){
            let countWrongAnswers = answers.reduce((previousValue, currentValue) => (!currentValue) ? previousValue + 1 : previousValue, 0);
            if(countWrongAnswers === 0) {
                finishedAudio = new Audio("/stavrovadv-JSFE2021Q1/english-for-kids/audio/success.mp3");
                modalOutput = <Modal img="/stavrovadv-JSFE2021Q1/english-for-kids/img/success.jpg" isWin={true} countMistakes={0}/>;
            }
            else {
                finishedAudio = new Audio("/stavrovadv-JSFE2021Q1/english-for-kids/audio/failure.mp3");
                modalOutput = <Modal img="/stavrovadv-JSFE2021Q1/english-for-kids/img/failure.jpg" isWin={false} countMistakes={countWrongAnswers}/>;
            }
            if(!isEndGame){
                finishedAudio.play();
                setGameEnd(true);
            }
            return modalOutput;
        }
    }

    function gameStart() {
        if(!repeatStatus){
            const rounds = [...currentCards]
                .map((card) => ({ sound: card.audioSrc, word: card.word }))
                .sort(() => 0.5 - Math.random());
            setRounds(rounds);
            setRepeatStatus(true);
        }
    }

    function changeStatus() {
        return (repeatStatus) 
        ? <button className="btn btn-repeat" onClick={playSound}>Repeat</button>
        : <button className="btn btn-start" onClick={gameStart}>Start game</button>
    }

    function playSound() {
        if(rounds.length > 0) {
            const audio = new Audio(rounds[0].sound);
            audio.play();
        }
        else {
            setRepeatStatus(false);
        }
    }

    return(
        <div className="wrap-cards">
            <div className="stars">
                <Stars answers={answers}/>
            </div>
            <div className={'category cards'}>
                {
                    currentCards.map((card) => (
                        <WordsCard
                            word={card.word}
                            image={card.image}
                            audioSrc={card.audioSrc}
                            translation={card.translation}
                            key={card.word}
                            isTrain = {prop.isTrain}
                            onClick={handleClick}
                            isGuessed = {
                                (cardsStatus.find((cardStatus) => cardStatus[0] === card.word && cardStatus[1]) ? true : false)
                            }
                        />
                    ))
                }
            </div>
            {!prop.isTrain 
                ?  changeStatus()
                : null}
            {isModal ? gameEnd() : null}
        </div>
    );
}

export default Page;
