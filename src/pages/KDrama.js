import React from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const KDrama = () => {
  return (
    <div>
      <h1>K-drama Series</h1>
    <Container className="p-5 mx-auto bg-light">
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i0.wp.com/onetakemedia.in/blogs/wp-content/uploads/2022/06/Goblin-3.jpg?resize=700%2C400&ssl=1" width={500} alt=""/>
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    </div>
  );
}

export default KDrama;