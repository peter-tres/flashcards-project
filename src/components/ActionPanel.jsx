import React from 'react'
import './ActionPanel.css'
import Dropdown from 'react-bootstrap/Dropdown';

function ActionPanel({}){

    const set_keys = ['Set1', 'Set2', 'Set3']

    const handleSelectedSet = (e) => {
        console.log(e);

    };

    return(
    <>


        <div className="row">
            <Dropdown className="d-flex" onSelect={handleSelectedSet}>
                <Dropdown.Toggle className= "btn btn-light btn-custom mx-auto">
                    My Sets
                </Dropdown.Toggle>

                <Dropdown.Menu className="text-center centered-menu">
                    {set_keys.map(
                        (key,i)=> (<Dropdown.Item className= "button-activate" key={i} eventKey={key}>{key}</Dropdown.Item>)
                        )}
                </Dropdown.Menu>
            </Dropdown>
        </div>

    </>
    );
}

export default ActionPanel;