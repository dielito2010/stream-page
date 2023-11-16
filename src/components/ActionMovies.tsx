import { useEffect, useState } from "react";
import { GetActionMovies, TheMovieDB } from "../services/movie.service";
import { GetMovieDetails } from "../services/movie.details.service";
import { MovieDetails } from "../services/movie.details.service";
import CustomModal from "../utils/customModal";
import CarouselSlider from "../utils/customCarouselSlider";

export default function ActionMovies() {
  const [actionMovies, setActionMovies] = useState<TheMovieDB>();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const movies = await GetActionMovies();
      setActionMovies(movies);
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
      <h2>Filmes de Ação</h2>
      <CarouselSlider movies={actionMovies?.results || []} onMovieClick={movieDetails} />
      {selectedMovie && (
        <CustomModal
          isShow={isModalOpen}
          movieDetails={selectedMovie}
          onPlay={() => alert("Play")}
          onCancel={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
