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
      display: '',
      toggles: [{ id: "switch", switch: true }, { id: "card", switch: true }],
      switchInt: 0,
      cardInt: 0,
    }
    this.audioRefs = {}
    this.playAudio = this.playAudio.bind(this)
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleVolume = this.handleVolume.bind(this)
    this.handleBank = this.handleBank.bind(this)
    this.buttonChange = this.buttonChange.bind(this)
    this.buttonChange2 = this.buttonChange2.bind(this)

  }
  buttonChange = (id) => {
    this.setState((prevState) => ({
      switch: !this.state.switch,
      description: this.state.switch,
      display: '',
      switchInt: prevState.switchInt + 1
    }))
    console.log(id)
  }
  buttonChange2 = (id) => {
    console.log('id is ' + id)
    this.setState((prevState) => ({
      bank: !prevState.bank,
      cardInt: prevState.cardInt + 1

    }))
    console.log("bank " + !this.state.bank)

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

  handleSwitch = (id) => {
    console.log(id)
    const toggle = this.state.toggles.map((toggle) => toggle.id == id ? { ...toggle, switch: !toggle.switch } : toggle)
    this.setState({
      toggles: toggle
    })
  }
  handleVolume = (e) => {
    var volume = parseInt(this.state.volume * 100)
    console.log(volume)
    this.setState({
      volume: e.target.valueAsNumber,
      display: volume
    })
  }
  handleBank = (id) => {
    console.log('id is ' + id)
    this.setState((prevState) => ({
      bank: !prevState.bank,
      cardInt: prevState.cardInt + 1

    }))
    console.log("bank " + this.state.cardInt)

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
              <div className="toggle">
                <SquareToggle key="1" id={this.state.toggles[0].id} isOn={this.state.toggles[0].switch} onChange={this.handleSwitch} />
              </div>
            </div>
            <div id="music-name" className="label">{this.state.toggles.id}</div>
            <div id="volume">
              <input type="range" min={0} max={1} step={0.01} value={this.state.volume}
                onChange={this.handleVolume}
              /></div>
            <div id="bank">
              <div className="label">Bank</div>
              <div className="toggle">
                <SquareToggle key="2" id={this.state.toggles[1].id} isOn={this.state.toggles[1].switch} onChange={this.handleSwitch} />
              </div>
            </div>
            {/* {
              this.state.toggles.map((toggle)=(
                // <SquareToggle key={toggle.id} id={toggle.id} isOn={toggle.switch} handleToggle={this.handleSwitch} />
                <li>HI</li>
              ))
            } */}
            <button onClick={this.handleSwitch}>Switch</button>
            <button onClick={this.handleBank}>Bank</button>
          </section>
        </div>

      </div>
    )
  }

}

export default Drum;
