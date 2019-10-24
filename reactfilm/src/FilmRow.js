import React from 'react'
import FilmPoster from './FilmPoster'

const FilmRow = (props) => {
    var year = new Date(props.list.release_date);

      
    return (
        <div className="film-row">
            <FilmPoster list={props.list} />
            <div className="film-summary">
                <h1>{props.list.title}</h1>
                <p>{year.getFullYear()}</p>
            </div>
        </div>
    )
}

export default FilmRow
