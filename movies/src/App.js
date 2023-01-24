import { useState, useEffect, useCallback } from "react";
import MoviesList from "./components/MoviesList";

import "./App.css";
import AddMovie from "./components/AddMovie";

const FIREBASE_URL =
    "https://movies-5c01c-default-rtdb.firebaseio.com/movies.json";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(FIREBASE_URL);

            if (!response.ok) {
                throw new Error("Somethin went wrong!!");
            }

            const data = await response.json();

            const loadedMovies = [];

            for (const key in data) {
                loadedMovies.push({
                    id: key,
                    title: data[key].title,
                    openingText: data[key].openingText,
                    releaseDate: data[key].releaseDate,
                });
            }

            setMovies(loadedMovies);
        } catch (error) {
            setError(error);
        }
        setIsLoading(false);
    }, []);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    async function addMovieHandler(movie) {
        const response = await fetch(FIREBASE_URL, {
            method: "POST",
            body: JSON.stringify(movie),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

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
                <AddMovie onAddMovie={addMovieHandler} />
            </section>{" "}
            <section>
                <h1>Movies list</h1>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </div>
    );
}

export default App;
