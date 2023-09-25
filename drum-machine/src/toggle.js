import React, { useState } from 'react';
import './toggle.css'; // Create this CSS file

const SquareToggle = ({id, isOn, onChange}) => {
    const handleChange=()=>{
        console.log("id is "+id)
        onChange(id)
    }

    return (
        <>
        <div>{id}</div>
            <input
            checked={isOn}
            onChange={handleChange}
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
