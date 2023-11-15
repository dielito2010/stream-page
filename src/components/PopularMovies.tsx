import { useEffect, useState } from "react";
import { GetPopularMovies, TheMovieDB } from "../services/movie.service";
import { GetMovieDetails } from "../services/movie.details.service";

export default function PopularMovies() {
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
      <h2>Filmes Populares</h2>
      <div style={{ display: "flex"}}>
        {popularMovies?.results.map((movie) => (
          <div
            key={movie.id}
            onClick={() => MovieDetails(movie.id)}
            style={{ margin: "10px", textAlign: "center" }}
          >
            <img
              style={{ width: "200px" }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                movie.poster_path
              }`}
              alt={movie.original_title}
            />
            {/*<p
              style={{
                marginTop: "5px",
                maxWidth: "150px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {movie.original_title}
            </p>*/}
          </div>
        ))}
      </div>
    </div>
  );
}
