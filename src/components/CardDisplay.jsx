import React from 'react'
import './CardDisplay.css'
import FlashCard from './Flashcard';
import { logos, icons } from '../assets/images';



function wrapInt(value, min, max) {
  const range = max - min;
  return ((value - min) % range + range) % range + min;
}

const createCard = ( question, answer) => ({
    question,
    answer

});

function deleteCard(){


}



function CardDisplay({}){
    const [currentCard,setCurrentCard] = React.useState(0);
    const [cards, setCards] = React.useState([createCard("","")]);
    

    
    console.log(cards, cards.length);

    return(
    <>
        <div className="row justify-content-center mb-5">
            
            {/* <div className="d-none d-lg-flex col-lg-2 d-flex justify-content-center align-items-center">
            <button
            onClick={()=> setCurrentCard(wrapInt(currentCard-1,0,cards.length))}
            type="button" className="btn btn-primary"></button>
            </div> */}
            


            <div className="col-lg-8">
                <FlashCard/>
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
                        <button type="button" className={"btn arrow-button flipped"} disabled>
                            { currentCard == 0? React.cloneElement(icons.arrowIcon, { className: 'arrow-disabled'}) : icons.arrowIcon}
                        </button>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <p className="mt-3"> {currentCard+1} / {cards.length}</p>
                    </div>
                    <div className="col px-0 d-flex justify-content-center">
                        <button type="button" className="btn arrow-button">
                            {React.cloneElement(icons.arrowIcon, {style: {color: 'dimgray'}})}
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

            <div className="col-2 col-lg-2 d-flex justify-content-center align-items-center">
                <button 
                onClick = {() => {
                    if (cards.length > 1){
                        setCards(
                            cards.filter((element, index) =>{
                                return index != currentCard;
                            })
                        )
                    }
                }}
                type="button" className="btn trashcan-button">
                    {React.cloneElement(icons.trashcanIcon, {style: {color: 'whitesmoke'}})}
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