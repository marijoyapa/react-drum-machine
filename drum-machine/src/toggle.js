import React, { useState } from 'react';
import './toggle.css'; // Create this CSS file

const SquareToggle = ({isOn, handleToggle}) => {
    return (
        <>
          <input
            checked={isOn}
            onChange={handleToggle}
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
          />
          <label
            className="react-switch-label"
            htmlFor={`react-switch-new`}
          >
            <span className={`react-switch-button`} />
          </label>
          
        </>
      );
};

export default SquareToggle;
