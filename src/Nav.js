import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <div>
            <h3>Oussama</h3>
            <h3>List of movies : {movies.length}</h3>
        </div>
    )
}

export default Nav;