import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
import songs from '../data/songs';

// import Lyrics from '../components/Lyrics'

class KaraokeContainer extends Component {

  constructor(props) {
    super(props)

    this.state={
      songs: songs,
      songSearch: '',
      filteredSongs: [],
      selectedSong: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/4/songs')
    .then(res => res.json())
    .then(json => this.setState({
      songs: json,
      filteredSongs: json
    }))

  //   this.setState=({
  //     songs: songs
  //   },console.log(songs))
  }

  handleClick = (event) => {
    console.log('hello')

    // this.setState({
    //   selectedSong: event.target.title
    // })

    // this.
  }

// COMMENT: Did not have time to start Song Search Filter Component
  handleChange = (event) => {
    event.preventDefault()
    this.setState=({
      filteredSongs:
      this.state.filteredSongs.filter(song => this.state.filteredSongs.title.includes(event.target.value))
      })
    }



  render() {
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter onChange={this.handleChange} />
          <SongList songs={this.state.songs} handleClick={this.handleClick} />
        </div>
        <KaraokeDisplay songs={this.state.filteredSongs} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default KaraokeContainer;
