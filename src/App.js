import React, { Component } from 'react';
import './App.css';
import FontResizer from './FontResizer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fontSize: 16
    };
  }

  handleClick = e => {
    let newState;
    let displayFontSize = this.state.fontSize;

    if (e.target.dataset.btn === 'up') {
      displayFontSize++;
    }

    if (e.target.dataset.btn === 'down') {
      displayFontSize--;
    }

    newState = { ...this.state };
    newState.fontSize = displayFontSize;
    this.setState(newState);
  };

  render() {
    let fontSize = {
      fontSize: this.state.fontSize + 'px'
    };
    return (
      <div className="App">
        <div style={fontSize} className="content">
          Lorem Ipsum
        </div>
        <FontResizer handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
