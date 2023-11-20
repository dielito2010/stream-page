import {
  GetMovieDetails,
  MovieDetails,
} from "../services/movie.details.service";
import localStorageUtils from "../utils/localStorageUtils";
import { useEffect, useState } from "react";

export default function Favorites() {
  const [movies, setMovies] = useState<MovieDetails[]>([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const movieIds = localStorageUtils.get("favoriteIds");
      if (movieIds) {
        const movieDetails = await Promise.all(
          movieIds.map((movieId) => GetMovieDetails(Number(movieId)))
        );
        setMovies(movieDetails);
      } else {
        alert("Sem filmes favoritos!");
      }
    };

    fetchFavorites();
  }, [movies]);

  return (
    <main>
      <div className="d-flex flex-wrap mt-5">
        {movies.map((movie) => (
          <div key={movie.id} className="m-5">
            <img
              style={{ flexBasis: "calc(25% - 1rem)", width: "13rem" }}
              src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
                movie.poster_path
              }`}
              alt={movie.original_title}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

{
  /* <Card
    className="m-2"
    bg="dark"
    border="danger"
    key={movie.id}
    style={{ flexBasis: "calc(25% - 1rem)", minWidth: "18rem" }}
    >
    <Card.Img
        variant="top"
        src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
        movie.poster_path
        }`}
        alt={movie.original_title}
    />
    <Card.Footer>
        <Button variant="danger">Remover dos favoritos</Button>
        <Button className="mt-2" variant="secondary">Ver detalhes</Button>
    </Card.Footer>
</Card> */
}
