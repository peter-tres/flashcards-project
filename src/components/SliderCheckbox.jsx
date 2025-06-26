import React from 'react'
import './SliderCheckbox.css'


function SliderCheckbox({event, mode}){

    const uniqueID = React.useId();
    return(
        
        <div className="slider_container">
        <label className="switch" htmlFor={uniqueID}>
            <input type="checkbox" id={uniqueID} onClick={event} checked={mode}/>
            <div className={`slider round`}></div>
        </label>
        </div>

    )
}

export default SliderCheckbox;