import React from 'react';

const Input = (props) => {
    return (
        <>
            <label>{props.label}</label>
            <input
                type="number"
                placeholder={props.label}
                id={props.id}
                value={props.value}
                onChange={(event) => props.inputChangeHandler(event)} />
        </>
    );
};

export default Input;
