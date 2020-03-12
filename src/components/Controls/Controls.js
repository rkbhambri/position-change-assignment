import React from 'react';
import Input from './Input/Input';
import './Controls.css';

const Controls = (props) => {
    return (
        <div className="controls">
            <h2>INPUT</h2>
            <form action="/action_page.php">
                <Input
                    label="X Coordinate"
                    id="xCoordinate"
                    value={props.controlsInput.xCoordinate}
                    inputChangeHandler={(event) => props.inputChangeHandler(event)} />
                <Input
                    label="Y Coordinate"
                    id="yCoordinate"
                    value={props.controlsInput.yCoordinate}
                    inputChangeHandler={(event) => props.inputChangeHandler(event)} />
                <Input
                    label="Width"
                    id="width"
                    value={props.controlsInput.width}
                    inputChangeHandler={(event) => props.inputChangeHandler(event)} />
                <Input
                    label="Height"
                    id="height"
                    value={props.controlsInput.height}
                    inputChangeHandler={(event) => props.inputChangeHandler(event)} />
            </form>
        </div>
    );
};

export default Controls;
