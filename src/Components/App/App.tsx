import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

 export type TrackType = {
  name:string
  artist:string
  album:string
  id:string
}

type AppState = {
  searchResults:TrackType[]
  playlistName:string
  playlistTracks: TrackType[]
}

export default class App extends Component<{}, AppState> {
  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      searchResults:[
        {
          name: 'song',
          artist: 'Daniel',
          album: 'album',
          id: '1'
        },
        {
          name: 'hi',
          artist: 'rat',
          album: 'rodent',
          id: '7'
        },
        {
          name: 'hi',
          artist: 'bye',
          album: 'hello',
          id: '69'
        }
      ],
      playlistName:'playlistName',
      playlistTracks:[
        {
          name: 'name1',
          artist: 'artist1',
          album: 'album1',
          id: '1'
        },
        {
          name: 'name2',
          artist: 'artist2',
          album: 'album2',
          id: '2'
        },
        {
          name: 'name3',
          artist: 'artist3',
          album: 'album3',
          id: '3'
        },
        {
          name: 'name4',
          artist: 'artist4',
          album: 'album4',
          id: '4'
        }
      ]
    }


    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist = this.savePlaylist.bind(this)
    this.search = this.search.bind(this)
  }

  addTrack(track:TrackType){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }else{
      let tracks = this.state.playlistTracks
      tracks.push(track)
      this.setState({playlistTracks:tracks})
    }
  }

  removeTrack(track:TrackType){
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      const tracks = this.state.playlistTracks
      const trackIndex = this.state.playlistTracks.indexOf(track)
      tracks.splice(trackIndex,1)
      this.setState({playlistTracks:tracks})
    }
  }

  updatePlaylistName(newName:string){
    this.setState({playlistName:newName})
  }

  savePlaylist(){
    const trackURIs = this.state.playlistTracks.map(track => {
      return `spotify:track:${track.id}`
    })
  }

  search(term:string){
    console.log(term)
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onNameChange={this.updatePlaylistName}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist}
               />
          </div>
        </div>
    </div>
    )
  }
}

