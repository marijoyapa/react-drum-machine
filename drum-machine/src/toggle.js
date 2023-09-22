import React, { useState } from 'react';
import './toggle.css'; // Create this CSS file

const SquareToggle = (props) => {
    return (
        <>
          <input
            
            checked={props.isOn}
            onChange={props.handleToggle}
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
