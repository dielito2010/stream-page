import { useEffect, useState } from "react";
import { GetPopularMovies, TheMovieDB } from "../services/movie.service";
import { GetMovieDetails } from "../services/movie.details.service";
import { MovieDetails } from "../services/movie.details.service";
import CustomModal from "../utils/customModal";

export default function PopularMovies() {
  const [popularMovies, setPopularMovies] = useState<TheMovieDB>();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isModalOpen, SetIsModalOpen] = useState(false);


  useEffect(() => {
    async function fetchData() {
      const movies = await GetPopularMovies();
      setPopularMovies(movies);
    }

    fetchData();
  }, []);

  async function movieDetails(idMovie: number) {
    const muvieDetail = await GetMovieDetails(idMovie)
    setSelectedMovie(muvieDetail);
    SetIsModalOpen(true)
  }

  return (
    <div>
      <h2>Filmes Populares</h2>
      <div style={{ display: "flex" }}>
        {popularMovies?.results.map((movie) => (
          <div
            key={movie.id}
            onClick={() => movieDetails(movie.id)}
            style={{ margin: "10px", textAlign: "center" }}
          >
            <img
              style={{ width: "200px" }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                movie.poster_path
              }`}
              alt={movie.original_title}
            />
          </div>
        ))}
      </div>
      {selectedMovie !== null && (
        <CustomModal
          isShow={isModalOpen}
          movieDetails={selectedMovie}
          onPlay={() => alert("Play")}
          onCancel={() => SetIsModalOpen(false)}
        />
      )}
    </div>
  );
}
