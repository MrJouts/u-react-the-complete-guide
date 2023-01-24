import { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";

import "./App.css";
const SWAPI_URL = "https://swapi.dev/api/films";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(SWAPI_URL);
            if (!response.ok) {
                throw new Error("Somethin went wrong!!");
            }

            const data = await response.json();

            const transformedMovies = data.results.map((movieData) => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    openingText: movieData.opening_crawl,
                    releaseDate: movieData.release_date,
                };
            });
            setMovies(transformedMovies);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    let content = <p>Found no movies</p>;

    if (movies.length > 0) {
        content = <MoviesList movies={movies} />;
    }

    if (error) {
        content = <p>{error.message}</p>;
    }

    if (isLoading) {
        content = <p>Loading movies...</p>;
    }

    return (
        <div className="App">
            <section>
                <h1>Movies list</h1>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </div>
    );
}

export default App;
