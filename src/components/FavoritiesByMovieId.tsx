import { useEffect, useState } from "react";
import { GetRecommendations, TheMovieDB } from "../services/movie.service";
import {
  GetMovieDetails,
  MovieDetails,
} from "../services/movie.details.service";
import CustomModal from "../utils/customModal";
import CarouselSlider from "../utils/customCarouselSlider";

interface FavoritesByMovieIdProps {
  idMovie: number;
  nameMovie: string;
}

export default function FavoritiesByMovieId({
  idMovie,
  nameMovie,
}: FavoritesByMovieIdProps) {
  const [returnMovies, setReturnMovies] = useState<TheMovieDB>();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const movies = await GetRecommendations(idMovie);
      setReturnMovies(movies);
    }

    fetchData();
  }, [idMovie]);

  async function movieDetails(movieId: number) {
    const movieDetail = await GetMovieDetails(movieId);
    setSelectedMovie(movieDetail);
    setIsModalOpen(true);
  }

  return (
    <div style={{ marginTop: "3rem" }}>
      <h2>Por que você favoritou "{nameMovie}"</h2>
      <CarouselSlider
        movies={returnMovies?.results || []}
        onMovieClick={movieDetails}
      />
      {selectedMovie && (
        <CustomModal
          isShow={isModalOpen}
          movieDetails={selectedMovie}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
