import React from 'react'
import './Flashcard.css'





function FlashCard({index, card_data = {}}){
    return(
        <div className="col-12 h-100">
            <div className="card h-100">
                <div className="card-inner">
                    <div className="card-front">
                        <h2>{index}</h2>
                        <h1>{card_data.question}</h1>
                    </div>
                    <div className="card-back">
                        <p className="fs-4">{card_data.answer}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default FlashCard;