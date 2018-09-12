import React, { Component } from 'react';
import Filter from '../components/Filter';
import SongList from '../components/SongList';
import KaraokeDisplay from '../components/KaraokeDisplay';
// import songs from '../data/songs';


class KaraokeContainer extends Component {

  constructor(props) {
    super(props)

    this.state={
      songs: [],
      songSearch: '',
      filteredSongs: [],
      selectedSongId: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/users/4/songs')
    .then(res => res.json())
    .then(songData => this.setState({
      songs: songData,
      filteredSongs: songData
    }))
  }

  handleClick = (songId) => {
    this.setState({
      selectedSongId: songId
      // selectedSongId: this.state.songs.find(song => song.id === songId)
    }, () => console.log(this.state))
  }

  currentlyPlayingSong = () => {
    return this.state.songs.find(song=>song.id === this.state.selectedSongId)
  }

  handleChange = (event) => {
    let songSearch = event.target.value
    let filtered = this.state.songs.filter(song => song.title.toLowerCase().includes(event.target.value.toLowerCase()))
    // debugger

    this.setState({
      songSearch: songSearch,
      filteredSongs: filtered
    }, () => console.log('hello'))
  }


  render() {
    // console.log(this.state)
    return (
      <div className="karaoke-container">
        <div className="sidebar">
          <Filter songSearch={this.state.songSearch} handleChange={this.handleChange} />
          <SongList songs={this.state.filteredSongs} handleClick={this.handleClick} />
        </div>
        <KaraokeDisplay playingSongLyrics={this.currentlyPlayingSong()} />
      </div>
    );
  }
}

export default KaraokeContainer;
