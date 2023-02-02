import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

const Blog1 = () => {
    return (
    <CardGroup >
    <Card className="all-products">
    <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://6.viki.io/image/3811bb029dd1445fb52aacd872a9b723.jpeg?s=900x600&e=t" />
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </Card.Text>
      </Card.Body>
    </Card >
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://livein.com/blog/my/wp-content/uploads/2016/10/korea-350x196.png" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://media.gqindia.com/wp-content/uploads/2022/12/BW-7-dec-8-1.jpg" />
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

const Blog = () => {
    return (
      <div><h1>Blog</h1>
      <Container className="p-3 my-5">
            <Blog1></Blog1>
            <Blog1></Blog1>
            <Blog1></Blog1>
      </Container>
      </div>
    );
  }

  export default Blog;