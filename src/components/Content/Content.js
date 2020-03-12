import React, { useState, useEffect } from 'react';
import Controls from '../Controls/Controls';
import Preview from '../Preview/Preview';
import './Content.css';

const Content = (props) => {

    const [controlsInput, setControlsInput] = useState({
        xCoordinate: 0,
        yCoordinate: 0,
        width: 100,
        height: 100
    });

    const [maxValue, setMaxValue] = useState({
        xCoordinate: 0,
        yCoordinate: 0,
    })

    useEffect(() => {
        const element = document.getElementById('box-wrapper');
        const box = document.getElementById('box')
        const position = element.getBoundingClientRect();
        const boxPosition = box.getBoundingClientRect()

        const maxValueDetails = {};
        maxValueDetails.xCoordinate = (position.bottom - (boxPosition.width / 2));
        maxValueDetails.yCoordinate = (position.top - (boxPosition.height / 2));
        maxValueDetails.width = position.width;
        maxValueDetails.height = position.height;

        setMaxValue(maxValueDetails);
    }, []);

    const inputChangeHandler = (event) => {
        const input = { ...controlsInput };
        if (event.target.value > maxValue[event.target.id]) {
            alert(`Max value of ${event.target.id} is ${maxValue[event.target.id]}`)
        } else {
            input[event.target.id] = event.target.value;
            setControlsInput(input);
        }
    };

    return (
        <div className="content">
            <Controls
                controlsInput={controlsInput}
                inputChangeHandler={(event) => inputChangeHandler(event)} />
            <Preview controlsInput={controlsInput} />
        </div>
    );
};

export default Content;
