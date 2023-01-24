import { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

const SWAPI_URL = "https://swapi.dev/api/films";

function App() {
    const [movies, setMovies] = useState([]);

    function fetchMoviesHandler() {
        fetch(SWAPI_URL)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const transformedMovies = data.results.map((movieData) => {
                    return {
                        id: movieData.episode_id,
                        title: movieData.title,
                        openingText: movieData.opening_crawl,
                        releaseDate: movieData.release_date,
                    };
                });
                setMovies(transformedMovies);
            });
    }

    return (
        <div className="App">
            <section>
                <h1>Movies list</h1>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <MoviesList movies={movies} />
        </div>
    );
}

export default App;
