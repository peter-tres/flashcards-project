import React from 'react'
import './ActionPanel.css'
import {Modes} from '../Modes'

function ActionPanel({mode, setMode}){
    return(
    <>

        <div className="row">
            <button
            onClick={() => setMode(Modes.STUDY)}
            type="button" className="btn btn-light btn-custom mx-auto">Study</button>
        </div>
        <div className="row">
            <button
            onClick={() => setMode(Modes.CREATE)}
            type="button" className="btn btn-light btn-custom mx-auto">Create</button>
        </div>

    </>
    );
}

export default ActionPanel;