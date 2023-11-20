import { useNavigate } from "react-router-dom";
import {
  GetMovieDetails,
  MovieDetails,
} from "../services/movie.details.service";
import localStorageUtils, { MovieObject } from "../utils/localStorageUtils";
import { useEffect, useState } from "react";
import CustomModal from "../utils/customModal";

export default function Favorites() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      const movieObjects = localStorageUtils.get("favoriteIds") || [];
      if (movieObjects.length > 0) {
        const movieDetails = await Promise.all(
          movieObjects.map((movieObject: MovieObject) =>
            GetMovieDetails(movieObject.id)
          )
        );
        setMovies(movieDetails);
      } else {
        navigate("/stream-page");
        alert("Sem filmes favoritos adicionados!");
      }
    };

    fetchFavorites();
  }, [movies, navigate]);

  const openModal = async (movieId: number) => {
    const details = await GetMovieDetails(movieId);
    setSelectedMovie(details);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <main>
      <div className="d-flex flex-wrap mt-5">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="m-4"
            onClick={() => openModal(movie.id)}
          >
            <img
              className="img"
              style={{ flexBasis: "calc(25% - 1rem)", width: "12rem" }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                movie.poster_path
              }`}
              alt={movie.original_title}
            />
          </div>
        ))}
      </div>
      {selectedMovie && (
        <CustomModal
          isShow={selectedMovie !== null}
          movieDetails={selectedMovie}
          onCancel={closeModal}
        />
      )}
    </main>
  );
}
