import React, { Component } from 'react'
export default class GifSearch extends Component {

    constructor() {
        super()
        this.state = {
            search: ''
        }
    }

    handleInput = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleSearch(this.state.search)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Search for a gif:</h3>
                <input onChange={this.handleInput} type="text" name="search" value={this.state.search}/>
                <input type="submit" />
            </form>
        )
    }
}