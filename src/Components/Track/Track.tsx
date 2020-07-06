import React, { Component } from 'react'
import './Track.css'

type TrackProps = {
    isRemoval:boolean
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
                    {/* <h3><!-- track name will go here --></h3> */}
                    {/* <p><!-- track artist will go here--> | <!-- track album will go here --></p> */}
                </div>
                {/* <button className="Track-action"><!-- + or - will go here --></button> */}
            </div>
        )
    }
}
