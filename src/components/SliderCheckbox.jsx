import React from 'react'
import './SliderCheckbox.css'


function SliderCheckbox({event}){



    return(
    <>
        <div className="slider_container">
        <label className="switch" htmlFor="checkbox">
            <input type="checkbox" id="checkbox" onClick={event}/>
            <div className="slider round"></div>
        </label>
        </div>
    </>
    )
}

export default SliderCheckbox;