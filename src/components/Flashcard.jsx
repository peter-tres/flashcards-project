import React from 'react'
import './Flashcard.css'





function FlashCard(){
    return(
        <div className="col-12 h-100">
            <div className="card h-100">
                <div className="card-inner">
                    <div className="card-front">
                        <h1>Test Question</h1>
                    </div>
                    <div className="card-back">
                        <p>Test Answer</p>
                    </div>
                </div>

            </div>
        </div>
    );
}


export default FlashCard;