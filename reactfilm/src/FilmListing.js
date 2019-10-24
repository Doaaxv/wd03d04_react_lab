import React from 'react'
import FilmRow from './FilmRow'

const FilmListing = (props) => {
    return (
        <div>

         {props.list.map(item => <FilmRow list ={item} />)} */}


        </div>
    )
}

export default FilmListing
