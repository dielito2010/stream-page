import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from "../services/movie.service";

interface CarouselSliderProps {
  movies: Movie[];
  onMovieClick: (id: number) => void;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({
  movies,
  onMovieClick,
}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
  };

  return (
    <Slider {...settings}>
      {movies.map((movie) => (
        <div
          key={movie.id}
          onClick={() => onMovieClick(movie.id)}
          style={{ margin: "10px", textAlign: "center" }}
        >
          <img
            style={{ width: "200px" }}
            src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${
              movie.poster_path
            }`}
            alt={movie.original_title}
          />
        </div>
      ))}
    </Slider>
  );
};

export default CarouselSlider;
