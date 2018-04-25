import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Photo from './Photo'
import instagramResponse from '../photos'

class App extends Component {
  state = {
    photos: instagramResponse
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Photo Gallery</h1>
        </header>
        <div className="row">
        {Object.keys(this.state.photos).map(photoKey => <Photo key={photoKey} keyName={photoKey} details={this.state.photos[photoKey]} />)}

        </div>

      </div>
    );
  }
}

export default App;
