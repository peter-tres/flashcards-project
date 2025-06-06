import React from 'react'
import './ActionPanel.css'


function ActionPanel(){
    return(
    <>

        <div className="row">
            <button type="button" className="btn btn-light btn-custom mx-auto">Study</button>
        </div>
        <div className="row">
            <button type="button" className="btn btn-light btn-custom mx-auto">Create</button>
        </div>

    </>
    );
}

export default ActionPanel;