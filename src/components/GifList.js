import React, { Component } from 'react'

export default class GifList extends Component {

    displayGifs = () => {
        return this.props.gifs.map( gif => {
            return <li key={gif.images.original.url} ><img src={gif.images.original.url} alt={gif.title} /></li>
        })
    }

    render() {
        return (
            <ul>
                {this.displayGifs()}
            </ul>
        )
    }
}