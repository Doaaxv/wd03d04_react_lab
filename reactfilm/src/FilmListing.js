import React, { Component } from 'react'
import FilmRow from './FilmRow'

export default class FilmListing extends Component {
    constructor (props){
        super(props)
        this.state= {filter:'all'}
    }
    
    handleFilterClick = (fil)=>{
        console.log("Setting filter to "+fil)
        this.setState({
            filter:fil
        })
    }

    render() {
        var allFilms = this.props.list.map(item => <FilmRow list ={item} />)
        
        
        return (
            <div className="film-list"  >
            <h1 className="section-title">FILMS</h1>
            <div className="film-list-filters">
                <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => this.handleFilterClick('all')}>
                    ALL
                    <span className="section-count">{this.props.list.length}</span>
                </div>
                <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`}onClick={() => this.handleFilterClick('faves')} >
                    FAVES
                    <span className="section-count">0</span>
                </div>
            </div>
        
            {allFilms}
        </div>
        )
    }
}