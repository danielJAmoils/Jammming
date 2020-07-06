import React, { Component } from 'react'
import './SearchBar.css'
import { type } from 'os'

type SearchBarProps = {
    onSearch(term:string):void
}

type SearchBarState = {
    term:string
}

export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
    constructor(props: Readonly<SearchBarProps>) {
        super(props)

        this.search = this.search.bind(this)
        this.handleTermChange = this.handleTermChange.bind(this)
    }

    handleTermChange(event:React.ChangeEvent<HTMLInputElement>){
        this.setState({term:event.target.value})
    }

    search(){
        this.props.onSearch(this.state.term)
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}
