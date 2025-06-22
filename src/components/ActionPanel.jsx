import React from 'react'
import './ActionPanel.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownItem } from 'react-bootstrap';
import { icons } from '../assets/images';
import {useState} from 'react';



let nextId=0;

function ActionPanel({sets, setter}){



    const handleSelectedSet = (e) => {
        if (!e) return;
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
                    {Object.keys(sets).map(
                        (key,i)=> (<Dropdown.Item className= "button-activate" key={i} eventKey={key}>{key}</Dropdown.Item>)
                        )}

                    <DropdownItem onClick = { () => setter(`NewSet ${nextId++}`)} className="button-activate">New Set</DropdownItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    </>
    );
}

export default ActionPanel;