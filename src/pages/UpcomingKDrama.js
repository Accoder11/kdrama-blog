import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

const UpcomingKDramas = () => {
    return (
    <CardGroup >
    <Card className="all-products">
    <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://www.hellokpop.com/wp-content/uploads/2022/03/April-2022-kdramas-hellokpop.jpg" />
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </Card.Text>
      </Card.Body>
    </Card >
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://6.viki.io/image/be06d3a2129244c3976587bdf5d1c1c9/dummy.jpeg?s=900x600&e=t" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://6.viki.io/image/6d73fc2f5aa84158a2ad31806185945a/dummy.jpeg?s=900x600&e=t" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </Card.Text>
      </Card.Body>
    </Card>
  </CardGroup> 
    );
  }

const UpcomingKDrama = () => {
    return (
      <div>
        <h1>Upcoming K-dramas</h1>
      <Container className="p-3 my-5">
            <UpcomingKDramas></UpcomingKDramas>
            <UpcomingKDramas></UpcomingKDramas>
            <UpcomingKDramas></UpcomingKDramas>
      </Container>
      </div> 
    );
  }

  export default UpcomingKDrama;