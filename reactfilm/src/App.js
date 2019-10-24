import React from 'react';
import './App.css';
import TMDB from './TMDB'
import FilmListing from './FilmListing'

function App() {
  return (
    <div className="App">
      <div className="film-library">
        <div className="film-list">
          <h1 className="section-title">FILMS</h1>
           <FilmListing list={TMDB.films} />
          
        </div>

        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
