import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

export default function CustomNavBar() {
  const navigate = useNavigate();

  const clickHome = () => {
    navigate("/stream-page/");
  };

  const clickFavorites = () => {
    navigate("/stream-page/favoritos");
  };

  const clickRecommendations = () => {
    navigate("/stream-page/recomendacoes");
  };

  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand>
          <img src="/vite.svg" alt="Logo"></img>
        </Navbar.Brand>
        <Button onClick={clickHome} variant="outline-secondary">
          Home
        </Button>
        <Button onClick={clickFavorites} variant="outline-secondary">
          Seus Favoritos
        </Button>
        <Button onClick={clickRecommendations} variant="outline-secondary">
          Recomendações
        </Button>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Digite o filme..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary">Pesquisar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
