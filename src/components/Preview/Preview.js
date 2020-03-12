import React from 'react';
import './Preview.css';

const Preview = (props) => {

    const previewStyle = {
        display: 'flex',
        width: Number(props.controlsInput.width),
        height: Number(props.controlsInput.height),
        transform: `translate(${Number(props.controlsInput.xCoordinate)}px, ${Number(props.controlsInput.yCoordinate)}px)`,
        border: '2px solid #ccc'
    };

    return (
        <div className="preview">
            <div className="preview-content">
                <h2>PREVIEW</h2>
                <div className="box-wrapper" id="box-wrapper">
                    <div className="box" id="box" style={previewStyle}>
                        <div className="dot">.</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Preview;
