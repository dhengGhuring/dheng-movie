import { Container, Col, Row, Button } from 'react-bootstrap';
const Intro = () => {
  return (
    <div className="intro">
      <Container className="tagline text-white d-flex justify-content-center">
        <Row>
          <Col>
            <div className="title">NONTON SEPUASNYA</div>
            <div className="title">DI DHENG MOVIE</div>
            <div className="introButton text-center mt-3">
              <Button variant="warning">Lihat Semua List Film</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
