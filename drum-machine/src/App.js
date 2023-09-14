import './App.css';
import React from 'react';

class Drum extends React.Component {
  constructor(props){
    super(props)

    this.state = {

    }
    this.playAudio= this.playAudio.bind(this)
  }
  playAudio(props){
    var id = this.props.id
    console.log(id)
  }

  render(){
    return(
      <div className="app">
        <div id="drum-machine">
          <section id="id-display">
            <button className="drum-pad" id="Q" onClick={this.playAudio}><audio className= "clip" src='./audio/Heater-1.mp3' id="Q" />Q</button>
            <button className="drum-pad" id="W"><audio className= "clip" src='./audio/Heater-1.mp3' id="Q" />W</button>
            <button className="drum-pad" id="E"><audio className= "clip" src='./audio/Heater-1.mp3' id="E" />E</button>
            <button className="drum-pad" id="A"><audio className= "clip" src='./audio/Heater-1.mp3' id="A" />A</button>
            <button className="drum-pad" id="S"><audio className= "clip" src='./audio/Heater-1.mp3' id="S" />S</button>
            <button className="drum-pad" id="D"><audio className= "clip" src='./audio/Heater-1.mp3' id="D" />D</button>
            <button className="drum-pad" id="Z"><audio className= "clip" src='./audio/Heater-1.mp3' id="Z" />Z</button>
            <button className="drum-pad" id="X"><audio className= "clip" src='./audio/Heater-1.mp3' id="X" />X</button>
            <button className="drum-pad" id="C"><audio className= "clip" src='./audio/Heater-1.mp3' id="C" />C</button>
          </section>

          <section id="configuration">

          </section>
        </div>

      </div>
    )
  }


}

export default Drum;
