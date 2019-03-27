import React from 'react';


function Poster(props)  {
    const posterUrl = props.gallery.project_covers[0].url

    return (
         
        <div>
        <img src={posterUrl} alt="gallery image" />
        {/* { props.gallery.label } */}
        </div>
    )
  }


export default Poster