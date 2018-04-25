import React, { Component } from 'react';
import MusicContainer from './containers/MusicContainer'
import './App.css';


class App extends Component {
  render() {

    const genres = [
      {name: "All", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/json"},
      {name: "Rock", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=21/json"},
      {name: "Dance", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=17/json"},
      {name: "Country", url: "https://itunes.apple.com/gb/rss/topsongs/limit=20/genre=6/json"}
    ]
    return (
      <MusicContainer genres={genres}/>
    );
  }
}

export default App;
