import React from 'react'
import './SliderCheckbox.css'


function SliderCheckbox({event}){
    const [active, setActive] = React.useState(false)


    const uniqueID = React.useId();
    return(
        
        <div className="slider_container">
        <label className="switch" htmlFor={uniqueID}>
            <input type="checkbox" id={uniqueID} onClick={event}/>
            <div className={`slider round`}></div>
        </label>
        </div>

    )
}

export default SliderCheckbox;