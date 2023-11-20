import FavoritiesByMovieId from "../components/FavoritiesByMovieId";
import { useNavigate } from "react-router-dom";
import localStorageUtils from "../utils/localStorageUtils";

export default function Recommendation() {
  const navigate = useNavigate();

  const movieIds = localStorageUtils.get("favoriteIds");

  if (!movieIds || movieIds.length === 0) {
    alert("Sem filmes favoritos adicionados!");
    navigate("/stream-page");
  }

  return (
    <main>
      {movieIds!.map((movieId) => (
        <FavoritiesByMovieId
          key={movieId.id}
          idMovie={movieId.id}
          nameMovie={movieId.title}
        />
      ))}
    </main>
  );
}
