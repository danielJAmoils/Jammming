import React, { Component } from 'react'
import './Track.css'
import { TrackType } from '../App/App'

type TrackProps = {
    isRemoval?:boolean
    track: TrackType
    onAdd?(track: TrackType): void
    onRemove?(track:TrackType):void
}

export default class Track extends Component<TrackProps> {
    constructor(props: Readonly<TrackProps>){
        super(props)
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
    }

    renderAction(){
        if(this.props.isRemoval){
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        }else{
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }

    addTrack(){
        if(this.props.onAdd){
            this.props.onAdd(this.props.track)
        }
    }

    removeTrack(){
        if(this.props.onRemove){
            this.props.onRemove(this.props.track)
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
            </div>
        )
    }
}
