import React from 'react'
import './CardDisplay.css'
import FlashCard from './Flashcard';
import trashcan from '../assets/trash-can-solid.svg'


function CardDisplay(){
    return(
    <>
        <div className="row justify-content-center mb-5">
            <div className="d-none d-lg-flex col-lg-2 d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-primary"></button>
            </div>
            
            <div className="col-lg-8">
                <FlashCard/>
            </div>
            
            <div className="d-none d-lg-flex col-lg-2 d-flex justify-content-center align-items-center">
            <button type="button" className="btn btn-primary"></button>
            </div>


        </div>
        <div className="row justify-content-center mt-5">
            <div className="col-2 col-lg-2 d-flex d-lg-none justify-content-center align-items-center">
            <button type="button" className="btn btn-primary"></button>
            </div>
            <div className="col-2 col-lg-2 d-flex justify-content-center align-items-center">
                <img src={trashcan} className="trashcan-icon"></img>
            </div>
            <div className="col-2 col-lg-2 d-flex d-lg-none justify-content-center align-items-center">
            <button type="button" className="btn btn-primary"></button>
            </div>
        </div>
    </>
);
}


export default CardDisplay;