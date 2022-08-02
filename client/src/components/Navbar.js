import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarPage() {
  return (
    
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">GüneBaşlarken</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Ana Sayfa</Nav.Link>
            <Nav.Link href="/about">Hakkımda</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavbarPage;