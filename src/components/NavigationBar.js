import { Navbar, Nav, Container } from 'react-bootstrap';
const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="home">DHENG MOVIE</Navbar.Brand>
          <Nav>
            <Nav.Link>trending</Nav.Link>
            <Nav.Link>Superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
