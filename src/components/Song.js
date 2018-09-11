import React from 'react';

const Song = (props) => {
  // console.log('Song component props are', props)
  // console.log('--------------')

  // COMMENT: Cannot get the play button to display the song lyrics in the KaraokeDisplay

  return (
    <tr className="song">
      <td>{props.song.title}</td>
      <td>{props.song.singer}</td>
      <td><button onClick={props.handleClick}>Play</button></td>
    </tr>
  )
}

export default Song;
