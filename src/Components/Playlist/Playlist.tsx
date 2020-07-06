import React, { Component } from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
import { TrackType } from '../App/App'

type PlaylistProps = {
    playlistName:string
    playlistTracks: TrackType[]
}

export default class Playlist extends Component<PlaylistProps> {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'}/>
                <TrackList tracks={this.props.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
