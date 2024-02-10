import React from 'react';
import classes from './Filter.module.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Filter(props) {
    return (

            <ButtonGroup>
                <Button
                    type="button"
                    className="btn toggle-btn"
                    aria-pressed={props.isPressed}
                    onClick={() => props.setFilter(props.name)}>
                    <span className="visually-hidden">Show </span>
                    <span>{props.name}</span>
                    <span className="visually-hidden"> tasks</span>
                </Button>
            </ButtonGroup>
        
    );
}

export default Filter;