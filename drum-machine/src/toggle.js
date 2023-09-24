import React, { useState } from 'react';
import './toggle.css'; // Create this CSS file

const SquareToggle = (props) => {
    return (
        <>
        <div>{props.id}</div>
            <input
            checked={props.isOn}
            onClick={() => props.handleToggle(props.id)}
                className="react-switch-checkbox"
                id="react-switch-new"
                type="checkbox"
            />
            <label
                className="react-switch-label"
                htmlFor="react-switch-new"
            >
                <span className="react-switch-button" />
            </label>

        </>
    );
};

export default SquareToggle;
