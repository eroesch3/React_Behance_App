
import React from 'react';
import Poster from './Poster.js';


function Box(props) {

  return (
    <div className="box" onClick={props.onDetailsClick}>
      <Poster gallery={props.gallery} />

      <div className="author">
        <h1>{props.gallery.owners[0].display_name}</h1>
      </div>
    </div>
  )
}

export default Box

