import { useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";

const SWAPI_URL = "https://swapi.dev/api/films";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    async function fetchMoviesHandler() {
        setIsLoading(true);
        const response = await fetch(SWAPI_URL);
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
        setIsLoading(false);
    }

    return (
        <div className="App">
            <section>
                <h1>Movies list</h1>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>
                {isLoading && <p>Loading movies...</p>}
                {!isLoading && movies.length > 0 && (
                    <MoviesList movies={movies} />
                )}

                {!isLoading && movies.length === 0 && <p>Found no movies.</p>}
            </section>
        </div>
    );
}

export default App;
