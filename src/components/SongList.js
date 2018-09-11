import React from 'react';
import Song from './Song'

// import KaraokeDisplay from './KaraokeDisplay'

const SongList = (props) => {


  const mappedSongs = props.songs.map(song => <Song key={song.id} song={song} handleClick={props.handleClick} />)


  return (
    <table className="song-list">
      <tbody>
        <tr>
          <th>Title</th>
          <th>Singer</th>
          <th>▶</th>
        </tr>

        {mappedSongs}

      </tbody>
    </table>
  )
}

export default SongList;
