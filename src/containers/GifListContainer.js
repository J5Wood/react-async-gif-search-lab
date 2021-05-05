import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {

    constructor() {
        super()
        this.state ={
            gifs: []
        }
    }

    handleSearch = (search) => {
        fetch('https://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=jh8LqCVGZqRMYUemejKJCqIySZUbA6Im&rating=g')
        .then(resp => resp.json())
        .then(jsonResp => {
           this.setState({
               gifs: jsonResp.data.slice(0, 3)
           })
        })
    }
    
    componentDidMount() {
        fetch('https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=jh8LqCVGZqRMYUemejKJCqIySZUbA6Im&rating=g')
        .then(resp => resp.json())
        .then(jsonResp => {
           this.setState({
               gifs: jsonResp.data.slice(0, 3)
           })
        })
    }
    
    render() {
        return (
            <div>
                <GifSearch handleSearch={this.handleSearch}/>
                <br/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}
