import React from 'react'
import './ActionPanel.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownItem } from 'react-bootstrap';
import { icons } from '../assets/images';
import {useState} from 'react';



let nextId=0;

function ActionPanel({sets, add_to_set,set_selected_set}){


    const handleSelectedSet = (e) => {
        if (!e) return;
        set_selected_set(e)

    };

    let id = Object.keys(sets).length + 1;
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

                    <DropdownItem
                    key={`NewSet${id}`}
                    eventKey={`NewSet${id}`}
                    onClick = { () => add_to_set(`NewSet${id}`)} className="button-activate">{React.cloneElement(icons.plusIcon,{style: {color: 'dimgray', width: '20px'}})}</DropdownItem>
                </Dropdown.Menu>
            </Dropdown>
        </div>

    </>
    );
}

export default ActionPanel;