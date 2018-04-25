import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Photo from './Photo'
import instagramResponse from '../photos'

class App extends Component {
  state = {
    photos: instagramResponse.data
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Photo Gallery</h1>
        </header>
        <div className="row">
        {
          Array.from(this.state.photos).map(function(photo){
            return (
              <Photo
                key={photo.id}
                keyName={photo}
                image={photo.images.thumbnail.url}
                username={photo.user.username}
                commentCount={photo.comments.count}
                caption={photo.caption.text}
              />
            )
          })
        }

        </div>

      </div>
    );
  }
}

export default App;
