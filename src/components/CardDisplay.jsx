import React from 'react'
import './CardDisplay.css'
import FlashCard from './Flashcard';
import trashcan from '../assets/trash-can-solid.svg'



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



function CardDisplay({mode}){
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
            <div className="col"></div>
            <div className="col">
                <div className="row">
                    <div className="col-2 d-flex justify-content-center"><button type="button" className="btn btn-primary"></button></div>
                    <div className="col-8 d-flex justify-content-center">
                        <p className=""> {currentCard} / {cards.length}</p>
                    </div>
                    <div className="col-2 d-flex justify-content-center"><button type="button" className="btn btn-primary"></button></div>
                </div>
            </div>
            <div className="col"></div>
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
                    setCards(
                        cards.filter((element, index) =>{
                            return index != currentCard;
                        })
                    )

                }}
                type="button" className="btn btn-primary">
                    <img src={trashcan} className="trashcan-icon"></img>
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