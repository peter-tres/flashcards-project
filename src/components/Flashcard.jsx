import React from 'react'
import './Flashcard.css'
import {useState} from 'react'
import SliderCheckbox from './SliderCheckbox';



function FlashCard({}){
    const [isEdit,setEdit] = useState(false);

    const toggleClick = () =>{
        setEdit(!isEdit);

    }

    const handleChange = (e) => {
        console.log(e.target.value);

    }


    return(
        <div className="col-12 h-100">
            <div className="card h-100">
                <div className="card-inner">

                    <div className="card-front">
                        <div className="row w-100 h-100 px-5 py-5 d-flex align-items-end">
                            {isEdit?
                            <div className="row w-100 h-100 px-5 py-5 d-flex align-items-center">
                                <input
                                className="w-100 form-control"
                                type="text"
                                placeholder="" onChange={handleChange}></input>
                            </div>

                            :
                            <h1 className="w-100 h-100 text-center d-flex align-items-center justify-content-center">Question</h1>
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