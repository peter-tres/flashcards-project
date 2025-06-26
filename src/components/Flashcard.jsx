import React from 'react'
import './Flashcard.css'
import {useState} from 'react'
import SliderCheckbox from './SliderCheckbox';



function FlashCard({card_index, updateCardFunc, card_set_id, card_info}){
    const [isEdit, setEdit] = React.useState(false);
    const [cardFlip, setCardFlip] = React.useState(false);
    
    const toggleClick = () =>{
        setEdit(!isEdit);

    }
    


    const handleChange = (e, side) => {
        if (side == "question"){
            updateCardFunc(card_set_id, "question", e.target.value)
        }
        else if (side == "answer"){
            updateCardFunc(card_set_id, "answer", e.target.value);
        }
    }

    const handleCardClick = (e) =>{
        setCardFlip(!cardFlip);
    }

    return(
        <div className="col-12 h-100">
            <div onClick={handleCardClick} className="card h-100">
                <div className={`card-inner ${cardFlip? "flip-transform":""} ` } >

                    <div className="card-front">
                        <div className="row w-100 h-100 px-5 py-5 d-flex align-items-end">
                            {isEdit?
                            <div className="w-100 h-100 px-5 py-5 d-flex align-items-center">
                                <input
                                onClick={(e) => e.stopPropagation()}
                                className="w-100 form-control text-center fs-3"
                                type="text"
                                placeholder="Type your question here"
                                value={card_info.question} onChange={(e) => handleChange(e, "question")}></input>
                            </div>

                            :
                            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 overflow-auto" >
                                <p className="text-center text-wrap mb-0 w-100 fs-3">
                                    {card_info.question ? card_info.question : ". . ."}
                                </p>
                            </div>
                            }

                            <div className="position-absolute">
                                <SliderCheckbox event={toggleClick}/>
                            </div>
                            
                        </div>
                    </div>

                    <div className="card-back">
                        <div className="row w-100 h-100 px-5 py-5 d-flex align-items-end">
                            {isEdit?
                            <div className="w-100 h-100 px-5 py-5 d-flex align-items-center">
                                <input
                                onClick={(e) => e.stopPropagation()}
                                className="w-100 form-control text-center fs-3"
                                type="text"
                                placeholder="Type your answer here"
                                value={card_info.answer} onChange={(e) => handleChange(e, "answer")}></input>
                            </div>

                            :
                            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 overflow-auto" >
                                <p className="text-center text-wrap mb-0 w-100 fs-3">
                                    {card_info.answer ? card_info.answer : ". . ."}
                                </p>
                            </div>
                            }

                            <div className="position-absolute">
                                <SliderCheckbox event={toggleClick}/>
                            </div>
                            
                        </div>
                        {/* <p className="fs-4">Answer</p> */}
                    </div>


                </div>

            </div>
        </div>
    );
}


export default FlashCard;