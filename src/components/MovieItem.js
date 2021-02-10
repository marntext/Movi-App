import React from 'react';
import './MovieItem.css'

function MovieItem({item}) {

    const baseURL="https://image.tmdb.org/t/p/w500/";
    return (
        <div className="card col-lg-3 moviecard">
            <img src={`${baseURL}${item.poster_path}`} className="img-fluid" alt="img"/>
            <div className="card-body">
                <h3>Rating:{item.vote_average}</h3>
            </div>
        </div>
    )
}

export default MovieItem
