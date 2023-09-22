import './App.css';
import React from 'react';
import audio from './audio/C.mp3'
import SquareToggle from './toggle';
const letters = [
  { "key": 'A', "description": "heater1" },
  { "key": 'B', "description": "heater2" },
  { "key": 'C', "description": "heater3" },
  { "key": 'D', "description": "heater4" },
  { "key": 'E', "description": "clap" },
  { "key": 'F', "description": "openHH" },
  { "key": 'G', "description": "KicknHat" },
  { "key": 'H', "description": "Kick" },
  { "key": 'I', "description": "ClosedHH" }
];

class Drum extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: "",
      switch: true,
      bank: false,
      volume: '0.5',
      display: ''
    }
    this.audioRefs = {}
    this.playAudio = this.playAudio.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleVolume = this.handleVolume.bind(this)
    this.handleBank = this.handleBank.bind(this)
  }
  playAudio = (buttonKey, description) => {
    if (this.state.switch) {
      const audio = new Audio(require(`./audio/${buttonKey}.mp3`))
      if (audio) {
        audio.volume = this.state.volume;
        audio.currentTime = 0;
        audio.play();
      }
      this.setState({
        description,
        display: description
      })
    }
  }

  handleSwitch = () => {
    this.setState({
      switch: !this.state.switch,
      description: '',
      display: ''
    })
    console.log("switch "+!this.state.switch)
  }
  handleVolume = (e) => {
    var volume = parseInt(this.state.volume * 100)
    console.log(volume)
    this.setState({
      volume: e.target.valueAsNumber,
      display: volume
    })
  }
  handleBank = () => {
    this.setState({
      bank: !this.state.bank,
    })
    console.log("bank "+!this.state.bank)

  }

  render() {

    return (
      <div className="app">
        <div id="drum-machine">
          <section id="id-display">
            {letters.map((buttonKey) => (
              <div key={buttonKey.key} className="button">
                <button className="drum-pad label" onClick={() => this.playAudio(buttonKey.key, buttonKey.description)}>{buttonKey.key}</button>
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
              <div className="toggle"><SquareToggle id="switch" isOn={this.state.switch} handleToggle={this.handleSwitch} /></div>
            </div>
            <div id="music-name" className="label">{this.state.display}</div>
            <div id="volume">
              <input type="range" min={0} max={1} step={0.01} value={this.state.volume}
                onChange={this.handleVolume}
              /></div>
            <div id="bank">
              <div className="label">Bank</div>
              <div className="toggle"><SquareToggle id="card" isOn={this.state.bank} handleToggle={this.handleBank} /></div>
            </div>
          </section>
        </div>

      </div>
    )
  }

}

export default Drum;
