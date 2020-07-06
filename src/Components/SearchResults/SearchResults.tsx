import React, { Component } from 'react'
import './SearchResults.css'
import TrackList from '../TrackList/TrackList'
import { Result } from '../App/App'

type SearchResultsProps = {
    searchResults: Result[]
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
