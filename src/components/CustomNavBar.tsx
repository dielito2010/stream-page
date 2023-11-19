import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function CustomNavBar() {
  return (
    <Navbar fixed="top">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/stream-page/favoritos">Favoritos</Nav.Link>
        <Nav.Link href="/stream-page/recomendacoes">Recomendações</Nav.Link>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Digite o filme..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Pesquisar</Button>
        </Form>
      </Container>
    </Navbar>
  );
}
