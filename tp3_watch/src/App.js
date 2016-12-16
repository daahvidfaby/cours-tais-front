import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



// NOTATION: C'est déjà très, bien, ta montre fonctionne à part quelques pb d'angle, et tu as déjà commencé à faire plusieurs composants React. Il faudrait aussi paramétriser tes composants, par exemple avec une valeur width, pour éviter d'avoir des valeurs en dur

const Needles ={
  seconds : {
    width: 200,
    stroke: "black",
    strokeWidth: 2,
    angle: (((2*Math.PI)-(Math.PI/2))/60)
  },
  hours: {
    width: 100,
    stroke: "black",
    strokeWidth: 8,
// NOTATION: Cela fait beaucoup de parenthèses !!
// NOTATION: Comme dit à l'oral, je pense que tu n'as pas besoin de cette variable du tout.
    angle: (((2*Math.PI)-(Math.PI/2))/12)
  },
  minutes: {
    width: 200,
    stroke: "green",
    strokeWidth: 5,
    angle: (((2*Math.PI)-(Math.PI/2))/60)
  }
}

class Needle extends React.Component {
  getNeedleProps(){
    return Needles[this.props.type];
  }
// NOTATION: Inutilisé
  getAngle(time){
    return time * 2* Math.PI / 60 - Math.PI / 2;
  }
  getCoords(needle){
    let now = new Date();
    let time;
    switch(this.props.type) {
      case 'seconds':
        time = now.getSeconds();
        break;
      case 'hours':
        time = now.getHours();
        if(time > 12){
          time -= 12;
        }
        break;
      case 'minutes':
        time = now.getMinutes();
        break;
      default :
        return;
    }
    return [
// NOTATION: Ca serait encore mieux si le centre était un paramètre (props)
      250,
      250,
// NOTATION: Cette formule la est fausse, il faudrait plutot utiliser :
	  // (((2*Math.PI)-(Math.PI/2))/60)
	  //     theta = time * 2* Math.PI / 60 - Math.PI / 2;
	  // (needle.width * Math.cos(theta)) + 250
      (needle.width * Math.cos(this.getAngle(time))) + 250,
      (needle.width * Math.sin(this.getAngle(time))) + 250,
     ];
  }
  render() {
// NOTATION: Je préférerai que ca ne soit pas la responsabilité de l'aiguille de savoir à quoi elle correspond, c'est à dire, passer tout directement en propritété (couleur, taille, largeur, angle, centre). Comme ca, on peut m
    const needle = this.getNeedleProps();
    const coords = this.getCoords(needle);
    return (
// NOTATION: Il y a une technique sympa en JSX qui permet d'au lieu d'écrire :
// <line stroke={needle.stroke} strokeWidth={needle.strokeWidth} />
// <line {...needle}/>
      <line x1={coords[0]} y1={coords[1]} x2={coords[2]} y2={coords[3]} stroke={needle.stroke} strokeWidth={needle.strokeWidth} />
    );
  }
}

class Watch extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
    };

    var self = this;
    setInterval(function() {
      let now = new Date();
      self.setState({
        seconds: now.getSeconds(),
        minutes: now.getMinutes(),
        hours: now.getHours()
      })
  }, 1000);
  }

  render() {
    return (
      <div className="watch">
        <svg height="500" width="500">
          <circle cx="250" cy="250" r="250" fill="yellow" />
          <circle cx="250" cy="250" r="220" fill="red" />
          <Needle type="hours" time={this.state.hours}/>
          <Needle type="minutes" time={this.state.minutes}/>
          <Needle type="seconds" time={this.state.seconds}/>
          <circle cx="250" cy="250" r="8" fill="black" />
        </svg>
      </div>

    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <Watch width="250"/>
        </div>
      </div>
    );
  }
}

export default App;
