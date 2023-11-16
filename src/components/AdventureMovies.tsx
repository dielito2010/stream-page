import { useEffect, useState } from "react";
import { GetAdventureMovies, TheMovieDB } from "../services/movie.service";
import { GetMovieDetails } from "../services/movie.details.service";
import { MovieDetails } from "../services/movie.details.service";
import CustomModal from "../utils/customModal";
import CarouselSlider from "../utils/customCarouselSlider";

export default function AdventureMovies() {
  const [adventureMovies, setAdventureMovies] = useState<TheMovieDB>();
  const [selectedMovie, setSelectedMovie] = useState<MovieDetails | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const movies = await GetAdventureMovies();
      setAdventureMovies(movies);
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
      <h2>Filmes de Aventura</h2>
      <CarouselSlider movies={adventureMovies?.results || []} onMovieClick={movieDetails} />
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
