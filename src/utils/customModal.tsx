import { Modal, Button } from "react-bootstrap";
import { MovieDetails, Genre } from "../services/movie.details.service";
import localStorageUtils from "./localStorageUtils";
import { useState, useEffect } from "react";

interface ModalProps {
  isShow: boolean;
  movieDetails: MovieDetails;
  onPlay?: () => void;
  onCancel?: () => void;
}

export default function CustomModal(props: ModalProps) {
  const {
    id,
    title,
    poster_path,
    vote_average,
    vote_count,
    popularity,
    overview,
    tagline,
    release_date,
    runtime,
    genres,
    revenue,
    imdb_id,
    homepage,
  } = props.movieDetails;

  const [isInFavorites, setIsInFavorites] = useState(
    localStorageUtils.existMovieId(id)
  );

  const handleAddToFavorites = () => {
    const favoriteIds = localStorageUtils.get("favoriteIds") || [];
  
    const movieObject = {
      id: id,
      title: title,
    };
  
    if (!favoriteIds.some(item => item.id === id)) {
      favoriteIds.push(movieObject);
      localStorageUtils.set("favoriteIds", favoriteIds);
      setIsInFavorites(true);
    }
  };
  

  useEffect(() => {
    setIsInFavorites(localStorageUtils.existMovieId(id));
  }, [id]);

  return (
    <Modal
      show={props.isShow}
      onHide={props.onCancel}
      style={{ color: "white" }}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton={true}>
        <Modal.Title>
          <h3>{title}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${poster_path}`}
          alt={title}
        />
        <p className="mt-5">Média de avaliações: {vote_average}</p>
        <p>Total de avaliações: {vote_count}</p>
        <p>Popularidade: {popularity}</p>
        <p>Descrição: {overview}</p>
        <p>Frase destaque: {tagline}</p>
        <p>Lançamento: {release_date}</p>
        <p>Duração: {runtime} minutos</p>
        <p>Generos: {genres.map((genre: Genre) => genre.name).join(", ")}</p>
        <p>Receita: ${revenue}</p>
        <p>IMDB: {imdb_id}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onCancel}>
          Voltar para lista
        </Button>
        <Button
          variant="success"
          onClick={handleAddToFavorites}
          disabled={isInFavorites}
        >
          {isInFavorites ? "Incluído em favoritos" : "Add aos favoritos"}
        </Button>
        <Button
          onClick={() => {
            if (homepage) {
              window.open(homepage, "_blank");
            } else {
              alert("Filme sem site oficial!");
            }
          }}
        >
          Oficial Play
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
