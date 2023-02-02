import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";

const Blog = () => {
    return (
    <CardGroup >
        <Link to="/blogs"><h1>Blog</h1></Link>
    <Card className="all-products">
    <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/animals" />
      <Card.Body className='mb-0 pb-0'>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </Card.Text>
      </Card.Body>
    </Card >
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/animals" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
            When you develop a mockup page or backend API is not ready for data fetching and you have to make Frontend Development with static data until it comes, react-lorem-ipsum will create your gibberish texts for you.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card className="all-products">
      <Card.Img variant="top" className="card-img col-md-5 mx-2 d-block w-100 fluid" src="https://placeimg.com/640/480/animals" />
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

const Blogs = () => {
    return (
      <Container className="p-3 my-5">
            <Blogs></Blogs>
            <Blogs></Blogs>
            <Blogs></Blogs>
      </Container>
    );
  }

  export default Blogs;