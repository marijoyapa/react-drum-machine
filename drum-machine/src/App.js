import './App.css';
import React from 'react';

class Drum extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
  }

  render(){
    return(
      <div className="app">
        <div id="drum-machine">
          <div id="id-display">
            <button className="drum-pad" id="Q">Q</button>
            <button className="drum-pad" id="W">W</button>
            <button className="drum-pad" id="E">E</button>
            <button className="drum-pad" id="A">A</button>
            <button className="drum-pad" id="S">S</button>
            <button className="drum-pad" id="D">D</button>
            <button className="drum-pad" id="Z">Z</button>
            <button className="drum-pad" id="X">X</button>
            <button className="drum-pad" id="C">C</button>
          </div>
        </div>

      </div>
    )
  }


}

export default Drum;
