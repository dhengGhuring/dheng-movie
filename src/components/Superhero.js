import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import batman from '../assets/images/superhero/batman.jpg';
import deadpool from '../assets/images/superhero/deadpool.jpg';
import spiderMiles from '../assets/images/superhero/spiderman into spider verse.jpg';
import spiderman from '../assets/images/superhero/spiderman.jpg';

const Superhero = () => {
  return (
    <div>
      <Container>
        <div className="judul d-flex justify-content-center">
          <h1 className="text-danger mt-3" id="superhero">
            SUPER HERO
          </h1>
        </div>
        <Row className="justify-content-center">
          <Col md={4} className="movieWrapper mt-3 mb-3">
            <Card className="bg-dark  movieImage">
              <Image src={batman} alt="Card image" className="images" />
              <div className="p-3 m-2 text-white">
                <Card.Title className="text-center ">BATMAN</Card.Title>
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
              <Image src={deadpool} alt="Card image" className="images" />
              <div className="p-3 m-2 text-white">
                <Card.Title className="text-center ">DEAD POOL</Card.Title>
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
              <Image src={spiderMiles} alt="Card image" className="images" />
              <div className="p-3 m-2 text-white">
                <Card.Title className="text-center ">
                  SPIDERMAN INTO SPIDER VERSE
                </Card.Title>
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
              <Image src={spiderman} alt="Card image" className="images" />
              <div className="p-3 m-2 text-white">
                <Card.Title className="text-center ">
                  SPIDER MAN NO WAY HOME
                </Card.Title>
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
export default Superhero;
