import {
  GetMovieDetails,
  MovieDetails,
} from "../services/movie.details.service";
import localStorageUtils, { MovieObject } from "../utils/localStorageUtils";
import { useEffect, useState } from "react";
import CustomModal from "../utils/customModal";
import { ToastContainer, toast } from "react-toastify";

export default function Favorites() {
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const movieObjects = localStorageUtils.get("favoriteIds");

        if (!movieObjects || movieObjects.length === 0) {
          toast.info("Você não tem filmes favoritos...", {
            onClose: undefined,
          });
        } else {
          const movieDetails = await Promise.all(
            movieObjects.map((movieObject: MovieObject) =>
              GetMovieDetails(movieObject.id)
            )
          );
          setMovies(movieDetails);
        }
      } catch (error) {
        console.error("Erro ao carregar filmes favoritos:", error);
      }
    };

    fetchFavorites();
  }, [movies]);

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
      <ToastContainer />
    </main>
  );
}
