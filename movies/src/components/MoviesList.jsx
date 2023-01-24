import React from "react";
import Movie from "./Movie";

import styles from "./MoviesList.module.scss";

const MoviesList = ({ movies }) => {
    return (
        <ul className={styles.list}>
            {movies.map((movie) => (
                <Movie key={movie.id} movie={movie} />
            ))}
        </ul>
    );
};

export default MoviesList;
