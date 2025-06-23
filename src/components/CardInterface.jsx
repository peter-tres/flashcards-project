import React, {useEffect, useState} from 'react';
import './CardInterface.css'
import FlashCard from './Flashcard';
import { logos, icons } from '../assets/images';


function clamp(num, min, max) {
    return Math.min(Math.max(num,min),max);
}




function CardInterface(
    {cards,
    deleteCardFunc , addCardFunc,updateCardFunc,
    card_set_id, card_index, card_index_setter}){
    
    const [doRight, setRight] = useState(false);
    const [doLeft, setLeft] = useState(false);
    // Left and right arrows to flick through cards
    const handleArrowClick = (e,update) => {
        card_index_setter(clamp(card_index+update,0,cards.length-1));
        if (update < 0){
            setLeft(true)

            setTimeout(() => setLeft(false), 150);
        }
        else{
            setRight(true)

            setTimeout( () => setRight(false), 150);
        }
    }

    let card_info = cards[card_index];

    return(
    <>
        <div className="row justify-content-center mb-5">
            <input
            className="w-50 form-control text-center fs-3"
            type="text"
            placeholder={card_set_id}
            >
            </input>
        </div>

        <div className="row justify-content-center mb-5">
            <div className={`col-lg-8 ${doLeft? "slide-left": ""} ${doRight? "slide-right": ""}`}>
                <FlashCard
                card_index={card_index}
                updateCardFunc={updateCardFunc}
                card_set_id={card_set_id}
                card_info={card_info}/>
            </div>
            


        </div>
        <div className="row justify-content-center">

            <div className="col-7">
                <div className="row d-flex align-items-center">
                    <div className="col px-0 d-flex justify-content-center">
                        <button 
                        disabled={card_index == 0}
                        onClick={(e) => handleArrowClick(e,-1)}
                        type="button" className={"btn arrow-button"}>
                            { card_index == 0? React.cloneElement(icons.leftArrowIcon, { className: 'arrow-disabled'}) : icons.leftArrowIcon}
                        </button>
                    </div>
                    <div className="col-4 d-flex justify-content-center">
                        <p className="mt-3"> {card_index+1} / {cards.length}</p>
                    </div>
                    <div className="col px-0 d-flex justify-content-center">
                        <button
                        disabled={card_index == cards.length-1}
                        onClick={(e) => handleArrowClick(e,1)}
                        type="button" className="btn arrow-button">
                            { card_index == cards.length-1? React.cloneElement(icons.rightArrowIcon, {className: 'arrow-disabled'}): icons.rightArrowIcon}
                        </button>
                    </div>
                </div>
            </div>

        </div>

        <div className="row justify-content-center mt-5">



            <div className="col-2 col-lg-2 d-flex justify-content-center align-items-center gap-5">
                <button 
                onClick = { () => deleteCardFunc(card_set_id)}
                type="button" className="btn custom-button-base trashcan-button">
                    {React.cloneElement(icons.trashcanIcon, {style: {color: 'whitesmoke'}})}
                </button>

                <button 
                onClick = { () => addCardFunc(card_set_id) }
                type="button" className="btn custom-button-base add-button">
                    {React.cloneElement(icons.plusIcon, {style: {color: 'whitesmoke'}})}
                </button>

                <button 
                // onClick = {}
                type="button" className="btn custom-button-base save-button">
                    {React.cloneElement(icons.saveIcon, {style: {color: 'whitesmoke'}})}
                </button>
            </div>


        </div>
    </>
);
}


export default CardInterface;