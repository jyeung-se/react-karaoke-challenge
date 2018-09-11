import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  console.log('KaraokeDisplay props are:', props)
  console.log('--------------')
  // console.log(Lyrics)

  return (
    <div className="karaoke-display">
      {/* <h2>{props.song.title}</h2> */}
      {/* <Lyrics lyrics={props.song.lyrics} /> */}
      {/* <Lyrics Lyrics /> */}
    </div>
  )
}

export default KaraokeDisplay;
