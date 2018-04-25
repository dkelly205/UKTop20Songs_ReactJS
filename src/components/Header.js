import React from 'react';

const Header = (props) => {
  return (
    <div className='header'>
      {props.title}
      <select className="dropDown" onChange={props.handleSelectChange}>
        {props.genres.map(genre => {
          return <option key={genre.name} value={genre.url}>{genre.name}</option>
        })}
      </select>
    </div>
  );
};

export default Header;
