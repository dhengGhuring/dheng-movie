import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import starwarsImage from '../assets/images/trendings/starwars.jpg';
import rambo from '../assets/images/trendings/rambo.jpg';
import us from '../assets/images/trendings/US.jpg';
const Trending = () => {
  return (
    <div>
      <Container>
        <div className="judul d-flex justify-content-center">
          <h1 className="text-danger mt-3">WARS MOVIE</h1>
        </div>
        <Row className="justify-content-center">
          <Col md={4} className="movieWrapper mt-3 mb-3">
            <Card className="bg-dark  movieImage">
              <Image src={starwarsImage} alt="Card image" />
              <div className="p-3 m-2 text-white">
                <Card.Title className="text-center ">STAR WARS</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-3 mb-3">
            <Card className="bg-dark  movieImage">
              <Image src={rambo} alt="Card image" />
              <div className="p-3 m-2 text-white">
                <Card.Title className="text-center ">RAMBO</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper mt-3 mb-3">
            <Card className="bg-dark  movieImage">
              <Image src={us} alt="Card image" />
              <div className="p-3 m-2 text-white">
                <Card.Title className="text-center ">US</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
