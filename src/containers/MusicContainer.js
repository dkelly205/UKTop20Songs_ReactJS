import React from 'react';
import Header from '../components/Header';
// import SongList from '../components/SongList';

class MusicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs:[]
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    .then(response => response.json())
    .then(json => this.setState({songs: json.feed.entry}));
  }



  render(){
    return (
      <React.Fragment>
        <Header title="Top 20 UK Songs"/>
        <SongList songs={this.state.songs}/>
      </React.Fragment>
    );

  }
}

export default MusicContainer;
