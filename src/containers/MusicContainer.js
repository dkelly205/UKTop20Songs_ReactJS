import React from 'react';
import Header from '../components/Header';
import SongList from '../components/SongList';

class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    // this.handlePlayPause = this.handlePlayPause.bind(this);
    this.state = {
      songs:[]
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({songs: json.feed.entry}));
  }

  handleSelectChange(event) {
    fetch(event.target.value)
    .then(response => response.json())
    .then(json => this.setState({songs: json.feed.entry}));
  }

  // handlePlayPause(audio) {
  //   audio.paused ? audio.play() : audio.pause();
  //   audio.classList.toggle('playing');
  // }

  render(){
    return (
      <article>
        <Header title="UK Chart" handleSelectChange={this.handleSelectChange}
        genres={this.props.genres}/>
        <SongList songs={this.state.songs}/>
      </article>
    )
  }
}

export default MusicContainer;
