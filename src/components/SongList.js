import React from "react";
import Song from './Song';


class SongList extends React.Component{
  render(){
    const songNodes = this.props.data.map( song => {

      return (
        <Song title={songs.im.name.label} key={song.id}>
        </Song>

      );

    })
    return(

    )

  }
}


export default SongList;
