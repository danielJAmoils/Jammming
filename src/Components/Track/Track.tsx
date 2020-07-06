import React, { Component } from 'react'
import './Track.css'
import { Result } from '../App/App'

type TrackProps = {
    isRemoval?:boolean
    track: Result
}

export default class Track extends Component<TrackProps> {
    renderAction(){
        if(this.props.isRemoval){
            return <button className="Track-action">-</button>
        }
        return <button className="Track-action">+</button>
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.track.name}</h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {/* <button className="Track-action"><!-- + or - will go here --></button> */}
            </div>
        )
    }
}
