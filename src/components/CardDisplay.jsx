import React, {useEffect, useState} from 'react';
import './CardDisplay.css'
import FlashCard from './Flashcard';
import { logos, icons } from '../assets/images';


function clamp(num, min, max) {
    return Math.min(Math.max(num,min),max);
}


const createCard = ( question, answer) => ({
    question,
    answer

});


function CardDisplay({}){
    const [cards, setCards] = useState([createCard("","")]);
    const [currentCard,setCurrentCard] = useState(0);
    const [doRight, setRight] = useState(false);
    const [doLeft, setLeft] = useState(false);


    // Left and right arrows to flick through cards
    const handleArrowClick = (e,update) => {
        setCurrentCard(clamp(currentCard+update,0,cards.length-1));
        if (update < 0){
            setLeft(true)

            setTimeout(() => setLeft(false), 150);
        }
        else{
            setRight(true)

            setTimeout( () => setRight(false), 150);
        }

    }

    // localStorage.setItem("key", JSON.stringify(cards));



    // Setter to update a value inside of the flashcard. Passed into the
    // flashcard component
    const updateCurrentCard = (k,v) => {
        setCards(cards.map((c,i) =>{
            if (i == currentCard){
                return {...c, [k]:v};
                }
            else{
                return c;
                }
            })
        )
    }

    return(
    <>

        <div className="row justify-content-center mb-5">
            
            {/* <div className="d-none d-lg-flex col-lg-2 d-flex justify-content-center align-items-center">
            <button
            onClick={()=> setCurrentCard(wrapInt(currentCard-1,0,cards.length))}
            type="button" className="btn btn-primary"></button>
            </div> */}
            
            <div className={`col-lg-8 ${doLeft? "slide-left": ""} ${doRight? "slide-right": ""}`}>
                <FlashCard cards={cards} index={currentCard} setter={updateCurrentCard} />
            </div>
            
            {/* <div className="d-none d-lg-flex col-lg-2 d-flex justify-content-center align-items-center">
            <button
            onClick={()=> setCurrentCard(wrapInt(currentCard+1,0,cards.length))}
            type="button" className="btn btn-primary"></button>
            </div> */}


        </div>
        <div className="row justify-content-center">

            <div className="col-7">
                <div className="row d-flex align-items-center">
                    <div className="col px-0 d-flex justify-content-center">
                        <button 
                        disabled={currentCard == 0}
                        onClick={(e) => handleArrowClick(e,-1)}
                        type="button" className={"btn arrow-button"}>
                            { currentCard == 0? React.cloneElement(icons.leftArrowIcon, { className: 'arrow-disabled'}) : icons.leftArrowIcon}
                        </button>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <p className="mt-3"> {currentCard+1} / {cards.length}</p>
                    </div>
                    <div className="col px-0 d-flex justify-content-center">
                        <button
                        disabled={currentCard == cards.length-1}
                        onClick={(e) => handleArrowClick(e,1)}
                        type="button" className="btn arrow-button">
                            { currentCard == cards.length-1? React.cloneElement(icons.rightArrowIcon, {className: 'arrow-disabled'}): icons.rightArrowIcon}
                        </button>
                    </div>
                </div>
            </div>
            {/* <p>{cards.length}</p>
            <p>{mode}</p> */}
        </div>

        <div className="row justify-content-center mt-5">

            {/* <div className="col-2 col-lg-2 d-flex d-lg-none justify-content-center align-items-center">
            <button type="button" className="btn btn-primary"></button>
            </div> */}

            <div className="col-2 col-lg-2 d-flex justify-content-center align-items-center gap-5">
                <button 
                onClick = {() => {
                    if (cards.length > 1){
                        setCards(
                            cards.filter((element, index) =>{
                                return index != currentCard;
                            })
                        )
                    }
                    setCurrentCard(clamp(currentCard-1,0,cards.length-1));
                }}
                type="button" className="btn custom-button-base trashcan-button">
                    {React.cloneElement(icons.trashcanIcon, {style: {color: 'whitesmoke'}})}
                </button>

                <button 
                onClick = { () => {setCards([...cards,createCard("","")])}}
                type="button" className="btn custom-button-base add-button">
                    {React.cloneElement(icons.plusIcon, {style: {color: 'whitesmoke'}})}
                </button>

                <button 
                // onClick = {}
                type="button" className="btn custom-button-base save-button">
                    {React.cloneElement(icons.saveIcon, {style: {color: 'whitesmoke'}})}
                </button>
            </div>

            {/* <div className="col-2 col-lg-2 d-flex d-lg-none justify-content-center align-items-center">
            <button type="button" className="btn btn-primary"></button>
            </div> */}

        </div>
    </>
);
}


export default CardDisplay;