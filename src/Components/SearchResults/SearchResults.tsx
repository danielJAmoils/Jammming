import React, { Component } from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'
import { TrackType } from '../App/App'

type SearchResultsProps = {
    searchResults: TrackType[]
}

export default class SearchResults extends Component<SearchResultsProps> {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.searchResults}/>
            </div>
        )
    }
}
