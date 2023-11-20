import { useState, useEffect } from "react";
import FavoritiesByMovieId from "../components/FavoritiesByMovieId";
import { useNavigate } from "react-router-dom";
import localStorageUtils, { MovieObject } from "../utils/localStorageUtils";

export default function Recommendation() {
  const navigate = useNavigate();
  const [movieIds, setMovieIds] = useState<MovieObject[]>([]);
  useEffect(() => {
    const storedMovieIds = localStorageUtils.get("favoriteIds");

    if (!storedMovieIds || storedMovieIds.length === 0) {
      navigate("/stream-page");
      alert("Sem filmes favoritos adicionados!");
    } else {
      setMovieIds(storedMovieIds);
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
    </main>
  );
}
