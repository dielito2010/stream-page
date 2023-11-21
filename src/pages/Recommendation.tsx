import { useState, useEffect } from "react";
import FavoritiesByMovieId from "../components/FavoritiesByMovieId";
import { useNavigate } from "react-router-dom";
import localStorageUtils, { MovieObject } from "../utils/localStorageUtils";
import { ToastContainer, toast } from "react-toastify";

export default function Recommendation() {
  const navigate = useNavigate();
  const [movieIds, setMovieIds] = useState<MovieObject[]>([]);
  useEffect(() => {
    const movieObjects = localStorageUtils.get("favoriteIds");

    if (!movieObjects || movieObjects.length === 0) {
      toast.info("Você não tem filmes favoritos...", {
        onClose: undefined,
      });
    } else {
      setMovieIds(movieObjects);
    }
  }, [navigate]);

  return (
    <main>
      {movieIds.map((movieId) => (
        <FavoritiesByMovieId
          key={movieId.id}
          idMovie={movieId.id}
          nameMovie={movieId.title}
        />
      ))}
     <ToastContainer />
    </main>
  );
}
