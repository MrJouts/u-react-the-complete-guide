import React from "react";

import styles from "./Movie.module.scss";

const Movie = ({ movie }) => {
    return (
        <li>
            <div className={styles.card}>
                <header>
                    <h2 className={styles.title}>{movie.title}</h2>
                    <p className={styles.releaseDate}>{movie.releaseDate}</p>
                </header>

                <p className={styles.openingText}>{movie.openingText}</p>
            </div>
        </li>
    );
};

export default Movie;
