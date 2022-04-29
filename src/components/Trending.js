import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import starwarsImage from '../assets/images/trendings/starwars.jpg';
const Trending = () => {
  return (
    <div>
      <Container>
        <Row className="justify-content-center">
          <Col md={4} className="mt-3 mb-3">
            <Card className="bg-dark text-white">
              <Card.Img src={starwarsImage} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} className="mt-3 mb-3">
            <Card className="bg-dark text-white">
              <Card.Img src={starwarsImage} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col md={4} className="mt-3 mb-3">
            <Card className="bg-dark text-white">
              <Card.Img src={starwarsImage} alt="Card image" />
              <Card.ImgOverlay>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>Last updated 3 mins ago</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Trending;
