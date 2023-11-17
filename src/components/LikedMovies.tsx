import { useEffect, useState } from "react";
import { GetLikedMovies, TheMovieDB } from "../services/movie.service";
import { GetMovieDetails } from "../services/movie.details.service";
import { MovieDetails } from "../services/movie.details.service";
import CustomModal from "../utils/customModal";
import CarouselSlider from "../utils/customCarouselSlider";

export default function LikedMovies() {
  const [likedMovies, setLikedMovies] = useState<TheMovieDB>();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const movies = await GetLikedMovies();
      setLikedMovies(movies);
    }

    fetchData();
  }, []);

  async function movieDetails(idMovie: number) {
    const movieDetail = await GetMovieDetails(idMovie);
    setSelectedMovie(movieDetail);
    setIsModalOpen(true);
  }

  return (
    <div style={{marginTop:"2rem"}}>
      <h2>Top 20</h2>
      <CarouselSlider movies={likedMovies?.results || []} onMovieClick={movieDetails} />
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
