import './App.css';
import React from 'react';
import audio from './audio/C.mp3'
import SquareToggle from './toggle';
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
      description: "",
      switch: true,
    }
    this.audioRefs = {}
    this.playAudio = this.playAudio.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)

  }
  playAudio = (buttonKey, description) => {
    if (this.state.switch) {
      const audio = new Audio(require(`./audio/${buttonKey}.mp3`))
      if (audio) {
        audio.currentTime = 0;
        audio.play();
      }
      this.setState({
        description
      })
    }

  }

  handleSwitch = () => {

    this.setState({
      switch: !this.state.switch,
      description: ''
    })
    console.log(!this.state.switch)
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
            <div id="power">
              <div className="label">Power</div>
              <div className="toggle"><SquareToggle  isOn={this.state.switch} handleToggle={this.handleSwitch} /></div>
              
            </div>
            <div id="music-name">{this.state.description}</div>
            <div id="volume">VOLUME</div>
            <div id="bank" className="label">BANK</div>
          </section>
        </div>

      </div>
    )
  }

}

export default Drum;
