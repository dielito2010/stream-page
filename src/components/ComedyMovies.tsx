import { useEffect, useState } from "react";
import { GetComedyMovies, TheMovieDB } from "../services/movie.service";
import { GetMovieDetails } from "../services/movie.details.service";

export default function ComedyMovies() {
  const [comedyMovies, SetComedyMovies] = useState<TheMovieDB>();

  useEffect(() => {
    async function fetchData() {
      const comedyMovies = await GetComedyMovies();
      SetComedyMovies(comedyMovies);
    }

    fetchData();
  }, []);

  async function MovieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    console.log(movieDetail);
  }

  return (
    <div>
      <h2>Top Comédias</h2>
      <div style={{ display: "flex"}}>
        {comedyMovies?.results.map((movie) => (
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
