import React, {Component} from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

 export type Result = {
  name:string
  artist:string
  album:string
  id:string
}

type AppState = {
  searchResults:Result[]
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
      ]
    }
  }

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
    </div>
    )
  }
}

