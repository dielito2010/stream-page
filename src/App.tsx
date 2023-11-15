import { useEffect, useState } from "react";
import "./App.css";
import { GetPopularMovies, TheMovieDB } from "./services/movie.service";
import { GetMovieDetails } from "./services/movie.details.service";

function App() {
  const [popularMovies, SetPopularMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const popularMovies = await GetPopularMovies();
      SetPopularMovies(popularMovies);
    }

    fetchData();
  }, []);

  async function MovieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    console.log(movieDetail);
  }

  return (
    <div>
      <h2>Filme Populares</h2>

      {popularMovies?.results.map((movie) => {
        return (
          <div key={movie.id} onClick={() => MovieDetails(movie.id)}>
            <img
              style={{ width: 50 }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                movie.poster_path
              }`}
            />
            {movie.original_title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
