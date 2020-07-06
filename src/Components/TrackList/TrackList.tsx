import React, { Component } from 'react'
import './TrackList.css'
import { TrackType } from '../App/App'
import Track from '../Track/Track'

type TrackListProps = {
    tracks?: TrackType[]
}

export default class TrackList extends Component<TrackListProps> {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks?.map( track => {
                    return <Track track={track} key={track.id}/>
                })}
            </div>
        )
    }
}
