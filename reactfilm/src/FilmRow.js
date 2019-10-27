
import React, { Component } from 'react'
import FilmPoster from './FilmPoster'
import Fave from './Fave'

export default class FilmRow extends Component {


    handleDetailsClick = (film) =>{
        console.log("Fetching details for "+film)
    }

    render() {
        var year = new Date(this.props.list.release_date);
        return (
            <div className="film-row" onClick={() => this.handleDetailsClick(this.props.list.title)}>
            <FilmPoster list={this.props.list} />
            <div className="film-summary">
                <Fave />
                <h1>{this.props.list.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>
        </div>
        )
    }
}

