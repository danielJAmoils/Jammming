import React, { Component } from 'react'
import './TrackList.css'
import { TrackType } from '../App/App'
import Track from '../Track/Track'

type TrackListProps = {
    tracks?: TrackType[]
    isRemoval?: boolean
    onAdd?(track: TrackType): void
    onRemove?(track:TrackType):void
}

export default class TrackList extends Component<TrackListProps> {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks?.map( track => {
                    return <Track track={track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemoval={this.props.isRemoval} key={track.id}/>
                })}
            </div>
        )
    }
}
