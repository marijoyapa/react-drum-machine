import './App.css';
import React from 'react';
import audio from './audio/C.mp3'
const letters = [
  {
    "key": 'A',
    "description": "heater1"
  },
  {
    "key": 'B',
    "description": "heater2"
  }, 
  {
    "key": 'C',
    "description": "heater3"
  }, 
  {
    "key": 'D',
    "description": "heater4"
  }, 
  {
    "key": 'E',
    "description": "clap"
  }, 
  {
    "key": 'F',
    "description": "openHH"
  }, 
  {
    "key": 'G',
    "description": "KicknHat"
  }, 
  {
    "key": 'H',
    "description": "Kick"
  }, 
  {
    "key": 'I',
    "description": "ClosedHH"
  }
 ];

class Drum extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: ""
    }
    this.audioRefs = {}
    this.playAudio = this.playAudio.bind(this)
  }
  playAudio = (buttonKey, description) => {
    // const audio = this.audioRefs[buttonKey];
    const audio = new Audio(require(`./audio/${buttonKey}.mp3`))
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
    this.setState({
      description
    })
  }

  render() {

    return (
      <div className="app">
        <div id="drum-machine">
          <section id="id-display">
            {letters.map((buttonKey) => (
              <div key={buttonKey.key} className="button">
                <button className="drum-pad" onClick={() => this.playAudio(buttonKey.key, buttonKey.description)}>{buttonKey.key}</button>
                <audio
                  ref={(ref) => (this.audioRefs[buttonKey.key] = ref)}
                  src={audio}
                  type="audio/mpeg"
                />
              </div>
            ))}
          </section>

          <section id="configuration">
            <div id="power"><label>POWER</label></div>
            <div id="music-name">{this.state.description}</div>
            <div id="volume">VOLUME</div>
            <div id="bank">BANK</div>
          </section>
        </div>

      </div>
    )
  }

  // import audio from './audio/A.mp3'
  // render(){
  //   return(
  //     <div className="app">
  //       <div id="drum-machine">
  //         <section id="id-display">
  //           <button className="drum-pad" id="Q" onClick={this.playAudio}><audio className= "clip" src='./audio/Heater-1.mp3' id="Q" />Q</button>
  //           <button className="drum-pad" id="W"><audio className= "clip" src='./audio/Heater-1.mp3' id="Q" />W</button>
  //           <button className="drum-pad" id="E"><audio className= "clip" src='./audio/Heater-1.mp3' id="E" />E</button>
  //           <button className="drum-pad" id="A"><audio className= "clip" src='./audio/Heater-1.mp3' id="A" />A</button>
  //           <button className="drum-pad" id="S"><audio className= "clip" src='./audio/Heater-1.mp3' id="S" />S</button>
  //           <button className="drum-pad" id="D"><audio className= "clip" src='./audio/Heater-1.mp3' id="D" />D</button>
  //           <button className="drum-pad" id="Z"><audio className= "clip" src='./audio/Heater-1.mp3' id="Z" />Z</button>
  //           <button className="drum-pad" id="X"><audio className= "clip" src='./audio/Heater-1.mp3' id="X" />X</button>
  //           <button className="drum-pad" id="C"><audio className= "clip" src='./audio/Heater-1.mp3' id="C" />C</button>
  //         </section>

  //         <section id="configuration">

  //         </section>
  //       </div>

  //     </div>
  //   )
  // }


}

export default Drum;
