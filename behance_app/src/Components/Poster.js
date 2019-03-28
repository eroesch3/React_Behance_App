import React from 'react';

function Poster(props)  {
    const posterUrl = props.gallery.project_covers[0].url

    return (
         
        <div>
          <img src={props.gallery.latest_projects[0].covers["230"]} alt="gallery image" />
        </div>
    )
  }

export default Poster