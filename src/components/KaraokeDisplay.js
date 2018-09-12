import React from 'react';
import Lyrics from './Lyrics';

const KaraokeDisplay = (props) => {
  // console.log('KaraokeDisplay props are:', props)
  // console.log('--------------')

  return (
    <div className="karaoke-display">
      {/* <h2>Title</h2> */}
      {/* <Lyrics Lyrics /> */}
      <h2>{props.playingSongLyrics ? props.playingSongLyrics.title : ''}</h2>
      <Lyrics lyrics={props.playingSongLyrics ? props.playingSongLyrics.lyrics : ''} />
    </div>
  )
}

export default KaraokeDisplay;
