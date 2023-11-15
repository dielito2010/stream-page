import { Modal, Button } from "react-bootstrap";
import { MovieDetails, Genre } from "../services/movie.details.service";

interface ModalProps {
  isShow: boolean;
  movieDetails: MovieDetails;
  onPlay?: () => void;
  onCancel?: () => void;
}

export default function CustomModal(props: ModalProps) {
  const {
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
  } = props.movieDetails;

  return (
    <Modal
      show={props.isShow}
      onHide={props.onCancel}
      style={{backgroundColor: "black", padding: "2rem"}}
    >
      <Modal.Header closeButton={true}><h3>{title}</h3></Modal.Header>
      <Modal.Body>
        <img
          src={`${import.meta.env.VITE_APP_BASE_URL_IMAGEM}/${poster_path}`}
          alt={title}
        />
        <p>Média de avaliações: {vote_average}</p>
        <p>Total de avaliações: {vote_count}</p>
        <p>Popularidade: {popularity}</p>
        <p>Descrição: {overview}</p>
        <p>Frase destaque: {tagline}</p>
        <p>Lançamento: {release_date}</p>
        <p>Duração: {runtime} minutos</p>
        <p>Generos: {genres.map((genre: Genre) => genre.name).join(", ")}</p>
        <p>Receita: {revenue}</p>
        <p>IMDB: {imdb_id}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onCancel}>Cancelar</Button>
        <Button onClick={props.onPlay}>Play</Button>
      </Modal.Footer>
    </Modal>
  );
}
