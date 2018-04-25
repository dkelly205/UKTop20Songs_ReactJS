import React from 'react';

class Song extends React.Component{

  render(){
    const {altTag} = `${this.props.title} by ${this.props.artist}`;
    return(

      <div className='song'>


        <div className='details'>
          <img
            src={this.props.image}
            alt={altTag}
          />
          <h3>{this.props.position}. {this.props.title}</h3>
          <h4>{this.props.artist}</h4>
          <h4>{this.props.price}</h4>
        </div>

      </div>
    )
  }
}

export default Song;
