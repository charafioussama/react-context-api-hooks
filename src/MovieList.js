import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {


    const [movies, setMovies] = useContext(MovieContext);

    return (  // we should have one parent tag, not a lot of childs => it will not work
        <div>
            {
                movies.map(movie => (
                    <Movie name={movie.name} price={movie.price} key={movie.id} />
                ))
            }
        </div>
    )
}

export default MovieList;