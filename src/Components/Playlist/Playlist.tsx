import React, { Component } from 'react'
import './Playlist.css'
import TrackList from '../TrackList/TrackList'
import { TrackType } from '../App/App'

type PlaylistProps = {
    playlistName:string
    playlistTracks: TrackType[]
    onRemove(track:TrackType):void
    onNameChange(newName:string):void
    onSave():void
}

export default class Playlist extends Component<PlaylistProps> {
    constructor(props: Readonly<PlaylistProps>){
        super(props)

        this.handleNameChange = this.handleNameChange.bind(this)
    }

    handleNameChange(event:React.ChangeEvent<HTMLInputElement>){//change type later
        this.props.onNameChange(event.target.value)
    }

    render() {
        return (
            <div className="Playlist">
                <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true}/>
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}
