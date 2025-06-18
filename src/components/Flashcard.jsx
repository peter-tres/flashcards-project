import React from 'react'
import './Flashcard.css'
import {useState} from 'react'
import SliderCheckbox from './SliderCheckbox';



function FlashCard({}){
    const [isEdit,setEdit] = React.useState(false);
    const [cardQuestion,setCardQuestion] = React.useState("");
    const [cardFlip, setCardFlip] = React.useState(false);

    const toggleClick = () =>{
        setEdit(!isEdit);

    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setCardQuestion(e.target.value);
    }

    const handleCardClick = () =>{
        console.log("Flipped: " + cardFlip);
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
                                className="w-100 form-control text-center"
                                type="text"
                                placeholder="Type your question here"
                                value={cardQuestion} onChange={handleChange}></input>
                            </div>

                            :
                            <p className="w-100 h-100 text-center d-flex align-items-center justify-content-center">{cardQuestion ? cardQuestion : ". . ."}</p>
                            }

                            <div className="position-absolute">
                                <SliderCheckbox event={toggleClick}/>
                            </div>
                            
                        </div>
                    </div>

                    <div className="card-back">
                        <p className="fs-4">Answer</p>
                    </div>


                </div>

            </div>
        </div>
    );
}


export default FlashCard;